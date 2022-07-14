function dia() {
  let hoje = new Date;
  let diasDaSemana = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
  let saida = document.getElementById("texto");
  let diaHoje = hoje.getDay();
  let ontem = diaHoje - 1;
  let amanha = diaHoje + 1;
  let data = hoje.getDate() + "/" + hoje.getMonth() + 1 + "/" + hoje.getFullYear();
  saida.innerHTML = <p>Hoje é: ${data} </p>;
  saida.innerHTML = <p>${diasDaSemana[diaHoje]}</p>;
  saida.innerHTML = <p>Amanhã será ${diasDaSemana[amanha]}</p>;
  saida.innerHTML = <p>Ontem foi ${diasDaSemana[ontem]}</p>;

}