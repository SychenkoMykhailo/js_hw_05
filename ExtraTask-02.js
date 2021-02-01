// Створити класи Library та Book
// 1. Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:
// Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає.
// Якщо книга вже є показує повідомлення що книга вже куплена
// Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

// 2. Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// author
// title
// price
// totalPages
// currentPage
// Також цей клас буде мати такі методи:
// Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати
// деструктуризацію обєкта
class Book {
  constructor(book) {
    this.author = book.author;
    this.title = book.title;
    this.price = book.price;
    this.totalPages = book.totalPages;
    this.currentPage = 0;
    this.finished = false;
  }

  read(pages) {
    this.currentPage = pages;
    if (this.currentPage === this.totalPages) {
      this.finished = true;
    }
  }

  getBookProgres() {
    console.log(`Прогресс: ${(this.currentPage / this.totalPages) * 100}%`);
  }

  setBookProgres() {
    console.log(`Вы прочитали: ${this.currentPage} страниц`);
  }
}
const WarAndPeace = new Book({
  author: "Lev Tolstoy",
  title: "War and Peace",
  price: 350,
  totalPages: 1300,
});

const AnnaCorenina = new Book({
  author: "Lev Tolstoy",
  title: "Anna Corenina",
  price: 400,
  totalPages: 864,
});

const ThreeComrads = new Book({
  author: "Erikh Maria Remark",
  title: "Three Comrads",
  price: 250,
  totalPages: 512,
});

const Financist = new Book({
  author: "Theodor Drizer",
  title: "Financist",
  price: 200,
  totalPages: 608,
});

class library {
  constructor() {
    this.books = [];
    this.favorite = [];
    this.finished = [];
  }

  buy(book) {
    if (!this.books.includes(book)) {
      this.books.push(book);
    } else {
      console.log(`Book "${book}" was already bought`);
    }
  }

  sell(book) {
    const i = this.books.indexOf(book);
    this.books.splice(i, 1);
  }

  addToFavourite(book) {
    this.favorite.push(book);
  }

  removeFromFavourite(book) {
    const i = this.favorite.indexOf(book);
    this.favorite.splice(i, 1);
  }

  getFavouriteBooks() {
    console.log(`У вас ${this.favorite.length} любимых книг`);
  }

  getfinishedBooks() {
    this.books.forEach((book) => {
      if (book.finished) {
        this.finished.push(book.title);
      }
    });
    console.log(this.finished);
  }

  totalCost() {
    let totalPrice = this.books.reduce((total, book) => {
      total += book.price;
      return total;
    }, 0);
    console.log(totalPrice);
  }
}
const CityLibrary = new library();
CityLibrary.buy(AnnaCorenina);
CityLibrary.buy(WarAndPeace);
CityLibrary.buy(ThreeComrads);
CityLibrary.buy(Financist);
AnnaCorenina.read(400);
ThreeComrads.read(300);
CityLibrary.sell(ThreeComrads);
Financist.read(608);
CityLibrary.getfinishedBooks();
CityLibrary.totalCost();
CityLibrary.addToFavourite(WarAndPeace);
CityLibrary.getFavouriteBooks();
CityLibrary.removeFromFavourite(WarAndPeace);
CityLibrary.getFavouriteBooks();
