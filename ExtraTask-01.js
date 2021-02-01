// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// Метод що запитує в користувача 2 числа
// Метод що додає ці числа
// Метод що віднімає ці числа
// Метод що перемножує ці числа
// Метод що ділить ці числа
// Метод що виводить результат арефметичної операції на екран в форматі
// `Результат операції ${value}`
// цей метод запускається в кінці кожного з методів 2-5
// Метод що додає в калькулятор новий функціонал
// (Приймає аргументом колбек в якому описаний новий метод)
// Передати в метод №7 колбек ф-ю що підносить числа в степінь
// Написати всі методи і перевірити чи вони працюють

const numbersDegree = function () {
  this.result = this.num1 ** this.num2;
};

class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }
  askNumbers(num1, num2) {
    return (this.num1 = num1), (this.num2 = num2);
  }

  showResult() {
    console.log(`Результат операції ${this.result}`);
  }

  numbersAddition() {
    this.result = this.num1 + this.num2;
    this.showResult();
  }

  numbersSubtraction() {
    this.result = this.num1 - this.num2;
    this.showResult();
  }

  numbersMultiplication() {
    this.result = this.num1 * this.num2;
    this.showResult();
  }

  numbersDivision() {
    this.result = this.num1 / this.num2;
    this.showResult();
  }

  addFuncional(newFunc) {
    newFunc.call(this);
    this.showResult();
  }
}
const calc = new Calculator();
calc.askNumbers(12, 10);
calc.numbersAddition();
calc.numbersSubtraction();
calc.numbersMultiplication();
calc.numbersDivision();
calc.addFuncional(numbersDegree);
