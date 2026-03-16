const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".menu-close-btn");
const menu = document.getElementById("mobile-menu");


closeBtn.style.display = "none";

openBtn.addEventListener("click", () => {
    menu.classList.remove("hidden");
    openBtn.style.display = "none";
    closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
    openBtn.style.display = "flex";
    closeBtn.style.display = "none";
});