---
layout: post
title: "Parallel transport gauge: A good choice of phase for quantum states"
date: 2026-05-20
description: A brief discussion of a convenient choice for the phase in a quantum state that depends on a parameter, i.e., the parallel transport gauge
tags: quantum
categories: quantum math
related_posts: true
giscus_comments: true
--- 

An elementary fact in quantum theory is that "quantum states are rays in Hilbert space." In other words, $\ket{\psi}$ and $e^{i \theta} \ket{\psi}$ are the same state with respect to any underlying physics, and the phase $e^{i \theta}$ is thus a gauge degree of freedom (see [here](https://en.wikipedia.org/wiki/Gauge_theory#Example:_electrodynamics) for a broader of context on this meaning of gauge). Yet, in many contexts, we are interested not in a single state but a family of quantum states parameterized by a continuous input, i.e., $\ket{\psi(\lambda)}$ for $\lambda \in \mathds{R}$. As an exmaple, this state might be the ground-state of a system as the magnetic field strength is changed, so this setting is common in the study of quantum phase transitions or in [perturbation theory](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf).

Regardless, once we care about a family of states, choosing the phase gets much more interesting, and often, the best choice is the so-called parallel transport gauge as defined in Eq. 2.6 of [this paper](https://arxiv.org/pdf/1804.02095). The definition buried in this paper is a bit hard to follow for just this point. Generally, the idea is that, given a state $\ket{\phi(\lambda)}$, we can always choose a phase (for each $\lambda$) such that

$$
\avg{\phi(\lambda) | \phi'(\lambda)} = 0.
$$

This is commonly utilized in perturbation theory derivations, but the proof is typically given abstractly and for all higher order derivatives at the same time (see [Eq. 1.1.14 here](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf)). In this article, we derive an explicit choice of phase where this condition is met, as it will later help us understand ideas like the [Berry phase](https://en.wikipedia.org/wiki/Geometric_phase). 

# Notation and preliminaries

First, we use the derivative short-hand,

\begin{equation}
\ket{\psi'(\lambda)} \equiv \pdv{}{\lambda} \ket{\psi(\lambda)}
\end{equation}
where the partial derivative is <a href="/blog/2026/abuse-of-notation/" target="_blank">entrywise</a>. For example, if $\ket{\psi(\lambda)} = (\cos \lambda, \sin \lambda)$, then $\ket{\psi'(\lambda)} = (-\sin \lambda, \cos \lambda).$

Second, observe,

\begin{equation}
\avg{\psi(\lambda) | \psi(\lambda)} = 1 \implies \text{Re}(\avg{\psi(\lambda) | \psi'(\lambda)}) = 0,
\end{equation}
which tells us that $\ket{\psi(\lambda)}$ and $\ket{\psi'(\lambda)}$ have a purely imaginary overlap.

<details>

<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Click to reveal derivation, but try it yourself first!
</summary>

By normalization,

$$
\partial_{\lambda}\avg{\psi(\lambda) | \psi(\lambda} = 0
$$

but by the product rule,

$$
\partial_{\lambda}\avg{\psi(\lambda) | \psi(\lambda} = \avg{\psi | \psi'} + \avg{\psi' | \psi},
$$

where we began writing $\ket{\psi}$ instead of $\ket{\psi(\lambda)}$ for brevity).

Combined with the general relation,

$$
\avg{\psi' | \psi} = \avg{\psi | \psi'}^*,
$$

and the fact $a + a^* = 2 \text{Re}(a)$ for any $a \in \mathds{C}$, we find the claimed result $\text{Re}(\avg{\psi | \psi'}) = 0$. 

</details>

# Parallel transport gauge

We, begin by explicitly writing

\begin{equation}
 \ket{\phi(\lambda)} = e^{i \theta(\lambda)} \ket{\psi(\lambda)}
\end{equation}

as the family of possible gauge choices for a given $\ket{\psi}$. This makes clear that we can, in principle, choose a different phase for each value of $\lambda.$ The parallel gauge choice can then be defined as a choice of phase such that

\begin{equation}
	\avg{\phi(\lambda) | \phi'(\lambda)} = 0.
\end{equation}

This is achievable by choosing any $\theta(\lambda)$ such that

\begin{equation}
	\theta'(\lambda) = i \avg{\psi(\lambda) | \psi'(\lambda)}
\end{equation}

or more directly

\begin{equation}
	\theta(\lambda) = \theta(\lambda_0) + i \int_{\lambda_0}^{\lambda} \avg{\psi(s) | \psi'(s) } \mathrm{d}s
\end{equation}

for any starting parameter $\lambda_0$ of our choice.

## Derivation

We provide the full derivation of the parallel transport gauge, using the hidden/spoiler functionality to allow readers to attempt to do it themselves.

<details>

<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Step 1: Differentiating $\ket{\phi(\lambda)}$
</summary>
By the chain and product rules,

\begin{equation}
 \ket{\phi'(\lambda)} = i \theta'(\lambda) e^{i \theta(\lambda)} \ket{\psi(\lambda)} + e^{i \theta(\lambda)} \ket{\psi'(\lambda)}.
\end{equation}

</details>

<details>

<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Step 2: Computing $\avg{\phi(\lambda) | \phi'(\lambda)}$
</summary>
We can re-write the Step 1 result as 

$$
 \ket{ \phi'(\lambda)} = i \theta'(\lambda) \ket{\phi(\lambda)} + e^{i \theta(\lambda)} \ket{\psi'(\lambda)}
$$

upon which we find

\begin{equation}
\avg{\phi(\lambda) | \phi'(\lambda)} = i \theta'(\lambda) + \avg{\psi(\lambda) | \psi'(\lambda)}.
\end{equation}


</details>

<details>

<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Step 3: Solving for condition
</summary>

Formally, we can set $\avg{\phi(\lambda) | \phi'(\lambda)} = 0$ and use the result of Step 2 to see if this is achievable for any choice of $\theta(\lambda)$. By direct algebra, we find

\begin{equation}
	\theta'(\lambda) = i \avg{\psi(\lambda) | \psi'(\lambda)}
\end{equation}

is sufficient. By the <a href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus" target="_blank">fundamental theorem of calculus</a>, we then find

$$
\begin{align}
	\int_{\lambda_0}^{\lambda} \theta'(s)\mathrm{d}s &= i \int_{\lambda_0}^{\lambda} \avg{\psi(s) | \psi'(s)} \mathrm{d} s \\
	%-------
	\theta(\lambda) &= \theta(\lambda_0) + i \int_{\lambda_0}^{\lambda} \avg{\psi(s) | \psi'(s)} \mathrm{d} s.
\end{align}
$$

</details>

## Uses

The parallel transport gauge is useful in

1. Derivations in perturbation theory as in [here](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf)
2. (Optimal) Simulations of quantum dynamics, <a href="https://arxiv.org/pdf/1804.02095" target="_blank">https://arxiv.org/pdf/1804.02095</a>

# External links referenced throughout
1. On quantum perturbation theory: [https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf)
2. On Berry phase: [https://en.wikipedia.org/wiki/Geometric_phas](https://en.wikipedia.org/wiki/Geometric_phas)
3. Fundmental theorem of calculus: [https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus](https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus)
4. Use of this phase in optimal simulations: [https://arxiv.org/pdf/1804.02095](https://arxiv.org/pdf/1804.02095)