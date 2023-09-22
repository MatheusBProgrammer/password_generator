let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let hide = document.querySelector("#hide");
let tooltip = document.querySelector(".tooltip");
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_=+.?";
let novasenha = "";
sizePassword.innerHTML = sliderElement.value;

//causa a alteração de valor do sizePassword sempre que o sliderElement.value mudar
sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novasenha = pass;
  console.log(novasenha);
}
function copyPassword() {
  console.log(novasenha);
  navigator.clipboard.writeText(novasenha);
}
buttonElement.addEventListener("click", generatePassword);
password.addEventListener("click", copyPassword);
