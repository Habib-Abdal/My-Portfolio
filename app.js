//   //hamburger animation
const menu_btn = document.querySelector(".hamburger");
const menu_menu = document.querySelector(".mob-nav");
const menu_items = document.querySelectorAll(".mob-nav a"); // Assuming your menu items are anchor tags

// Function to close the menu
function closeMenu() {
  menu_btn.classList.remove("active");
  menu_menu.classList.remove("active");
}

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("active");
  menu_menu.classList.toggle("active");
});

// Add event listeners to each menu item to close the menu when clicked
menu_items.forEach(function (item) {
  item.addEventListener("click", closeMenu);
});

// SMOOTH SCROLLING ANIAMTION USINB JS
ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".left-hero", {
  delay: 300,
  origin: "left",
});
ScrollReveal().reveal(".center-hero", { origin: "bottom" });
ScrollReveal().reveal(".right-hero", {
  origin: "top",
  distance: "60px",
});

ScrollReveal().reveal(".service-part, .latest-news, .footer", {
  origin: "bottom",
});
// Creating active option for each portfolio-meu option

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  const portfolioItems = document.querySelectorAll(".design");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = link.getAttribute("data-target");

      // Remove 'active' class from all links
      menuLinks.forEach((item) => {
        item.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      link.classList.add("active");

      // Show or hide portfolio items based on the target
      portfolioItems.forEach((item) => {
        if (target === "all" || item.classList.contains(target)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
