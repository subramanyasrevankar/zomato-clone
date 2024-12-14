// script.js

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("main input");

    // Placeholder animation for the search input field
    const placeholderText = [
        "Search for restaurants...",
        "Search for cuisines...",
        "Search for dishes..."
    ];
    let textIndex = 0;

    setInterval(() => {
        inputField.setAttribute("placeholder", placeholderText[textIndex]);
        textIndex = (textIndex + 1) % placeholderText.length;
    }, 3000);

    // Header scroll animation
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }
        lastScrollY = window.scrollY;
    });

    // Highlight footer copyright year dynamically
    const footer = document.querySelector("footer");
    footer.innerHTML = `Copyright &copy; ${new Date().getFullYear()} | All rights reserved`;

    // Add elements dynamically in the second section
    const secondSection = document.querySelector("main section:last-of-type");

    secondSection.innerHTML = `
        <h2>Why Choose Our Food Delivery?</h2>
        <p>We bring the best food from your favorite restaurants right to your door. Here are some reasons to love our service:</p>
        <ul>
            <li>Fast and reliable delivery</li>
            <li>Wide variety of cuisines</li>
            <li>Exclusive discounts and offers</li>
            <li>Easy-to-use app for seamless ordering</li>
        </ul>
    `;
});
