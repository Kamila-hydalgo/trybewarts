// Requisito 3.
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
function logIn() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', logIn);

// Requisito 18.
// Referência: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled
const submitButton = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

checkBox.addEventListener('change', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}, false);

// Requisito 20.
// Referência: https://www.horadecodar.com.br/2020/12/09/contador-de-caracteres-em-uma-textarea-com-javascript/
const textArea = document.querySelector('#textarea');

textArea.addEventListener('keyup', () => {
  const counter = document.querySelector('#counter');
  const caracteresTextArea = textArea.value.length;
  counter.innerText = 500 - caracteresTextArea;
});

// Requisito 21
// Referência: Agradecimento ao Colega Lucas Pimentel pelo auxílio na elaboração da sequência do desenvolvimento desse requisito.
const form = document.querySelector('#evaluation-form');
const nameNewForm = document.querySelector('#input-name');
const surname = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const house = document.querySelector('#house');
const content = document.querySelectorAll('.subject2');
const observacoes = document.querySelector('#textarea');

const nomeCompleto = document.querySelector('#nomeCompleto');
const newEmail = document.querySelector('#emailFormNovo');
const casa = document.querySelector('#casa');
const familia = document.querySelector('#familia');
const newSubject = document.querySelector('#materias');
const avaliacao = document.querySelector('#avaliacao');
const comments = document.querySelector('#comments');

// FUNÇÃO DE CHECAGEM DOS CHECKBOX DAS MATÉRIAS
const subjects = [];
function checkSubject() {
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked) {
      subjects.push(`${content[index].value}`);
    }
  }
}

function removeForm() {
  form.remove();
}

function replaceForm() {
  const getFamily = document.querySelector('input[name="family"]:checked');
  const getRate = document.querySelector('input[name="rate"]:checked');
  nomeCompleto.innerText = `Nome: ${nameNewForm.value} ${surname.value}`;
  newEmail.innerText = `Email: ${emailForm.value}`;
  casa.innerText = `Casa: ${house.value}`;
  familia.innerText = `Família: ${getFamily.value}`;
  newSubject.innerText = `Matérias: ${subjects.join(', ')}`;
  avaliacao.innerText = `Avaliação: ${getRate.value}`;
  comments.innerText = `Observações: ${observacoes.value}`;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  checkSubject();
  replaceForm();
  removeForm();
  document.querySelector('.new-form').id = 'evaluation-form';
});
