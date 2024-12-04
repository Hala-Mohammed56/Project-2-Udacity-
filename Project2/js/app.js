// Toggle the dark theme for the website
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navbar = document.getElementById("navbar");

  // Dynamically Menu
  sections.forEach((section) => {
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${section.id}">${section.id.charAt(0).toUpperCase() + section.id.slice(1)}</a>`;
    navbar.appendChild(navItem);
  });

  // Select all nav links
  const navLinks = document.querySelectorAll(".navbar a");

  // Highlight active section and link 
  const highlightSectionInView = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect(); //position of the sec
      const headerHeight = document.querySelector("header").offsetHeight;

      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        // Highlight the visible section
        sections.forEach((sec) => sec.classList.remove("your-active-class"));
        section.classList.add("your-active-class");

        // Update the active link in the navbar
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.navbar a[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  };

  // Add scroll event listener to detect the active section
  window.addEventListener("scroll", highlightSectionInView);

  // Smooth scroll 
  navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      const headerHeight = document.querySelector("header").offsetHeight;
      const offsetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// Smooth scrolling (button)
const scrollTopButton = document.getElementById("TopBtn");

// Show/hide the button 
window.onscroll = () => {
  scrollTopButton.style.display = window.scrollY > 500 ? "block" : "none";
};

// Scroll to the top 
scrollTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
