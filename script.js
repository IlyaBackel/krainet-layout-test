const sliderRange = document.getElementById("sliderRange");
const afterImage = document.getElementById("afterImg");
const percentLabel = document.getElementById("percentLabel");

function updateComparison(value) {
  let percent = parseFloat(value);
  if (isNaN(percent)) percent = 50;
  percent = Math.min(100, Math.max(0, percent));

  const rightClip = 100 - percent + "%";
  afterImage.style.clipPath = `inset(0 ${rightClip} 0 0)`;
}

sliderRange.addEventListener("input", function (e) {
  updateComparison(e.target.value);
});