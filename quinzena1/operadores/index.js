/* Exercícios lógicos
1 - 
let resultado = bool1 && bool2
console.log("a. ", resultado)
FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
TRUE

console.log("d. ", typeof resultado)
BOOLEAN

2 - 

O problema é o tipo da variável que é const. 
Mudaremos o tipo para let, sendo possível a modificação da mesma. 

3 - 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

let soma = primeiroNumero + segundoNumero

console.log(soma) */


/* Exercício de código 

1 - */

/* let idade = prompt("Digite sua idade!")
let idadeAmigo = prompt("Digite a idade do seu melhor amigo!")

const verificacao = idade > idadeAmigo

console.log (verificacao)


console.log("Sua idade é maior do que a do seu melhor amigo?", verificacao )  */

//2 - 

/*let numeroPar = prompt("Insira um numero par!")
console.log(numeroPar % 2) */

//c) Todo número par possui resto 2 ao ser dividido por 2
//d) Todo numero impar dividio por 2, no programa, tem resto 1


//3 - 
/*let idadeAnos = prompt("Quantos é sua idade, em anos?")

let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = (idadeAnos * 365) * 24

console.log("Sua idade em meses é:", idadeMeses, "Sua idade em dias é:", idadeDias, "Sua idade em horas é:", idadeHoras) */



//4 

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)


