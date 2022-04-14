## Exercício 1

## a) 

Remove a coluna salary da table Actor

#### b)

Modifica a coluna gender para "sex" e o tipo para varchar(6)

#### c)

Modifica a coluna gender para gender do tipo varchar(255)

#### d)


ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


## Exercício 2

## a)

````mysql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "3"
````

## b)


UPDATE Actor
SET name="JULIANA PAES"
where name="Juliana Paes"
UPDATE Actor
SET name="Juliana Paes"
where name="JULIANA PAES"


## c)

```mysql
UPDATE Actor
SET id="006",name="Carlos Roberto", salary= 20000,birth_date="1976-10-01",gender="male"
WHERE id="005";
```

## d)

````mysql
UPDATE Actor
SET id="007",name="Hugh Jackman",salary=800000,birth_date="1968-10-12",gender="male"
WHERE id="12";
````



O id da table Atores nao existe, assim não ocorreu o update.

## Exercício 3

#### a)

```mysql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

#### b)

````mysql
DELETE FROM Actor WHERE gender = "male" and salary > 1000000;
````

## Exercício 4

## a)

````mysql
SELECT MAX(salary) from Actor 
````

## b)

````mysql
SELECT MIN(salary) from Actor where gender = "female";
````

## c)

````mysql
select count(*) fROM Actor WHERE gender = "female";		
````

## d)

````mysql
select sum(salary) from Actor
````

## Exercício 5

## a)

A query escolheu os gêneros dos atores da tabela e contou o número de cada ator de cada gênero



## b)

````mysql
select id, name from Actor order by name desc
````

## c)


select * from Actor order by salary


## d)


select * from Actor order by salary desc limit 3


## e)


select avg(salary) ,gender from Actor group by gender;


## Exercício 6

## a)


ALTER TABLE Filmes
ADD playing_limit_date VARCHAR(10)


## b)


ALTER TABLE Filmes
CHANGE avaliacao avaliacao float


## c)


UPDATE filmes
SET playing_limit_date = "2022-06-10"
WHERE id = 5;
UPDATE filmes
SET playing_limit_date = "2022-02-8"
WHERE id = 3;


## d)


DELETE FROM Filmes where id="003";
UPDATE Filmes
SET sinopse="Este é um mega teste brabo"
where id="003";


Sem erro, mas nada foi atualizado, pois o id selecionado não existe.