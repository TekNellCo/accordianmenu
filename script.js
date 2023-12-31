document.addEventListener("click", (e) => {
  const dropDown = e.target.matches(".dropdown");
  const question = e.target.matches(".question");
  const dropDownAll = document.querySelectorAll(".dropdown");

  let currentDropdown;

  if (dropDown || question) {
    currentDropdown = e.target.closest(".dropdown");
    currentDropdown.classList.toggle("active");

    dropDownAll.forEach((drop) => {
      if (currentDropdown !== drop) {
        drop.classList.remove("active");
      }
    });
  }
});
