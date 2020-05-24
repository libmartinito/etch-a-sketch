// Add a container div
const container = document.createElement('div');
container.className = 'container';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '40vw';
container.style.height = '40vw';
container.style.margin = '0 auto';
container.style.border = 'solid';
container.style.borderColor = '#eeeeee';
document.body.insertBefore(container,document.querySelector('script'));

// Add a grid based on the number input by the user
const number = prompt("How many squares per side for the grid?");
const divWidth = 1 / number * 100;
const divpiece = document.createElement('div');
divpiece.className = 'divpiece';
divpiece.style.backgroundColor = '#222831';
divpiece.style.width = "calc(" + divWidth + "%)";
divpiece.style.height = "calc(" + divWidth + "%)";
container.appendChild(divpiece);
for (let i = 0; i <= number * number - 2; i++) {
  const divClone = divpiece.cloneNode(true);
  container.appendChild(divClone);
}

// Add a hover effect for each div
const piece = document.querySelectorAll('.container div');
piece.forEach(piece => piece.addEventListener('mouseover', color, false));
function color (e) {
  e.target.style.backgroundColor = '#00adb5';
}

// Styling the page
document.body.style.backgroundColor = '#222831';

// Adding functional buttons
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.height  = '100px';
const clear = document.createElement('button');
clear.id = 'clear';
clear.innerText = 'Clear';
clear.style.fontWeight = 'bold';
clear.style.padding = '5px 20px';
clear.style.border = 'none';
clear.style.backgroundColor = '#393e46';
clear.style.color = '#eeeeee';
buttonContainer.appendChild(clear);
document.body.insertBefore(buttonContainer,document.querySelector('script'));

document.getElementById('clear').addEventListener('click',function(){
  piece.forEach(piece => piece.style.backgroundColor = '#222831');
});
