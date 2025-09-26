const slider = document.getElementById('slider');

let currentRotation = 0; 
const angleStep = 72;    // 360 / 5 images
let startX = 0;
let isDragging = false;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const diff = touchX - startX;

  // Rotate slider proportionally
  slider.style.transform = `rotateY(${currentRotation + diff / 3}deg)`;
});

slider.addEventListener('touchend', (e) => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 30) {
    // Determine direction and update rotation in steps
    if (diff > 0) {
      currentRotation -= angleStep; 
    } else {
      currentRotation += angleStep; 
    }
  }
  // Snap rotation to nearest multiple of angleStep
  currentRotation = Math.round(currentRotation / angleStep) * angleStep;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `rotateY(${currentRotation}deg)`;

  
  slider.addEventListener('transitionend', () => {
    slider.style.transition = '';
  }, { once: true });
});
