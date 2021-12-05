// Requisito 3.
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
function logIn() {
  // event.preventDefault(); Comentei essa linha para testar e realmente não é necessária para atender os requisitos pedidos.
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
  // console.log('Ola, ', caracteresTextArea);
  counter.innerText = 500 - caracteresTextArea;
});
// 1-Coloquei a variável 'counter' dentro da função, pois o lint estava reclamando que ela não estava sendo chamada e deu certo.
// 2-Sem o value na linha 36 o console.log so me retornava o 'Ola', sem o número de caracteres.
// 3-Coloquei o 'counter.innerText' para somente retornar o texto e não a tag toda.
// 4-Como já tínhamos estipulado o valor máximo de 500 caracteres na tag pela propriedade 'maxlength', não precisamos fazer esse prevant default. Mas o resto do raciocínio era esse mesmo que vc colocou.
// 5-Usando o 'keypress', não sei pq quando apagamos algo na text area o contador não ia aumentando os caracteres e não passava no teste. Testei o 'keyup' e deu certo.

// alteração para keypress - evento ocorre quando a tecla retorna à posição original no teclado (i.e. quando você solta a mesma).
// const maximoCaracteres = 500;
// const caracteresTextArea = textArea.length; // tirei o value, pois estava com erro e como nao pegamos o valor em si e somente o tamanho (caracteres) acredito que deveria ser só o lenght (nao deu erro com length kkk)
// const resultadoContador = maximoCaracteres - caracteresTextarea; - teriamos que colocar em outra funçao ou na mesma para mostrar na tela?
// contador.display(e);
//   if (caracteresTextArea >= maximoCaracteres) {
//     e.preventDefault();
//   }

// Requisito 21
// Adicionei as classes 'subjects' nos checkboxs.
