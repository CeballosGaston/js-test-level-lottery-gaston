"use strict";
// import { lotteryHistory } from "./history.js";

export function validate(input) {
  if (input === null || input === undefined) return false;

  const trimmed = input.trim();
  if (trimmed === "") return false;
  const number = Number(trimmed);

  if (!Number.isInteger(number)) return false;

  return number >= 1 && number <= 10;
}

export function randomNumber() {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  return randomNum;
}

export function winOrNot(randomNum, userNum) {
  return {
    message: randomNum === userNum ? "Win" : "Lose",
    data: {
      userNumber: userNum,
      randomNumber: randomNum,
    },
  };
}

export function pushToHistory(data, array) {
  array.push(data);
}
