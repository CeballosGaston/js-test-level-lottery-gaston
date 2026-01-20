"use strict";

import {validate,randomNumber,winOrNot, pushToHistory} from "./lotteryLogic.js";
import { lotteryHistory } from "./history.js";
import {renderHistory,renderResult,errorValidate,cleanScreen} from "./dom.js";

const numberInput = document.getElementById("number-input");
const playButton = document.getElementById("playButton");
const historyButton = document.getElementById("historyButton");
const resultContainer = document.getElementById("result");

playButton.addEventListener("click", () => {
  try {
    if (!validate(numberInput.value)) return resultContainer.innerHTML =  errorValidate();

    let randomNum = randomNumber();

    let result = winOrNot(randomNum, Number(numberInput.value));

    pushToHistory(result, lotteryHistory);
    cleanScreen(resultContainer);
    renderResult(resultContainer, result);
  } catch (error) {
    console.error(error);
  }
});

historyButton.addEventListener("click", () => {
  try {
    renderHistory(lotteryHistory, resultContainer);
  } catch (error) {
    console.error(error);
  }
});
