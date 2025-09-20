// Footer data
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Windchill calculation
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

function calculateWindChill(t, s) {
  return (
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

if (temp <= 50 && speed > 3) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, speed);
} else {
  document.getElementById("windchill").textContent = "N/A";
}
