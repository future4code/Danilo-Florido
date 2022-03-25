/**a) 
let myString:string="Value";

//Resposta: Uma string nao pode receber um número - erro de tipagem
/**b) 
 * 
 * 
//Resposta:
let myNumber:number|string=8

/**c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string. 
Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

//d)

enum CoresVariadas{
	AMARELO="Amarelo",
	ROXO="Roxo",
	VERMELHO="Vermelho",
	LARANJA="Laranja",
	VERDE="Verde",
	
}
type Pessoa={
	nome:String,
	idade:number,
	corFavorita:string
}
const nilo:Pessoa={
	nome:'Nilo',
	idade:34,
	corFavorita:CoresVariadas.VERMELHO
}
const marcos:Pessoa={
	nome: 'Douglas',
	idade: 27,
	corFavorita: CoresVariadas.VERDE
}
