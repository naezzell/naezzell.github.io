---
layout: post
title: "Quantum perturbation theory I: Energy corrections"
date: 2026-05-27
description: An introduction to perturbation theory derivations in quantum physics; deriving first two derivatives of the ground-state energy; a brief relation to quantum phase transition theory and energy susceptibility is made
tags: quantum
categories: quantum math
related_posts: true
giscus_comments: true
---

This post is intended to be the first post in a series of posts about quantum perturbation theory that is also relevant to quantum phase transitions. Rather than set up a derivation to apply to all orders of perturbation theory as is [usually done](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf), I will derive the first two corrections to the ground-state energy directly to help get comfortable with the style of derivations and make explicit the connection to the so-called [energy susceptibility](https://arxiv.org/pdf/2408.03924) used in [quantum phase transition theory](https://arxiv.org/pdf/1012.0653). 

# Pre-reqs

To fully understand this post, the following earlier posts should be read and understood:
1. Entrywise vector derivative as discussed in my <a href="/blog/2026/abuse-of-notation/" target="_blank">abuse of notation</a> post is required
2. <a href="/blog/2026/product-rule-in-quantum/" target="_blank">Product rule extended to operator expectation values</a> is also required
3. <a href="/blog/2026/parallel-transport-gauge/" target="_blank">Parallel transport gauge</a> is helpful for full understanding but not entirely needed

# Notation and set-up

We are given a one-parameter family of Hamiltonians of the form
\begin{equation}
	H(\lambda) = H_0 + \lambda H_1.
\end{equation}

In the context of perturbation theory, $\lambda H_1$ is a perturbation to a base Hamiltonian $H_0$ whose eigenspectrum we already understand, but this same form can be used in quatum phase transition derivations where $H_0$ is a static term and $H_1$ is a non-commuting, driving term. 

We assume the spectrum is non-degenerate, $E_0(\lambda) < E_1(\lambda) < \ldots < E_n(\lambda)$, and denote the eigendecomposition

\begin{equation}
	H(\lambda) \ket{E_k(\lambda)} = E_k(\lambda) \ket{E_k(\lambda)}.
\end{equation}

We denote the derivative of any $\lambda$ dependent quantity with a prime, i.e.,
\begin{equation}
E_k'(\lambda) \equiv \pdv{E_k(\lambda)}{\lambda}, \ \ H'(\lambda) \equiv \pdv{H(\lambda)}{\lambda}, \ \ \ket{E_k'(\lambda)} \equiv \pdv{}{\lambda} \ket{E_k(\lambda)},
\end{equation}
where the first is a "normal" partial derivative of the scalar function $E_k(\lambda)$ and the other two are entrywise/ broadcasted matrix derivatives.

# Corrections to the ground-state energy

In physics-land, a function is Taylor expandable ([analytic](https://en.wikipedia.org/wiki/Analytic_function)) unless stated otherwise, so we can Taylor expand the ground-state energy about a perturbation of $\lambda$,

\begin{equation}
E_0(\lambda + \delta \lambda) = E_0(\lambda) + \delta \lambda E_0'(\lambda) + \frac{\delta \lambda^2}{2} E_0''(\lambda) + O( \delta \lambda^3).
\end{equation}

Note that normal perturbation theory is in the special case of $\lambda = 0$, but this expansion can be thought of as the start of a perturbation in which the spectrum of $H(\lambda)$ but not $H(\lambda + \delta \lambda)$ is known. In any case, we now see that, as usual in Taylorland, computing corrections to the ground-state energy is tantamount to computing derivatives.

In the next two sections, we derive the following results for the first and second order corrections, 

$$
\begin{align}
	E_0'(\lambda) &= \avg{E_0(\lambda) | H_1 | E_0(\lambda)} \\
	E_0''(\lambda) &= -2 \sum_{k > 0} \frac{|\avg{E_k(\lambda) | H_1 | E_0(\lambda)}|^2}{E_k(\lambda) - E_0(\lambda)},

\end{align}
$$

which are easier to compute than doing full diagonalization of $H(\lambda + \delta \lambda)$ to obtain $E_0(\lambda + \delta \lambda)$ to numerical precision. Specifically, in perturbation theory, we assume knowledge of the spectrum (energies and eigenvectors) of $H(\lambda)$ but do not know the spectrum of $H(\lambda + \delta \lambda)$. Naively, computing $E_0(\lambda + \delta \lambda)$ requires doing full diagonalization of $H(\lambda + \delta \lambda)$, but to first order, we actually need only compute the ground-state expectation value of $H_1$, a much simpler task. To second order, the expression is more complicated, but again, only involves matrix elements of $H_1$ written in the original $H(\lambda)$ eigenbasis. 

## The first order derivative/correction

We often write $E_0, H$ as a henceforth understood short-hand for $E_0(\lambda), H(\lambda)$. If ever evaluated at a point that is not $\lambda$, we will be explicit, i.e., $E_0(\lambda + \delta)$.

By definition,

\begin{equation}
E_0 = \avg{E_0 | H | E_0},
\end{equation}

which, combined with the product rule and normalization, gives the famous and elegant [Hellman-Feynman theorem](https://en.wikipedia.org/wiki/Hellmann%E2%80%93Feynman_theorem),

\begin{equation}
	E_0'(\lambda) = \avg{E_0(\lambda) | H_1 | E_0(\lambda)}.
\end{equation}

We provide a derivation of this result in the hidden tab below, but try to derive it yourself first, as we've already given a big hint! 

<details>

<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
First order derivation
</summary>

Going line by line, we find
$$
\begin{align}
	E_0'(\lambda) &= \avg{E_0' | H(\lambda) | E_0} + \avg{E_0 | H'(\lambda) | E_0} + \avg{E_0 | H(\lambda) | E_0'} \\
	&= \avg{E_0 | H_1 | E_0} + E_0(\avg{E_0' | E_0} + \avg{E_0 | E_0'})
\end{align}
$$

which follows from $H'(\lambda) = H_1$, $H(\lambda) \ket{E_0} = E_0 \ket{E_0}$, and the Hermiticity of $H(\lambda)$. Next, we observe that the term in parentheses can be obtained by the product rule,

$$
\begin{align}
	&= \avg{E_0 | H_1 | E_0} + E_0 \pdv{}{\lambda} \avg{E_0 | E_0} \\
	&= \avg{E_0 | H_1 | E_0},
\end{align}
$$

which ends up being zero by normalization $\avg{E_0(\lambda) | E_0(\lambda)} = 1$. 

</details>

## Second order correction: The energy susceptibility (ES)

The second order correction is, up to a potential minus sign, the so-called [energy susceptibility (ES)](https://arxiv.org/pdf/2408.03924),

\begin{equation}
	\chi_E(\lambda) \equiv -\frac{\partial^2 E_0(\lambda)}{\partial \lambda^2},
\end{equation}

and we shall now derive

\begin{equation}
	\frac{\partial^2 E_0(\lambda)}{\partial \lambda^2} = -2 \sum_{k > 0} \frac{|\avg{E_k(\lambda) | H_1 | E_0(\lambda)}|^2}{E_k(\lambda) - E_0(\lambda)}
\end{equation}

in a series of steps hidden below (uncover in pieces as you work through it).

<details>

<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Second order derivation
</summary>

<details>
<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Product rule and simplifying
</summary>
From the first order result and the product rule, we have

\begin{equation}
	E_0''(\lambda) = \avg{E_0'(\lambda) | H_1 | E_0(\lambda)} + \avg{E_0(\lambda) | H_1 | E_0'(\lambda)}.
\end{equation}
 
Since $\avg{\psi | O | \phi}^* = \avg{\phi | O^{\dagger} | \psi}$ and $a + a^* = 2 \text{Re}(a)$, then this simplifies further to

\begin{equation}
	\label{eq:e0pp}
	E_0''(\lambda) = 2 \text{Re}(\avg{E_0'(\lambda) | H_1 | E_0(\lambda)})
\end{equation}

Without loss of generality, we can expand $\ket{E_0'(\lambda)}$ into the complete, orthonormal basis $\{\ket{E_k}\}$, but we can adjust the phase so that $\avg{E_0' | E_0} = 0$ by employing  the <a href="/blog/2026/parallel-transport-gauge/" target="_blank"> parallel transport gauge</a>. In other words, the expansion has no $c_0$ component, 

\begin{equation}
	\label{eq:expand-e0p}
	\ket{E_0'(\lambda)} = \sum_{k > 0} c_k \ket{E_k(\lambda)}.
\end{equation}

</details>

<details>
<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Computing the $c_k$'s
</summary>

Our next task is then to express each $c_k$ into an explicit form involving spectral information of $H(\lambda)$. One way to do this is to differentiate both sides of the eigenvalue equation $H \ket{E_0} = E_0 \ket{E_0}$

$$
\begin{align}
H' \ket{E_0} + H \ket{E_0'} &= E_0' \ket{E_0} + E_0 \ket{E_0'} \\
(H - E_0) \ket{E_0'} &= (E_0' - H_1) \ket{E_0}.
\end{align}
$$

Right now, we have the awkwardness that is $(H - E_0)$, a mixture of an operator $H$ and the implied operator $E_0 \mathds{1}$, acting on $\ket{E_0'}$ whose identity we do not yet know. To clear things up a bit, we insert the resolution of the identity $\mathds{1} = \sum_k \ketbra{E_k}{E_k}$ between $(H - E_0)$ and $\ket{E_0'}$, which gives

\begin{equation}
	(H - E_0) \ket{E_0'} = \sum_{k > 0} (E_k - E_0) c_k \ket{E_k},
\end{equation}

where we have used the fact $c_k \equiv \avg{E_k | E_0'}$ by construction. Inserting the identity similarly into the right-hand side does not simplify anything since $\avg{E_k | E_0} = \delta_{0k}$.

Yet, we can now pick out the $l^{\text{th}}$ component for $l > 0$ of both sides by acting with $\bra{E_l}$. Doing this to the left-hand side gives

\begin{equation}
\avg{E_l | (H - E_0) | E_0'} = c_l (E_l - E_0).
\end{equation}

Doing the same to the right-hand side gives

\begin{equation}
\avg{E_l | E_0' - H_1 | E_0} = - \avg{E_l | H_1 | E_0}.
\end{equation}

Combining these results with the nondegeneracy (so no dividing by zero), we find

\begin{equation}
\label{eq:cl}
c_l = -\frac{\avg{E_l | H_1 | E_0}}{E_l - E_0}.
\end{equation}

</details>

<details>
<summary style="color: #007acc; font-weight: bold; cursor: pointer;">
Putting it all together
</summary>

Plugging Eq.\eqref{eq:cl} into Eq.\eqref{eq:expand-e0p} and finally into Eq.\eqref{eq:e0pp} gives the final result since $a a^* = |a|^2$ is real. Spelling it out because we can,

$$
\begin{align}
E_0''(\lambda) &= 2 \text{Re}\left(\sum_{k>0} c_k^* \avg{E_k | H_1 | E_0}\right) \\
&= -2 \text{Re}\left(\sum_{k>0} \frac{\avg{E_0 | H_1 | E_k} \avg{E_k | H_1 | E_0}}{E_k - E_0}\right) \\
&= -2 \sum_{k>0} \frac{|\avg{E_k | H_1 | E_0}|^2}{E_k - E_0}
\end{align}
$$

</details>



</details>


## Some more comments on the energy susceptibility

We plan to write a more in depth post about the relation of the energy susceptibility (ES) to quantum phase transitions and its history in a future post. In the meantime, we wish to make a few brief comments with a warning and assurance to readers that quantum phase transition literature is vast, dense, and confusing! It's okay if not all these points make sense, but I hope it is useful to see them connected to the above (hopefully understandable) derivations.

First, we need to understand a few facts about classical phase transitions, and in fact, much of this literature is the real barrier to understanding concepts and terminology in quantum phase transitions (this is a common motif by the way)! 

- Classical phase transitions were historically characterized by how the [thermodynamic free energy](https://en.wikipedia.org/wiki/Thermodynamic_free_energy) changes (see [Ehrenfest Classification](https://en.wikipedia.org/wiki/Phase_transition#Ehrenfest_classification))
  - A first order transition occurs when the first derivative of the free energy changes discontinuously at the phase boundary (i.e., solid/liquid/gas transitions)
  - A second order (or continuous) phase transition occurs when the first derivative of free energy is continuous at the boundary but the second derivative is discontinuous (i.e., a paramagnetic to ferromagnetic transition below the [Curie temperature](https://en.wikipedia.org/wiki/Curie_temperature))
- In short, a classical phase transition occurs when the Free energy experiences a type of non-analyticity in the Free energy; that is, there is a discontinuity in one of the derivatives of Free energy at any order.
  - In practice, most transitions seem to be describable by first or second order non-analyticities, though
  - As a valuable side note, people often also equate second-order as describable by a local order parameter (like magnetization in the paramagnetic to ferromagnetic transition) via Landau-Ginzburg theories and throw in terms like spontaneous symmetry breaking and the renormalization group. This is mostly a buzzword dump for future reference :). 


If we understand this (or at least believe it), then similar concepts can be ported to quantum phase transitions by combining the three observations:
- As per the third law of thermodynamics, a system at zero temperature is in its ground-state, i.e. $\ket{E_0}$ with energy $E_0$
- A quantum phase transition is a zero temperature phase transition, and hence, is about the change of the ground-state $\ket{E_0(\lambda)}$ as we vary $\lambda$
- At zero temperature, the free energy $A = E - T S$ equals the ground-state energy $E_0$

Combining these bullets, we see that the quantum analogue of the above classification is to discuss non-analytic behavior of the ground-state energy $E_0(\lambda)$, and indeed, that is often sufficient to describe quantum phase transitions (see the second paragraph of [this](https://arxiv.org/pdf/1012.0653)). As such, it is often possible to spot a continuous quantum phase transition by finding a divergence in the second derivative of the ground-state energy or ES. This is pointed out, for example in [Chen (Eq. 4)](https://arxiv.org/pdf/0801.0020) or [Alburqurque (Eq. 8)](https://arxiv.org/pdf/0912.2689). The idea to just call this energy susceptibility in analogy with prior susceptibilities was first made in my own work [Eq. 6, 14](https://arxiv.org/pdf/2408.03924). 

For posterity, interesting comments about the ES are made in the following papers: 
- Some of my own quantum Monte Carlo work (Eq. 6, 14): [https://arxiv.org/pdf/2408.03924](https://arxiv.org/pdf/2408.03924)
- Alburqurque (Eq. 8): [https://arxiv.org/pdf/0912.2689](https://arxiv.org/pdf/0912.2689)
- Chen (Eq. 4): [https://arxiv.org/pdf/0801.0020](https://arxiv.org/pdf/0801.0020)
- Venuti 1 (top right of page 2): [https://arxiv.org/pdf/0801.2473](https://arxiv.org/pdf/0801.2473)
- Quench 1 (Eq. 8): [https://arxiv.org/pdf/0909.5181](https://arxiv.org/pdf/0909.5181)
- Quench 2 (Eq. 49): [https://arxiv.org/pdf/0910.0876](https://arxiv.org/pdf/0910.0876)

<!-- Quench 1: [https://arxiv.org/pdf/0910.0255](https://arxiv.org/pdf/0910.0255) -->



# Collection of useful links before paper dump end

The basics:

- Perturbation theory: [https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0889c5ca8a479c3e56c544d646fb770_MIT8_06S18ch1.pdf)
- Hellman Feynman theorem: [https://en.wikipedia.org/wiki/Hellmann%E2%80%93Feynman_theorem](https://en.wikipedia.org/wiki/Hellmann%E2%80%93Feynman_theorem)

Some "assumed knowledge" reminders: 
- Analytic functions: [https://en.wikipedia.org/wiki/Analytic_function](https://en.wikipedia.org/wiki/Analytic_function)
- Thermodynamic free energy [https://en.wikipedia.org/wiki/Thermodynamic_free_energy](https://en.wikipedia.org/wiki/Thermodynamic_free_energy)

Phase transition stuff: 
- Ehrenfest Classification: [https://en.wikipedia.org/wiki/Phase_transition#Ehrenfest_classification](https://en.wikipedia.org/wiki/Phase_transition#Ehrenfest_classification)
- Curie temperature: [https://en.wikipedia.org/wiki/Curie_temperature](https://en.wikipedia.org/wiki/Curie_temperature)
- Review of (some) quantum phase transition theory: [https://arxiv.org/pdf/1012.0653](https://arxiv.org/pdf/1012.0653)

