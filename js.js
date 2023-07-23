"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/
// const letterA = document.querySelector(".box_a");
// const letterB = document.querySelector(".box_b");
// const letterC = document.querySelector(".box_c");
// const letterD = document.querySelector(".box_d");
// const letterE = document.querySelector(".box_e");
// const letterF = document.querySelector(".box_f");

// letterA.addEventListener("click", function () {
//   if (letterA.previousElementSibling != null) {
//     letterA.previousElementSibling.before(letterA);
//   } else if (letterA.nextElementSibling != null) {
//     letterA.nextElementSibling.after(letterA);
//   }
// });

// letterB.addEventListener("click", function () {
//   letterB.previousElementSibling.before(letterB);
// });

// letterC.addEventListener("click", function () {
//   letterC.previousElementSibling.before(letterC);
// });

// letterD.addEventListener("click", function () {
//   letterD.previousElementSibling.before(letterD);
// });

// letterE.addEventListener("click", function () {
//   letterE.previousElementSibling.before(letterE);
// });

// letterF.addEventListener("click", function () {
//   letterF.previousElementSibling.before(letterF);
// });

const letters = document.querySelectorAll(".boxes__box");
const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3");

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", function () {
    if (letters[i].previousElementSibling != null) {
      letters[i].previousElementSibling.before(letters[i]);
      audioClick.play();
    } else if (letters[i].nextElementSibling != null) {
      letters[i].nextElementSibling.after(letters[i]);
      audioClick.play();
    }
  });
}
