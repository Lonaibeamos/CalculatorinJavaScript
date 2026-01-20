# CalculatorinJavaScript


# Calculator App

A fully functional browser-based calculator built with **vanilla JavaScript**, **HTML**, and **CSS**.
This project focuses on **state management**, **user input handling**, and **robust edge-case control**, without using external libraries.

---

## Features

* Basic arithmetic operations

  * Addition (`+`)
  * Subtraction (`-`)
  * Multiplication (`x`)
  * Division (`/`)
* Chained calculations (e.g. `7 + 4 + 1`)
* Prevents invalid operations

  * No evaluation without two numbers and an operator
  * Consecutive operators use only the last operator
  * Division by zero handled safely
* Decimal support

  * Prevents multiple decimals in a single number
* Clear (`C`) button to reset the calculator
* Backspace (`⌫`) button to undo the last input
* Keyboard support
* Automatically starts a new calculation after a result is shown

---

## Keyboard Shortcuts

| Key             | Action            |
| --------------- | ----------------- |
| `0–9`           | Enter number      |
| `.`             | Decimal point     |
| `+` `-` `*` `/` | Operators         |
| `Enter`         | Equals            |
| `Backspace`     | Delete last input |
| `Escape`        | Clear calculator  |

---

## How It Works

The calculator keeps track of user input using four state variables:

* `number1` — first operand (string)
* `number2` — second operand (string)
* `op` — current operator
* `isSecond` — tracks whether the user is entering the second number
* `justCalculated` — prevents appending digits to a result

All button clicks and keyboard input are routed through a single input handler to ensure consistent behavior.

---

## Technologies Used

* HTML
* CSS
* JavaScript (ES6)

No frameworks. No libraries. Pure logic.

---

## Project Goals

This project was built to:

* Practice JavaScript fundamentals
* Understand state-driven UI logic
* Handle real-world edge cases
* Improve problem-solving and debugging skills

---
