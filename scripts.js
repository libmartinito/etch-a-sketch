// Styling the page
document.body.style.backgroundColor = '#222831';

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
const divPiece = document.createElement('div');
divPiece.className = 'divpiece';
divPiece.style.backgroundColor = '#222831';
divPiece.style.width = "calc(" + divWidth + "%)";
divPiece.style.height = "calc(" + divWidth + "%)";
container.appendChild(divPiece);
for (let i = 0; i <= number * number - 2; i++) {
  const divClone = divPiece.cloneNode(true);
  container.appendChild(divClone);
}

// Adding buttons
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.flexFlow = 'row wrap';
buttonContainer.style.justifyContent = 'space-around';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.width = '40vw';
buttonContainer.style.height  = '100px';
buttonContainer.style.margin = '0 auto';

const buttons = ["Default", "Random", "Shader", "Clear"];
for (let i = 0; i < buttons.length; i++) {
  const button = document.createElement("button");
  button.id = buttons[i].toLowerCase();
  button.className = 'button';
  button.innerText = buttons[i];
  button.style.fontWeight = 'bold';
  button.style.padding = '5px 20px';
  button.style.border = 'none';
  button.style.backgroundColor = '#393e46';
  button.style.color = '#eeeeee';
  button.style.borderRadius = '2px';
  buttonContainer.appendChild(button);
}
document.body.insertBefore(buttonContainer,document.querySelector('script'));

// Main function of the program
// adding button functinality
document.querySelectorAll('.button').forEach(button => button.addEventListener('click', purposeChange, false));
// adding a mouseover event to all div pieces
const piece = document.querySelectorAll('.container div');
piece.forEach(piece => piece.addEventListener('mouseover', colorChange, false));

// clearing or changing the current purpose of the program
// default = changes the color of a div when a mouse pointer passes over it to default
// random = changes the color randomly
// shader = lightens or darkens the color

let purpose = 'default'

function purposeChange (e) {
  if (e.target.id == 'clear') {
    piece.forEach(piece => piece.style.backgroundColor = '#222831');
  } else if (e.target.id == 'default') {
    purpose = 'default';
  } else if (e.target.id == 'random') {
    purpose = 'random';
  } else if (e.target.id == 'shader') {
    purpose = 'shader';
  }
}

function colorChange (e) {
  if (purpose == 'default') {
    e.target.style.backgroundColor = '#00adb5';
  } else if (purpose == 'random') {
    let random = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1,6);
    e.target.style.backgroundColor = random;
  } else if (purpose == 'shader') {
    let bgColor = e.target.style.backgroundColor;
    let bgHex = getHexColor(bgColor);
    let darkerColor = shadeColor(bgHex,-10);
    e.target.style.backgroundColor = darkerColor;
  }
}

// helper functions for shader

// converting color from rgb/a to hex
function getHexColor (color) {
  // if color is already in hex, return it
  if (color.indexOf('#') != -1) return color;
  // isolate R, G, B
  color = color
              .replace("rgba", "")
              .replace("rgb", "")
              .replace("(", "")
              .replace(")", "");
  color = color.split(","); // get Array ["R","G","B"]
  return "#" 
          + ('0' + parseInt(color[0], 10).toString(16)).slice(-2)
          + ('0' + parseInt(color[1], 10).toString(16)).slice(-2)
          + ('0' + parseInt(color[2], 10).toString(16)).slice(-2);
}

// lightening or darkening a color
function shadeColor (color, percent) {
  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255) ? R : 255;
  G = (G<255) ? G : 255;
  B = (B<255) ? B : 255;

  let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return '#'+RR+GG+BB;
}




