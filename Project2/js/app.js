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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("your-active-class");

          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add("active");
        } else {
          entry.target.classList.remove("your-active-class");
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );

  // Observe the sections
  sections.forEach((section) => observer.observe(section));

  // Smooth scroll 
  navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault(); 
      const targetSection = document.querySelector(event.target.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
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
