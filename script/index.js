const showBtn = document.getElementById("show-nav");
const closeBtn = document.getElementById("close-nav");
const navContainer = document.querySelector(".header-list");
console.log(closeBtn);
// Show menu on click event listener
showBtn.addEventListener("click", () => {
  if (!navContainer.classList.contains("show-menu")) {
    navContainer.classList.add("show-menu");
  } else {
    navContainer.classList.remove("show-menu");
  }
});

// Close Menu On Click Event Listener for Mobile View Only

closeBtn.addEventListener("click", () => {
  if (navContainer.classList.contains("show-menu")) {
    navContainer.classList.remove("show-menu");
  }
});
