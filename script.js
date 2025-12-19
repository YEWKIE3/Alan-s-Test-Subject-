let quoteShown = false;

const quoteBtn = document.getElementById("quoteBtn");
const explainBtn = document.getElementById("explainBtn");
const output = document.getElementById("output");

quoteBtn.onclick = function () {
  output.innerText = "Life is short and every moment matters";
  quoteShown = true;
};

explainBtn.onclick = function () {
  if (quoteShown) {
    output.innerText = "This means time is limited so live with purpose";
  } else {
    output.innerText = "Click Tell me a quote first";
  }
};
