/*
controlador de fluxo

if = se
else = se não

operadores de comparacao

> maior que
< menor que

== igual de

não é obrigatorio usar o else = ele é opcional
posso colocar outros ifs pra verificar ao contrario
de forma semantica é melhor usar o else
else não coloco condiçao
ele sempre entra em acao quando o if for falso

*/


const notadoAluno = 7
const notadeCorte = 5

if (notadoAluno > notadeCorte) {
    console.log("Aluno foi aprovado");
} else {
    console.log("Aluno reprovado na nota de corte");
}