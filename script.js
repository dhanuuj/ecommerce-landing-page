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

// ============================================
// FEATURE TABS (Switch Images & Highlight Active Tab)
// ============================================
 
const featureTabs = document.querySelectorAll(".feature-tab");
const featureImage = document.getElementById("feature-img");
 
// Feature images mapped to tab data-tab attribute
const featureImages = {
    "1": "https://tailwind-saas.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1920&q=75",
    "2": "https://tailwind-saas.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&w=1920&q=75",
    "3": "https://tailwind-saas.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&w=1920&q=75",
    "4": "https://tailwind-saas.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.41e61870.png&w=1920&q=75"
};
 
// Feature alt text for accessibility
const featureAlts = {
    "1": "Payroll feature screenshot",
    "2": "Expense tracking feature screenshot",
    "3": "VAT handling feature screenshot",
    "4": "Reporting feature screenshot"
};
 
// Add click event to each tab
featureTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active state from all tabs
        featureTabs.forEach(t => {
            t.classList.remove("bg-white/10", "backdrop-blur-sm", "border-2", "border-[#e5e7eb]/20");
            t.setAttribute("aria-selected", "false");
        });
 
        // Add active state to clicked tab
        tab.classList.add("bg-white/10", "backdrop-blur-sm", "border-2", "border-[#e5e7eb]/20");
        tab.setAttribute("aria-selected", "true");
 
        // Get the tab number
        const tabNumber = tab.getAttribute("data-tab");
 
        // Fade out current image
        featureImage.style.opacity = "0";
 
        // Change image after fade out
        setTimeout(() => {
            featureImage.src = featureImages[tabNumber];
            featureImage.alt = featureAlts[tabNumber];
            featureImage.style.opacity = "1";
        }, 300);
    });
});