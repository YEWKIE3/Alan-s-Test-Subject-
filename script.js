// Array to hold quote objects
const quotes = [
  {
    quote: "This is a test quote.",
    explanation: "This is a test explanation to make sure the button works."
  }
];

// Get references to HTML elements
const button = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const explanationText = document.getElementById("explanationText");

// Button click event to show a random quote
button.onclick = function() {
  if (quotes.length === 0) {
    quoteText.textContent = "No quotes added yet.";
    explanationText.textContent = "";
    return;
  }

  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "Quote: " + quotes[random].quote;
  explanationText.textContent = "Explanation: " + quotes[random].explanation;
};
