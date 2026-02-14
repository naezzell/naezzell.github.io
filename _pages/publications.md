---
layout: page
permalink: /publications/
title: publications
description: Publications with useful links (i.e. to paper, code, talks) and brief commentary.
nav: true
nav_order: 1
---

[[Google Scholar](https://scholar.google.com/citations?user=pSCN5GsAAAAJ)] contains a full list of my works in chronological order if you want to get straight to it, but here, you will find useful external links and potentially useful summaries and/or meta-commentary. 

I believe papers should be as reproducible and self-contained as possible. Correspondingly, you will find that all my first-author work with a significant code or data elements have an open source static, citeable [[Zenodo](https://zenodo.org/search?q=naezzell&l=list&p=1&s=10&sort=bestmatch)] repository and a [[GitHub](https://github.com/naezzell)] repository. This is a standard I have set for myself after being inspired by a [[tutorial](https://sc19.supercomputing.org/presentation/index-id=tut158&sess=sess192.html)] on reproducibility and code sharing at the [[Supercomputing 2019](https://sc19.supercomputing.org/index.html)] conference which I was fortunate enough to get to join as a [[Department of Energy Computational Science Graduate Fellow](https://www.krellinst.org/csgf/profile/ezzell2019)]. For this inspiration, among other things, I am grateful to have been a DOE CSGFer. 

## Peer-reviewed pulications

- *Advanced measurement techniques in quantum Monte Carlo: The permutation matrix representation approach*    
  **N. Ezzell**, I. Hen    
  *Comput. Phys. Commun.* (2026)    
  [[Paper](https://www.sciencedirect.com/science/article/abs/pii/S0010465526000019?via%3Dihub)] [[arXiv](https://arxiv.org/abs/2504.07295)] [[Zenodo](https://zenodo.org/records/17786518)] [[GitHub](https://github.com/naezzell/advmeaPMRQMC)] [[LinkedIn](https://www.linkedin.com/posts/nic96_advanced-measurement-techniques-in-quantum-share-7420276559539884032-lRS5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRCQboBE0jtjAHsyDqBOvhgI5cWMOSGuPc)]      
<span style="color: var(--global-theme-color);">Takeaway:</span> You can use quantum Monte Carlo to estimate the thermal expectation value of any operator. Our justification relies on an improved group-theoretic definition of the permutation matrix representation we propose.
   

- *A universal black-box quantum Monte Carlo approach to quantum phase transitions*    
  **N. Ezzell**, L. Barash, I. Hen    
  *npj Comput. Mater.* (2025)    
  [[Paper](https://www.nature.com/articles/s41524-025-01891-0)] [[arXiv](https://arxiv.org/abs/2408.03924)] [[Zenodo](https://zenodo.org/records/17786518)] [[GitHub](https://github.com/naezzell/advmeaPMRQMC)] [[LinkedIn](https://www.linkedin.com/posts/nic96_a-universal-black-box-quantum-monte-carlo-share-7417024217218715648-y3yK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRCQboBE0jtjAHsyDqBOvhgI5cWMOSGuPc)]    
<span style="color: var(--global-theme-color);">Takeaway:</span> You can detect phase boundaries in quantum systems without system-specific knowledge using our black box approach. In our demonstrations, it even worked on a toy random model with 100 spins, so try out our open source code on your exotic models!

- *Dynamical simulation via quantum machine learning with provable generalization*  
   J. Gibbs, Z. Holmes, M. C. Caro, **N. Ezzell**, H.-Y. Huang, L. Cincio, A. T. Sornborger, P. J. Coles  
   *Phys. Rev. Research* **6**, 013241 (2024).    
   [[Paper](https://doi.org/10.1103/PhysRevResearch.6.013241)] [[arXiv](https://arxiv.org/abs/2204.10269)]    
   <span style="color: var(--global-theme-color);">Takeaway:</span> You can beat Trotterization methods for time evolution using quantum machine learning. This method only requires preparing and learning on product states but it can still correctly time-evolve highly entangled states!

- *Dynamical decoupling for superconducting qubits: a performance survey*  
   **N. Ezzell**, B. Pokharel, L. Tewala, G. Quiroz, D. A. Lidar  
   *Phys. Rev. Applied* **20**, 064027 (2023)  
   [[Paper](https://doi.org/10.1103/PhysRevApplied.20.064027)] [[arXiv](https://arxiv.org/abs/2207.03670)] [[Zenodo](https://zenodo.org/records/7884641)] [[GitHub](https://github.com/naezzell/edd/tree/v2.0.0)]    
<span style="color: var(--global-theme-color);">Takeaway:</span> You can protect qubits from noise with dynamical decoupling, but the best strategy doesn't give a damn about your theory. Simple sequences with long idle will do you well. Modern quantum (NISQ) devices are unreliable---so compare data from different jobs with utmost caution!

- *Quantum mixed state compiling*  
   **N. Ezzell**, E. M. Ball, A. U. Siddiqui, M. M. Wilde, A. T. Sornborger, P. J. Coles, Z. Holmes  
   *Quantum Sci. Technol.* **8**, 035001 (2023)  
   [[Paper](https://iopscience.iop.org/article/10.1088/2058-9565/acc4e3f)] [[arXiv](https://arxiv.org/abs/2209.00528)] [[Zenodo](https://zenodo.org/records/7039676)] [[GitHub](https://github.com/naezzell/qmsc/tree/v1.0.01)] [[DOECSGF23 Talk](https://www.krellinst.org/csgf/conf/2023/video/ezzell2019)] [[QAISG Talk](https://www.youtube.com/watch?v=poNKXWY0RJc&t=382s)]    
   <span style="color: var(--global-theme-color);">Takeaway:</span> You can "learn a quantum state" by finding a quantum circuit which prepares a low-rank approximation of it that can be used for downstream applications. Empirically, this sense of learning requires fewer copies of the quantum state than quantum state tomography.

- *Out-of-distribution generalization for learning quantum dynamics*  
   M. C. Caro, H.-Y. Huang, **N. Ezzell**, J. Gibbs, A. T. Sornborger, L. Cincio, P. J. Coles, Z. Holmes  
   *Nat. Commun.* **14**, 3751 (2023)  
   [[Paper](https://doi.org/10.1038/s41467-023-39495-0)] [[arXiv](https://arxiv.org/abs/2204.10268)]    
   <span style="color: var(--global-theme-color);">Takeaway:</span> You can learn the action of a unitary on a large class of even highly entangled states by studying the action of a unitary acting only on random product states! This makes the task of variational unitary compiling tractable on NISQ devices.

- *Modeling the early stages of phase separation in disordered elastin-like proteins*  
   Y. Zhang, V. Zai-Rose, C. J. Price, N. A. Ezzell, G. L. Bidwell, J. J. Correia, N. C. Fitzkee  
   *Biophys. J.* **114**, 1563–1578 (2018)  
   [[Paper](https://doi.org/10.1016/j.bpj.2018.02.020)]    
   <span style="color: var(--global-theme-color);">Commentary:</span> My first foray into serious academic research as an undergraduate at Mississippi State was in biophysics. Here, I leanred the practical aspects of Monte Carlo, a topic which has held my attention ever sense. Work here also lead me to the [[61st Biophysical Society](https://www.biophysics.org/past-annual-meetings/61st-annual-meeting)] meeting where I found Eric Betzig's [[National Lecture](https://www.biophysics.org/video-library/2017-biophyscial-society-lecture)] both amusing and inspiring (leading to my Goldwater essay, actually), as did [[others](http://biofisica.info/report-biophysical-society-meeting-2017-eric-betzig-super-resolves-the-way-to-ground-breaking-science/)], it seems. 

---

## Preprints

- *Inequalities, identities, and bounds for divided differences of the exponential function*  
   Q. Zeng, **N. Ezzell**, A. Babakhani, I. Hen, L. Barash  
   arXiv:2510.10724 (2025)  
   [[arXiv](https://arxiv.org/abs/2510.10724)]    
   <span style="color: var(--global-theme-color);">Commentary:</span> This preprint collects several seemingly novel relations for the divided difference of the exponential born out of desire to push the permutation matrix representation quantum Monte Carlo to further heights. As usual, the exponential has some really nifty properties. 


- *Detecting quantum and classical phase transitions via unsupervised machine learning of the Fisher information metric*    
  V. Kasatkin, E. Mozgunov, **N. Ezzell**, D. Lidar
  arXiv:2408.03418 (2024)    
  [[arXiv](https://arxiv.org/abs/2408.03418)]
- *ClassiFIM: an unsupervised method to detect phase transitions*    
  V. Kasatkin, E. Mozgunov, **N. Ezzell**, U. Mishra, I. Hen, D. Lidar
  arXiv:2408.03323 (2024)    
  [[arXiv](https://arxiv.org/abs/2408.03323)]    
<span style="color: var(--global-theme-color);">Takeaway:</span> You can detect the location of many phase transitions using the classical Fisher information. Surprinsgly, this includes many quantum phase transitions as well! We provide a specific unsupervised machine learning algorithm to find classical or quantum phase boundaries that exploits this.

- *The quantum low-rank approximation problem*  
   **N. Ezzell**, Z. Holmes, P. J. Coles  
   arXiv:2203.00811 (2022)  
   [[arXiv](https://arxiv.org/abs/2203.00811)]    
   <span style="color: var(--global-theme-color);">Takeaway:</span> You can approximate a quantum state with one of lower rank, and we formulate this natural notion into a rigorous optimization problem that, to our knowledge, has never been posed and then solve it.
