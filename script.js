const quotes = [
  {
    quote: "And we're dying with every step we take, we're dying with every breath we make ~March to the Sea (Self Titled, 2009)",
    explanation: "From the time we're born, we're already dying. That's weird and pretty morbid to think about, but it's important to realize that we're not guaranteed the next step or even the next breath. So we have to live while we're dying."
  },
  {
    quote: "Nothing kills a man faster than his own head ~Trapdoor (Self Titled, 2009)",
    explanation: "We're the only ones standing in the way of everything we want."
  },
  {
    quote: "Please don't be afraid of what your soul is really thinking ~Isle of Flightless Birds (Self Titled, 2009)",
    explanation: "Don't be afraid if your thoughts and opinions don't align with everyone else's. Don't be afraid if you believe in something bigger than yourself."
  }
];

const button = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const explanationText = document.getElementById("explanationText");

button.onclick = function() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "Quote: " + quotes[random].quote;
  explanationText.textContent = "Explanation: " + quotes[random].explanation;
};
