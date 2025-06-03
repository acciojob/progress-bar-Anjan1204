const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

function update() {
  // Update circle classes
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update progress bar width
  const activeCircles = document.querySelectorAll(".circle.active");
  const progressWidth = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  // Enable/disable buttons
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}
