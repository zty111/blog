---
title: '几何处理'
date: '2022-11-04'
theme: 'vcx'
---

细节层级：远的物体用更少的多边形面，近的物体用更多的多边形面
- 多边形简化：点简化、边简化、半边简化，以L2距离差评判好坏。在删除一条边后，我们需要引入一个新的 顶点，通过最小化新的顶点与之前对应的平面的 L2 距离，我们可以得到删除这条边与之对应的二次度量误差。 然后，通过不断的迭代，采用贪心算法，每次选取最小二次度量误差的边删去，我们就能实现对网格的简化。


欧几里得距离：几何面上的最短路径

维诺图（voronoi diagram)：以离每个点最近的块来划分

CVT（Centoidal Voronoi Tessellation）：不断迭代地画出维诺图，计算其中心点

局部平均区域（Local Averaging Region）：将三角形独立的点变成连续的区域，方便计算微分量
- barycentric cell 三角形两边中点和重心连线
- voronoi cell 两条中垂线，但钝角时会超出三角形
- mixed Voronoi cell 钝角时连接三条边中点

法向量：顶点法向量由相邻网格决定$n(v)=\frac{\sum\alpha_Tn(T)}{||\sum\alpha_Tn(T)||}$，常数$\alpha_T$
- 为$1$时没考虑三角形的信息
- 为$area(T)$时常见，但也解决不了不规则网格问题
- 为$\theta(T)$时计算麻烦但效果更好

梯度：三角形重心下网格梯度计算方式$(f_j-f_i)\frac{(x_i-x_k)^\perp}{2A_T}+(f_k-f_i)\frac{(x_j-x_i)^\perp}{2A_T}$在一个三角形网格内是定值

离散拉普拉斯算子
- 均匀拉普拉斯：$\sum(f_j-f_i)/N_i$$
- 余切拉普拉斯（由高斯发散定理推导）：$\frac{1}{2A_i}\sum(\cot{a_{ij}}+\cot{b_{ij}})(f_j-f_i)$

网格平滑：去掉噪音（高频信息）保留整个形状（低频信息），但高频不一定是噪声（如棱角分明的几何体的顶点）

拉普拉斯平滑
- 扩散流$\frac{\partial f(x,t)}{\partial t}=\lambda\Delta f(x,t)$，通过在表面上的拉普拉斯算子进行平滑
- 空间离散化$\frac{\partial f(v_i,t)}{\partial t}=\lambda\Delta f(v_i,t)$，写成矩阵$\partial f(t)/\partial t=\lambda Lf(t)$
- 时间离散化$\frac{\partial f(t)}{\partial t}=\frac{f(t+h)-f(t)}{h}$，化为$f(t+h)=f(t)+h\lambda Lf(t)$
- 平滑公式：$x_i\leftarro x_i+h\lambda\Delta x_i$