//Exercícios de Interpretação de Código
//1) O array será repetido, é uma forma de copiar o array sem usar o spread
//2)Retornará todos os nomes
//3)Retornará todos os apelidos diferentes de Chijo




//Exercícios de Código

//1 - a) b) && c)

/* const pets = [
	{ nome: "Lupin", raca: "Salsicha" },
	{ nome: "Polly", raca: "Lhasa Apso" },
	{ nome: "Madame", raca: "Poodle" },
	{ nome: "Quentinho", raca: "Salsicha" },
	{ nome: "Fluffy", raca: "Poodle" },
	{ nome: "Caramelo", raca: "Vira-lata" },
]

//a)
const nomesPets = pets.map(nomes => nomes.nome)
console.log(nomesPets)

//b)
const mapSalsichas = pets.filter(salsichas => salsichas.raca == "Salsicha")
console.log(mapSalsichas)


//c)
const mapPoodles = pets.filter(poodles => poodles.raca == "Poodle")
const tosar = mapPoodles.map(nomes => `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomes.nome} !`)
console.log(tosar)
 */
//2) 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a) Crie um novo array que contenha apenas o nome de cada item

 const nomesProdutos = produtos.map(nomes => nomes.nome)
console.log(nomesProdutos)

//b)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const descontoCinco = produtos.map((preco) => {
	const nomes = preco.nome
	const desconto5 = (preco.preco * 0.95).toFixed(2)
	return { nomes, desconto5 }
})

console.log(descontoCinco)

//c) c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const apenasBebidas = produtos.filter(bebidas => bebidas.categoria=="Bebidas")
console.log(apenasBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const apenasYpe = produtos.filter(ype => ype.nome.includes("Ypê"))
console.log(apenasYpe)

//e) e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const ypeOnly = apenasYpe.map(dados => `Compre ${dados.nome} por R$ ${dados.preco}`)
console.log(ypeOnly) 