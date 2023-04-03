console.log("Start Lesson 3");

let a = 7;

if (a !== 9) {
  // console.log('Это правильно')
} else {
  // console.log('Это НЕ ВЕРНО')
}

const buttonOk = document.querySelector(".btn-age");
const inputAge = document.querySelector(".age");

buttonOk.onclick = () => {
  let num = +inputAge.value;
  if (num >= 16 && num < 60) {
    console.log("Welcome");
  } else if (num > 60) {
    console.log("Оно тебе нужно???");
  } else {
    console.log("Вийди звидси розбыйник");
  }

  switch (num) {
    case 15:
      console.log("NO");
      break;
    case 16:
      console.log("OK");
      break;
    default:
      console.log("OOOOOKKKKK");
  }
};

let b = 10;
console.log(b < 11 && b > 5);
