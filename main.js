const form = document.getElementById("form-atividade");
const imgAprovado =
  '<img src= "./Assets/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado =
  '<img src= "./Assets/reprovado.png" alt="Emoji chorando" />';
const atividades = [];
const notas = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  atividades.push(inputNomeAtividade.value);
  notas.push(parseFloat(inputNotaAtividade.value));

  let linha = "<tr>";
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${
    inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  linha += "</tr>";

  linhas += linha;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= 7 ? "Aprovado" : "Reprovado";
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
