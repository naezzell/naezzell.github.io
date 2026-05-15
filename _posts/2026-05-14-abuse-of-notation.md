---
layout: post
title: "Abuse of notation/ Operator overloading"
date: 2026-05-14
description: I define the meaning of abuse of notation which is very similar to operator overloading in programming. I then collect many examples of this phenomenon to avoid confusion and serve as a hopefully helpful cheat sheet. 
tags: abuse-of-notation operator-overloading compendium
categories: notation math 
related_posts: true
giscus_comments: true
---

In physics, the useage of the phrase "abuse of notation" is common, but what is even more common is actually just abusing notation without mentioning it as abuse at all! In my experience this can and has lead to many moments of confusion, so in this post, I hope to elucidate what this concept is and provide many examples to help avoid future confusion.

---

# Abuse of notation as operator overloading

To me, the true essence of abuse of notation become the most clear when I first learned to program in python and learned about operator overloading. Consider the following two expressions


```python
simple_addition = 1 + 1
overloading_addition = [1, 2, 3] + [4, 5, 6]
```

In the first, the `+` is the operation of elementary addition of integers, so `print(simple_addition)` would return `2` as expected. In the second, the meaning is not totally clear. Indeed, it is ambiguous, and my first guess if I didn't know the answer might be that it should return `[5, 7, 9]` which is the entry-by-entry sum of the two lists. Yet, in python, the output of `overloading_addition` is actually `[1,2,3,4,5,6]` because `+` acting on two lists has an **overloaded** meaning as an operation which concatenates two lists to make a larger list with the contents of both lists.

This concept is pervasive in computer programming, and in fact, it can get surprsingly complicated since internally, even `1 + 1` and `1 + 1.0` are likely implemented differently as an addition of two integers or an integer plus a float. If this concept is interesting to you, I encourage you to also read about the related but distinct concept of multiple dispatch, especially as the [[programming paradigm of Julia](https://docs.julialang.org/en/v1/manual/methods/#Methods)].

Either way, this concept is also routinely encountered in math where, at least in the physics community, it is known as **abuse of notation**. For example, the use of $e^x$ for the normal exponential and $e^A$ for the <a href="/blog/2021/operator-functions/" target="_blank">matrix exponential</a> is a common abuse of notation that throws people for a loop, but in fact, one can even call $a + b$ for $a, b \in \mathbb{C}$ an overloading of the simple $a, b \in \mathds{R}$ addition. Yet, it is such a common trick, like writing $f + g$ for functions, that it is not pointed out as an abuse of notation.

---
# Vector/matrix examples

Across the board, it is helpful to get used to these common vector/matrix abuses of notation. 

---

## Addition and multiplication

In physics, the vector addition is used all over the place, i.e., if $\vec{v}, \vec{w} \in \mathbb{C}^n$ then

\begin{equation}
\vec{v} + \vec{w} = (v_1 + w_1, v_2 + w_2, \ldots, v_n + w_n)
\end{equation}

as usual. At the same time, we write

$$
\lambda \vec{v} = (\lambda v_1, \ldots, \lambda v_n).
$$

These are also generalized regularly to matrix linear combinations, $A + \lambda B$, which is not surprising since all finite dimensional vector spaces (of the same dimension) are isomorphic, i.e., just stack all the columns of a vector into a long vector.

Though less common in physics, it is common in programming to want to do an entry-by-entry addition or multiplication of arrays, i.e., in numpy we can do

```python
import numpy as np
a = np.array([[1, 2, 3], [1, 2, 3]])
b = np.array([[1, 1, 1], [2, 2, 2]])
print(a * b == np.array([[1, 2, 3], [2, 4, 6]]))
```

which prints out a $2 \times 3$ array of `True` so that `*` is overloaded to do entry-by-entry multiplication. In physics, this type of $ \vec{v} * \vec{w}$ multiplication is not defined, but if it is used ever, it is written with a [[Hadamard product](https://en.wikipedia.org/wiki/Hadamard_product_(matrices))] symbol, $\circ$ or $\odot$, i.e, $a \odot b$ is as above. 

## Elementwise extension/ Broadcasting

An important class of overloading/ abuse of notation comes from extending a function elementwise or broadcasting a function. Put simply, broadcasting means to apply the same function to all elements in an array/vector/matrix as in


$$
\begin{equation}
\label{eq:broadcasting}
f\left(\begin{bmatrix}
a_{00} & a_{01}  & a_{02}\\
a_{10} & a_{11} & a_{12}
\end{bmatrix}\right) = \begin{bmatrix}
f(a_{00}) & f(a_{01})  & f(a_{02})\\
f(a_{10}) & f(a_{11}) & f(a_{12})
\end{bmatrix},
\end{equation}
$$

and this type of extension is used routinely in machine learning and physics, but it does not seem to have a [[standard notation](https://ai.stackexchange.com/questions/27867/what-is-the-correct-notation-for-an-operation-that-applies-to-each-element-of-an)]. 


In physics, this is most commonly used for derivatives, i.e., if

$$
\vec{v}(t) = (x(t), y(t), z(t)) \in \mathds{R}^3,
$$

then we will write

$$
\dot{\vec{v}}(t) \equiv \dv{\vec{v}}{t} = (\dot{x}(t), \dot{y}(t), \dot{z}(t))
$$

in classical mechanics. Of course, it shows up elsewhere such the broadcasted time-derivative of the statevector in the Schrödinger equation,

$$
i \dv{}{t} \ket{\psi(t)} = H \ket{\psi(t)}.
$$

In perturbation theory or quantum phase transition studies, we also often write $H(\lambda)$ to denote a family of Hamiltonians, i.e., $H(\lambda) = H_0 + \lambda H_1$. In this case

$$
H'(\lambda) = \dv{}{\lambda}H(\lambda) = H_1
$$

is also a broadcasted derivative since the elements of $H(\lambda)$ are just linear combinations of $H_0$ elements with $H_1$ elements weighted by the linear factor $\lambda$. This expression is especially fun in the present discussion where $H_0 + \lambda H_1$ itself is a vector linear combination of matrices, an extension of the humble `+`!

## Spectral functions

A different way to extend the meaning of $f$ over a matrix is to define a spectral function extension. In quantum theory, for example, we frequently write $e^{-i H t}$ for $H$ a Hermitian $n \times n$ matrix. If $H$ has spectral resolution

$$
H = \sum_{l=1}^n E_l \ketbra{E_l}{E_l}
$$

then

$$
e^{-i H t} \equiv \sum_{l=1}^n e^{-i E_l t} \ketbra{E_l}{E_l}
$$

and more generally, we can define a spectral function over a Hermitian matrix $AA$ as 

\begin{equation}
A = \sum_a a \ketbra{a}{a} \longrightarrow f(A) = \sum_{a} f(a) \ketbra{a}{a}.
\end{equation}

This can be extended beyond Hermitian matrices, but for now, this is sufficient. More details about the matrix exponential can be found in my related <a href="/blog/2021/operator-functions/" target="_blank">blog post</a>.

## Overloading the gradient

Given a scalar function that takes in a vector input, $f(\vec{x}) : R^n \rightarrow \mathds{R}$, we can define the gradient as

$$
\nabla_{\vec{x}} f(\vec{x}) = \left(\pdv{f}{x_1}, \pdv{f}{x_2}, \ldots, \pdv{f}{x_n}\right)^T
$$

as routinely done in electrodynamics. Yet, for some reason in my <a href="/blog/2021/entrywise-matrix-derivative/" target="_blank">machine learning course</a>, my class used the notation

\begin{equation}
\pdv{f}{\vec{x}} \equiv \nabla_{\vec{x}}
\end{equation}

which had a natural extension to $A \in \mathds{R}^{n \times m}$ matrices as

\begin{equation}
\pdv{f(A)}{A} \equiv \nabla_{A} f(A) \equiv \left( \pdv{f}{A_{ij}} \right)_{ij} \in \mathds{R}^{n \times m},
\end{equation}

which left people pretty confused until I wrote that blog post.

---
# Examples from my own research

*TODO: Write this section with examples from, e.g., https://arxiv.org/abs/2504.07295