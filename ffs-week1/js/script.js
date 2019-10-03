const firstLi = document.querySelectorAll("#first-ul li")[0];
const secondLI = document.querySelectorAll("#first-ul li")[1];
const firstButton = document.querySelector(".btn-1");
const secondButton = document.querySelector(".btn-2");


//first li click example - this is a comment in js
const firstLiClick = () => {
  alert("1st li");
};

const secondLiClick = () => {
  alert("2nd li");
};

const firstButtonClick = () => {
  alert("1st button");
};

const secondButtonClick = () => {
  alert("2st button");
};

firstLi.addEventListener("click", firstLiClick, false);
secondLI.addEventListener("click", secondLiClick, false);
firstButton.addEventListener("click", firstButtonClick, false);
secondButton.addEventListener("click", secondButtonClick, false);
