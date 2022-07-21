function contar() {
  let cont = 10;
  while (cont < 30) {
    saida.innerHTML += ` ${cont} -> `;
    cont ++;
  }
  saida.innerHTML += `${cont}`;
}