---
layout: post
title: Entry-wise vector and matrix derivatives
date: 2021-08-30
description: Understanding derivatives with respect to vectors and matrices via entry-wise differentiation.
tags: abuse-of-notation operator-overloading calculus linear-algebra
categories: math-notes
related_posts: false
---

During my time at USC, I took a machine learning course in Fall 2021. In the first homework assignment, we were given 

\begin{equation}
f(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x} + \boldsymbol{b}^T \boldsymbol{x}
\end{equation}
for $\boldsymbol{x} \in \mathbb{R}^n$, $\boldsymbol{x}^T$ is the tranpose of this vector, and hence $f(\boldsymbol{x}) : \mathbb{R}^n \to \mathbb{R}$ is a scalar function with vector inputs.

We were then asked to compute
\begin{equation}
\frac{\partial f(\boldsymbol{x})}{\partial \boldsymbol{x}},
\qquad
\frac{\partial f(\boldsymbol{x})}{\partial A},
\end{equation}
which many people in the course found confusing notation since, at the end of the day,
> derivatives always act on scalar functions. 

The confusion is merely notational, as we shall see. In fact, this is a great example of the concepts of overloading notation and abuse of notation (hence the tags).

---

## Vector derivative (gradient, entry-wise)

Since $f$ depends on the scalar variables $x_1, x_2, \ldots, x_n$, the most natural thing to do is to take all first partial derivatives:

\begin{equation}
\label{eq:guess-for-first-der}
\frac{\partial f(\boldsymbol{x})}{\partial x_1},
\frac{\partial f(\boldsymbol{x})}{\partial x_2},
\ldots,
\frac{\partial f(\boldsymbol{x})}{\partial x_n}.
\end{equation}
Each term in Eq.\eqref{eq:guess-for-first-der} is an ordinary scalar derivative: we differentiate a scalar function with respect to a scalar variable.

A convenient way to store these derivatives is in a vector, and that is exactly what “derivative with respect to a vector” means:

\begin{equation}
\label{eq:vec-div-def}
\frac{\partial f(\boldsymbol{x})}{\partial \boldsymbol{x}}
\equiv
\left(
\frac{\partial f(\boldsymbol{x})}{\partial x_1},
\frac{\partial f(\boldsymbol{x})}{\partial x_2},
\ldots,
\frac{\partial f(\boldsymbol{x})}{\partial x_n}
\right)^T,
\end{equation}
where $\equiv$ is notation meaning ``defines" which is defining the notation for the vector derivative in this case. In fact, this is just the familiar [[gradient](https://en.wikipedia.org/wiki/Gradient)] from multivariable calculus disguised by overloaded notation/an *abuse of notation*. Oh, and  the tranpose is just to make this row vector a column vector---a minor detail for keeping track of dimensions properly.

Thus your initial intuition that might have said “you can’t take a derivative with respect to a vector” is correct. The notation here simply instructs you to take all scalar derivatives and stack them into a vector, aka the gradient. 

---

## Matrix derivative (entry-wise)

In exact analogy,

$$
\frac{\partial f}{\partial A}
=
\left(
\begin{array}{cccc}
\frac{\partial f}{\partial A_{11}} &
\frac{\partial f}{\partial A_{12}} &
\cdots &
\frac{\partial f}{\partial A_{1n}} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f}{\partial A_{n1}} &
\frac{\partial f}{\partial A_{n2}} &
\cdots &
\frac{\partial f}{\partial A_{nn}}
\end{array}
\right).
$$


That is: take the scalar derivative with respect to each entry $A_{ij}$ and arrange the results into a matrix.

---

## A concrete $2 \times 2$ example

To drive the point home, let’s compute $\frac{\partial f(\boldsymbol{x})}{\partial x_1}$ for a $2 \times 2$ example. Suppose

$$
\begin{aligned}
f(\mathbf{x})
&=
(x_1, x_2)
\left(
\begin{array}{cc}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{array}
\right)
\left(
\begin{array}{c}
x_1 \\
x_2
\end{array}
\right)
\\
&=
A_{11} x_1^2
+ A_{12} x_1 x_2
+ A_{21} x_1 x_2
+ A_{22} x_2^2.
\end{aligned}
$$

Then

$$
\frac{\partial f}{\partial x_1}
=
2 A_{11} x_1
+ A_{12} x_2
+ A_{21} x_2.
$$

With this (and the analogous calculation for $\frac{\partial f}{\partial x_2}$), we have computed $\partial f / \partial \boldsymbol{x}$ for this $2 \times 2$ example. A similar exercise yields $\partial f / \partial A$. By writing out $f(\boldsymbol{x})$ for general $n$ or pattern matching by direct computation on the $2 \times 2, 3 \times 3, \ldots, n \times n$ answers, we can thus compute $\partial f / \partial \boldsymbol{x}$ and $\partial f / \partial A$ for general $n$, which we leave as an exercise given its origin. 



