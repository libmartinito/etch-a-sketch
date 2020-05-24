// Add a container div
const container = document.createElement('div');
container.className = 'container';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '25vw';
container.style.height = '25vw';
container.style.margin = '0 auto';
document.body.insertBefore(container,document.querySelector('script'));

// Add a grid based on the number input by the user
const number = prompt("How many squares per side for the grid?");
const divWidth = 1 / number * 100;
const divpiece = document.createElement('div');
divpiece.className = 'divpiece';
divpiece.style.backgroundColor = '#393e46';
divpiece.style.width = divWidth.toString() + '%';
divpiece.style.height = divWidth.toString() + '%';
container.appendChild(divpiece);
for (let i = 0; i <= number * number - 2; i++) {
  const divClone = divpiece.cloneNode(true);
  container.appendChild(divClone);
}

// Add a hover effect for each div
const piece = document.querySelectorAll('.container div');
// piece.addEventListener('mouseover', color, false);
piece.forEach(piece => piece.addEventListener('mouseover', color, false));
function color (e) {
  e.target.style.backgroundColor = '#00adb5';
}

// Styling the page
document.body.style.backgroundColor = '#222831';