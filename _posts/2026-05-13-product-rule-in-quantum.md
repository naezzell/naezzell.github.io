---
layout: post
title: "Operator functions: The product rule on inner products and averages in quantum mechanics"
date: 2026-05-13
description: A brief exposition on product rule of inner-products and averages in quantum mechanics
tags: operator-functions basic-quantum
categories: quantum math
related_posts: true
giscus_comments: true
---

In the study of perturbation theory or quantum phase transitions, it is routine to use the product rule across an inner product of vectors or an expectation value, i.e., to write

\begin{equation}
\label{eq:result}
\dv{}{\lambda} \avg{\psi(\lambda) | H(\lambda) | \phi(\lambda)} = \avg{\psi'(\lambda) | H(\lambda) | \phi(\lambda)} + \avg{\psi(\lambda) | H'(\lambda) | \phi(\lambda)} + \avg{\psi(\lambda) | H(\lambda) | \phi'(\lambda)},
\end{equation}

where we are using the short-hand $\ket{\psi'(\lambda)} = \partial_\lambda \ket{\psi(\lambda}$ for the <a href="/blog/2021/entrywise-matrix-derivative/" target="_blank">entry wise</a> matrix derivative. Though this result is farily straightforward to believe and derive if you believe the product rule, I have never seen an explicit justification which I hope to change with this post.

---

## Product rule across an inner product

For pedagogical purposes, I think it is helpful to not obscure anything with quantum notation of bras and kets ($\bra{ \cdot}$'s and  $\ket{\cdot }$'s). Instead, consider $\vec{v}(x) = (f_1(x), f_2(x), \ldots, f_n(x))$ and $\vec{w}(x) = (g_1(x), \ldots, g_n(x))$. For simplicity of notation, we assume each function is real-valued and in this context of course differentiable with respect to $x$. In this case, we find

\begin{equation}
\dv{}{x} (\vec{v}(x) \cdot \vec{w}(x)) = \dv{}{x} \sum_{i=1}^n f_i(x) g_i(x)
= \sum_{i=1}^n f_i'(x) g_i(x) + f_i(x) g_i'(x)
= \vec{v}'(x) \cdot \vec{w}(x) + \vec{v}(x) \cdot \vec{w}'(x),
\end{equation}
which follows from the definition of the inner product and the product rule of usual scalar functions. By the same calculation but for complex-valued functions, we thus find

\begin{equation}
\label{eq:vector-vector}
\dv{}{\lambda} \avg{\psi(\lambda) | \phi(\lambda)} = \avg{\psi'(\lambda) | \phi(\lambda)} + \avg{\psi(\lambda) | \phi'(\lambda)},
\end{equation}
which is a special case of Eq. $\eqref{eq:result}$ with $H(\lambda) = \mathds{1}$, and fortuitously just looks like a naive use of the product rule!

---

## Product rule of a matrix vector product

To make our way to justifying Eq. $\eqref{eq:result}$, we now define the matrix $A(x)$ and consider taking a derivative of the $A(x) \vec{v}(x)$. In this context, each element of $A$ is a function with an $x$ dependence which we write conveniently as stacked row vectors so that the vector matrix multiplication can be written with dot products, i.e, 

$$
A(x) \equiv
\begin{pmatrix}
\rowvec{\vec{a}_1(x)} \\
\rowvec{\vec{a}_2(x)} \\
\vdots \\
\rowvec{\vec{a}_n(x)}
\end{pmatrix} \implies  A(x) \vec{v}(x) =
\begin{pmatrix}
	\vec{a}_1(x) \cdot \vec{v}(x) \\
	\vec{a}_2(x) \cdot \vec{v}(x) \\
	\vdots \\
	\vec{a}_n(x) \cdot \vec{v}(x)
\end{pmatrix}.
$$

From our earlier exposition, we understand how to differentiate each component with the product rule, so we find

$$
\dv{}{x} (A(x) \vec{v}(x)) =
\begin{pmatrix}
	\vec{a}'_1(x) \cdot \vec{v}(x) + \vec{a}_1(x) \cdot \vec{v}'(x) \\
	\vec{a}'_2(x) \cdot \vec{v}(x) + \vec{a}_2(x) \cdot \vec{v}'(x) \\
	\vdots \\
	\vec{a}'_n(x) \cdot \vec{v}(x) + \vec{a}_n(x) \cdot \vec{v}'(x)
\end{pmatrix}.
$$

Defining $A'(x)$ as the entry-wise derivative, i.e.,

$$
A'(x) \equiv
\begin{pmatrix}
\rowvec{\vec{a}'_1(x)} \\
\rowvec{\vec{a}'_2(x)} \\
\vdots \\
\rowvec{\vec{a}'_n(x)}
\end{pmatrix},
$$

we thus have found

\begin{equation}
\dv{}{x}(A(x) \vec{v}(x)) = A'(x) \vec{v}(x) + A(x) \vec{v}'(x),
\end{equation}

which again agrees with a naive guess of how the product rule should work.

Since our derivations only used the abstract notion of a dot product, they clearly also work for complex-valued functions, and hence, we could also write
\begin{equation}
\label{eq:matrix-vector}
\dv{}{\lambda}(H(\lambda) \ket{\psi(\lambda)}) = H'(\lambda) \ket{\psi(\lambda)} + H(\lambda) \ket{\psi'(\lambda)}
\end{equation}
with quantum notation immediately. 

---

## Derivation of our final result

Having deried the expression for the derivative of an inner product in Eq. $\eqref{eq:vector-vector}$ and the expression for the derivative of a matrix vector product in Eq. $\eqref{eq:matrix-vector}$, we can arrive at Eq. $\eqref{eq:result}$ by simply chaining them together with the product rule. That is,

\begin{align}
\dv{}{\lambda} \avg{\psi(\lambda) | H(\lambda) | \phi(\lambda)} &= \avg{\psi'(\lambda) | H(\lambda) | \phi(\lambda)} + \avg{\psi(\lambda) | \dv{}{\lambda} \left(H(\lambda) | \phi(\lambda)}\right) \cr
&= \avg{\psi'(\lambda) | H(\lambda) | \phi(\lambda)} + \avg{\psi(\lambda) | H'(\lambda) | \phi(\lambda)} + \avg{\psi(\lambda) | H(\lambda) | \phi'(\lambda)}.
\end{align}

As in our other derivations, after careful accounting of notation and vector indices, this essentially comes from the familiar use of the product rule on three functions,

$$
\dv{}{x}(f g h) = f' g h + f g' h + f g h',
$$

where we have surpressed all the careful $x$ dependencies for brevity. 