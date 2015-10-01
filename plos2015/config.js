MathJax.Hub.Config({
  TeX: {
    Macros: {
      infer: ["\\dfrac{#2}{#1}", 2],
      typed: ["#1\\vdash #2 : #3", 3],
      term: ["\\mathrm{#1}", 1],
      type: ["\\mathrm{#1}", 1],
      mdiv: ["\\term{div}~#1~#2", 2],
      safediv: ["\\term{div}_{\\lbrack #3 \\rbrack}~#1~#2", 3],
      peek: ["\\term{peek}_{\\lbrack #2 \\rbrack}~#1", 2],
      eqz: ["#1 \\overset{?}{=} 0", 1],
      mlt: ["#1 \\overset{?}{<} #2", 2],
      return: ["\\term{return}~#1", 1],
      bind: ["#1 \\gg= #2", 2],
      unit: ["\\term{unit}"],
      TWord: ["\\type{Word}"],
      TNot: ["\\neg #1", 1],
      TEqZ: ["#1\\equiv\\! 0", 1],
      TLt: ["#1 < #2", 2],
      TUnit: ["\\type{Unit}"],
      TSum: ["#1 \\uplus #2", 2],
      TProd: ["#1 \\times #2", 2],
      TVector: ["\\type{Vector}~#1~#2", 2],
      Timed: ["\\type{Timed}~#1~#2", 2]
    }
  }
});

/*
  MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX;

  // place macros here.  E.g.:
  //   TEX.Macro("R","{\\bf R}");
  //   TEX.Macro("op","\\mathop{\\rm #1}",1); // a macro with 1 parameter
  TEX.Macro("infer", "\\frac{#1}{#2}", 2);
  TEX.Macro("term", "\\mathrm{#1}, 1);
  });
*/

MathJax.Ajax.loadComplete("http://yanok.github.io/plos2015/config.js");
