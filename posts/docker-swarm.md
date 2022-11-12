---
title: 'docker-swarm docker集群管理工具'
date: '2022-11-06'
---

swarm集群由管理节点和工作节点构成，管理节点负责集群配置、服务管理，工作节点运行服务来完成任务

前置：docker machine和virtualbox

创建swarm集群：

管理节点
```
docker-machine create -d virtualbox swarm-manager
docker-machine ssh swarm-manager
docker swarm init --advertise-addr 创建机器时分配的IP
```
记录docker swarm join --token 这行

工作节点，进入其他docker-machine中输入记录的命令

集群信息，进入管理节点
```
docker info
```
部署服务
```
docker service create --replicas 1 --name helloworld alpine ping docker.com
```
查看服务
```
docker service ps helloworld
docker service inspect --pretty helloworld
```
扩展更多的节点运行服务
```
docker service scale helloworld=2
```
删除服务
```
docker service rm helloworld
```
滚动升级服务
```
docker service create --replicas 1 --name redis --update-delay 10s redis:3.0.6
docker service update --image redis:3.0.7 redis
```
查看节点状态
```
docker node ls
```
停止某个节点接受任务
```
docker node update --availability drain swarm-worker1
```
恢复
```
docker node update --availability active swarm-worker1
```