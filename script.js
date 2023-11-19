const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", sumar);

function sumar(event) {
  const n1 = parseInt(input1.value, 10);
  const n2 = parseInt(input2.value, 10);
  event.preventDefault(); //previene que se recargue la pagina y cambie URL
  const suma = n1 + n2;
  resultado.innerText = "Resultado: " + suma;
}
