//1
const idade = Number(prompt("Digite sua idade:"));
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}

//2
const numero = Number(prompt("Digite um número:"));
if (numero > 0) {
    alert("Positivo");
} else {
    alert("Negativo");
}

//3
const nota = Number(prompt("Digite a nota do aluno:"));

if (nota >= 60) {
    alert("Aprovado!");
} else {
    alert("Recuperção");
}

//4
const numero1 = Number(prompt("Digite um número"));

if (numero1 > 0) {
    alert("Número é positivo");
} else if (numero1 < 0) {
    alert("Número é negativo");
} else {
    alert("Número é zero");
}

//5
const idade1 = Number(prompt("Digite sua idade:"));

if (idade1 >= 0 && idade1 <= 12) {
    alert("Criança")
} else if (idade1 <= 17 && idade1 <= 18) {
    alert("Adolescente")
} else {
    alert("Adulto")
} 

//6




//1 
const n1 = Number(prompt("Número 1:"));
const operacao = prompt("Operação (+, -, *, /):");
const n2 = Number(prompt("Número 2:"));
let resultado;
if (operacao === "+") {
    resultado = n1 + n2;
} else if (operacao === "-") {
    resultado = n1 + n2;
} else if (operacao === "*") {
    resultado = n1 + n2;
} else if (operacao === "/") {
    resultado = n1 + n2;
} else {
    alert("Operção inválida")
}

//2
const n3 = Number(prompt(""));
