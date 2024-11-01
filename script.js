const container = document.querySelector(".container");
// const num = prompt("How much size do u want it to be ");

const inpSize = document.querySelector(".inpSize");
const colorInp = document.querySelector(".colorInp");

const size = document.querySelector(".size");
const color = document.querySelector(".color");

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

const erase = document.querySelector(".erase");
erase.textContent = "Erase";

const clear = document.querySelector(".clear");
let erasing = false;

const createBox = function (x, color) {
  const box = document.createElement("div");
  box.style.display = "flex";

  for (let i = 1; i <= x; i++) {
    const div = document.createElement("div");
    const divWidth = containerWidth / x;
    const divHeight = containerHeight / x;
    div.style.border = "1px solid grey";
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;

    div.addEventListener("mouseover", function () {
      if (!erasing) {
        div.style.backgroundColor = `${color}`;
      } else {
        div.style.backgroundColor = "white";
      }
    });

    clear.addEventListener("click", function () {
      div.style.backgroundColor = "white";
    });

    box.appendChild(div);
  }

  return box;
};

let num;
let crayon;

const game = function (x, crayon) {
  container.innerHTML = "";
  for (let i = 0; i < x; i++) {
    container.appendChild(createBox(x, crayon));
  }
};

size.addEventListener("click", function () {
  // num = prompt("What size do u want it to be");
  num = +inpSize.value;

  if (num > 0 && num <= 100) {
    game(num, crayon ? crayon : "black");
  } else {
    alert("Please Enter a valid number between 1 to 100");
  }
});

color.addEventListener("click", function () {
  // crayon = prompt("What color Do u want it to be");
  crayon = colorInp.value;

  game(num, crayon);
});

erase.addEventListener("click", function () {
  if (!erasing) {
    erase.style.backgroundColor = "black";
    erasing = true;
    erase.textContent = "Erasing";
  } else {
    erase.style.backgroundColor = "#f59f00";
    erasing = false;
    erase.textContent = "Erase";
  }
});
