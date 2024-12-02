// Toggle the dark theme for the website
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}


// Add active state
document.addEventListener("DOMContentLoaded", () => {
  const contentSections = document.querySelectorAll(".section");  
  const navigationLinks = document.querySelectorAll(".navbar a");

  const sectionObserver = new IntersectionObserver(
    (observedEntries) => {
      observedEntries.forEach((sectionEntry) => {
        if (sectionEntry.isIntersecting) {
          navigationLinks.forEach((menuLink) => menuLink.classList.remove("active"));

          const currentActiveLink = document.querySelector(
            `.navbar a[href="#${sectionEntry.target.id}"]`
          );
          if (currentActiveLink) currentActiveLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.5,  
    }
  );

  contentSections.forEach((contentSection) => sectionObserver.observe(contentSection));
});


// Dynamic menu
document.addEventListener("DOMContentLoaded", () => {
  const pageSections = document.querySelectorAll(".section"); 
  const navbarContainer = document.getElementById("navbar"); 

  pageSections.forEach((sectionElement) => {
    const navLinkItem = document.createElement("li"); 
    navLinkItem.innerHTML = `<a href="#${sectionElement.id}">${sectionElement.id.charAt(0).toUpperCase() + sectionElement.id.slice(1)}</a>`;
    navbarContainer.appendChild(navLinkItem);
  });
});



//smooth scrolling
const scrollTopButton = document.getElementById("TopBtn");

window.onscroll = () => {
  scrollTopButton.style.display = window.scrollY > 500 ? "block" : "none";
};

scrollTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};




