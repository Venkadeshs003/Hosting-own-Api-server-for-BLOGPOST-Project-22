// Mobile navbar toggle
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Dark mode toggle
const body = document.body;
const darkToggle = document.getElementById("darkModeToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
  }
}
