const hamburger = document.getElementById("Hamburger");
const hamburgerNavList = document.getElementById("HamburgerNavList");
const closeButton = document.getElementById("closeButton");

hamburger.addEventListener("click", () => {
    hamburgerNavList.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    hamburgerNavList.style.display = "none";
});
