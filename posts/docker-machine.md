---
title: 'docker machine 虚拟机docker'
date: '2022-11-06'
---

先安装docker，下使用virtualbox，可替换成云服务商

安装命令linux
```
base=https://github.com/docker/machine/releases/download/v0.16.0 &&
curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
sudo mv /tmp/docker-machine /usr/local/bin/docker-machine &&
chmod +x /usr/local/bin/docker-machine
```
mac
```
base=https://github.com/docker/machine/releases/download/v0.16.0 &&
curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/usr/local/bin/docker-machine &&
chmod +x /usr/local/bin/docker-machine
```


列出可用的机器
```
docker-machine ls
```
创建机器
```
docker-machine create --driver virtaulbox 名称
```
查看机器ip
```
docker-machine ip 名称
```
停止机器
```
docker-machine stop
```
启动机器
```
docker-machine start test
```
进入机器
```
docker-machine ssh test
```
其他命令
```
docker-machine active：查看当前激活状态的 Docker 主机。
config：查看当前激活状态 Docker 主机的连接信息。
create：创建 Docker 主机
env：显示连接到某个主机需要的环境变量
inspect： 以 json 格式输出指定Docker的详细信息
ip： 获取指定 Docker 主机的地址
kill： 直接杀死指定的 Docker 主机
ls： 列出所有的管理主机
provision： 重新配置指定主机
regenerate-certs： 为某个主机重新生成 TLS 信息
restart： 重启指定的主机
rm： 删除某台 Docker 主机，对应的虚拟机也会被删除
ssh： 通过 SSH 连接到主机上，执行命令
scp： 在 Docker 主机之间以及 Docker 主机和本地主机之间通过 scp 远程复制数据
mount： 使用 SSHFS 从计算机装载或卸载目录
start： 启动一个指定的 Docker 主机，如果对象是个虚拟机，该虚拟机将被启动
status： 获取指定 Docker 主机的状态(包括：Running、Paused、Saved、Stopped、Stopping、Starting、Error)等
stop： 停止一个指定的 Docker 主机
upgrade： 将一个指定主机的 Docker 版本更新为最新
url： 获取指定 Docker 主机的监听 URL
version： 显示 Docker Machine 的版本或者主机 Docker 版本
help： 显示帮助信息
```