// Theme toggle with localStorage
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

const saved = localStorage.getItem("theme");
if (saved === "light") root.classList.add("light");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem(
      "theme",
      root.classList.contains("light") ? "light" : "dark"
    );
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Active nav highlighting via data-path (relative-safe)
const normalize = (p) => (p || "").replace(/\/+$/, "/");
const current = normalize(window.location.pathname);

document.querySelectorAll("nav a[data-path]").forEach((a) => {
  const target = normalize(a.getAttribute("data-path"));
  if (!target) return;
  if (current.endsWith(target)) a.classList.add("active");
});
