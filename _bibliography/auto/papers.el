;; -*- lexical-binding: t; -*-

(TeX-add-style-hook
 "papers"
 (lambda ()
   (LaTeX-add-bibitems
    "ezzell2022quantumLow"
    "zhang2018modeling"
    "ezzell2023quantum"
    "caro2023out"
    "ezzell2023dynamical"
    "gibbs2024dynamical"
    "ezzell2025universal"
    "ezzell2026advanced"
    "kasatkin2024detecting"
    "kasatkin2024classifim"
    "zeng2025inequalities"
    "ezzell2026leakage"))
 '(or :bibtex :latex))

