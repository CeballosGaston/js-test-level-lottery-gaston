"use strict";


import { validate, randomNumber, winOrNot, pushToHistory } from "./lotteryLogic.js";
import { lotteryHistory } from "./history.js";
import { renderHistory, renderResult, errorValidate } from "./dom.js";


const numberInput = document.getElementById("number-input")
const playButton = document.getElementById("playButton");
const historyButton = document.getElementById("historyButton");
const result = document.getElementById("result");





playButton.addEventListener("click", () =>{
try{
if (!validate(numberInput.value)) return errorValidate();

let randomNum = randomNumber();


}catch{

}



})