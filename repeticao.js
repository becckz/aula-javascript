//while
/*while (condition) {
    //código se repete enquanto a condição for true
}*/

//contagem de 1 a 5
/*
let contador = 1;

while (contador <= 5) {
    console.log("contagem:", contador)

    contador++
}

//contagem regressiva de 10 até 1

let tempo = 10;
console.log("Inciando contagem regressiva...");

while (tempo > 0) {
    console.log(`${tempo}...`);

    tempo--
}
console.log("Feliz Ano Novo!!");

//validação de senha
const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha:");
    if (tentativa === senhaCorreta) {
        console.log("Senha correta!")
    } else {
        console.log("Senha incorreta")
    }
}

//somar números até ultrapassar 100

let soma = 0;
let numero = 1;

console.log("somando números até passar 100...");

while (soma < 100) {
    soma += numero

    console.log(`${numero} soma parcial: ${soma}`);

    numero++
}

console.log(`\n precisou de ${numero - 1} números para ultrapassar 100`);
console.log("soma final:" + soma);


const numero1 = Number(prompt("qual número: "));

if (Number.isNaN(numero1)) {
    console.log("digite um número válido!")
} else {
    let multiplicador = 1;
    console.log(`tabuada do ${numero1}\n`);

    while (multiplicador <= 10) {
        const resultado = numero1 * multiplicador
        console.log(`${numero1} x ${multiplicador} = ${resultado}`)
        multiplicador++
    }
}

let x = 10;
while (x < 5) {
    console.log("isso nao vai aparecer")
}

let y = 10;
do {
    console.log("isso vai aparecer uma vez")
} while (y < 5);


//menu interativo
let opcao;
do {
    console.log("\n=======menu=======");
    console.log("1 - ver saldo")
    console.log("2 - fazer depósito")
    console.log("3 - fazer saque")
    console.log("0 - sair")
    console.log("==================\n");

    opcao = prompt("escolha uma opção:");

    if (opcao === "1") {
        console.log("se saldo é de 1000,00")
    } else if (opcao === "2") {
        console.log("depósito realizado!")
    } else if (opcao === "3") {
        console.log("saque realizado!")
    } else if (opcao == "0") {
        console.log("até logo!")
    } else {
        console.log("opção inválida")
    }
} while (opcao !== "0");

//jogo: adivinhe o número
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
//math.random 0.0.0.99999999...
// * 10 0.0 9.99999...
//math.floor 0 - 9
// + 1 0 - = 1 - 10 
let palpite;
let tentativas = 0;
console.log("adivinhe o número entre 1 e 10");

do {
    palpite = Number(prompt("seu palpite:"));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("digite um número válido")
    } else if (palpite < numeroSecreto) {
        console.log("muito baixo! tente novamente")
    } else if (palpite > numeroSecreto) {
        console.log("muito alto! tente novamente")
    } else {
        console.log(`acertouuu!! o número secreto era ${numeroSecreto}`);
        console.log(`precisou de ${tentativas} tentativas!`)
    }
} while (palpite !== numeroSecreto);


//for
console.log("contando d 1 a 10:\n")
for (let i = 1; i <= 10; i==) {
    console.log(`número: ${i}`)
}
    

//tabuada
const numero = Number(prompt("tabuada de qual número?"));
if (Number.isNaN(numero)) {
    console.log("número inválido!")
} else {
    console.log(`\n tabuada do ${numero}\n`);

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
    

//números pares (0 a 20)
console.log("números pares de 0 a 20")

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


console.log("contagem regressiva")
for (let i = 10; i >= 1; i--) {
    console.log(i)
}


const altura = 5;

for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = "";

    for (let i = 1; i <= linha; i++) {
        asteriscos += "* "
    }
    console.log(asteriscos);
}


//array (lista)
const frutas = ["maçã", "banana", "laranja", "uva"]

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

console.log(frutas.length);

// for of
for (const fruta of frutas) {
console.log(`- ${fruta}`)
}


//soma de todos os números do array
const numeros = [10, 25, 8, 42, 15, 7];
let soma = 0;
for (const num of numeros) {
    soma += num;
}
console.log(soma);

//objetos
const pessoa = {
    nome: "Rebecca",
    idade: 18,
    cidade: "São Bernardo",
    profissao: "nenhum"
}
console.log(pessoa.nome)
console.log(pessoa["idade"])


//for in
for (const chave in objeto) {

}


const aluno = {
    nome: "Maria silva",
    matricula: "20223401",
    curso: "desenvolvedor web",
    nota: 9.5
}

console.log("dados do aluno:\n");
for (const chave in aluno) {
    const valor = aluno[chave]
    console.log(`${chave}: ${valor}`)
}
*/

//estoque de produtos
const estoque = {
    "notebook": 15,
    "mouse": 50,
    "teclado": 30,
    "monitor": 8,
    "webcam": 22
}

console.log("estoque:\n")
for (const produto in estoque) {
    const quantidade = estoque[produto];
    
    if (quantidade < 10) {
        console.log(`${produto}: ${quantidade} unidades (estoque baixo)`)
    } else {
        console.log(`${produto}: ${quantidade} unidades`)
    }
}