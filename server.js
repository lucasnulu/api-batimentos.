const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar o JSON enviado no corpo da requisição
app.use(express.json());

// Rota POST para receber os batimentos cardíacos
app.post('/heart-rate', (req, res) => {
  const bpm = req.body.bpm;  // Obtém o valor dos batimentos enviado pelo aplicativo
  console.log(`Batimentos recebidos: ${bpm} BPM`);
  
  // Retorna uma resposta de sucesso
  res.status(200).send({ message: 'Batimentos recebidos com sucesso!' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
