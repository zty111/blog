---
title: '光照与着色'
date: '2022-11-04'
---

图形学中的纹理映射：给物体颜色和光照

光源的不同种类：
- 所有方向均相同的光
- 同一方向的平行光
- 点光源
- 聚光灯
- 矩阵光

反射：
- 漫反射 diffuse reflection

满足Lambert's Law: $I_d=k_dI_l\cos\theta=k_dI_l(n·l)$

环境光Ambient + Diffuse Reflection $I_{d+a}=k_aI_a+k_dI_l\cos\theta$

更进一步，简单照明的影响$I_{d+a}=k_aI_a+f_{att}k_dI_l\cos\theta, where f_{att}=1/d^2$

- 镜面反射 specular reflection

$I_s=k_sI_l(cos\phi)^{n_s}$，$\phi$是光线和观察者的夹角，$k_s$是镜面反射系数，$n_s$是镜面反射落下的概率。这个公式没有物理基础，但用在计算机图形学中

- 二者兼有

$I=k_aI_a+f_{att}I_l(k_d\cos\theta+k_s(cos\phi)^{n_s})$。对多光源，每个光源重复漫反射和镜面反射后累加，环境光只计一次

- flat shading 一次照明计算，朝向基本体的质心
- gouraud shading 应用与多边形网格的每个顶点，三角形内部进行插值计算，在T型接头时会产生错误，但通常不会被注意
- phong shading 假定与gouraud着色器相同输入，每个顶点都有一个法线，渲染后每个点的法线是结果，非常平滑，瑕疵只能沿着轮廓看到。

光的折射$n_1\sin\theta_1=n_2\sin\theta_2$

可视化

找到离观察者最近的平面，如果出现环路则拆成2个处理

Z-buffer算法
- 优点：简单、没有排序和分裂，容易和几何形体结合
- 缺点：不能解决透明，需要好的z-buffer的解法

常用数据结构：二叉搜索树

非真实感绘制，通过不同光照和边缘达到特殊的效果感觉