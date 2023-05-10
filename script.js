const Wreper = document.querySelector(".wreper");
const LoginLink = document.querySelector(".login-link");
const RegistrasiLink = document.querySelector(".register-link");

RegistrasiLink.addEventListener('click', ()=> {
  Wreper.classList.add('active');
});
LoginLink.addEventListener('click', ()=> {
  Wreper.classList.remove('active');
});