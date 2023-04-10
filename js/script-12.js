// let a = [4, 5, 6];
let b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(b);

for (let i = 0; i < b.length; i++) {
  // console.log(b[i]);

  let c = b[i];

  for (let k = 0; k < c.length; k++) {
    console.log(c[0]);
  }
}

let d = [1, 0, 0, 0, 0, 0];
for (let j = 0; j < d.length; j++) {
  document.querySelector(".out-1").innerHTML = d;
}
let j = 0;
document.querySelector(".btn-1").onclick = () => {
  if (j + 1 < 6) {
    d[j] = 0;
    d[j + 1] = 1;
    j = j + 1;
  }

  document.querySelector(".out-1").innerHTML = d;
};
