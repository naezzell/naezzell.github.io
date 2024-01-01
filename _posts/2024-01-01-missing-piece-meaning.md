---
layout: post
title:  missing-piece-meaning
date: 2024-01-01 9:04:00
description: describing purpose of blog by explaining title
tags: meta
categories: meta academic
thumbnail: assets/img/thinking-puzzle-piece.jpg
---
Thumbnail courtesy of  <a href="https://www.freepik.com/free-vector/flat-thinking-concept_4457194.htm#query=earth%20puzzle&position=27&from_view=keyword&track=ais&uuid=27cc0f71-5d29-4a76-9047-f27536bd56c9">Freepik</a>

I wanted to kick off my blog by explaining the meaning of <em> missing piece </em>. The meaning I want to invoke comes from my a repeated experience I had as an undergraduate physics/math major. I'll start with a somewhat apocryphal story to explain (my exact memory is somewhat fuzzy).

During my first quantum mechanics course, we discussed the time-independent Schr&#246;dinger equation,
\begin{equation}
i \hbar \frac{\mathrm{d}}{\mathrm{d}t} | \psi(t) \rangle  = H | \psi(t) \rangle
\end{equation}
and my professor wrote down the solution as
\begin{equation}
|\psi(t) \rangle = e^{-i H t / \hbar} | \psi(0) \rangle
\end{equation}
with corresponding proof
\begin{equation}
\frac{\mathrm{d}}{\mathrm{d}t} |\psi(t) \rangle = \frac{\mathrm{d}}{\mathrm{d}t} e^{-i H t / \hbar} | \psi(0) \rangle = -\frac{i}{\hbar} H e^{-i H t / \hbar} | \psi(0) \rangle \implies (1).
\end{equation}
that <q>follows trivially from derivative of exponential function.</q>

<q>But wait!</q> the class exclaimed. <q>How can you exponentiate a matrix? What the hell does $$e^{-i H t / \hbar}$$ mean? How can we just differentiate it and pull down H?</q> And if you're like me, once you get confused about what the matrix exponential and derivative, you begin to question everything. For example, I began to even question what 
$$
\frac{\mathrm{d}}{\mathrm{d}t} |\psi(t) \rangle
$$
means even though I was perfectly comfortable with derivatives of vectors from classical mechanics before. Once I get confused by a single concept, I feel as though my entire map of the subject collapses. To fill back in the map and restore my intuition and confidence, I must fill in the <em> missing piece </em> (see the thumbnail image).

<q>No problem</q> the professor responds calmly. <q>The matrix exponential has a `trivial` definition from its Taylor expansion,</q>
\begin{equation}
    e^{A t} = (A t)^0 + (A t)^1 + \frac{1}{2!}(A t)^2 + \frac{1}{3!}(A t)^3 + \ldots
\end{equation}
<q>and you can prove the derivative property `trivially` from this.</q> Once you understand and are comfortable with what a matrix exponential is, the above proof and explanation is trivial. But trivial in retrospect is not very illuminating when you are trying to grasp the concept for the first time! If I had to guess, the word `trivial` is one of the four horseman of not understanding and feeling discouraged for students.

This is a prototypical example of the types of gaps in understanding I want to address as part of this blog. In short, the physics curriculum is filled with concepts (typically mathematical) that are introduced as solutions to concepts you are learning about. The above lesson, for example, is introducing and emphasizing the Schr&#246;dinger equation. The concept of matrix exponentiation (and differentiation) is treated as a mathematical aside and is not part of the main lesson. It is assumed you will just pick it up along the way, that you will not let the math get in the way of understand the physics. Unfortunately for me, this was not the case. I felt the need to fill in the <em> missing piece </em> to restore my understanding, and this often meant looking for an alternate explanation from the <q>just Taylor expand</q> from above. The alternate explanation that clicked for me is spectral functions which I learned about from Nielsen and Chuang when first learning about quantum computation. (TODO: Write spectral functions blog post)

From my experience, the above was relatively common. Below, I enumerate several examples, and I hope over time I can fill each with a blog post explaining them. Of course, my memory from undergrad is fuzzy, so I'd love to crowd-source more examples from readers as they encounter new confusing concepts! Please comment your confusions below!
<ul>
    <li>Differential in thermodynamics</li>
    <li>Use of phrase <q>abuse of notation</q></li>
    <li>Use of the word <q>canonical</q></li>
    <li>Using Fourier transform to go to reciprocal space in solid state physics</li>
    <li>Computing certain quantum many-body partition functions</li>
    <li>and so on...</li>
</ul>

Finally, I will provide pedagogical introductions to various topics I encounter in research or my own study whenever I have the time and motivation. For example, I plan to make posts about the SWAP operator, dynamical decoupling, majorization and Schur convexity, and so on....
