
//Exercícios de interpretação de código
//1a) Ele testa se a divisao so numero por 2 deixa algum resto, ou seja, testa se o número é par
//1b) Números pares
//1c) Números ímpares

//2a) Serve para o usuário saber o preço da fruta - ao digitar o nome, vai na opcao da fruta em questão, mostrando seu preço.
//2b)  R$2.25
//2c) Será 5

//3a) Está coletando um dado número, e transformando este dado em Number para evitar erros de segmentação.
//3b) Se for número 10, a mensagem será "este número passou no teste". "Essa mensagem é secreta!!!". Se for -10, nada ocorrerá.
//3c) Haverá um erro dizendo que a mensagem nao está definida, pois a variavel mensagem, dentro do escopo do if, nao é global, e o console.log
//que está fora do if nao consegue o acesso.




//Exercícios de código

//1) a) b) e c)


/* let idade = Number(prompt("Qual é a sua idade, em anos?"))

if (idade >17) {
    console.log("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")
} */

//2)

/* let turno = (prompt("Digite o turno do dia em que estuda: M para Matutino, V para Vespertino ou N para Noturno"))

if (turno === M){
    console.log("Bom dia!")
} else if (turno === V){
    console.log ("Boa tarde!")
} else (turno === N) {
    console.log ("Boa noite!")
} */

//3)
/* let turno = (prompt("Digite o turno do dia em que estuda: M para Matutino, V para Vespertino ou N para Noturno"))
switch (turno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log ("Boa tarde!")
        break
    case 'N':
        console.log ("Boa noite!")
        break

} */

//4)

/* let generoFilme = prompt("Digite o gênero do filme a ser assistido:")
let valorIngresso = prompt("Digite o valor do ingresso")
if (generoFilme === "fantasia" && valorIngresso < 15){
    console.log("Bom filme!")
    }else {
        console.log("Escolha outro filme :(")
    } */