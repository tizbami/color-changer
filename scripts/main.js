

document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random color
  function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
    return `#${randomColor}`;
  }

  // Event listener for button click
  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});

