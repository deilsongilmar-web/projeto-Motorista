import express from "express";

const app = express();

//middlewares     
app.use(express.json());

//rotas
app.get('/', (req, res) => {res.send('API de Cadastro de Motorista está funcionando!'); });      

//ouvinte
app.listen(8000, () => {
  console.log('Servidor on: http://localhost:8000');
});