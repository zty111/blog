---
title: '数学补充'
date: '2022-11-08'
---

数据拟合：由采样的离散点得到一个连续的拟合函数
- 线性插值，形成三角面片，问题是不光滑，在顶点和边上无法取法向
- 多项式插值，如拉格朗日插值，容易收到噪声的影响

现实世界中的采样点数目多且有噪声

能否找到更好的插值空间？样条函数，如B-spline$(1-t)^3,3t(1-t)^2,2t^2(1-t),t^3$，不同值下起作用的项不同
- 与Bezier曲线的不同？Bezier是所有点拟合出一个，控制点会改变整个曲线。B-spline是两个点之间拟合出一个，控制点对远处的曲线没有影响

插值与逼近：插值所有点都在曲线上，逼近不要求贴合，最小化$loss=min_f\sum_iL(y_i,f(x_i))$，如L2-norm
- 以线性函数为例$y=ax+b$，即是最小二乘
- 高维时，直线->超平面(n-1维)，距离为$n^Tp+d$，向量点乘得到距离，因为不过原点加上偏移量d，要满足超平面的法向模长为1，防止其越来越小。先由偏导求出d，再由拉格朗日乘子法得到$C =\sum_i(p_i-\overline p)(p_i-\overline p)^T$，$Cn=\lambda n$，n为C的特征向量，取最小特征值的一个
- 最小二乘求解线性系统，$x=(A^TA)^{-1}A^TB$
- 迭代求解，离超平面远的权重减少，近的增加，减少噪声影响
- 局部用平面来拟合，对单个点半径内的点进行拟合，称为移动最小二乘。如何选取影响半径？过大导致细节丢失，过小导致起伏太多。

最小二乘在图形学中的应用
- mesh construction 输入一个网格链接，少量的顶点位置（控制点），输出所有顶点的位置，要求光滑（顶点是所有相连顶点的中心）
考虑x的约束$Lx=0$，$Fx=\hat v$，令$A=(L,F)^T$，$b=(0,\hat v)^T$，则$Ax=b$同最小二乘
- least squares 知道物体所有顶点的位置，和物体形变后的位置，求解形变。角色有骨架，求出骨架的运动和骨架与表皮顶点的关系。
$T_i=\sum w_{ib} \overline T_b$
$(cA_i,1)^Tw_i=(cb_i,1)^T$

PCA

$x'=argmin_nE(n)$
求一个法向，作为坐标轴后使bounding box最小

选取方差最大的

$val(L)=\frac{1}{N}v^TCv$

SVD

特征向量和特征值

$Cn=\lambda n$，特征向量在变换后方向不变
- A是一个实对称矩阵，可以正交对角化，$A=VDV^T$，$Av_i=\lambda_i v_i$，方向不变，改变大小
- A不是实对称矩阵，U和V为正交矩阵，$A=U\Sigma V^T$，满足$Av_i=\sigma_i u_i$，要求$\sigma > 0$且降序排列，称为奇异值，由v方向转化为u方向，并改变大小

取一个时同PCA找一个法向，
取前t维时最小化噪声，保留特征

SVD和PCA的作用
- 矩阵求逆 $x=V\Sigma^{-1}U^Tb$
- 求矩阵的数值秩，丢弃数值误差导致的小奇异值
- 主成分分析PCA
- 最小二乘意义的线性系统求解
- 在点云上进行PCA，前两维为切平面，第三维为法向
- 图片表征，用于图片识别分类等
- 3维特征点的提取和建模