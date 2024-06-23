// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const g = "javascript";

// for (const h of g) {
//   console.log(h);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = `We are find him - it is ${clientNameToFind} `;
//     break;
//   }
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }
// let a = 5;

// let b = a;
// let c = a + b;
// let g = c;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(g);
// console.log("================================================")
// a = 17;
// b = a;
// console.log(a);
// console.log(b);

// const a = ["Mango"];

// const b = a;

// console.log(a);
// console.log(b);

// a.push("Andr");

// console.log(a);
// console.log(b);

// b.push("HHHH");

// console.log(a);
// console.log(b);

// const namge = "Mango";
// console.log(namge.split(""));
// const message = "JavaScript - це цікаво";
// console.log(message.split(" "));

// const words = ["JavaScript", "це", "цікаво"];
// const wordsCopy = words.join("=");

// console.log(wordsCopy);
// console.log(words);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// // console.log(clients.length - 1);
// // console.log(clients[3]);
// // console.log(clients.indexOf("Poly")); // 2
// // console.log(clients.indexOf("Monkong")); // -1

// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// } else {
//   console.log("dsdssdsd");
// }

// const numbers = [];

// numbers.push(1);
// console.log(numbers);
// numbers.push(2);
// console.log(numbers);
// numbers.push(3);
// console.log(numbers);
// numbers.push(4);
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const popit = numbers.pop();
// console.log(popit);

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Andri", "June"];
// console.log(clients.slice(1, 3));
// console.log(clients.slice(1));
// console.log(clients.slice());
// console.log(clients.slice(-3));

// const scores = [1, 2, 3, 4, 5];
// console.log(scores);
// const deletedScores = scores.splice(0, 3);
// console.log(scores);
// console.log(deletedScores);
// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple", "apple", "ddddd");
// console.log(colors);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// function test() {
//   console.log("ho");
// }

// test();

// function multiply(x, y, z) {
//    return x * y * z;
// }

// multiply(4, 2, 2, 4, 7);
// console.log(multiply(2, 4, 7))

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//       total *= argument;
//     }

//     return total;
//   }

//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

//   function fn() {

//     const args = Array.from(arguments);
// }

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }

//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
//   return x * y * z;
// };

// multiply(2, 2, 2);

// console.log(multiply(3, 3, 3));

// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// multiply(4, 5, 6);
// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");
//   }

//   function fnB() {
//     console.log("Лог всередині функції fnB");
//   }

//   console.log("Лог до виклику fnA");
//   fnA();
//   console.log("Лог після виклику fnA");

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book);
// console.log(book.genres);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']


// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// const name = "Генрі Сибола";
// const age = 25;
// const fr = [1, 3, 4, 5, 6];

// const user = {
//   name,
//   age,
//   fr,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// console.log(user.fr); 