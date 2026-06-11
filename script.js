const sliderRange = document.getElementById("sliderRange");
const afterImage = document.getElementById("afterImg");

function updateComparison(value) {
  let percent = parseFloat(value);
  if (isNaN(percent)) percent = 50;
  percent = Math.min(100, Math.max(0, percent));
  const rightClip = 100 - percent + "%";
  afterImage.style.clipPath = `inset(0 ${rightClip} 0 0)`;
}

if (sliderRange && afterImage) {
  updateComparison(sliderRange.value);
  
  let ticking = false;
  sliderRange.addEventListener("input", function (e) {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateComparison(e.target.value);
        ticking = false;
      });
      ticking = true;
    }
  });
}

window.addEventListener('load', function() {
  setTimeout(() => {
    if (typeof ymaps !== 'undefined') {
      ymaps.ready(init);
    }
  }, 100);
});

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.938631, 30.323037],
      zoom: 19,
      controls: [],
    },
    {
      suppressMapOpenBlock: true,
    },
  );

  var myPlacemark = new ymaps.Placemark(
    [59.938631, 30.323037],
    {
      hintContent: "Cat Energy",
      balloonContent: "Санкт-Петербург, Большая Конюшенная улица, 19/8",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./assets/MapPin.svg",
      iconImageSize: [80, 80],
      iconImageOffset: [-20, -50],
    },
  );

  myMap.geoObjects.add(myPlacemark);
}