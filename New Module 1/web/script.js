/*

document = avisa que estou chamando um documento do html

document.getElementById -> Trás um elemento pelo ID do HTML
document.getElementsByClassName -> Trás todos os elementos com nome da classe 
exemplo se dois textos tiver mesma classe, ele vai aplicar toda mudança setada nessas classes

document.getElementsByTagName -> Trás todos os elementos com essa TAG
document.getElementsByName -> Trás todos os elementos com esse NAME


querrySelector -> Trás o primeiro elemento, que encontrar
querrySelectorAll -> Trás todos os elementos que encontrar

*/

// obs: pra exibir na tela posso colocar o comando abaixo dentro de um log ou variavel
// pra guadar dentro da  variavel
// em seguida estarei alterando o nome do placeholder
// em seguida vou colocar um value para o input

const input = document.getElementById("main-input");
input.placeholder = "Insert Coin"
input.value = "apague pra verificar o placeholder"
console.log(input);

// obs: pegando o elemento pela classe, posso usar quantas vezes eu quiser em qualquer elemento
// na qual dentro da dom vai ficar armazenado como html collection/ conjuto de elementos
/*
O problema no seu código está na forma como você está usando o getElementsByClassName. 
Essa função retorna uma coleção de elementos com a classe especificada, não um único elemento. 
Portanto, você precisa especificar qual elemento da coleção deseja selecionar antes de definir o valor do texto.
Aqui está uma correção para o seu código:


const elements = document.getElementsByClassName('paragraph-js');
const text = elements[0];

text.innerText = "oi";

console.log(text.innerText);

*/

const text = document.getElementsByClassName('paragraph-js');
text.innerText = "oi"

console.log(text);

// obs: pegando o elemento pela tag = p/h1/button são exemplos de tag

const look = document.getElementsByTagName("h1");
console.log(look);

// chamando o elemento pelo name, opção que colocamos na tag no html
// geralmente se usa em formularios essa opçao de name

const test = document.getElementsByName("tesla");
console.log(test);

/*
const min = document.querySelector("p") // ele vai procurar a primeira tag p apenas do html
const min = document.querySelector(".paragraph-js") // ele vai procurar o elemento apenas com nome da classe que eu determinar
const min = document.querySelector("#input") // vai procurar apenas pelo id da classe que eu determinar 



procurando um botão com a classe de nome abacate,
***const min = document.querySelector("button.abacate")***
 tbm posso utilizar dessa forma pra modificar meus codigos usando o querryselecto
*/

// abaixo ele vai trazer todos os elementos que eu solicitar

const looks = document.querySelectorAll("p")
console.log(looks);