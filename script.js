const email = document.querySelector('#email').value;
// const email2 = email.value;
console.log('Olá, ', email);
const senha = document.querySelector('#senha').value;
console.log('Olá, ', senha);
const senhaPadrao = parseInt('123456', 10);
const botaoEntrar = document.querySelector('#botaoEntrar');
function validarEmail() {
  if (email === 'tryber@teste.com') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos');
  }
}
botaoEntrar.addEventListener('click', validarEmail);

const enviarBotao = document.querySelector('#submit-btn');
console.log(enviarBotao);
const checkBox = document.querySelector('#agreement');
console.log(checkBox);
