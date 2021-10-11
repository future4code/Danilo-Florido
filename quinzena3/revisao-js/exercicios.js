// EXERCÍCIO 01
function inverteArray(array) {
  const ArrayInvertido = array.map((item, indice, array) => array[array.length - indice - 1]);
  return ArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
 
  const numsPares = array.filter(item => item % 2 == 0).map(item => item * item)
  return numsPares
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
let nPares = [];
for (let i = 0; i<array.length; i++){
  if(array[i] % 2 === 0){
    nPares.push(array[i]);
  }
 }
 return nPares;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numeroMaior = array[0]
  
  
    for(let i=0 ; i < array.length ; i++){
    let numeroDaVez = array[i]
      if (numeroDaVez > numeroMaior){
        numeroMaior = numeroDaVez
      }}
 console.log (numeroMaior)     
 return numeroMaior    
}



// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    const elementos = array.length
    return elementos
  }
  


// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const respostaVF = [booleano1 && booleano2 && !booleano4,
  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return respostaVF

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const nPares = []
  let i = 0 // iniciandoIndice 
  let par = 0
   
   while(i<n){
      i++
      pares.push(par)
      par = par +2
   }
   return nPares
}



// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  let tipoTriangulo;
  a == b && b == c ? tipoTriangulo = 'Equilátero' : a == b || a == c || c == b ? tipoTriangulo = 'Isósceles' : tipoTriangulo = 'Escaleno'
  return tipoTriangulo
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  /*Não consegui fazer este exercício sozinho */
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maiorNumero
  let maiorDivisivelPorMenor
  let diferenca
  const obj=new Object()
  if (num1 > num2 && num1 % num2 == 0) {
    maiorNumero = num1
    maiorDivisivelPorMenor = true
    diferenca = num1 - num2
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
     /* "maiorNumero": maiorNumero,
      "maiorDivisivelporMenor": maiorDivisivelporMenor,
      "diferenca": diferenca*/
  } else if (num2 > num1 && num2 % num1 == 0) {
    maiorNumero = num2
    maiorDivisivelPorMenor = true
    diferenca = num2 - num1
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  } else if (num1 > num2 && num1 % num2 != 0) {
    maiorNumero = num1
    maiorDivisivelPorMenor = false
    diferenca = num1 - num2
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  } else if (num2 > num1 && num2 % num1 != 0) {
    maiorNumero = num2
    maiorDivisivelPorMenor = false
    diferenca = num2 - num1
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  }else{
    maiorNumero=num1
    maiorDivisivelPorMenor=true
    diferenca=num1-num2
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  }
  return obj
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {


  let highestNumber = -Infinity
  let lowestNumber = Infinity
  let secondhighestNumber = -Infinity
  let secondlowestNumber = Infinity

  array.filter(item => {
    if (item >= highestNumber){
      secondhighestNumber = highestNumber
      highestNumber = item
    } else if (item < highestNumber && item > secondhighestNumber) {
      secondhighestNumber = item
    }
    return(secondhighestNumber)
  })

  array.filter(item => {
    if (item <= lowestNumber){
      secondlowestNumber = lowestNumber
      lowestNumber = item
    } else if (item > lowestNumber && item < secondlowestNumber) {
      secondlowestNumber = item
    }
    return(secondlowestNumber)
  })

  const newArray = [secondhighestNumber, secondlowestNumber]
  return(newArray)
  }

// EXERCÍCIO 11
function ordenaArray(array) {
  const newArray = []
  let arrayLeft = array
  let lowestNumber = Infinity
  let arrayDiscart = array
  let arraySize = array.length

  for (let i = 0; i < arraySize; i++){
    arrayDiscart.filter(item => {

      if (item < lowestNumber) {
        lowestNumber = item
      }
      return(lowestNumber)
    })

    newArray.push(lowestNumber)

    let indexToSplice = array.indexOf(lowestNumber)
    arrayLeft.splice(indexToSplice, 1)
    arrayDiscart = arrayLeft



    console.log("lowestNumber", lowestNumber)
    console.log("newArray", newArray) // teste
    console.log("indexToSplice",indexToSplice)
    console.log("arrayLeft", arrayLeft)
    console.log("arrayDiscart", arrayDiscart)
    console.log(array)
    console.log(array.length)
    console.log(i)

    lowestNumber = Infinity
  }
 return(newArray)
}

// EXERCÍCIO 12
function filmeFavorito() {
  return filme = { nome: "O Diabo Veste Prada", 
ano: 2006,
diretor: "David Frankel",
atores: ["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]
}

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme=new Object();
  filme.nome='O Diabo Veste Prada'
  filme.ano=2006
  filme.diretor='David Frankel'
  filme.atores=['Meryl Streep',' Anne Hathaway',' Emily Blunt',' Stanley Tucci']
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
  
}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const obj=new Object()
  obj.largura=lado1;
  obj.altura=lado2
  obj.perimetro=2 * (lado1+lado2)
  obj.area=lado1*lado2
  
  return obj
  

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {...pessoa,nome:"ESTOU EM ANONIMATO"}

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maiorIdade=arrayDePessoas.filter(item=>item.idade>=18)
  return maiorIdade

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorIdade=arrayDePessoas.filter(item=>item.idade<18)
  return menorIdade

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const duasVezes=array.map(item=>item*2)
return duasVezes
//Difícilaté

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const doisS=array.map(item=>item*2).map(item=>item.toString())
  return doisS

}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const parityNumbersArray = array.map(number =>{
    if (number % 2 === 0) {
      return(`${number} é par`)
    } else {
      return(`${number} é ímpar`)
    }
  })
  return(parityNumbersArray)

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const autorizadas=pessoas.filter(item=>item.altura>=1.5).filter(item=>item.idade>14 && item.idade<60)
return autorizadas
  

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizadas=pessoas.filter(item=>item.idade<=14 || item.idade>60 ||item.altura<1.5)
  return naoAutorizadas

}

// EXERCÍCIO 19A - Não consegui resolver sozinho
function ordenaPorNome(consultasNome) {
  let ultimoPaciente = {
    nome: ""
  }
  const novoArray = []

  while (consultasNome.length > 0){
    for (paciente of consultasNome) {
      if (paciente.nome > ultimoPaciente.nome){
        ultimoPaciente = paciente
      } 
    }
    novoArray[consultasNome.length - 1] = ultimoPaciente
    consultasNome.splice(consultasNome.indexOf(ultimoPaciente), 1)
    ultimoPaciente = {nome: ""}
    console.log(consultasNome.length)
  }
  return novoArray

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (patient of consultasData) {
    patient.date = patient.dataDaConsulta.split('/')
    patient.date = new Date(patient.date[2],patient.date[1], patient.date[0])
  }

  const appointmentsByDate = []

  for (let i = 0; i < consultasData.length; i++) {
    let position = 0
    for (let y = 0; y < consultasData.length; y++){
      if (consultasData[i].date > consultasData[y].date){
        position++
      }
    }
    console.log("position", position)
    console.log(`consultasData[${i}]`, consultasData[i])

    appointmentsByDate[position] = consultasData[i]
  }

  for (patient of consultasData) {
    delete patient.date
  }

  return(appointmentsByDate)

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  const resultadoBalanca = contas.map((valor, index, array) => {
    let gastoTotal = 0
    for (compras of valor.compras) {
      gastoTotal += compras
    }
    valor.saldoTotal = valor.saldoTotal - gastoTotal
    return(valor)
  })
  return(contas)

}
