// Exercícios de interpretação de código


/*1 - 

a -  undefined
b - null 
c - 11 
d - 3 
e - Vai modificar a posicao 2 da array, modificando o valor de 4 por 19 e neste caso imprimirá todo a array no console, 
com o valor modificando
f - 9



2 - 
Subi num onibus em Mirrocos - substituirá todas as letras A pela letra IDBCursor */

//Exercícios de código

//1 - 
/*
let nome = prompt("Qual é seu nome?")
let email = prompt("Qual é seu email?")

console.log(`O ${email} foi cadastrado com sucesso. Seja bem-vindo, ${nome}`)
*/

//2 - a)

/*let comida 
comida = ["strogonoff", "lasanha", "queijo", "pão", "pipoca"]

console.log((`Essas são as minhas comidas preferidas: \n${comida[0]+"\n"+comida[1]+"\n"+comida[2]+"\n"+comida[3]+"\n"+comida[4]}`)) */

//b)

//console.log(`Estas são minhas comidas favoritas ${comida}`)


//c) 

//const comidaUsuario = prompt("Qual a sua comida preferida?")

//comida[0+1] = comidaUsuario

//console.log(comida) */

//3

const listaDeTarefas=[]
const tarefa1=prompt("Digite a 1ª tarefa")
const tarefa2= prompt("Digite a 2ª tarefa")
const tarefa3=prompt("Digite a 3ª tarefa")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
const indice=Number(prompt("Digite o numero da tarefa realizada - 0, 1 ou 2"))
listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)