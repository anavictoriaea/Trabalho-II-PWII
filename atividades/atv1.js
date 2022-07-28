function media(){
  let nome = document.m.nome.value;
  let s1 = parseFloat(document.m.s1.value);
  let s2 = parseFloat(document.m.s2.value);

  if (s1 <= 0.0 | s2 <= 0.0){
    alert("Digite os dados corretamente.")
  } else {
    let med = (s1 + s2) / 2;
    document.getElementById("mostrar").textContent = "Funcionário: " + nome + ". Média salarial: $" + med;
  }
}