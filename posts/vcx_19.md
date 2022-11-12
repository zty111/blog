---
title: '动画、流体仿真'
date: '2022-11-07'
---

$F=ma$在流体中Navier-Stokes Equation
$$\rho\frac{Dv}{Dt}=-\nabla p+\rho g+\mu \nabla^2v$$

流体计算中可以不考虑第三项粘性力

- 左侧是一个拉格朗日形式，水上的小船视角，跟着流体移动
- 右侧是一个欧拉形式，水中的桩子视角，不随流体移动

两者之间相差一个速度的对流项，都可以用来计算
$$\frac{Dv}{Dt}=\frac{\partial v}{\partial t}v*\Delta v$$

加上质量守恒$\frac{\partial\rho}{\partial t}=-\nabla(\rho v)$

散度为0时，可以保持流体的不可压缩性

压力的来源是保持流体的不可压缩性，压力的作用使得散度为0

密度的计算，单位体积中的质量，用核函数加权计算，核函数要满足$\int w(x)dx=1$

压强的计算，按体积加权平均计算，使用核函数可以将压强的梯度转化为核函数的梯度计算
$$p(x)=\sum p_i\frac{m_i}{p_i}w(|x-x_i|)$$
$$\nabla p(x)=\sum p_i\frac{m_i}{p_i}\nabla w(|x-x_i|)$$
气体压强（由理想气体状态方程)得
$$p_i=k(\rho_i-\rho_0)^\lambda$$
压强全局量由局部计算出，会导致一些误差

SPH pipeline：
1. 更新重力的影响
2. 算密度
3. 算压强
4. 算压力(可以将压力对称分配保证动量守恒)
5. 更新位置和速度

粒子的数量多，需要加速结构（hash表等检索周围粒子）

压强分配不均，粒子不稳定

可以考虑加入一些规则，使粒子分开

网格化的方法求解压强，具有全局性

混合的方法，APIC，FLIP等效果较好，要处理两种方法之间物理量如何传输的问题

to do list：仿真刚体、气泡处理、固液混合、碰撞处理、仿真准确度、仿真加速