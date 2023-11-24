const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const navBar = document.getElementsByClassName("navbar-links")[0];

toggleBar.addEventListener("click", () => {
  navBar.style.transition = "all 0.2s ease-in-out";
  navBar.style.transform = "translateX(0%)";
});

const closeBtn = document.getElementById("close-button");
closeBtn.addEventListener("click", () => {
  navBar.style.transform = "translateX(-200%)";
  navBar.style.transition = "none";
});

