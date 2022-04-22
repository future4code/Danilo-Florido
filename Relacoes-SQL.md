## Ex. 1

## A - 


A chave estrangeira faz a ligacao de uma tabela a outra atraves de uma chave primária de uma tabela que de relacao.

## B - 

````mysql
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating VALUES(
"001","O filme é muito bom!!!",10,"001"
)
````

## C - 



Nao é possivel atualizar ou modificar uma tabela que se relaciona a outra com ID invalido ou que nao existe.

## D - 

````mysql
Alter table Movies 
drop column rating;
````

## E - 


Um dado que se relaciona com a tabela Rating nao pode ser deletado ou atualizado.

## Ex. 2

## A - 


Essa tabela possui um atributo que se relaciona ao id do filme e outro atributo que se relaciona ao id do ator.

## B - 

````mysql
INSERT INTO MovieCast VALUES(
	"003","001",
    "003","002",
    "002","003",
    "004","005",
    "006","006",
    "007","007"
);
````

## C - 

Não se pode adicionar ou atualizar a tabela que faça referência a uma tabela com id inexistente ou inválido



## D - 

Não é possível deletar ou atualizar um dado que que se relacione com a tabela MovieCast

## Ex. 3

## A - 

O operador ON é o que fará a relacao de uma tabela em outra "ONDE" quando for possivel a relacao.



## B - 

````mysql
select nome, Filmes.id, rate from Movies
inner join Rating on Movies.id = Rating.movie_id;
````