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
/*piece.forEach(piece => piece.addEventListener('mouseover', color, false));
function color (e) {
  e.target.style.backgroundColor = '#00adb5';
}*/

// Styling the page
document.body.style.backgroundColor = '#222831';

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
let shade = 100;
// Adding functionality to buttons
const allButtons = document.getElementsByClassName('button');
for(let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function(e){
    if (e.target.id == 'clear') {
      piece.forEach(piece => piece.style.backgroundColor = '#222831');
    } else if (e.target.id == 'default') {
       piece.forEach(piece => piece.addEventListener('mouseover', color, false));
       function color (e) {
         e.target.style.backgroundColor = '#00adb5';
      }
    } else if (e.target.id == 'random') {
      piece.forEach(piece => piece.addEventListener('mouseover', color, false));
      function color (e) {
        e.target.style.backgroundColor = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1,6);
      }
    } else {
      piece.forEach(piece => piece.style.backgroundColor = 'white');
      piece.forEach(piece => piece.addEventListener('mouseover', color, false));
      function color (e) {
        e.target.style.backgroundColor = `hsl(0, 0%, ${shade}%)`;
        shade -= 10;
      }
    }
  });
}
/*document.getElementById('clear').addEventListener('click',function(){
  piece.forEach(piece => piece.style.backgroundColor = '#222831');
});
*/