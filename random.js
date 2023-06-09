const button = document.getElementById("but")
const inputResult = document.getElementById("result")


function randomNumber() {

  const min = document.getElementById("input-min").value;
  const max = document.getElementById("input-max").value;
  

  let inputMin = Math.ceil(min);
  let inputMax = Math.floor(max);

  const result =
    Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    inputResult.value = `Número sorteado: ${result}`

  
}



button.addEventListener("click",randomNumber)