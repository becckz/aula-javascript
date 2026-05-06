//filter

/*

const people = [
    {name: "Lucas", idade: 35},
    {name: "Maria", idade: 17},
    {name: "João", idade: 18},
    {name: "Ana", idade: 22},
]


//crie um array com vários números
//use filtro para mostrar  apenas os números maiores que 50

const num = [10,55,80,20,100];

const maiores = numeroSecreto

*/
/*
//map
const novoArray = Array.map((Element) => {
    return novoValor;
});

*/
/*
const nomes = people.map((person) => {
    return person.name.toUpperCase();
});
console.log(nomes);

*/
/*
const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero)=> {
    return numero * 2;
});
console.log(dobro);

const produtos = ["mouse", "teclado", "monitor"];

const frases = produtos.map ((produto)=> {
    return `produtos: ${produto}`
})
console.log(frases);

*/
/*
const pessoas = [
    {nome: "Lucas", idade: 35},
    {nome: "Maria", idade: 17},
];

const resultado = pessoas.map((pessoa)=> {
    return {
        nome: pessoa.nome,
        maiorIdade: pessoa.idade >= 18
    };
})
console.log(resultado);

*/
/*
//use map para transformar um array de preços em preços com desconto de 10%

const precos = [100, 200, 300];

const desconto = precos.map((numero)=> {
    return numero * 0.9
});
console.log(desconto)

*/
/*
//use map para transformar: [1,2,3,4] em ["número 1, "número 2"...]
const numeros = [1, 2, 3, 4];
const resultado = numeros.map((numero) => {
    return `Número ${numero}`
});
console.log(resultado);

*/

//find

/*
const item = Array.find((Element) => {
    return condicao;
})

*/
/*
const maria = people.find((person) => {
    return person.name === "Maria"
});
*/
/*
//encontrar número
const numeros = [5,10,15,20,25];
const encontrado = numeros.find((numero) => {
    return numero > 18;
});
console.log(encontrado);

*/
/*
const usuarios = [
    {id:1, nome:"Lucas"},
    {id:2, nome:"Maria"},
    {id:3, nome:"João"}
]
const usuario = usuarios.find((u)=> {
    return u.id === 2
});
console.log(usuario);
*/
/*
//encontre o primeiro número negativo do array
const numeros = [5,8-2,10,-7];
const negativo = numeros.find((numero) => {
    return numero < 0;
});


//reduce
Array.reduce((acc, Element) => {
    return novoACC;
}, valorIncial);

*/
/*
const numeros = [10, 20, 30];

const soma = numeros.reduce((acc, numero) => {
    console.log("ACC:", acc);
    console.log("Número atual", numero);
    return acc + numero;
}, 0);
console.log(soma);

*/
/*
const totalIdade = people.reduce((acc, person) => {
    return acc + person.idade;
}, 0);
console.log(totalIdade);

*/
/*
const nomes = people.reduce((acc, person) => {
    return acc + " " + person.name;
}, "");
console.log(nomes);

*/
/*
//multiplicar números
const numeros = [2,3,4];

const multiplicação = numeros.reduce((acc, numero) => {
    return acc * numero
}, 1);
console.log(multiplicação);

*/
/*
//somar preco dos produtos
const carrinho = [
    {produto: "mouse", preco: 50},
    {produto: "teclado", preco: 100},
    {produto: "monitor", preco: 900}
];

const total = carrinho.reduce((acc, item) => {
    return acc + item.preco;
}, 0);
console.log(total);



//contar quantidade de letras
const palavras = ["oi", "javascript", "html"];

const contador = palavras.reduce((acc, palavra) => {
    return acc + palavra.length;
}, 0);
console.log(contador);



//reduce
//use reduce para descobrir: qual maior número do array
const numeros = [10, 45, 7, 99, 32];

const maior = numeros.reduce((acc, numero) => {
   if (numero > acc) {
    return numero
   }
   return acc;
}, 0);
console.log(maior);



const produtos = [
    {produto: "mouse", preco: 50},
    {produto: "teclado", preco: 200},
    {produto: "monitor", preco: 900},
    {produto: "notebook", preco: 3000}
];

const resultado = produtos.filter((produto) => {
    return produto.preco > 100;
})
.map((produto) => {
    return produto.produto;
});
console.log(resultado);



const filmes = [
    {nome:"vingadores", nota:9 },
    {nome:"batman", nota:7 },
    {nome:"dragon ball", nota:10 },
    {nome:"matrix", nota:8 },
]

const filmesBons = filmes.filter((filme) => {
    return filme.nota >= 8;
})
console.log(filmesBons)

const nomes = filmes.map((filme) => {
    return  filme.nome;
})

console.log(nomes);

const batman = filmes.find((filme) => {
    return filme.nome === "batman"; 
});

const soma = filmes.reduce((acc, filme) => {
   return  acc + filme.nota

});
console.log(soma);



//switch
switch (valor) {
    case value:

    break;

    default:
        break;
}



const dia = 3;

switch (dia) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
    default:
        console.log("Dia iválido")
        break;
}



const n1 = 10;
const n2 = 5;

const operacao = "+";

switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
        case "*":
            console.log(n1 * n2);
            break;
            case "/":
                console.log(n1 / n2);
                break;
    default:
        console.log("Operação inválida")
        break;
}



//faça um sistemas de notas

const nota = prompt("digite uma nota: a, b, c ou d");

switch (nota) {
    case "a":
        console.log("exelente")
        break;
    case "b":
        console.log("bom")
        break;
    case "c":
        console.log("regular")
        break;
    case "d":
        console.log("ruim")
        break;
    default:
    console.log("invalida")
        break;
}

*/

//crie um sistema de menu de videogame:

let opcao;
do {
    opcao = Number(prompt`
        === Menu ===
        1 - Jogar 
        2 - configurações
        3 - créditos
        4 -sair
        `);
    switch (opcao) {
    case 1:
        console.log("iniciando...")
        break;
    case 2:
        console.log("abrindo configurações...")
        break;
    case 3:
        console.log("criado por...")
        break;
    case 4:
        console.log("saindo...")
        break;
    

    default:
        console.log("opção inválida")
        break;
}


} while (opcao !== 4);
