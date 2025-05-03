let selectElem = document.querySelector('select');
selectElem.addEventListener('change',changeTheme);

function changeTheme() {
let current = selectElem.value;

if (current == 'dark'){
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
document.querySelector('h2').style.color = '#86bde2';
logo.setAttribute('src', 'byui-logo_white.png');
logo.setAttribute('alt', 'byui logo black and white');
} else (current == 'light');{
document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';
document.querySelector('h2').style.color = '#006EB6';
}
}