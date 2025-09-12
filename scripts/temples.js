// Footer copyright year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Last modified date
document.querySelector("#lastmodified").textContent = document.lastModified;

// Hamburger toggle
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  // Change hamburger to X when open
  if (navigation.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});