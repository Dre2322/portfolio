// darkmode-toggle.js

function toggleDarkMode() {
  const body = document.body;
  const toggleIcon = document.getElementById("darkModeToggle").querySelector("i");

  body.classList.toggle("dark-mode");

  // Update icon based on mode
  if (body.classList.contains("dark-mode")) {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  } else {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
  }

  // Save preference
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

// Load saved preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = localStorage.getItem("darkMode") === "true";
  const body = document.body;
  const toggleIcon = document.getElementById("darkModeToggle").querySelector("i");

  if (prefersDark) {
    body.classList.add("dark-mode");
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  }
});

