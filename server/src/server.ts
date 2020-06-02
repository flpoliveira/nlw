import express from 'express';

const app = express();

app.get('/users', (request, response) => {

  response.json([
    {nome: 'Diego', idade: 15},
    {nome: 'Pedro', idade: 23},
    {nome: 'Ruan', idade: 25},
  ]);
});


app.listen(3333);