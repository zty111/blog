---
title: 'docker用法'
date: '2022-11-06'
---

对docker的相关命令做一个记录

以可交互和终端形式运行一个容器
```
docker run -i -t 容器名 
```
以后台形式运行
```
docker run -d 容器名 指令
```
查看容器内标准输出
```
docker log 容器ID
```
停止
```
docker stop 容器ID
```
启动
```
docker start 容器ID
```
查看状态
```
docker ps 容器ID
```
查看所有指令，查看帮助
```
docker
docker 指令 --helps
```
获取镜像
```
docker pull ubuntu
```
进入后台运行的容器
```
docker attach 容器ID
docker exec -it 容器名（退出终端容器不会停止）
```
导出容器
```
docker export 容器ID > xxx.tar
```
导入容器快照
```
cat xxx.tar | docker import - 镜像名
```
删除容器
```
docker rm -f 容器ID
```
网络应用
```
docker run
-p num 设置端口
-P 使用本地端口
-udp 使用UDP协议端口
```
查看端口号
```
docker port 容器名或ID
```
查看进程
```
docker top
```
列出本地镜像
```
docker images
```
查找镜像（Docker Hub网站：https://hub.docker.com/）
```
docker search 镜像名
```
删除镜像
```
docker rmi 镜像名
```
更新镜像
```
docker commit -m="注释" -a="作者" 容器ID 容器名
```
构建镜像（需要先有Dockerfile文件）如
```
cat Dockerfile 
FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"

RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd runoob
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
```
后使用
```
docker build -t 容器名 Dockerfile所在目录
```
设置标签
```
docker tag 容器ID 容器名:标签名
```
容器命名
```
docker run -name 容器名
```
容器互联，新建网络
```
docker network create -d bridge 网络名
```
加入网络
```
docker run -network 网络名
```
配置DNS
```
宿主 /etc/docker/daemon.json中，重启docker生效
容器 docker run --dns=114.114.114.114 -dns-serach=搜索域，搜索host时会搜索host.xxx.com
```
Docker仓库
```
https://hub.docker.com
docker login 登录
docker logout 登出
docker search 搜索镜像
docker pull 拉取镜像
docker push 推送镜像
```