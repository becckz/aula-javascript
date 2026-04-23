const idade = 15;
if (idade >= 18) {
    console.log("Maior de idade!");
}

if (idade >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Menor de idade!")
}

//Operadores
const a = 10;
const b = 5;

console.log("10 > 5:", a > b);
console.log("5 > 10:", b > a);

console.log("5 < 10:", a < b);
console.log("10 < 5:", b < a);

console.log("10 >= 5:", a >= b);
console.log("5 >= 10:", b >= a);

//Operador && (E / AND)
const idade1 = 20;
const temDocumento = true;
const estaNaLista = true;

if (idade1 >= 18 && temDocumento && estaNaLista) {
    console.log("Pode entrar!");
} else {
    console.log("Se lascou!!!");
}

//Operador || (OU / OR)

const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {
    console.log("Pode pagar!!")
} else {
    console.log("Não pode pagar!!")
}

const usuario = "admin";
const senha = "1234";

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado!")
}

if ((ehAdmin || ehGerente) && senhaCorreta) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado!")
}

const usuario1 = prompt("Digite nome de usuário:")
const senha1 = prompt("Digite senha:")

const acessoAdmin = (usuario1 === "admin" && senha1 === "1234");
const acessoUser = (usuario1 === "user" && senha1 === "senha123");

if (acessoAdmin && acessoUser) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso negado!")
}

const nota = 85;

if (nota >= 60) {
    console.log("Aprovado!")
} else if (nota >= 80) {
    console.log("Recuperção")
} else {
    console.log("Reprovado")
}

const temp = Number(prompt("Temperadura atual C:"));

if (Number.isNaN(temp)) {
    console.log("Temperatura inválida!")
} else if (temp < 0) {
    console.log("Abaixo de 0 C")
} else if (temp <= 15) {
    console.log("Frio");
} else if (temp <= 25) {
    console.log("Agradável")
} else if (temp <= 35) {
    console.log("Quente")
} else {
    console.log("Morte")
}

if (Number.isNaN(temp)) {

} else if (temp < 0) {
    console.log("Abaixo de 0 C")
} else if (temp >= 0 && temp <= 15) {
    console.log("Frio");
} else if (temp > 15 && temp <= 25) {
    console.log("Agradável")
} else if (temp > 25 && temp <= 35) {
    console.log("Quente")
} else {
    console.log("Morte")
}

//Semáforo
const verde = "verde"
const amarelo = "amarelo"
const vermelho = "vermelho"

const corfarol = prompt("cor do farol")

if (corfarol === verde) {
    console.log("siga em frente")
} else if (corfarol === amarelo) {
    console.log("cuidado")
} else if (corfarol === vermelho) {
    console.log("pare")
} else {
    console.log("invalido")
}

//Calculadora de IMC Validada
const peso = Number(prompt("Peso (Kg"))
const altura = Number(prompt(" Altura (m)"))

if (Number.isNaN(peso) || altura <= 0) {
    console.log("Digite apenas números!");
} else if (peso <= 0 || altura <= 0) {
    console.log("Peso e altura devem ser positivos!")
} else if (altura > 3) {
    console.log("Altura parece estar errada. Digite em metros (ex. 1.76");
} else {
    const imc = peso / (altura ** 2);
    console.log(`Seu IMC: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Abaixo do peso!");
    } else if (imc < 25) {
        console.log("Peso normal")
    } else if (imc < 30) {
        console.log("Sobrepeso")
    } else {
        console.log("Obesidade")
    }
} 