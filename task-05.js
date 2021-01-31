// Задание 5
// Напиши класс Car с указанными свойствами и методами.
// 11:29
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    // console.log(
    //   `MaxSpeed:${car.maxSpeed} Speed:${car.speed} IsOn:${car.isOn} Distance:${car.distance} Price:${car.price}`
    // );
    console.table({
      MaxSpeed: car.maxSpeed,
      Speed: car.speed,
      IsOn: car.isOn,
      Distance: car.distance,
      Price: car.price,
    });
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor(params) {
    this.maxSpeed = params.maxSpeed;
    this.price = params.price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }
  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    return (this.price = newPrice);
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    return (this.isOn = true);
  }
  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }
  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (value <= this.maxSpeed) {
      return (this.speed = value);
    }
    return (this.speed = `Так быстро(${value}км/час) не едет!`);
  }
  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed > 0) {
      return (this.speed = this.speed - value);
    }
  }
  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      return (this.distance = this.distance + hours * this.speed);
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
mustang.setPrice(9999);
console.log(mustang.getPrice());
