const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggleBtn.textContent = "Light";
  } else {
    body.classList.replace("dark", "light");
    toggleBtn.textContent = "Dark";
  }
});
