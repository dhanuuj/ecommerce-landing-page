// ============================================
// MOBILE MENU TOGGLE
// ============================================
 
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".menu-close-btn");
const menu = document.getElementById("mobile-menu");
 
// Hide close button by default
closeBtn.style.display = "none";
 
// Open mobile menu
openBtn.addEventListener("click", () => {
    menu.classList.remove("hidden");
    openBtn.style.display = "none";
    closeBtn.style.display = "flex";
});
 
// Close mobile menu
closeBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
    openBtn.style.display = "flex";
    closeBtn.style.display = "none";
});