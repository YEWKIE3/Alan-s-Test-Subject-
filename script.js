// Scroll fade-in for sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.8;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.classList.add('visible');
        }
    });
});

// Buttons
const colorBtn = document.getElementById('colorBtn');


colorBtn.addEventListener('click', () => {
    // Random background color
    const randomBg = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    document.body.style.backgroundColor = randomBg;

    // Random text color
    const randomText = `hsl(${Math.floor(Math.random() * 360)}, 50%, 20%)`;
    document.body.style.color = randomText;
});
// Text color button
const textBtn = document.getElementById('textBtn');
textBtn.addEventListener('click', () => {
    const randomText = `hsl(${Math.floor(Math.random() * 360)}, 50%, 20%)`;
    document.body.style.color = randomText;
});

// Alert button
const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', () => {
    alert("Surprise! 🎉");
});

// Random quote button
const quoteBtn = document.getElementById('quoteBtn');
const quotes = [
    "Keep coding, keep learning!",
    "Experiment. Fail. Try again.",
    "Creativity is intelligence having fun.",
    "Web design is your playground."
];
quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
});

// Click counter button
const counterBtn = document.getElementById('counterBtn');
let count = 0;
counterBtn.addEventListener('click', () => {
    count++;
    counterBtn.textContent = `Click Me! (${count})`;
});
