const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar o JSON enviado no corpo da requisição
app.use(express.json());

// Rota GET para a página principal
app.get('/', (req, res) => {
  res.send('API de Batimentos Cardíacos está funcionando!');
});

// Altere a rota POST de "/heart-rate" para "/"
app.post('/', (req, res) => {
  const bpm = req.body.bpm; // Obtém o valor dos batimentos enviado pelo aplicativo
  console.log(`Batimentos recebidos: ${bpm} BPM`);

  // Retorna uma resposta de sucesso
  res.status(200).send({ message: 'Batimentos recebidos com sucesso!' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
