const a = {
  a: 5,
  b: 2,
  c2: "Hi",
  y43: 1999,
};
a.g = "ff2";
a.b = 1;
delete a.c2;
console.log(a);
console.log(a.c2);

let k = "y43";

console.log(a[k]);

let out = "";

for (let key in a) {
  out += key + " - " + a[key] + "<br>";
}

document.querySelector(".out").innerHTML = out;

const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".btn-1");
let a1 = {
  one: 15,
  two: 16,
  five: 20,
};

btn1.onclick = function f1() {
  out1.innerHTML = a1.two;
};
