const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019-09-15",
    area: 23000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg",
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023-10-22",
    area: 44417,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 160000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg",
  },
];

// Extract year from the dedicated date
function getDedicatedYear(dateStr) {
  return parseInt(dateStr.split(",")[0]);
}

// Display temples on the page
function displayTemples(templesToDisplay) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  templesToDisplay.forEach((temple) => {
    const section = document.createElement("section");

    section.innerHTML = `
      <h2>${temple.templeName}</h2>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(section);
  });
}

// Run once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  loading.style.display = "none";

  displayTemples(temples);

  // Filter buttons
  document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
  });

  document.getElementById("old").addEventListener("click", () => {
    const filtered = temples.filter(
      (temple) => getDedicatedYear(temple.dedicated) < 1900
    );
    displayTemples(filtered);
  });

  document.getElementById("new").addEventListener("click", () => {
    const filtered = temples.filter(
      (temple) => getDedicatedYear(temple.dedicated) > 2000
    );
    displayTemples(filtered);
  });

  document.getElementById("large").addEventListener("click", () => {
    const filtered = temples.filter((temple) => temple.area > 90000);
    displayTemples(filtered);
  });

  document.getElementById("small").addEventListener("click", () => {
    const filtered = temples.filter((temple) => temple.area < 10000);
    displayTemples(filtered);
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
