// script.js

(function () {
  const THEME_KEY = "kopi-senja-theme";
  const body = document.body;
  const toggle = document.getElementById("themeToggle");
  const yearSpan = document.getElementById("year");

  function setYear() {
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("theme-dark", isDark);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
    }
  }

  function getPreferredTheme() {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function toggleTheme() {
    const current = body.classList.contains("theme-dark") ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    window.localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  function initTheme() {
    const preferred = getPreferredTheme();
    applyTheme(preferred);
  }

  function initToggle() {
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      toggleTheme();
    });
    toggle.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleTheme();
      }
    });
  }

  initTheme();
  initToggle();
  setYear();
})();
