//Ativar links no Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
//_____________________________________________________________

//Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);

  if (element) {
    element.checked = true;
  }

  console.log(element);
}

parametros.forEach(ativarProduto);

//_____________________________________________________________

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");

  pergunta.setAttribute("aria-expanded", ativa);
  console.log(pergunta);
}

function eventosPerguntas(pergunta) {
  console.log(pergunta);
  pergunta.addEventListener("click", ativarPergunta);
}

console.log(perguntas);

perguntas.forEach(eventosPerguntas);
