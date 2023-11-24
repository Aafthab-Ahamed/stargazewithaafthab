function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  const header = document.querySelector("header");
  header.style.backgroundColor = getRandomColor();
}

const logo = document.querySelector(".logo");
logo.addEventListener("click", changeBackgroundColor);