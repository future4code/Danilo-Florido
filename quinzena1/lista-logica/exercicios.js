// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let altura = prompt("Digite a altura do retângulo:")
  let largura = prompt("Digite a largura do retângulo:")
  let area = altura * largura
  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = prompt("Digite o ano atual:")
  let anoNascimento = prompt("Digite o ano do seu nascimento:")
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  let peso = prompt("Digite seu peso, em quilos:")
  let altura = prompt("Digite sua altura, em metros:")
  let IMC = peso / (altura * altura)
  console.log (IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome:")
  let idade = prompt("Digite sua idade, em anos:")
  let email = prompt("Digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt ("Digite sua 1ª cor favorita:")
  let cor2 = prompt("Digite sua 2ª cor favorita:")
  let cor3 = prompt("Digite sua 3ª cor favorita:")
  let cores = []
  cores.push(cor1)
  cores.push(cor2)
  cores.push(cor3)
  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let frase = prompt("Digite uma frase interessante:")
  console.log(frase.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoEspetaculo = prompt("Digite o custo do espetáculo:")
  let ingresso = prompt("Digite o valor dos ingressos:")
  let coberturaCusto = custoEspetaculo/ingresso
  console.log(coberturaCusto)
}

// Exercício 8
function checaStringsMesmoTamanho() {
 let string1 = prompt("Digite a primeira string:")
 let string2 = prompt("Digite a segunda string:")
 let comparacao = string1.length == string2.length
 console.log(comparacao)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let frase1 = prompt("Digite uma string:")
  let frase2 = prompt("Digite uma outra string:")
  let compara = frase1.toUpperCase() == frase2.toUpperCase()
  console.log(compara)
}

// Exercício 10
function checaRenovacaoRG() {
  let anoHoje = prompt("Digite o ano atual:")
  let dataNascimento = prompt("Digite o ano do seu nascimento:")
  let dataRG = prompt("Digite o ano que o seu RG foi emitido:")
  let idade = anoHoje - dataNascimento
  let ritmoRenovar = anoHoje - dataRG
  let ritmo5 = ritmoRenovar >=5
  let ritmo10 = ritmoRenovar >=10
  let ritmo15 = ritmoRenovar >=15
  let renovacao = (idade <=20&&ritmo5==true || idade >=20 && idade <=50 && ritmo10==true || idade >50 && ritmo15==true)
  console.log(renovacao)
}

// Exercício 11
function checaAnoBissexto() {
  let ano=prompt("Digite um ano:")
  let multiplo400 = ano % 400 == 0
  let multiplo4 = ano % 4 == 0 && ano % 100 != 0
  let anoBissexto = multiplo400 || multiplo4
  let anoNaoBissexto = anoBissexto != anoBissexto
  console.log(anoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let idade=prompt("Você tem mais de 18 anos?")
  let ensMedio=prompt("Você possui ensino médio completo?")
  let dispon=prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(idade=="sim" && ensMedio=="sim" && dispon=="sim")
}