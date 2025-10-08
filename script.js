// Estrutura de dados JSON com informações da aula
const aula = {
  local: "Sala 204 - Bloco B",
  horario: "13h às 15h",
  notaMedia: 8.5,
  frequencia: "92%",
  dataProva: "15/10/2025"
};

// Seleciona o componente no HTML
const card = document.getElementById("info-aula");

// Cria dinamicamente o conteúdo do cartão
card.innerHTML = `
  <h2>Informações da Aula</h2>
  <p><strong>Local:</strong> ${aula.local}</p>
  <p><strong>Horário:</strong> ${aula.horario}</p>
  <p><strong>Nota média:</strong> ${aula.notaMedia}</p>
  <p><strong>Frequência:</strong> ${aula.frequencia}</p>
  <p><strong>Data da prova:</strong> ${aula.dataProva}</p>
`;

// Evento opcional para interação
card.addEventListener("click", () => {
  alert(`Prova marcada para ${aula.dataProva}!`);
});
