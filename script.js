const btn = document.getElementById("boton");

btn.addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let formulaImc = weight / ((height / 100) * (height / 100));
  let imc = document.createElement("h1");

  if (formulaImc < 18.5) {
    imc.innerHTML = `Su IMC es ${formulaImc.toFixed(
      2
    )}, usted esta: Por debajo del peso`;
    imc.setAttribute("style", "background-color:green;");
    document.getElementById("tarjeta").appendChild(imc);
  } else if (formulaImc >= 18.5 && formulaImc <= 24.9) {
    imc.innerHTML = `Su IMC es ${formulaImc.toFixed(2)}, usted esta: Saludable`;
    imc.setAttribute("style", "background-color:green;");
    document.getElementById("tarjeta").appendChild(imc);
  } else if (formulaImc >= 25 && formulaImc <= 29.9) {
    imc.innerHTML = `Su IMC es ${formulaImc.toFixed(
      2
    )}, usted esta: Con sobrepeso`;
    imc.setAttribute("style", "background-color:green;");
    document.getElementById("tarjeta").appendChild(imc);
  } else if (formulaImc >= 30 && formulaImc <= 39.9) {
    imc.innerHTML = `Su IMC es ${formulaImc.toFixed(2)}, usted esta: Obeso`;
    imc.setAttribute("style", "background-color:green;");
    document.getElementById("tarjeta").appendChild(imc);
  } else if (formulaImc > 40) {
    imc.innerHTML = `Su IMC es ${formulaImc.toFixed(
      2
    )}, usted esta: Obesidad extrema o de alto riesgo`;
    imc.setAttribute("style", "background-color:green;");
    document.getElementById("tarjeta").appendChild(imc);
  } else {
    let imc = document.createElement("h1");
    imc.innerHTML = `No encontrado`;
    imc.setAttribute("style", "background-color:green;");
    document.getElementById("tarjeta").appendChild(imc);
  }
});
