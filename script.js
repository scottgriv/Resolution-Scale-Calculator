document.addEventListener("DOMContentLoaded", function () {
  const scaleSelect = document.getElementById("scale");
  const customScaleInput = document.getElementById("customScale");
  const resultsDiv = document.getElementById("result");

  scaleSelect.addEventListener('change', function () {
      customScaleInput.style.display = this.value === 'custom' ? 'block' : 'none';
  });

  document.getElementById("scaleCalculator").addEventListener("submit", function (e) {
      e.preventDefault();
      const width = parseInt(document.getElementById("width").value, 10);
      const height = parseInt(document.getElementById("height").value, 10);

      if (!width || !height) {
          alert("Please input a Width and Height to calculate the Result!");
          return;
      }

      let inputScale = scaleSelect.value === 'custom' ? parseFloat(customScaleInput.value) : parseFloat(scaleSelect.value);
      
      if (isNaN(inputScale) || inputScale <= 0) {
          alert("Please enter a valid scale value.");
          return;
      }

      let resultHTML = '<h2>Results (WxH)</h2>'; // Title for results
      let scales = [1, 1.5, 2, 3, 4];
      scales.push(inputScale); // Add custom scale to the list for comparison
      scales = [...new Set(scales)].sort((a, b) => a - b); // Remove duplicates and sort scales

      scales.forEach(targetScale => {
          const scaleFactor = inputScale / targetScale;
          const scaledWidth = Math.round(width / scaleFactor);
          const scaledHeight = Math.round(height / scaleFactor);
          const highlightClass = inputScale === targetScale ? "highlight" : "";
          resultHTML += `<div class="${highlightClass}">@${formatScale(targetScale)}x Dimensions (WxH): ${scaledWidth} x ${scaledHeight}</div>`;
        });

      resultsDiv.innerHTML = resultHTML;
      resultsDiv.style.display = "block";
      resultsDiv.classList.add("result-animation");

      // Optionally, remove the animation class after it's done to reset the state
      setTimeout(() => {
          resultsDiv.classList.remove("result-animation");
      }, 500); // Match the duration of the animation

      function formatScale(scale) {
        // Format the scale factor to remove unnecessary decimal places
        return scale % 1 === 0 ? scale.toString() : scale.toFixed(2).replace(/\.?0+$/, '');
    }
  });
});