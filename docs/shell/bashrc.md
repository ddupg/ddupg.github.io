### .bashrc配置

#### Linux终端显示git分支

```
function git_branch {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\h: \w [\t]\[\033[32m\]\$(git_branch)\[\033[00m\] $ "
```
