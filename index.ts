import express, { Express, Request, Response } from "express";
import connection from "./connection";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());




// Ex. 1 - 


const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
  await connection("User")
    .insert({
      id: Date.now(),
      name: name,
      nickname: nickname,
      email: email
    })
};

app.post("/user", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      errorCode = 422
      throw new Error("Todos os campos devem ser preenchidos, meu consagrado!")

    } else {
      await createUser(name, nickname, email);
      res.status(201).send("Usuario criado com sucesso, wohoo!")
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("Ocorreu um erro no servidor")
    }
  }
})




// Ex. 2 - 


app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    const user = await connection("User").where({ id: id });

    const nameById = user.map((user) => {
      return { id: user.id, name: user.name };
    });

    if (user.length === 0) {
      errorCode = 404
      throw new Error("Usuário não encontrado!")

    } else {
      res.status(200).send(nameById)

    };

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("Ocorreu um erro no servidor!")
    }
  }
});



// Ex. 3 -  EDITAR USUÁRIO
const editeUser = async (id: string, name: string, nickname: string): Promise<any> => {
  await connection("User")
    .update({
      name,
      nickname
    })
    .where({ id: id })
};

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    const { name, nickname } = req.body

    if (!id || !name || !nickname) {
      errorCode = 422
      throw new Error("Todos os campos devem ser preenchidos!")

    } else {
      await editeUser(id, name, nickname)
      res.status(200).send("O usuario foi editado com sucesso, meu consagrado!")
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("Ocorreu um erro no servidor!")
    }
  }
});



// Ex. 4 -

const createTask = async (title: string, description: string, limitDate: Date, creatorUserId: string): Promise<any> => {
  await connection("User")
    .insert({
      id: Date.now().toString(),
      title: title,
      description: description,
      limit_date: limitDate,
      creator_id: creatorUserId
    });
};

app.post("/task", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    console.log(new Date(limitDate))
    const date = new Date(limitDate);

    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 422
      throw new Error("Todos os campos devem ser preenchidos!")

    } else {
      await createTask(title, description, date, creatorUserId)
      res.status(201).send("A task foi criada com sucesso!")
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("Ocorreu um erro no servidor!")
    }
  }
});


// Ex. 5 - 

app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    const task = await connection("Task").join('User', 'Task.creator_id', '=', 'User.id').where({ 'Task.id': id });

    if (task.length === 0) {
      errorCode = 404
      throw new Error("Usuario nao encontrado!")

    } else {
      const surveyTask = task.map((task) => {
        return {
          taskId: task.id,
          title: task.title,
          description: task.description,
          limitDate: task.limit_date.toLocaleDateString('pt-br'),
          status: task.status,
          creatorUserId: task.creator_id,
          creatorUserNickname: task.nickname
        }
      });

      res.status(200).send(surveyTask);
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
});



export default app