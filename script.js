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

// Requisito 20.
// 1) Deve existir um contador com o ID "counter" ok fiz uma div
// 2) O contador de caracteres deve ser atualizado conforme o conteúdo do textarea muda.
// Referência: https://www.horadecodar.com.br/2020/12/09/contador-de-caracteres-em-uma-textarea-com-javascript/
const textarea = document.querySelector('textarea');
textarea.addEventListener('keypress', (e) => {
  const maximoCaracteres = 500;
  const caracteresTextarea = textarea.value.length;

  if (caracteresTextarea >= maximoCaracteres) {
    e.preventDefault();
  }
});
