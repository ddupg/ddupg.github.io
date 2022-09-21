---
slug: 20220921-dynamodb-2022-paper
title: DynamoDB 2022 paper内部分享
date: 2022-09-21T06:32:10.791Z
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
description: DynamoDB 2022 paper内部分享
tags: [数据库, DynamoDB]
---

# DynamoDB2022论文


## Abstract
DynamoDB是一个NoSQL云数据库，在任何规模下提供一致的性能体验。基本属性：一致的性能，可用性，可靠性，全托管的serverless体验。在2021年，66-hour Amazon Prime Day shooping enent（购物节），Amazon的系统对DynamoDB的调用峰值8900万/秒，高可用性和毫秒级的性能。自从2012年DynamoDB发布，它的设计和实现不断发展。该系统在不影响可用性和性能的情况下，成功解决了**公平问题（多租户？）、跨partition流量不均衡问题、监控、自动化运维**。可靠性（可用性）至关重要，因为即使是最轻微的中断也会对客户产生重大影响。本文介绍了我们大规模操作 DynamoDB 的经验，以及架构如何继续发展以满足客户工作负载不断增长的需求。

## 1. Introduction
DynamoDB是一个NoSQL云数据库服务，在任何规模下，提供高且可预测的性能。DynamoDB是AWS的一个基础服务，全球多机房部署，有成百上千的用户。
支撑了内部大量服务，很多服务以DynamoDB为基础做的，还有很多客户应用。
![](figure1.png)

DynamoDB 6个基本属性
-   全托管的云服务。像SaaS，serverless能力。
-   多租户架构。同一批物理机器（集群）上，服务不同的用户。
-   实现了表的无限扩展
-   提供可预测的性能。保证对于1KB的Get、Put请求，延迟稳定在几个毫秒级别。无论表大小。通过水平扩展应对任何级别的流量，能对数据自动分区/重分区来满足IO的性能要求。
-   高可用。数据副本跨多AZ，在磁盘或节点故障时自动重新复制副本。普通表单AZ SLA 99.99%，global table多AZ SLA 99.999%
-   提供灵活的用户案例。
    -   有多种数据模型：**表模型，文档模型**。
    -   读请求可以选择**强一致或最终一致**。

## 2. History

DynamoDB的前身——Dyname，只是个KV数据库。

用户直接去访问传统数据库，引入一系列问题，例如连接管理、不同workload并发进行互相干扰，和一些操作问题（像schema升级）。所以，service-oriented的架构被采用，用service-level APIs封装用户数据。

> 这就挺像我们现在的阶段。

**Dynamo设计的第一原则：高可用性和可预测的性能。**

最初Amazon内部只有Dynamo可选，Dynamo是单租户的设计，用户都是自己托管，自行安装、运维、升级。这要求用户都得是数据库方面的专家。

这段时间内，Amazon内部出现了SimpleDB和S3这样的全托管、弹性（自动扩缩容或按需计费这样的概念）服务。用户都更倾向于用这些全托管的弹性服务，即使Dynamo比那些服务更好，也不用Dynamo。因为用户能更专注于他们的业务，而不用运维数据库。

Amazon第一个database-as-a-service是SimpleDB，全托管的弹性NoSQL数据库服务。多数据中心同步、高可用、持久化、无需用户操作。

SimpleDB限制：
-   单表数据量上限10G。单表吞吐也有上限。
-   读写延迟不可预判。意思是因为每个表属性都有索引，写操作要更新所有索引。

这些要求用户需要做类似分表的方式来满足需求。

最后得出结论：更好的解决方案将原始 Dynamo 设计的最佳部分（弹性和可预测的高性能）与 SimpleDB 的最佳部分（云服务的易管理性、一致性以及比纯KV存储更丰富的基于表的数据模型）相结合。

然后2012年，AWS发布DynamoDB。

## 3. Architecture

DynamoDB的表是一个items集合，每个item有很多属性。

> 表格模型

每个item由主键区分。主键可以是一个partition key或一个partition key和一个sort key。partition key用作hash分区。

> 可以看Pegasus的表模型，比Pegasus还更灵活。

| partition key | sort key (可选) | propertity a | propertity b | propertity c |
| ------------- | -------- | ------------ | ------------ | ------------ |
|               |          |              |              |              |

**支持二级索引**。
**支持跨items的ACID事务**，且不会影响表的扩展性、可用性、性能。

DynamoDB表分成多个partition，每个partition持有不相交的一部分数据。每个partition都有跨AZ的多个副本，增强可用性。每个partition的多个副本形成一个replication group。replication group内使用Multi-Paxos来做选主和共识。任何副本都可以触发一轮选举，一旦选举成为leader，就可以不断刷新lease来维持leader身份。

**一个replication group里，只有leader可以响应写请求和强一致的读请求**。leader收到写请求之后，会写一条write-ahead log记录，并发送给其他replica。一定数量的replica都持久化了这条写操作的write-ahead log，应用程序才会收到写成功的反馈。

group的leader通过一个lease机制来延续它的leader身份。如果其他replica探测到leader有问题（unhealthy or unavailable），就会发起一轮新的选举，它自己做新leader。直到老leader的lease过期之前，新leader不会处理写请求和强一致的读请求。

一个replication group包含多个storage replica，storage replica有write-ahead logs 和 B-tree，用B-tree存KV数据。
![](figure2.png)
为了提高可用性和可靠性，一个replication group里还可以包含多个log replica，log replica只有write-ahead logs没有B-tree，不存KV数据。log replica只做Paxos的acceptor。
![](figure3.png)
DynamoDB包含十数个微服务，几个核心的服务是：metadata service、request routing service、storage nodes、autoadmin service。
![](figure4.png)
-   metadata service：存储表、索引、replication group的路由信息，用表或索引的keys来查。
-   request routing service：负责授权、鉴权，和路由每个请求到相应的server。
-   storage service：负责存储用户数据，存储在一组存储节点上。每个存储节点都持有不同partition的replica。
-   autoadmin service：控制中枢。负责健康检查、表扩缩、执行控制平面的请求。持续监控所有partition的健康情况，替换不健康replica（慢、不可用、硬件故障）。也负责其他核心组件的健康检查，好像还能替换故障硬件。

图 4 中未显示的其他 DynamoDB 服务支持功能，如**时间点还原**、按需备份、更新流（没有说是啥，猜测可能是CDC）、**全局准入控制**、**全局表**、全局二级索引和事务。

## 4. Journey from provisioned to on-demand

DynamoDB初期，引入partition这个核心概念来实现表在存储和吞吐两方面的动态扩缩。吞吐的计量用的是CU，读4KB记1RCU，写1KB记1WCU。

> 和我们的计量方式一样，估计也是抄的。
> 写比读贵，可能是因为对B-tree来说，写代价更大，读反而小。对LSM-tree来说，写代价相对小。

原来的系统将表分成多个partition，分布在多个存储节点上，并映射可用容量和性能到对应节点上。随着表容量或负载的增长，partition可能会进一步split或迁移到更合适的存储节点。partition的抽象被证明确实有价值，并继续成为DynamoDB的核心设计。**然而早期版本将容量和性能的分配都耦合到了partition上，带来了挑战**。

> partition的设计实现了容量和负载横向扩展。但也将容量和性能耦合在了partition上。

DynamoDB使用准入控制，保障存储节点不会过载，避免同节点之上不同partiton互相影响，并且强硬限制用户请求的吞吐量。

> 多租户互相影响。

过去十年，DynamoDB的准入控制不断发展。每个存储节点根据本地存储的partition配额，独立执行准入控制。假设一个存储节点上，有来自多个表的partition，使用每个partition的吞吐配额来隔离工作负载。DynamoDB为每个partition设置最大可分配的吞吐量上限，并保证所有partition的最大吞吐量之和不超过单个存储节点的最大吞吐上限。存储节点的最大吞吐上限由硬件的物理性质决定。

> 起初，需要给表配置流量配额，将配额均分给partition。
> 存储节点也有能承载的流量上限，根据partition配额，分配到合适的存储节点上。

当全表的吞吐改变或partition被split成子partition，partition的吞吐配额会重新调整。直接举例说明：假设一个partition能承受的最高吞吐是1000WCUs，一个表建表时设置为吞吐3200WCUs，DynamoDB为其创建4个partition，每个partition有800WCUs的配额。如果表的吞吐增长到3600WCUs，那每个partition就增长到900WCUs。可如果表的吞吐增长到6000WCUs，4个partition就会split成8个partition（一个partition最高1000，超过了就得split），每个partition有750WCUs的吞吐配额。

表的吞吐均匀分布在所有partition上，是基于两个假设：
-   用户会均匀访问表中的keys。
-   按数据量的切分和按性能的切分是等价的。

> 也就是没有热点，没有倾斜（数据/流量）。

而实际发现应用的请求，在时间上（高低峰）和key range上（热点、倾斜）都是不均匀的。按照partition均分配额，就会出现partition被限流了，但表的整体吞吐配额还没达到。

两个问题：
-   热点partition。
-   吞吐配额稀释。表的partition通常按数据量大小做切分，配额也基本按partition数量做均分，随着数据量增大，partition增多，配额逐渐被稀释。

限流会导致用户应用程序周期性不可用，甚至造成不可预期的结果。用户就会去调大表的配额来规避限流。这就很难评估表的真正性能要求。

> 两个问题都是我们实际中也碰到的。热点和限流。
> 论文中非常强调限流对客户的影响，极力在避免不正常限流的产生。
> 可能对于公有云来说，用户体验很重要。

### 4.1 Initial improvements to admission control

热点和配额稀释两个问题，都来源于预置配额并把配额均分给每个partition。通过这种方式来规避分布式准入控制的复杂性。后来DynamoDB引入两个优化来解决这个问题：bursting和adaptive capacity

#### 4.1.1 Bursting（超发）

一个关键的发现：一个存储节点上，并不是所有partition都足量使用了预置的配额。因此DynamoDB引入了Bursting的概念来吸收不同workload在时间上的尖峰。Bursting背后的想法是，在partition级别上，尽力让应用程序使用未使用的配额，来满足**短暂的流量尖峰**。**DynamoDB保存了一个partition最长300秒的未使用配额，在该partition流量超过预设值时使用**。这个未使用的容量，叫做burst capacity。

DynamoDB仍然要保证workload的隔离，在存储节点级别上，只在有未使用的吞吐容量的情况下，才允许超发。在存储节点上，使用**令牌桶**（token bucket）来管理流量，每个partition有两个令牌桶，allocated和burst（理解为配额和超发）。每个存储节点也有一个令牌桶。

> 超发的两个要素：
> 1.  使用前300s未使用的流量做超发，解决突发流量
> 2.  超发的流量不能超过设置的节点流量上限

**这个方法只能解决突发流量，对于长期数据倾斜没用。**

#### 4.1.2 Adaptive capacity（自适应容量）

DynamoDB使用adaptive capacity来解决长周期的严重流量倾斜问题。adaptive capacity实时监控所有表的配额及消费的容量。**如果一个partition碰到了限流，并且表级配额没有超发，就会扩大被限流partition的配额**。autoadmin system会保证超发的partition所在存储节点可以承受住超发的流量（通过类似move partition去调整）。

![](adaptive_capacity.png)

bursting和adaptive capacity解决了DynamoDB 99.99%的限流问题。

> 缺点是必须触发限流，才会自动扩大capacity。用户会有感知。
> 我理解自动扩capacity的过程必然不能阻塞读写流程，应该是触发限流之后，异步去扩capacity。

### 4.2 Global admission control

但以上两个方法仍有局限性。**bursting只能短暂的解决突发流量；adaptive capacity必须要触发限流之后才能起作用，而触发限流就会影响用户**。最重要的原因是这两个方法都将准入控制都强耦合在了partition级别。**DynamoDB认识到将准入控制从partition级别移除，总是允许partition级别的超发，这才是更好的**。

DynamoDB引入了全局准入控制global admission control(GAC)来取代掉adaptive capacity。GAC还是用令牌桶算法来记录所有表的流量使用情况。每个request router维护一个本地的令牌桶来做准入控制，并且定时和GAC通信补充本地令牌桶。

GAC server有多个，每个在内存里存储部分表的令牌桶，每个GAC server的上下线不能影响整体。多个GAC server组成hash ring。

> 我理解这里就是一致性hash算法。

每个请求到达request router之后，先消耗request router本地的令牌桶，request router再定时从GAC补充令牌桶。

partition级别的令牌桶还是保留了，说为了做深度防御。

> 可能是为了避免突发热点吧。

> 总结一下，**最终是独立出来了一个中心化的准入服务来做全局准入控制**，才彻底地妥善解决流量倾斜与用户配额设置的矛盾问题。

![](lindom_quota.png)

> 可以看下lindom的这个准入控制的图，思想是一样的。

### 4.3 Balancing consumed capacity

总是允许partition超发就要求DynamoDB能有效的管理超发的流量。DynamoDB运行在不同型号的硬件上，不同硬件的吞吐和存储能力不同。最新代的存储节点能抗上千的partition replica。一个存储节点上的partition可能来自不同的表，完全不相关。在一个存储节点上托管来自多个表的partition，每个表又可能来自不同的客户，又不同的流量模式，这就需要一种分配方案，来决定哪些partition replica可以共存，且不会违反可用性、可预测的性能、安全性、弹性。

> 也就是balance算法。

如果没有bursting和adaptive capacity，为预设表的partition找到合适的存储节点很容易，根据存储节点的容量和吞吐分配就好了。

允许超发就会给多租户带来更复杂的挑战。DynamoDB实现了一个系统，根据吞吐量消耗和存储主动跨存储节点平衡partition。每个存储节点会独立监控它上面的replica的吞吐和数据量，一旦吞吐超过了节点最大吞吐量的百分比阙值，就会报告给autoadmin service一批要从当前节点挪走的replica。autoadmin会为这些replica找个新的存储节点，同时保证在选择的节点所在AZ没有该partition的其他replica。

> 这个做法对我们意义也不大。这块可以看阿里云lindom的公众号，很有启发性。

### 4.4 Splitting for consumption

即使有GAC和允许partition超发的能力，但如果表表流量严重倾斜到部分items（热点key或范围热点），还是可能被限流。为了解决这个问题，DynamoDB根据流量自动扩容partition。一旦partition的流量超过阙值，这个partition就会被split。**split point的选择由partition key分布观测功能提供**。key分布观测功能像一个agent一样，分析应用的访问模式。这样得到的split point比partition中间点更有效。partition split通常在几分钟内完成。

但仍然有些workload是split partition解决不了的，比如热点key和连续范围热点。DynamoDB可以探测这样的访问模式，避免去split这样的partition。

> 论文里也没讲怎么探测热点key和范围热点。看下阿里云lindom的公众号吧，虽然也没给具体算法，但思路差不多。

### 4.5 On-demand provisioning

很多应用在迁移到DynamoDB之前，是运行在本地或自托管的数据库的。在任何场景下，应用开发者都需要提供机器。DynamoDB提供了一种简单的serverless的运维模式和一个新的预估模型——读写CU。因为CU对消费者是新概念，准确的评估吞吐很难。客户要么过度配置导致利用率低，要么配置不足造成限流。为了改善有尖峰流量的workload的用户体验，我们发布了**on-demand tables**。on-demand表避免了用户设置预估流量。DynamoDB根据收集到的表的读写信号，**为表预留之前尖峰两倍的资源**。如果流量超过了先前尖峰的两倍，随着流量增加，DynamoDB会自动分配更多容量，以确保workload不会被限流。On-demand表也会通过split扩容partition。GAC会监控并且保护系统不会被一个应用消耗所有资源。根据消耗的容量做balance能有效的分配on-demand的partition，避免碰到存储节点级的限流。

> 这种不太适合我们，或者说我们做不到。公有云的规模效应带来的好处。

## 5 Durability and correctness

数据被提交后绝不能丢。在实践中，丢数据通常是因为硬件故障、软件bug或硬件bug。DynamoDB设计了很多机制来保障高可靠性（持久性），能避免、探测、纠正任何潜在的数据丢失。

### 5.1 Hardware failures

和大多数数据库系统一样，**write-ahead logs是DynamoDB保障可靠性和故障恢复的核心**。write-ahead logs在partition的3个replica中都存储了。为了更高的可靠性，也**定期归档到S3**（11个9的可靠性）。每个replica仍然保存了最近的未归档的write-ahead logs。未归档logs的大小通常只要几百MB。

在一个大型服务中，硬件故障，像内存和磁盘故障很常见。当一个节点故障，节点上的所有replication group中的partition就只剩2副本。恢复一个replica的过程需要几分钟，因为修复过程涉及了B-tree和write-ahead logs的拷贝。**在探测到不健康的replica时，replication group的leader会增加一个log replica**，确保不会影响可靠性。增加一个log replica只需要几秒，因为只需要拷贝最新的write-ahead log而不需要拷贝B-tree。所以，使用log replica快速修复能确保最新写入的数据的可靠性。

> 核心是write-ahead logs。
> 1.  每个replica都会保存一份wal，可能不只3个
> 2.  wal归档到S3，只有最新写入的几百MB数据未归档
> 3.  丢replica后，秒级新加log replica，保障最新写入的数据可靠性。

### 5.2 Silent data errors

一些硬件故障会导致存储不正确的数据。在我们的经验中，可能由存储介质、CPU或内存导致。这种问题很难探测并且可能在系统的任何地方出现。DynamoDB使用checksum来探测这类错误（silent errors）。通过**在每个log entry、消息和log文件里增加checksum**，DynamoDB校验任意两个节点之间的传输的数据的完整性。这些checksum可以避免错误在系统中传播。例如，节点或组件之间的通信都会添加checksum，并且在信息传输过程中做校验。如果没有这些检查，在传输过程中的任何地方都可能引入silent error。

每个归档到S3的log都有个manifest文件，包含这个log相关的信息，像表、partition、log里存储数据的起止标记。负责归档log到S3的agent在上传log之前有多项校验。包括但不限于校验每个log entry是否属于正确的表、partition，校验checksum和探测silent error，校验log的sequence number是否含有hole（一般的wal实现，每个entry都会有个连续递增sequence id，应该是说检查这个id的连续性，避免丢entry）。只有所有的检查都通过，log和他的manifest才会归档。归档agent会在replication group的3个replica中都会运行，如果一个agent发现一个log已经归档了，这个agent会下载下来和本地log做比较，校验数据完整性。每个归档到S3的log文件和manifest文件都有一个内容的checksum。S3的put操作会检查这个内容checksum，保证存储到S3的过程中没有任何错误。

> 硬件故障导致的数据错误叫做silent errors。 手段：
> 1.  每个数据传输的地方都加checksum校验
> 2.  归档过程 
> 	1. 每个log都有个manifest文件存储元信息 
> 	2. 归档前，校验log：entry的归属正确性、entry的checksum、sequence id连续性 等
> 	3. 3副本都会做归档
> 	4. 归档S3过程中，S3再做次checksum校验

### 5.3 Continuous verification

DynamoDB也会在空闲时做持续的数据校验。我们的目标是探测系统中任何的silent data error或bit rot。scrub过程是持续校验的一个例子。scrub的目标是探测未知的错误。**scrub过程校验两件事：相同replication group的3副本数据一致性，和使用归档的wal构造出的replica和live replica的数据一致性**。scrub机制作为探测live replica和归档log构建的replica之间一致性的深度防御。这些全面的检查非常有利于增强对正在运行的系统的信心。**类似的持续校验技术还被用于校验global table的replica**。**多年来，我们了解到，持续校验是防止硬件故障、silent error、软件bug的最可靠办法。**

### 5.4 Software bugs

DynamoDB是一个分布式键值存储，建立在复杂的架构之上。高复杂度增加了设计、代码和操作中人为错误的可能性。系统中的错误可能导致数据丢失或损坏，或违反客户所依赖的其他接口协议。

我们使用formal methods来确保replication协议的正确性。核心的replication协议使用TLA+。当添加会影响replication协议的新feature时，他们将被合并到特定的模型中做检查。模型检查使我们能够在代码投入生产之前发现可能导致持久性和正确性的细微错误。S3等其他服务也发现模型检查在类似场景中很有用。

我们**还采用了广泛的故障注入测试和压力测试来确保所部署的每一个软件的正确性**。除了数据层面的测试和replication协议的校验之外，formal methods也被用于校验控制平面的正确性和分布式事务这样的features。

> 上线前需要做类似大规模数据集的集成测试。
> 类似我们的ITBLL集成测试。

### 5.5 Backups and restores

除了防止物理介质损坏之外，DynamoDB还支持**备份和恢复**，以防止用户应用程序中的错误导致的数据损坏。备份或恢复不会影响表的性能或可用性，因为是用归档在S3中的write-ahead log构建的。备份在多个partition之间是一致的，精确到秒。备份是DynamoDB表的完整拷贝，存储在S3的bucket中。备份中的数据可以随时恢复到新的DynamoDB表中。

DynamoDB也**支持指定时间点的恢复**。使用指定时间点恢复，用户可以恢复之前35天内任意时间点的内容。对于其定了时间点恢复的表，DynamoDB会定期创建该表partition的快照并上传S3。对分区做快照的周期取决于partition积累的write-ahead log的量。快照和write-ahead log一起用于时间点恢复。当请求一个表的时间点恢复时，DynamoDB识别表所有partition的距离请求的时间点最近的快照，然后回放指定时间点之后的log，创建这个表的快照，然后恢复它。

## 6 Availability

为了实现高可用性，**DynamoDB表在一个区域内的多个AZ中分布和复制**。DynamoDB会定期测试对节点、机架、AZ故障的恢复能力。例如，为了测试整体服务的可用性和可靠性，执行**断电测试**。使用真实的模拟流量，用调度任务随机关闭节点。在所有断电测试结束时，测试工具验证存储在数据库中数据在逻辑上是有效的并且没有损坏。

### 6.1 Write and consistent read availability

一个partition的写可用性取决于有一个健康的leader和健康的quorum replica。对DynamoDB而言，健康的quorum replica就是，来自不同AZ的3副本中至少两副本。只要有足够多的健康的replica（leader和一个write quorum replica），那这个partition就是可用的。如果无法满足quorum的最小数量要求，那partition则变得写不可用。如果一个replica无法相应，leader会添加一个log replica到replication group里，添加一个log replica是确保write quorum最快的方法。这可以最大限度的减少由于write quorum不正常而对写入可用性造成的干扰。**leader replica提供强一致的读**。引入log replica对系统来说是巨大的变化，经过formal method验证过的Paxos实现给我们提供了信息，能安全地调整和试验来实现更高的可用性。我们已经能够在一个地区中，运行数百万个具有log replica的Paxos group了。**任何replica都可以提供最终一致的读**。如果leader replica不可用，其他repica会探测到并且选举一个新的leader，最小化对强一致性读的干扰。

> 1.  只有leader replica能提供强一致的读。
> 2. 任何replica都能提供最终一致的读。
> 3.  普通副本故障后，会快速产生一个log replica
> 4.  leader故障后，其他replica会探测到并选举出新leader。

### 6.2 Failure detection

新选举出来的leader要等老leader的lease过期才能相应请求。这个过程会花费几秒，在这期间新leader不能响应任何新的写请求和强一致的读请求，因此会影响可用性。高可用系统的核心组件之一是leader的故障检测。故障检测必须快和稳，最小化对可用性的干扰。故障检测中的误报可能导致更多的可用性受损。故障检测适用于group中的所有replica都与leader失联。然而，节点可能遇到gray network failures。由于leader和follower之间的通信问题，节点的出站入站通信问题，或者即使leader和follower通信正常，前端的router和leader之间的通信问题，都可能产生gray network failures。gray network failures可能会破坏可用性，因为故障检测中可能存在误报或检测不到故障。例如，一个没有接收到leader心跳replica会尝试选举成为新leader。前面讲过，这会影响可用性。为了解决由gray failures影响可用性问题，想要发起failover（选举）的follower要给group里的其他replica发送一条消息，询问是否能和leader通信。如果其他replica回复leader是健康的，这个follower就会放弃发起leader选举。DynamoDB在故障探测算法中的这个改变显著减少了误报的数量，从而减少了假leader选举的数量。

> leader选举过程要花费几秒，会影响可用性。 故障检测很重要，但如果有误报，反而也会影响可用性。 Gray network failures应该指部分节点网络故障这种情况。网络故障会导致故障检测误报的产生。 follower如果因为网络故障，错误判断leader状态，擅自发起选举，反而会影响可用性。所以加了优化：**在发起选举之前，询问其他replica能否正常与leader通信，排除follower自身的问题**。效果显著。

### 6.3 Measuring availability

**DynamoDB的global table（全局表）有99.999%的可用性，地区表有99.99%的可用性**。**可用性计算方法是每5分钟内，成功请求的占比**。为了实现这个目标，DynamoDB持续监控service和table级别的可用性。跟踪的可用性数据用于分析用户可感知的可用性趋势，如果用户可感知的错误超过一个阈值就触发报警。这些报警被叫做customer-facing alarm（CFA）。这些报警的目的是报告所有与可用性有关的问题，并自动或人为干预地解决问题。除了实时跟踪之外，系统会运行每日job，为每个用户聚合计算可用性指标。聚合结果上传到S3以定期分析可用性趋势。

DynamoDB还会观测用户侧可用性并且报警。有两套client用户观测用户感知的可用性。第一套client是使用DynamoDB做数据存储的内部Amazon服务。这些服务共享其观测到的DynamoDB API调用的可用性指标。第二套client是我们内部DynamoDB canary应用。这些应用运行在每个地区每个AZ，并且通过每个公共的endpoint和DynamoDB通信。真实的应用程序流量使我们能推断用户看到的DynamoDB可用性和延迟，并捕获Gray failures。它们很好的代表了客户可能经历的长期或短期趋势。

> 作为服务侧，观测到的情况可能和用户侧有差异。所以得有服务侧视角和用户侧视角。
> 
> 可用性观测有两套方案：
> 1.  系统内部观测，观测的应该是可能会影响用户的可用性问题。观测的数据也会被用于分析。
> 2.  用户侧观测。系统内部观测不能完全说明用户问题。真正的用户侧可用性在用户应用程序里才能观测到，DynamoDB用了这两种办法来尽可能的观测用户侧可用性。
> 	1. 使用DynamoDB的Amazon内部服务，将观测到的可用性数据共享出来。内部服务DynamoDB的用户，数据是有效的。 
> 	2. canary应用，模拟用户请求，探测可用性。

### 6.4 Deployments

与传统关系数据库不同，DynamoDB部署不需要维护窗口（变更窗口？），也不会影响客户的性能和可用性。软件部署有很多原因，包括新feature，bug fixes，和性能优化。部署通常涉及更新大量服务。DynamoDB定期推送软件更新。部署将软件从一种状态带到另一种状态。新部署的软件经历了完整的开发和测试周期，建立对代码正确性的信心。多年来，经过多次部署，DynamoDB了解到，重要的不仅仅是结束状态和开始状态，有时新部署的软件可能无法运行，需要回滚。回滚状态可能与初始状态不一样。回滚过程在测试中经常被遗漏，并可能影响客户。**DynamoDB在每次部署之前，在组件级别运行一套升级和降级测试。然后故意回滚软件，并进行功能测试。DynamoDB发现这个过程对于捕获问题很有价值，否则在需要的时候很难回滚**。

在单个节点上部署软件与在多个节点上部署软件完全不同。部署在分布式系统中不是原子的，并且在任何给定的时间，都会在有些节点运行着旧代码，有些节点运行这新代码。**分布式部署的另一个调整是新软件可能会引入一种新类型的消息或旧软件无法理解的方式更改协议。DynamoDB通过read-write deployments处理这种变更。第一步是部署软件来读新的消息格式或协议。一旦所有节点能处理新消息，软件再更新发送新消息。软件部署也启用新消息。read-write deployments确保两种类型的消息可以在系统中共存。即使在回滚的情况下，系统也能理解新旧消息。**

**部署在全量推送到整个集群之前，都先部署在一小部分节点上**。该策略减少了错误部署的潜在影响。DynamoDB在可用性指标上设置了报警阈值。**如果在部署期间，错误率和延迟超过了阈值，系统会*自动触发回滚***。软件部署到存储节点会触发leader的failover，这样设计来避免对可用性产生影响。**leader replica放弃leader身份，新的leader不需要等老leader的lease过期**。

### 6.5 Dependencies on external services

为了保证高可用性，所有DynamoDB依赖的在请求路径上的服务，都必须有比DynamoDB更高的可用性。或者，即使依赖的服务受损，DynamoDB也应该能够继续运行。DynamoDB在请求路径上依赖的服务包括IAM和KMS，用于使用客户密钥加密的表。虽然这些服务也具有高可用性，但DynamoDB被设计成能在这些服务不可用时继续运行，也不会牺牲这些系统提供的任何安全属性。

在使用IAM和KMS的情况下，DynamoDB采用了一种statically stable design，即使依赖关系受损，整个系统也能继续工作。尽管依赖受损，但依赖受损之前的一切都会继续发挥作用。DynamoDB将来自IAM和KMS的结果，缓存在对每个请求做身份验证的request router中。DynamoDB会定期异步地刷新缓存结果。如果IAM和KMS变得不可用，router会继续使用之前缓存的结果。如果客户端向没有缓存的router发送请求，会受到影响。然而在实践中，当IAM和KMS受损时，我们看到的影响很小。此外，缓存通过移除off-box call的需要来优化响应时间，在系统处于高负载下很有价值。

> 没有说off-box call是啥骚操作。。

> 总结：尽可能减少关键路径上强依赖。必须的强依赖要考虑降级措施。

### 6.6 Metadata availability

metadata最重要的一部分就是实现表的主键到存储节点的映射。DynamoDB将matedata存储在DynamoDB自身。路由信息包含所有一个表所有的partition，每个partition的key范围，每个partition存储在哪个存储节点上。当一个router接收到之前没见过的表的请求，**router会下载整个表的路由信息并缓存在本地**。因为partition replica的信息很少变化，所以**缓存命中率能达到99.75%**。缺点是缓存会引入两个典型的问题。在router冷启动的时候没有缓存，所有的请求都会导致查询metadata，可能需要metadata服务和router一起扩容。在实践中扩容router的时候能看到影响。有时候metadata服务的流量会飙升到75%。因此，扩容新的router节点会影响性能，导致系统不稳定。另外，无效缓存会导致大量流量直接访问数据源metadata，系统其他部分也出现级联失败。

> request router里有一份metadata的缓存 用缓存就会产生两个问题：
> 1.  冷启动的时候没有缓存。影响性能，影响稳定性。
> 2.  metadata变更，缓存失效，缓存击穿。

DynamoDB希望删掉request router对metadata本地缓存的依赖，而不会影响客户端请求延迟。当响应一个请求的时候，router只需要知道请求的key对应的partition所在的存储节点。所以缓存整个表的路由信息很浪费，尤其是对partition多的大表。为了经济高效的解决metadata扩展问题和可用性风险，DynamoDB构建了一个分布式内存数据库——*MemDS*。**MemDS在内存里存储所有metadata，并且在MemDS层面互相同步**。MemDS可以水平扩展来应对DynamoDB全部的请求流量。数据是高度压缩的。MemDS封装了一个Perkle的数据结构，是一个Patricia tree和一个Merkle tree的混合体。支持KV插入数据，以完整key或key前缀查询。另外因为key是顺序存储的，所以也支持范围查询。然后还支持两种特殊的查询操作：flooring和ceiling。

> 引入分布式缓存MemDS负责缓存metadata。

**在router里，即使缓存命中，也会去异步访问MemDS来刷新缓存**。因此确保MemDS的流量一直恒定，无论缓存是否命中。与传统缓存相比，MemDS的持续流量增加了metadata的负载，传统缓存的后端流量依赖缓存命中率，但能在缓存失效时避免级联影响到其他系统。

DynamoDB的存储节点，是partition存储信息的最权威数据源。partition信息更新后，存储节点会推送给MemDS，每个partition信息的更新都会传播到所有MemDS节点。如果router的请求发到一个MemDS节点，而这个MemDS存储的节点是旧的，router按旧信息请求存储节点，存储节点如果知道partition最新信息则返回最新信息，否则存储节点返回特定错误码，router再去请求其他MemDS节点。

> lindom用了不同的思路，同样值得参考。

## 7. Micro benchmarks
为了展示扩容不会影响用户侧延迟，我们跑了两组YCSB workload。
workload A：50%读，50%写
workload B：95%读，5%写

两组benckmark都用了大小是900bytes，分布相同的key和item。这个是DynamoDB在North Virginia的一个真实场景。workload从100K ops/s增长到1M ops/s。Figure 5展示了两组workload读延迟的P50和P99。结果显示，DynamoDB 读延迟差异非常小，并且即使workload的吞吐量增加也保持不变。Workload B的读流量是A的两倍，读延迟差异也很小。Figure 6展示了两组workload写延迟的P50和P99。和读延迟一样，无论工作负载的吞吐量如何，写延迟都保持不变。

![](figure5.png)

![](figure6.png)
> 这个多少有点糊弄，很多情况没说清楚。但他核心的意思就是，在流量增长的情况下，延迟非常稳定。而且P99比P50高的不多。
> 这就是前面一直说的可预测延迟。

## 8 Conclusion
DynamoDB开创了云原生NoSQL数据库的先河。它每天支撑数千应用，涉及领域包括购物、食品、交通、银行、娱乐等领域。开发者依赖它的数据扩展能力的同时，还提供稳定的性能，高可用性，低操作复杂度。10 多年来，DynamoDB 一直保持着这些关键属性，并通过按需容量、时间点备份和恢复、多区域复制和原子事务等改变游戏规则的功能扩大了对应用程序开发人员的吸引力。

## 9 Acknowledgements
感谢。

## 资料
- [原论文](https://www.usenix.org/system/files/atc22-elhemali.pdf)
- [PingCAP 黄东旭博客](http://_.0xffff.me/dynamodb2022.html)
- [阿里云公众号文章](https://mp.weixin.qq.com/s/ssTTtav-vJ5EMc8OP-DrUw)
- [AWS DynamoDB官网文档](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
