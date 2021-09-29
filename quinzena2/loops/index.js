//Questões de Interpretação
//1)O que o código abaixo está fazendo? Qual o resultado impresso no console?
//O código está fazendo um laço de repetição enquanto o índice (i) for menor que 5. O valor impresso será 10.

//2)a) Serão impressos 19, 21, 23, 25, 27 e 30 (todos os números maiores que 18).
//b) Entries na lista ou for

//3) * ** *** ****





//Questões de Código
//1


/* let pets = []
let qtPets = Number(prompt("Quantos pets vc tem?"))
if(qtPets ===0){
    console.log("Que pena! Você pode adotar um pet!")
}

else{for (i=0; i<qtPets; i++) {
let nomesPets = prompt("Digite o nome do seu " +(i+1) +"º pet")
pets.push (nomesPets)
}
}
console.log (pets) */

//2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a)
console.log(arrayOriginal)

//b)
/* let arrayOriginal10=(array)=>{
	for (const numero of array) {
		console.log(numero/10)
	}
}
arrayOriginal10(arrayOriginal) */

//c)
let novoArray=(array)=>{
    let novoArray=[]
    	for (let i = 0; i < array.length; i++) {
		if(array[i]%2==0)	
			novoArray[i]=array[i]
	}
	console.log(novoArray) 
}
novoArray(arrayOriginal)

//d)
const geraArrayString=(arrayOriginal)=>{
	let arrayString=[];
	for (let i = 0; i < arrayOriginal.length; i++) {
		arrayString[i] = arrayOriginal[i];
		console.log("O elemento do índex "+ i +" é: "+ arrayString[i])
	}
}
geraArrayString(arrayOriginal)

//e)
const maiorMenor=(array)=>{

	let maior=0;
	let menor=Infinity;
	for (let i = 0; i < array.length; i++) {
		if (array[i]>maior) {
		maior=array[i]
		}
		if(array[i]<menor){
			menor=array[i]
		}
	}
	console.log("O maior elemento é "+maior+" e o menor é "+menor)
}
maiorMenor(arrayOriginal)