const backPhoto = document.querySelector("#photos > div :nth-child(1)");
const middlePhoto = document.querySelector("#photos > div :nth-child(2)");
const frontPhoto = document.querySelector("#photos > div :nth-child(3)");
// console.log(backPhoto);
// console.log(middlePhoto);
// console.log(frontPhoto);

// backPhoto.classList.add("back-position");
// middlePhoto.classList.add("middle-position");
// frontPhoto.classList.add("front-position");

// Rotate the three classes across the three elements
(function initRotatingPositions() {
  const positions = ["front-position", "middle-position", "back-position"];
  const elems = [backPhoto, middlePhoto, frontPhoto].filter(Boolean);

  if (elems.length < 3) {
    console.warn("Expected 3 elements inside #photos > div");
    return;
  }

  // Ensure smooth transitions
  elems.forEach(el => el.classList.add("anim-photo"));

  // Apply current mapping: elems[i] gets positions[i]
  function applyPositions() {
    elems.forEach((el, i) => {
      positions.forEach(cls => el.classList.remove(cls));
      el.classList.add(positions[i]);
    });
  }

  // Rotate mapping: last element moves to the front
  function next() {
    positions.unshift(positions.pop());
    applyPositions();
  }

  // Initial state and auto-rotate
  applyPositions();
  setInterval(next, 4000);
})();



