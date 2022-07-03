import { Website } from './interface';
import { Avatar, Card, } from 'antd';
import React from 'react';
import { toast } from 'react-toastify';
import Clipboard from 'clipboard';
import 'antd/dist/antd.css';
import { Overflow } from 'vmdc-ui';

export interface WebsiteCardProps {
  website: Website;
}

const WebsiteCard: React.FC<WebsiteCardProps> = (props) => {
  const {website} = props;
  const { name, intro, url, icon } = website;

  console.log(props.website)

  const onCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      toast.success(`已复制 ${name} (${url})`);
    } else {
      const copy = new Clipboard(`.copy-button_${name}`);
      copy.on('success', (e) => {
        toast.success(`已复制 ${name} (${url})`);
      });
      copy.on('error', function (e) {
        toast.warning(
          `您的浏览器不支持复制功能，请点击跳转到该网站手动复制地址`,
        );
      });
    }
  };

  return (
    <div>
      <Card hoverable
        style={{ width: 300 }}
        onClick={() => window.open(url)}
      >
        <Card.Meta
          avatar={icon ? <Avatar src={icon} /> : undefined}
          title={name}
          description={<Overflow>{(intro as any) || ('' as any)}</Overflow>}
        />
      </Card>
    </div>
  );
};

export default WebsiteCard;
