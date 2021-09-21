//Exercícios de Interpretação de código:
/* //1)a)
     Matheus Nachtergaele
    Denise Fraga
    {canal: "Globo", horario: "14h"}

//2)a)
    
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    
    
        nome: "Juba", 
        idade: 3, 
        raca: "SRD"
    
    
        nome: "Jubo", 
        idade: 3, 
        raca: "SRD"
    
//2b) Copia os dados do objeto a qual ela faz referência. 

//3)a) False e undefined
//b) O primeiro console abriu o objeto pessoa e trouxe o valor booleano de backender, que é false. No segundo console.log, como altura nao foi definida, o valor é undefined, como padrão do javascript.


*/

//Exercícios de Código
/* //1)
const pessoa = {
    nome: "Danilo", 
    apelidos: ["Nilo", "Dan", "Dalilo"]
 }

 const frase=(funcao)=>console.log(`"Eu sou ${funcao.nome}, mas pode me chamar de: ${funcao.apelidos[0]}, ${funcao.apelidos[1]} ou ${funcao.apelidos[2]}`)
frase(pessoa)

//1b)
const apelidosNovos = {
    ...pessoa,
    apelidos: ["Danilinho", "Dandan", "Danilão"]
}
frase(apelidosNovos) */

//2a)
/* const pessoa1 = {
    nome: "Danilo",
    idade: 34,
    profissão: "programador"
}

const pessoa2 ={
   nome: "Douglas",
   idade: 27,
   profissão: "agricultor"
}

//2b)

 const frase=(funcao)=>console.log(`${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissão}, ${pessoa1.profissão.length}`)
frase(pessoa1) */



let carrinho = []
const fruta1 = {
    nome: "melancia",
    disponibilidade: true
    
}

const fruta2 = {
    nome: "banana",
    disponibilidade: true
    
}

const fruta3 = {
    nome: "laranja",
    disponibilidade: true
    
}

const frutas = function(compra1, compra2, compra3){
    carrinho.push (compra1)
    carrinho.push (compra2)
    carrinho.push (compra3)

    console.log(carrinho)
}

//3d)
frutas("melancia", "banana", "laranja")