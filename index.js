var formSignin = document.querySelector("#signin");
var formSignup = document.querySelector("#signup");
var btnColor = document.querySelector(".btnColor");

document.querySelector("#btnSignin").addEventListener("click", () => {
  formSignin.style.left = "25px";
  formSignup.style.left = "450px";
  btnColor.style.left = "0px";
});

document.querySelector("#btnSignup").addEventListener("click", () => {
  formSignin.style.left = "-450px";
  formSignup.style.left = "25px";
  btnColor.style.left = "110px";
});

const currentTime = () => {
  const el = document.querySelector("h1");

  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  let time = `${hh}:${mm}:${ss}`;
  el.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);
