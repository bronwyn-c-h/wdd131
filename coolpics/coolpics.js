const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize(){
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
const gallery = document.querySelector(".gallery");
const modal = document.createElement("dialog");
modal.innerHTML = '<img><button class="close-viewer">X</button>';
document.body.appendChild(modal);

function showModal(event) {
  const modalImage = modal.querySelector('img')
  let image = event.target.closest("img");
  let src = image.getAttribute("src");
  let alt = image.getAttribute("alt");
  const full = src.split('-')[0] + '-full.jpeg';

  modalImage.src = full;
  modalImage.alt = alt;
  modal.showModal();
}

gallery.addEventListener("click", showModal);

document.querySelector('.close-viewer').addEventListener('click', () => modal.close());

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});