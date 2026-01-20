"use strict";

export function renderResult(container, object) {
  const paragraph = document.createElement("p");

  paragraph.textContent = `${object.message}`;

  container.appendChild(paragraph);
}

export function renderHistory(array, container) {
  const paragraph = document.getElementById("p");

  let texto = array
    .map((object) => {
      return `Ingresado: ${object.data.userNumber} | Aleatorio: ${object.data.randomNumber} | Resultado: ${object.message}`;
    })
    .join("<br>");

  paragraph.innerHTML = texto;

  container.appendChild(paragraph);
}

export function errorValidate() {
  return `You must enter a number from 1 to 10`;
}

export function cleanScreen(container) {
  container.textContent = "";
}
