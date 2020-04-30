window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    macros: {
      ones: "{\\mathbf{1}}",
      reals: "{\\mathbf{R}}",
      symm: "{\\mathbf{S}}",
      null: "{\\mathop{\\bf null}}",
      ran: "{\\mathop{\\bf ran}}",
      Tr: "{\\mathop{\\bf Tr}}",
      diag: "{\\mathop{\\bf diag}}",
      card: "{\\mathop{\\bf card}}",
      rank: "{\\mathop{\\bf rank}}",
      conv: "{\\mathop{\\bf conv}}",
      prox: "{\\mathop{\\rm prox}}",
      Pr: "{\\mathop{\\bf P}}",
      dto: "{\\overset{d}{\\to}}",
      pto: "{\\overset{p}{\\to}}",
      Ex: "{\\mathop{\\bf E}}",
      Cov: "{\\mathop{\\bf Cov}}",
      unif: "{\\mathop{\\rm unif}}",
      dist: "{\\mathop{\\bf dist}}",
      maximize: "{\\mathop{\\rm maimize}}",
      argmax: "{\\mathop{\\rm argmax}}",
      minimize: "{\\mathop{\\rm minimize}}",
      argmin: "{\\mathop{\\rm argmin}}",
      subjectto: "{\\text{subject to}}",
      epi: "{\\mathop{\\bf epi}}",
      eps: "{\\epsilon}}",
      vareps: "{\\varepsilon}}",
      vol: "{\\mathop{\\bf vol}}",
      dom: "{\\mathop{\\bf dom}}",
      intr: "{\\mathop{\\bf int}}",
      sign: "{\\mathop{\\bf sign}}",
      IID: "{\\mathop{\\rm IID}}",
      bA: "{\\mathbf{A}}",
      bB: "{\\mathbf{B}}",
      bC: "{\\mathbf{C}}",
      bD: "{\\mathbf{D}}",
      bE: "{\\mathbf{E}}",
      bF: "{\\mathbf{F}}",
      bG: "{\\mathbf{G}}",
      bH: "{\\mathbf{H}}",
      bI: "{\\mathbf{I}}",
      bJ: "{\\mathbf{J}}",
      bK: "{\\mathbf{K}}",
      bL: "{\\mathbf{L}}",
      bM: "{\\mathbf{M}}",
      bN: "{\\mathbf{N}}",
      bO: "{\\mathbf{O}}",
      bP: "{\\mathbf{P}}",
      bQ: "{\\mathbf{Q}}",
      bR: "{\\mathbf{R}}",
      bS: "{\\mathbf{S}}",
      bT: "{\\mathbf{T}}",
      bU: "{\\mathbf{U}}",
      bV: "{\\mathbf{V}}",
      bW: "{\\mathbf{W}}",
      bX: "{\\mathbf{X}}",
      bY: "{\\mathbf{Y}}",
      bZ: "{\\mathbf{Z}}",
      bbA: "{\\mathbb{A}}",
      bbB: "{\\mathbb{B}}",
      bbC: "{\\mathbb{C}}",
      bbD: "{\\mathbb{D}}",
      bbE: "{\\mathbb{E}}",
      bbF: "{\\mathbb{F}}",
      bbG: "{\\mathbb{G}}",
      bbH: "{\\mathbb{H}}",
      bbI: "{\\mathbb{I}}",
      bbJ: "{\\mathbb{J}}",
      bbK: "{\\mathbb{K}}",
      bbL: "{\\mathbb{L}}",
      bbM: "{\\mathbb{M}}",
      bbN: "{\\mathbb{N}}",
      bbO: "{\\mathbb{O}}",
      bbP: "{\\mathbb{P}}",
      bbQ: "{\\mathbb{Q}}",
      bbR: "{\\mathbb{R}}",
      bbS: "{\\mathbb{S}}",
      bbT: "{\\mathbb{T}}",
      bbU: "{\\mathbb{U}}",
      bbV: "{\\mathbb{V}}",
      bbW: "{\\mathbb{W}}",
      bbX: "{\\mathbb{X}}",
      bbY: "{\\mathbb{Y}}",
      bbZ: "{\\mathbb{Z}}",
      cA: "{\\mathcal{A}}",
      cB: "{\\mathcal{B}}",
      cC: "{\\mathcal{C}}",
      cD: "{\\mathcal{D}}",
      cE: "{\\mathcal{E}}",
      cF: "{\\mathcal{F}}",
      cG: "{\\mathcal{G}}",
      cH: "{\\mathcal{H}}",
      cI: "{\\mathcal{I}}",
      cJ: "{\\mathcal{J}}",
      cK: "{\\mathcal{K}}",
      cL: "{\\mathcal{L}}",
      cM: "{\\mathcal{M}}",
      cN: "{\\mathcal{N}}",
      cO: "{\\mathcal{O}}",
      cP: "{\\mathcal{P}}",
      cQ: "{\\mathcal{Q}}",
      cR: "{\\mathcal{R}}",
      cS: "{\\mathcal{S}}",
      cT: "{\\mathcal{T}}",
      cU: "{\\mathcal{U}}",
      cV: "{\\mathcal{V}}",
      cW: "{\\mathcal{W}}",
      cX: "{\\mathcal{X}}",
      cY: "{\\mathcal{Y}}",
      cZ: "{\\mathcal{Z}}"
    }
  },
  svg: {
    fontCache: 'global'
  },
  options: {
    renderActions: {
      find: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          const text = document.createTextNode('');
          node.parentNode.replaceChild(text, node);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '']
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();