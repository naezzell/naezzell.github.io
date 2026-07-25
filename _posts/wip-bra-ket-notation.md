---
layout: post
title: "Bra-ket notation: Quantum vectors for people who already know vectors"
date: 2026-06-09
description: An introduction to Dirac bra-ket notation for readers familiar with linear algebra and multivariable calculus; the notation is motivated from first principles and translated directly from familiar vector/matrix language.
tags: intro-quantum notation bra-ket linear-algebra
categories: technical tutorial quantum math
related_posts: true
giscus_comments: true
---

If you have taken a linear algebra course, you already know about vectors, inner products, and matrices. Bra-ket notation — introduced by Paul Dirac and sometimes called Dirac notation — is just a different way of writing these same objects, optimized for quantum mechanics. The goal of this post is to build the notation from what you already know, so that it feels like a translation rather than something new.

---

# The missing piece: why a new notation at all?

In a standard linear algebra course, a vector in $\mathbb{C}^n$ is usually written as a column

$$
\vec{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix},
$$

and its conjugate transpose (a row vector) as $\vec{v}^\dagger = (v_1^*, v_2^*, \ldots, v_n^*)$. The inner product of two vectors is then $\vec{v}^\dagger \vec{w} = \sum_i v_i^* w_i$.

This works fine for finite-dimensional spaces, but quantum mechanics also deals with infinite-dimensional spaces of *functions*. A quantum state might be a wavefunction $\psi(x)$, and the inner product becomes an integral

$$
\int_{-\infty}^{\infty} \psi^*(x) \phi(x) \, dx.
$$

Writing $\vec{\psi}^\dagger \vec{\phi}$ for this is a stretch at best. Dirac notation provides a unified language that works the same way whether you are in $\mathbb{C}^2$, $\mathbb{C}^n$, or an infinite-dimensional function space.

That said, for this post we will stay in finite dimensions. The translation to wavefunctions is then a natural extension.

---

# Kets: column vectors with a new hat

A **ket** is just a column vector. Instead of $\vec{v}$, we write

$$
\ket{v}.
$$

The label inside the ket is just a name — it can be anything convenient: $\ket{\psi}$, $\ket{0}$, $\ket{\uparrow}$, $\ket{E_1}$. Think of it as a label on a vector, not a function being applied to something.

In matrix language:

$$
\ket{v} \longleftrightarrow \vec{v} = \begin{pmatrix} v_1 \\ \vdots \\ v_n \end{pmatrix}.
$$

Scalar multiplication and addition work exactly as you expect:

$$
\alpha \ket{v} + \beta \ket{w} \longleftrightarrow \alpha \vec{v} + \beta \vec{w}.
$$

---

# Bras: conjugate transpose row vectors

A **bra** is the conjugate transpose of a ket. Where $\ket{v}$ is a column vector, $\bra{v}$ is a row vector with complex-conjugated entries:

$$
\bra{v} \longleftrightarrow \vec{v}^\dagger = (v_1^*, v_2^*, \ldots, v_n^*).
$$

The name comes from splitting the word "bracket" — a *bra* on the left and a *ket* on the right, which together form a *braket*. This is also where the notation $\braket{\cdot|\cdot}$ comes from (more on that below).

One important point: if $\ket{v} = \alpha \ket{w}$, then $\bra{v} = \alpha^* \bra{w}$. The conjugation flips to the scalar as well as the entries. This is an <a href="/blog/2026/abuse-of-notation/" target="_blank">abuse of notation</a> worth flagging — the dagger operation is *antilinear*, not linear.

---

# Brakets: the inner product

Placing a bra to the left of a ket gives the inner product:

$$
\braket{v | w} \longleftrightarrow \vec{v}^\dagger \vec{w} = \sum_{i=1}^n v_i^* w_i.
$$

This is the standard Hermitian inner product on $\mathbb{C}^n$. The properties you already know carry over directly:

- $\braket{v | w} = \braket{w | v}^*$ (conjugate symmetry)
- $\braket{v | v} \geq 0$, with equality iff $\ket{v} = 0$ (positive definiteness)
- $\braket{v | \alpha w + \beta u} = \alpha \braket{v|w} + \beta \braket{v|u}$ (linearity in the right argument)

The norm of a ket is $\|\ket{v}\| = \sqrt{\braket{v|v}}$, exactly as you would expect.

---

# Operators: matrices acting on kets

An operator $A$ in Dirac notation is just a matrix. It acts on a ket to produce another ket:

$$
A \ket{v} \longleftrightarrow A \vec{v}.
$$

The **expectation value** of $A$ in state $\ket{v}$ (assuming $\braket{v|v} = 1$) is

$$
\langle A \rangle \equiv \bra{v} A \ket{v} \longleftrightarrow \vec{v}^\dagger A \vec{v} = \sum_{i,j} v_i^* A_{ij} v_j.
$$

This is just a quadratic form, written compactly.

The **adjoint** (conjugate transpose) of an operator $A$ is written $A^\dagger$, and a matrix satisfying $A = A^\dagger$ is called **Hermitian** or **self-adjoint**. In quantum mechanics, observables — measurable quantities like energy or momentum — are always represented by Hermitian operators.

---

# Outer products and projectors

Here is something that may look unfamiliar at first but is really just a matrix. The **outer product** of two kets is written with the ket on the left and the bra on the right:

$$
\ketbra{v}{w} \longleftrightarrow \vec{v} \vec{w}^\dagger,
$$

which is an $n \times n$ matrix with $(i,j)$ entry equal to $v_i w_j^*$. If $\ket{v}$ is normalized, $\ketbra{v}{v}$ is the **projector** onto $\ket{v}$ — it acts as

$$
\ketbra{v}{v} \ket{w} = \ket{v} \braket{v|w},
$$

pulling out the component of $\ket{w}$ along $\ket{v}$ and returning it as a multiple of $\ket{v}$.

If $\{\ket{e_i}\}$ is an orthonormal basis, the completeness relation

$$
\sum_{i=1}^n \ketbra{e_i}{e_i} = \mathds{1}
$$

is just the statement that the projectors onto each basis vector sum to the identity — something you may have seen written as $\sum_i \vec{e}_i \vec{e}_i^\dagger = I$ in linear algebra.

---

# A worked example: two-level system

To make things concrete, consider the simplest quantum system: a qubit, which lives in $\mathbb{C}^2$. The standard basis is written

$$
\ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \ket{1} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}.
$$

A general normalized state is

$$
\ket{\psi} = \alpha \ket{0} + \beta \ket{1}, \quad |\alpha|^2 + |\beta|^2 = 1.
$$

The corresponding bra is $\bra{\psi} = \alpha^* \bra{0} + \beta^* \bra{1}$, and the inner product with itself is

$$
\braket{\psi|\psi} = |\alpha|^2 \braket{0|0} + \alpha^* \beta \braket{0|1} + \beta^* \alpha \braket{1|0} + |\beta|^2 \braket{1|1} = |\alpha|^2 + |\beta|^2 = 1,
$$

using $\braket{i|j} = \delta_{ij}$ for orthonormal basis vectors.

The Pauli $Z$ operator,

$$
Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \ketbra{0}{0} - \ketbra{1}{1},
$$

has expectation value $\bra{\psi} Z \ket{\psi} = |\alpha|^2 - |\beta|^2$, which interpolates between $+1$ (fully in $\ket{0}$) and $-1$ (fully in $\ket{1}$).

---

# Summary: the translation table

| Linear algebra | Dirac notation |
|---|---|
| Column vector $\vec{v}$ | Ket $\ket{v}$ |
| Conjugate transpose row $\vec{v}^\dagger$ | Bra $\bra{v}$ |
| Inner product $\vec{v}^\dagger \vec{w}$ | Braket $\braket{v\|w}$ |
| Matrix $A$ acting on $\vec{v}$ | Operator $A\ket{v}$ |
| Outer product $\vec{v}\vec{w}^\dagger$ | Outer product $\ketbra{v}{w}$ |
| Quadratic form $\vec{v}^\dagger A \vec{v}$ | Expectation value $\bra{v}A\ket{v}$ |
| Conjugate transpose $A^\dagger$ | Adjoint $A^\dagger$ |

With this dictionary in hand, you can read any introductory quantum mechanics text and translate back to familiar linear algebra whenever the notation feels opaque. The bra-ket formalism is, in the end, just linear algebra in a more expressive costume — one that scales gracefully from qubits to wavefunctions to quantum field theory.
