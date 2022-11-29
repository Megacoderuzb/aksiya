// let showTime = () => {
//   let now = new Date();
//   //   let hours = +prompt(`Aksiya soat nechida(24 soatlik formatda kirgazing)?`);
//   //   let minutes = +prompt(`Necha minut o'tganda?`);
//   //   let seconds = +prompt(`Necha secund o'tganda?`);

//   let txt = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
//   //   let text = `${hours - now.getHours()}:${minutes - now.getMinutes()}:${
//   //     seconds - now.getSeconds()
//   //   }`;
//   document.body.innerText = txt;
//   //   document.body.innerText = text;
// };

// showTime();
// setInterval(showTime, 1000);
let hours = +prompt(`Aksiya soat nechida(24 soatlik formatda kirgazing)?`);
let minutes = +prompt(`Necha minut o'tganda?`);
let seconds = +prompt(`Necha secund o'tganda?`);
let timeShow = () => {
  let now = new Date();

  let hour = hours - now.getHours();

  let minute = minutes - now.getMinutes();

  let second = seconds - now.getSeconds();

  // let txt = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  console.log(
    `Aksiya tugashiga ${hour} soat ${minute} daqiqa ${second} soniya qoldi!`
  );
  let text = `Aksiya tugashiga ${hour} soat ${minute} daqiqa ${second} soniya qoldi!`;
  document.body.innerText = text;
  //   document.write.querySelector("h2") = text;
};

timeShow();
setInterval(timeShow, 1000);

// let btn = document.querySelector("button");
// btn.addEventListener("click", timeShow);
