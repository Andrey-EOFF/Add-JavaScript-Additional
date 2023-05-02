let a = new Set();
a.add(1);
a.add(2);
a.add("Hello");
a.add(1);
a.add("1");
// a.clear();
// a.delete('Hello')

// console.log(a);
// console.log(a.size);
// console.log(a.has('Hello'));

for (let i of a) {
  console.log(i);
}

let arr = [1, 1, 5, 3, 6, 7, 3, 4, 6, "Hi", "Hello", 5, 5, "Hi"];

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);

console.log("Lesson-1");

let s1 = new Set();
s1.add("h");
s1.add("b");
s1.add("o");
s1.add("h");

console.log(s1);

console.log("Lesson-2");

const s2 = new Set();
const i2 = document.getElementById("i-2");
const b2 = document.getElementById("b-2");

b2.addEventListener("click", () => {
  const newItem = i2.value.trim();
  if (newItem) {
    s2.add(newItem);
    console.log(s2);
  }
});

console.log("Lesson-3");

const s3 = new Set(["foo", "bar", "baz", "gol", "gap", "2", "4", "6"]);
const i3 = document.getElementById("i-3");
const b3 = document.getElementById("b-3");

b3.addEventListener("click", () => {
  const itemToRemove = i3.value.trim();
  if (s3.has(itemToRemove)) {
    s3.delete(itemToRemove);
    console.log(s3);
  }
});
