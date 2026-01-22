// Puedes confirgurar estos casos de test a la tecnología que más te guste, yo te propongo jest
import { expect, describe, test } from "@jest/globals";
import { errorValidate } from "../src/scripts/dom.js";
import { winOrNot } from "../src/scripts/lotteryLogic.js";

describe("lottery feature tests", () => {
  test("returns win when user number equals random number", () => {
    //Gherking test
    /**
     * Scenario: Usuario gana la lotería
     * Given el usuario ingresa el número 7
     * When el sistema genera aleatoriamente el número 7
     * Then se muestra "Win"
     */

    // Arrange
    let userNum = 7;
    let expected = {
      message: "Win",
      data: {
        userNumber: userNum,
        randomNumber: 7,
      },
    };

    // Act
    let result = winOrNot(userInput);

    // Assert
    expect(typeof result.data.userNumber).toBe("number");
    expect(result).toEqual(expected);
    expect(result.data.userNumber).toEqual(expected.data.randomNumber);
    expect(result.data.message).toBe("Win");
  });

  test("returns lose when user number is different from random number", () => {
    //Gherking test
    /**
     * Scenario: Usuario pierde la lotería
     * Given el usuario ingresa el número 4
     * When el sistema genera un número aleatorio distinto, por ejemplo 2
     * Then se muestra "Lose"
     */

    // Arrange
    let userNum = 6;
    let expected = {
      message: "Lose",
      data: {
        userNumber: userNum,
        randomNumber: 7,
      },
    };

    // Act
    let result = winOrNot(userInput);

    // Assert
    expect(typeof result.data.userNumber).toBe("number");
    expect(result).toEqual(expected);
    expect(result.data.userNumber).toEqual(expected.data.randomNumber);
    expect(result.data.message).toBe("Lose");
  });

  test("returns error when input is not a number", () => {
    let userNum = isNaN;

    // Act

    winOrNot(userNum);
    errorValidate();

    //Gherking test
    /**
     * Scenario: Entrada no numérica
     * Given la entrada "Hola"
     * When el usuario intenta procesar la jugada
     * Then se muestra un mensaje de error
     */
  });

  test("returns error when number is outside valid range", () => {
    let userNum = 22;

    // Act

    winOrNot(userNum);
    errorValidate();
    //Gherking test
    /**
     * Scenario: Número fuera de rango
     * Given el usuario ingresa el número 20
     * When el sistema valida el número
     * Then se muestra un mensaje indicando que debe ser entre 1 y 10
     */
  });
});
