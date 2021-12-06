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
console.log(emailForm);
const house = document.querySelector('#house');
// const family = document.querySelector('.family');
const subjects = document.querySelector('.subject');
// const rate = document.querySelector('.rate');
const observacoes = document.querySelector('#textarea');
const nomeCompleto = document.querySelector('#nomeCompleto');
const newEmail = document.querySelector('#emailFormNovo'); // alterei o nome do id pq aparentemente estava pegando algum outro 'email' do html
const casa = document.querySelector('#casa');
const familia = document.querySelector('#familia');
const avaliacao = document.querySelector('#avaliacao');
const comments = document.querySelector('#comments');

// FUNÇÃO DE CHECAGEM DOS CHECKBOX DAS MATERIAS
function checkbox() {

}

// FUNÇÃO DE APAGAR FORM
function removeForm() {
  form.remove();
}

function replaceForm() {
  const getFamily = document.querySelector('input[name="family"]:checked'); // funciona sem o .value
  const getRate = document.querySelector('input[name="rate"]:checked'); // funciona sem o .value
  nomeCompleto.innerText = `Nome: ${nameNewForm.value} ${surname.value}`;
  // nomeCompleto.appendChild(nomeCompleto);
  newEmail.innerText = `Email: ${emailForm.value}`;
  // newEmail.appendChild(newEmail);
  casa.innerText = `Casa: ${house.value}`;
  // casa.appendChild(casa);
  familia.innerText = `Família: ${getFamily.value}`;
  avaliacao.innerText = `Avaliação: ${getRate.value}`;
  comments.innerText = `Observações: ${observacoes.value}`;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // FUNÇÃO DE CHECAGEM DOS CHECKBOX DAS MATERIAS
  // FUNÇÃO REPLACE
  replaceForm();
  // FUNÇÃO DE APAGAR FORM
  removeForm();
  // ATRIBUIR ID
  document.querySelector('.new-form').id = 'evaluation-form'; // acessa o formulario 'novo' e muda a id para evaluation-form
});
