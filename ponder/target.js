const paragraph = document.querySelector("#intro");
paragraph.style.backgroundColor = "yellow";

const em = document.querySelector("em");
em.textContent = "USS Voyager Starship";

document.querySelector('em').style.backgroundColor = '#acbfcc';

let image = document.createElement('img');
image.setAttribute('src', 'https://bit.ly/3RfG4sY');
image.setAttribute('alt', 'starship Voyager');
let container = document.querySelector('#starship');
container.appendChild(image);

image.id = 'ship';

let img1 = document.querySelector('#ship');
img1.classList.add('rounded');
