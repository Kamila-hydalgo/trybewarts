// Requisito 3.
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
function validarEmail(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', validarEmail);

// Requisito 18.
// Referência: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled
const enviarBotao = document.querySelector('#submit-btn');
console.log(enviarBotao);
const checkBox = document.querySelector('#agreement');
console.log(checkBox);

checkBox.addEventListener('change', (event) => {
  if (event.target.checked) {
    enviarBotao.disabled = false;
  } else {
    enviarBotao.disabled = true;
  }
}, false);
