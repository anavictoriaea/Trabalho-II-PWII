function contar() {
  let cont = 100;
  while (cont < 120) {
    if (cont % 2 == 0) {
    saida.innerHTML += `<mark><strong> ${cont} </strong></mark> ->`;
    cont ++;
    } else {
      saida.innerHTML += ` ${cont} -> `;
    }
  }
}