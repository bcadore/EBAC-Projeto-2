const form = document.getElementById("form-atividade");
const imgAprovado = `<img src= "./Assets/aprovado.png" alt="Emoji celebrando" /> `;
const imgReprovado = `<img src= "./Assets/reprovado.png" alt="Emoji chorando" /> `;


let linhas = ``;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaATividade = document.getElementById("nota-atividade");

  let linha = `<tr>`;
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaATividade.value}</td>`;
  linha += `<td>${inputNotaATividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
  linha += `</tr>`;

  linhas += linha; 

  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;

  inputNomeAtividade = ``;
  inputNotaATividade = ``;

});
