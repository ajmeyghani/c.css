window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#toggle-grid-button")
    .addEventListener("click", () => {
      document.body.classList.toggle("vertical-grid");
    });
});
