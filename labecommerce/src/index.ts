import { app } from "./app";
import createProduct from "./srv";
import  createUser  from "./srv/criarusuario";
import getPurchaseByUserID from "./srv/comprasuserID";
import getAllProducts from "./srv/pegartodosprodutos";
import  getAllUsers from './srv/pegartodosusuarios'
import purchase from "./srv/criadorprodutos";


app.post('/users', createUser)
app.post('/products', createProduct)
app.post('/purchase', purchase)
app.get('/users', getAllUsers)
app.get('/products', getAllProducts)
app.get('/users/:userID/purchases', getPurchaseByUserID)