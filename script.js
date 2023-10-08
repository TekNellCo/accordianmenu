// Select the element with the class "rightcard" to add a click event handler to it
const elRightCard = document.querySelector(".rightcard");

// Optimize the page by reducing the clickable area for click events

elRightCard.addEventListener("click", (e) => {
  // Find all elements with the class "dropdown"
  const dropDownAll = document.querySelectorAll(".dropdown");

  // Find the closest "dropdown" element to the clicked element
  const currentDropdown = e.target.closest(".dropdown");

  // Collapse all "dropdown" elements except the one that was clicked (currentDropdown)
  dropDownAll.forEach((drop) => currentDropdown !== drop && drop.classList.remove("active"));

  // Expand or collapse the current "dropdown" that was clicked
  currentDropdown.classList.toggle("active");
});

// This code eliminates the need to use "data-dropdown" attributes in the index.html file
