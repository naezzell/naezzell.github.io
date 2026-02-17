window.MathJax = {
  loader: {
    // This actually enables align, pmatrix, cases, etc.
    load: ["[tex]/ams"],
  },
  tex: {
    // Keep AMS-style equation numbering
    tags: "ams",

    // Allow both $...$ and \( ... \)
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],

    // (Optional) also allow $$...$$ and \[...\]
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],

    // Ensure AMS is included in the TeX package set
    packages: { "[+]": ["ams"] },

    // “Real LaTeX-ish” convenience macros
    macros: {
      // dsfont-style: \mathds{R} -> \mathbb{R}
      mathds: ["\\mathbb{#1}", 1],

      // physics-style partial derivatives
      pdv: ["\\frac{\\partial #1}{\\partial #2}", 2],
      pddv: ["\\frac{\\partial^2 #1}{\\partial #2^2}", 2],

      // optional: total derivatives
      dv: ["\\frac{d #1}{d #2}", 2],
      ddv: ["\\frac{d^2 #1}{d #2^2}", 2],

      // optional: bra-ket helpers
      ket: ["\\left| #1 \\right\\rangle", 1],
      bra: ["\\left\\langle #1 \\right|", 1],
      braket: ["\\left\\langle #1 \\,\\middle|\\, #2 \\right\\rangle", 2],
    },
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
            .mjx-container {
              color: inherit;
            }
          `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};

