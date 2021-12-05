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
// Adicionei as classes 'subjects' nos checkboxs.
const form = document.querySelector('#evaluation-form');
const nameNewForm = document.querySelector('#input-name');
const surname = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelector('.family');
const subjects = document.querySelector('.subject');
const rate = document.querySelector('.rate');
const observacoes = document.querySelector('#textarea');

function replaceForm() {
  const nomeCompleto = document.querySelector('#nomeCompleto');
  nomeCompleto.innerText = `Nome: ${nameNewForm.value} ${surname.value}`;
  const newEmail = document.querySelector('#email');
  newEmail.innerText = `Email: ${emailForm.value}`;
  const casa = document.querySelector('#casa');
  casa.innerText = `Casa: ${house.value}`;
  const familia = document.querySelector('#familia');
  familia.innerText = `Família: ${family.value}`;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // FUNÇÃO DE CHECAGEM DOS CHECKBOX DAS MATERIAS
  // FUNÇÃO REPLACE
  // FUNÇÃO DE APAGAR FORM
  // ATRIBUIR ID
});
