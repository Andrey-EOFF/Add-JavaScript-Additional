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

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst);