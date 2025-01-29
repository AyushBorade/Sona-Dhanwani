let lastScrollY = 0; // Keeps track of the last scroll position
const header = document.querySelector(".header"); // Selects the header element

window.addEventListener("scroll", () => {
  // Check if scrolling down
  if (window.scrollY > lastScrollY) {
    header.classList.add("hidden"); // Add the 'hidden' class to hide the header
  } else {
    header.classList.remove("hidden"); // Remove the 'hidden' class to show the header
  }
  lastScrollY = window.scrollY; // Update the last scroll position
});
