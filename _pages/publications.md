---
layout: page
permalink: /publications/
title: publications
description: Publications with useful links (i.e. to paper, code, talks) and brief commentary.
nav: true
nav_order: 1
---

I believe papers should be as reproducible and self-contained as possible. Correspondingly, you will find that all my first-author work with a significant code or data elements have an open source static, citeable [[Zenodo](https://zenodo.org/search?q=naezzell&l=list&p=1&s=10&sort=bestmatch)] repository and a [[GitHub](https://github.com/naezzell)] repository. This is a standard I have set for myself after being inspired by a [[tutorial](https://sc19.supercomputing.org/presentation/index-id=tut158&sess=sess192.html)] on reproducibility and code sharing at the [[Supercomputing 2019](https://sc19.supercomputing.org/index.html)] conference which I was fortunate enough to get to join as a [[Department of Energy Computational Science Graduate Fellow](https://www.krellinst.org/csgf/profile/ezzell2019)]. For this inspiration, among other things, I am grateful to have been a DOE CSGFer. 

## Peer-reviewed pulications

1. *Advanced measurement techniques in quantum Monte Carlo: The permutation matrix representation approach*  
   **N. Ezzell**, I. Hen  
   *Comput. Phys. Commun.* (2026)   
   [[Paper](https://www.sciencedirect.com/science/article/abs/pii/S0010465526000019?via%3Dihub)] [[arXiv](https://arxiv.org/abs/2504.07295)] [[Zenodo](https://zenodo.org/records/17786518)] [[GitHub](https://github.com/naezzell/advmeaPMRQMC)] [[LinkedIn](https://www.linkedin.com/posts/nic96_advanced-measurement-techniques-in-quantum-share-7420276559539884032-lRS5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRCQboBE0jtjAHsyDqBOvhgI5cWMOSGuPc)]    
   <span style="color: blue;">Commentary:</span> You can use quantum Monte Carlo to estimate the thermal expectation value of any operator. Our justifiation relies on an improved group-theoretic definition of the permutation matrix representation we propose.
   

2. *A universal black-box quantum Monte Carlo approach to quantum phase transitions*  
   **N. Ezzell**, L. Barash, I. Hen  
   *npj Comput. Mater.* (2025)    
   [[Paper](https://www.nature.com/articles/s41524-025-01891-0)] [[arXiv](https://arxiv.org/abs/2408.03924)] [[Zenodo](https://zenodo.org/records/17786518)] [[GitHub](https://github.com/naezzell/advmeaPMRQMC)] [[LinkedIn](https://www.linkedin.com/posts/nic96_a-universal-black-box-quantum-monte-carlo-share-7417024217218715648-y3yK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRCQboBE0jtjAHsyDqBOvhgI5cWMOSGuPc)]    
   <span style="color: blue;">Commentary:</span> You can detect phase boundaries in quantum systems without system-specific knowledge using our black box approach. In our demonstrations, it even worked on a toy random model with 100 spins, so try out our open source code on your exotic models!

3. *Dynamical simulation via quantum machine learning with provable generalization*  
   J. Gibbs, Z. Holmes, M. C. Caro, **N. Ezzell**, H.-Y. Huang, L. Cincio, A. T. Sornborger, P. J. Coles  
   *Phys. Rev. Research* **6**, 013241 (2024).    
   [[Paper](https://doi.org/10.1103/PhysRevResearch.6.013241)] [[arXiv](https://arxiv.org/abs/2204.10269)]    
   <span style="color: blue;">Commentary:</span> You can beat Trotterization methods for time evolution using quantum machine learning. This method only requires preparing and learning on product states but it can still correctly time-evolve highly entangled states!

4. *Dynamical decoupling for superconducting qubits: a performance survey*  
   **N. Ezzell**, B. Pokharel, L. Tewala, G. Quiroz, D. A. Lidar  
   *Phys. Rev. Applied* **20**, 064027 (2023)  
   [[Paper](https://doi.org/10.1103/PhysRevApplied.20.064027)] [[arXiv](https://arxiv.org/abs/2207.03670)] [[Zenodo](https://zenodo.org/records/7884641)] [[GitHub](https://github.com/naezzell/edd/tree/v2.0.0)]    
   <span style="color: blue;">Commentary:</span> You can protect qubits from noise with dynamical decoupling, but the best strategy doesn't give a damn about your theory. Simple sequences with long idle will do you well. Modern quantum (NISQ) devices are unreliable---so compare data from different jobs with utmost caution!

5. *Quantum mixed state compiling*  
   **N. Ezzell**, E. M. Ball, A. U. Siddiqui, M. M. Wilde, A. T. Sornborger, P. J. Coles, Z. Holmes  
   *Quantum Sci. Technol.* **8**, 035001 (2023)  
   [[Paper](https://iopscience.iop.org/article/10.1088/2058-9565/acc4e3f)] [[arXiv](https://arxiv.org/abs/2209.00528)] [[Zenodo](https://zenodo.org/records/7039676)] [[GitHub](https://github.com/naezzell/qmsc/tree/v1.0.01)] [[DOECSGF23 Talk](https://www.krellinst.org/csgf/conf/2023/video/ezzell2019)]    
   <span style="color: blue;">Commentary:</span> You can "learn a quantum state" by finding a quantum circuit which prepares a low-rank approximation of it that can be used for downstream applications. Empirically, this sense of learning requires fewer copies of the quantum state than quantum state tomography.

6. *Out-of-distribution generalization for learning quantum dynamics*  
   M. C. Caro, H.-Y. Huang, **N. Ezzell**, J. Gibbs, A. T. Sornborger, L. Cincio, P. J. Coles, Z. Holmes  
   *Nat. Commun.* **14**, 3751 (2023)  
   [[Paper](https://doi.org/10.1038/s41467-023-39495-0)]

7. *Modeling the early stages of phase separation in disordered elastin-like proteins*  
   Y. Zhang, V. Zai-Rose, C. J. Price, N. A. Ezzell, G. L. Bidwell, J. J. Correia, N. C. Fitzkee  
   *Biophys. J.* **114**, 1563–1578 (2018)  
   [[Paper](https://doi.org/10.1016/j.bpj.2018.02.020)]

---

## Preprints

1. *Leakage quantification and removal in an exchange only qubit*  
   **N. Ezzell**, A. Tran, K. He, S. Carr, D. Volya, R. Murray, C. Ostrove, K. Young, R. Blume-Kohout, T. Ladd  
   In preparation (2026)

2. *Inequalities, identities, and bounds for divided differences of the exponential function*  
   Q. Zeng, **N. Ezzell**, A. Babakhani, I. Hen, L. Barash  
   arXiv:2510.10724 (2025)  
   [[arXiv](https://arxiv.org/abs/2510.10724)]

3. *Detecting quantum and classical phase transitions via unsupervised machine learning of the Fisher information metric*  
   V. Kasatkin, E. Mozgunov, **N. Ezzell**, D. Lidar  
   arXiv:2408.03418 (2024)  
   [[arXiv](https://arxiv.org/abs/2408.03418)]

4. *ClassiFIM: an unsupervised method to detect phase transitions*  
   V. Kasatkin, E. Mozgunov, **N. Ezzell**, U. Mishra, I. Hen, D. Lidar  
   arXiv:2408.03323 (2024)  
   [[arXiv](https://arxiv.org/abs/2408.03323)]

5. *The quantum low-rank approximation problem*  
   **N. Ezzell**, Z. Holmes, P. J. Coles  
   arXiv:2203.00811 (2022)  
   [[arXiv](https://arxiv.org/abs/2203.00811)]
