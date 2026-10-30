// This JavaScript was generated with AI.

const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#mainNav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "Close Menu ✕";
    } else {
        menuButton.textContent = "Menu ☰";
    }
});