document.addEventListener("click", (e) => {
  const dropDown = e.target.matches(".dropdown");

  if (dropDown) {
    e.target.classList.toggle("active");
  } else console.log("doesnt work");
});
