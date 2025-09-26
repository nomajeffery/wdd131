const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  if (!slider) return;

  // Populate the carousel with temple images
  temples.forEach((temple) => {
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    slider.appendChild(img);
  });

  const images = slider.querySelectorAll("img");
  const radius = 300;
  const angleStep = 360 / images.length;

  // Position images in 3D circle
  images.forEach((img, i) => {
    const angle = angleStep * i;
    img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  });

  // Rotation logic
  let currentRotation = 0;
  let startX = 0;
  let isDragging = false;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX;
    const diff = touchX - startX;
    slider.style.transform = `rotateY(${currentRotation + diff / 3}deg)`;
  });

  slider.addEventListener("touchend", (e) => {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) > 30) {
      currentRotation += diff > 0 ? -angleStep : angleStep;
    }

    currentRotation = Math.round(currentRotation / angleStep) * angleStep;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `rotateY(${currentRotation}deg)`;

    slider.addEventListener(
      "transitionend",
      () => {
        slider.style.transition = "";
      },
      { once: true }
    );
  });
});
