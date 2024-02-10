document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scaleCalculator")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const width = document.getElementById("width").value;
      const height = document.getElementById("height").value;

      // Check if width or height is empty
      if (width === "" || height === "") {
        alert("Please input a Width and Height to calculate the Result!");
        return; // Stop the function from proceeding further
      }

      const widthNum = parseInt(width, 10);
      const heightNum = parseInt(height, 10);
      const inputScale = parseInt(document.getElementById("scale").value, 10);

      // Proceed with your existing logic for calculation
      let resultHTML = '<h2 id="resultsTitle">Results (WxH)</h2>'; // Keep the title
      for (let targetScale = 1; targetScale <= 3; targetScale++) {
        const scaleFactor = inputScale / targetScale;
        const scaledWidth = Math.round(widthNum / scaleFactor);
        const scaledHeight = Math.round(heightNum / scaleFactor);
        const highlightClass = inputScale === targetScale ? "highlight" : "";
        resultHTML += `<div class="${highlightClass}">@${targetScale}x Dimensions (WxH): ${scaledWidth} x ${scaledHeight}</div>`;
      }

      const resultsDiv = document.getElementById("result");
      resultsDiv.innerHTML = resultHTML;
      resultsDiv.style.display = "block"; // Make sure the results are shown

      var resultDiv = document.getElementById("result");
      resultDiv.style.display = "block"; // Make sure to display the result div if it's hidden
      resultDiv.classList.add("result-animation"); // Add the animation class to trigger the effect

      // Optionally, remove the animation class after it's done to reset the state
      setTimeout(() => {
        resultDiv.classList.remove("result-animation");
      }, 500); // Match the duration of the animation
    });
});
