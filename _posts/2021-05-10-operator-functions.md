---
layout: post
title: What is a matrix exponential? / Operator functions
date: 2021-05-10
description: A brief introduction to operator functions as used in quantum theory or 
tags: basic-quantum abuse-of-notation operator-overloading
categories: notation quantum math
related_posts: true
giscus_comments: true
---

Like most people, I found my introductory quantum mechanics course confusing, in part due to new mathematical and ideas and notations being thrown at me in ways that felt like an aside. As an example, consider the Schrödinger equation

$$
\frac{d}{dt} \ket{\psi(t)} = -i H \ket{\psi(t)}.
$$

In my course, I was taught that if $H$ is time-independent, then the solution is *just*

$$
\ket{\psi(t)} = e^{-i H t} \ket{\psi(0)},
$$

which follows *trivially* from the following observation

$$
\begin{aligned}
\frac{d}{dt} \ket{\psi(t)}
&= -i H e^{-i H t} \ket{\psi(0)} \\
&= -i H \ket{\psi(t)}.
\end{aligned}
$$

But wait a minute... How can we just exponentiate a matrix? Ahh, my professor shared, *just Taylor expand* for any matrix $A$,

$$
e^{A} \equiv \mathds{1} + X + \frac{1}{2} X^2 + \ldots,
$$

and you will be convinced all is well.

For me, all was not well. At this point, I had only seen Taylor series (and for the matter functions) acting on, at most, a list of scalars. 

A number of questions arose immediately

- Why does the Taylor series even work for a matrix?
- Does it converge? How do I know?
- Okay, even if I accept this, what does it *really* mean? 

And once I got confused about differentiating matrix exponentials, my faith in differentiating a vector also crumbled.

- Why should $\frac{d}{dt} \ket{\psi(t)}$ be unique?  
- Shouldn't it depend on the basis?  
- What does *it* really mean?

In short: **what is actually going on with this notation?** An adequate explanation, as we shall see, follows from the notion of spectral function, which in turn requires some knowledge of linear algebra that we shall assume. 

---

## Spectral Functions

To understand a proper definition of a matrix operator in quantum mechanics, you first need the **spectral decomposition**.

Given a **normal** matrix $A$, we can write

$$
A = \sum_a \lambda_a \ket{a}\bra{a},
$$

where $\lambda_a$ are the eigenvalues of $A$ and $\ket{a}$ are the corresponding eigenvectors. That is,

$$
A \ket{a} = \lambda_a \ket{a}.
$$

Once you've written $A$ this way, you can define a **spectral function**

$$
f(A) \equiv \sum_a f(\lambda_a)\ket{a}\bra{a}.
$$

In other words, $f$ acts only on the eigenvalues of $A$. In the context of quantum mechanics in which eigenvalues encode things you can measure in the lab, it makes a lot of sense for such functions to be the most relevant.

### Non-examples

Not all matrix functions are spectral functions, though. For example, given a matrix

$$
M =
\begin{pmatrix}
M_{00} & M_{01} \\
M_{10} & M_{11}
\end{pmatrix},
$$

we could define

$$
g(M) \equiv
\begin{pmatrix}
M_{00} & M_{01}^2 \\
\sqrt{M_{10}} & \pi
\end{pmatrix},
$$

which does some different operation to each entry of the matrix. A more obvious abuse of notation that is also useful, especially in programming, is to lift a scalar function to a matrix entry-wise, i.e., 

$$
f(M) \equiv 
\begin{pmatrix}
f(M_{00}) & f(M_{01}) \\
f(M_{10}) & f(M_{11})
\end{pmatrix},
$$

for $f$ your favorite scalar function.  Both of these operations produce another matrix, but they have nothing obvious to do with the eigenvalues of $M$, so they are generally **not** a spectral functions.

---

## Polynomials Are Spectral Functions in Disguise

Many functions that don’t obviously look spectral actually are, which muddies the water of this notation even more. Consider

$$
p(A) = A A,
$$

which does not appear spectral, but it is. The trick is that you can write $A$ in spectral form,

$$
\begin{align*}
AA &= \left(\sum_a \lambda_a \ket{a}\bra{a}\right)\left(\sum_b \lambda_b \ket{b}\bra{b}\right),
\end{align*}
$$

and upon simplifying using the orthnormality of the basis, we find

$$
p(A) = \sum_a \lambda_a^2 \ket{a}\bra{a},
$$

where we now see that $p(A)$ has the effect of squaring the eigenvalues of $A$. By an extremely common abuse of notation/ operator overloading, we often write $A^2 = A A$, and hence, we can say that $p(A) = A^2$ is a spectral function. 

By the same logic, **all matrix polynomials are spectral functions in disguise.**

---

## Returning to the matrix exponential

One spectral function of utmost importance is the matrix exponential

$$
e^{A} \equiv \sum_a e^{\lambda_a} \ket{a}\bra{a}.
$$

Unfortunately, it is not given a special new symbol, which is an abuse of notation/ operator overloading.  If we Taylor expand the ordinary exponential,

$$
e^{\lambda_a} = 1 + \lambda_a + \frac{1}{2!}\lambda_a^2 + \cdots,
$$

and recall that matrix polynomials are spectral functions, we recover the power series definition from our professor :),

$$
e^{A} = \mathds{1} + A + \frac{1}{2!}A^2 + \cdots.
$$

So the infinite series definition is not mysterious — it is simply the spectral definition written in disguise.

---

## Spectral Derivatives: Ambiguous notation again

Finally, we point out that the power series could be written in terms of spectral derivatives. That is, if we define

$$
\frac{d}{dt} A
\equiv
\sum_a \frac{d\lambda_a}{dt} \ket{a}\bra{a}.
$$

then, we can find the power series expansion of $e^A$ by formal Taylor series expansion, and everything is self-consistent.

However, we need to be careful. In the beginning, we wrote down the  Schrödinger equation which uses

$$
\frac{d}{dt} \ket{\psi(t)} = \left(\frac{d}{dt} \psi_0(t), \frac{d}{dt} \psi_1(t), \ldots, \frac{d}{dt} \psi_{d-1}(t)\right)^T. 
$$

which is actually an entrywise function as we encountered above. Yet, since a vector can be viewed as a diagonal matrix whose entries are its eigenvalues, then it just as well can be viewed as a spectral function in this case, making the two notions self-consistent! This hidden feature is both the power of abuse of notation and partially why overloading notation can be so confusing :P.

As a word of caution, a third type of derivative with similar notation also is used as discussed <a href="/blog/2021/entrywise-matrix-derivative/" target="_blank">here</a>, so stay vigilent! Hopefully, knowledge of these different notions will help you not get caught up in notation. 

---

### The Moral

Matrix exponentials, derivatives, and other operator functions are not mysterious manipulations of symbols. They are functions acting on eigenvalues, expressed back in operator form. Once viewed through the spectral lens, the notation becomes far less magical -- we return to functions acting on scalars. And in fact, in the context of quantum mechanics, it makes a lot of sense that those scalars are the eigenvalues which are experimentally measureable quantities. 
