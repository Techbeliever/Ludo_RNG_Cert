# Dice Roll Logic for Ludo Game

**Overview**

This code provides a JavaScript function to simulate rolling a dice for a Ludo game. The dice in Ludo typically has 6 sides, but there's also an option to simulate a 5-sided dice. This README explains how to use these functions.

# Functions

**getRollDiceNumber(min = 1, max = 6)**
Description: This function simulates rolling a standard 6-sided dice and returns a random number between 1 and 6 (inclusive).
Parameters:
    min (optional): The minimum value (default is 1).
    max (optional): The maximum value (default is 6).
Usage Example:
    const result = await getRollDiceNumber();
    console.log(`You rolled a ${result}`);
    getRollDiceNumber(min = 1, max = 6)

**getRollDiceNumberLowerThanSix(min = 1, max = 5)**
Description: This function simulates rolling a 5-sided dice and returns a random number between 1 and 5 (inclusive).
Parameters:
    min (optional): The minimum value (default is 1).
    max (optional): The maximum value (default is 5).
Usage Example:
    const result = await getRollDiceNumberLowerThanSix();
    console.log(`You rolled a ${result}`);
    getRollDiceNumberLowerThanSix(min = 1, max = 5)