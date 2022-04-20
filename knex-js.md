//1 - 

//A - O raw retorna muitas informacoes sobre a tabela, enquanto o result do que queremos é o item de índice 0.

//B -

const getActorById = async (name:string) => {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${name}" 
    `)
    return result[0]
}
getActorById("Nilo")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	}); 
    
//Ex. c
const getActorsByGender = async (gender:string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor
        WHERE gender = "${gender}" 
    `)
    return result[0]
}
getActorsByGender("male")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
    
//Ex. 2
//A - 
const updateSalary = async (id:string, salary: number) => {
    const result = await connection("Actor")
    .update({
        salary: salary
    })
    .where({id:id})
};
updateSalary("007", 5000)
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
//B - 
const deleteActorById = async (id:string) => {
    const result = await connection("Actor")
    .delete()
    .where({id:id})
};
//C - 
const averageSalaryByGender = async (gender: string) => {
    const result = await connection("Actor")
      .avg("salary")
      .where({gender});
  
    return result[0];
  };
  averageSalaryByGender("female")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});


//Ex. 3

//A - 
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE id = ${id}
    `)
  
      res.status(200).send(result[0])
    } catch (error:any) {
      res.status(500).send({message:error.message})
    }
})

//B - 
app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender
      const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor
        WHERE gender = "${gender}"
    `)
        res.status(200).send(result[0])
    } catch (error:any) {
      res.status(500).send({message:error.message})
    }
})


//Ex. 4

//A - 
app.put("/actor",async (req:Request, res:Response) => {
    try {
        const id = req.body.id
        const salary = req.body.salary
        await connection.raw(`
            UPDATE Actor SET salary = ${salary}
            WHERE id = "${id}"        
        `)
        res.status(200).send({message:"Salary updated."})
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
    
})

//B - 
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      await connection.raw(`
        DELETE FROM Actor
        WHERE id = ${id}
    `)
  
      res.status(200).send({message:"The actor is gone!"})
    } catch (error:any) {
      res.status(500).send({message:error.message})
    }
})