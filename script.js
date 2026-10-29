

// Reveal elements when they enter the screen
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});


// Update the copyright year automatically
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

// Always start at the top of the page
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});