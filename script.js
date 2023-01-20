const body = document.querySelector("body");
const con1 = document.querySelector(".con1");
const con2 = document.querySelector(".con2");
const con3 = document.querySelector(".con3");
const con4 = document.querySelector(".con4");
const con5 = document.querySelector(".con5");
const con6 = document.querySelector(".con6");
const con7 = document.querySelector(".con7");
const con8 = document.querySelector(".con8");
const con9 = document.querySelector(".con9");

body.addEventListener("mouseover", () => {
  let sayi1 = Math.floor(Math.random() * 255);
  let sayi2 = Math.floor(Math.random() * 255);
  let sayi3 = Math.floor(Math.random() * 255);
  let sayi4 = Math.floor(Math.random() * 255);
  let sayi5 = Math.floor(Math.random() * 255);

  body.style.backgroundColor = `rgb(${sayi1},${sayi2},${sayi5})`;
  con1.style.backgroundColor = `rgb(${sayi2},${sayi1},${sayi3})`;
  con2.style.backgroundColor = `rgb(${sayi3},${sayi5},${sayi1})`;
  con3.style.backgroundColor = `rgb(${sayi4},${sayi3},${sayi2})`;
  con4.style.backgroundColor = `rgb(${sayi5},${sayi4},${sayi5})`;
  con5.style.backgroundColor = `rgb(${sayi5},${sayi1},${sayi4})`;
  con6.style.backgroundColor = `rgb(${sayi4},${sayi2},${sayi3})`;
  con7.style.backgroundColor = `rgb(${sayi3},${sayi5},${sayi2})`;
  con8.style.backgroundColor = `rgb(${sayi2},${sayi4},${sayi1})`;
  con9.style.backgroundColor = `rgb(${sayi1},${sayi3},${sayi4})`;
});
