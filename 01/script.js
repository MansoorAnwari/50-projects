const panel = document.querySelectorAll(".panel");

panel.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveclasses();
    panel.classList.add("active");
  });
});

function removeActiveclasses() {
  panel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
