// Wait for 5 seconds, then switch screens
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 5000); // 5 seconds
});
