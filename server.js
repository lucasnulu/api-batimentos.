const express = require('express');
const http = require('http');  // Necessário para integrar o WebSocket com o Express
const WebSocket = require('ws');  // Biblioteca para WebSocket
const cors = require('cors');

// Configuração do Express
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// Rota GET para a página principal
app.get('/', (req, res) => {
  res.send('API de Batimentos Cardíacos está funcionando!');
});

// Rota POST para receber os batimentos
app.post('/', (req, res) => {
  const bpm = req.body.bpm;
  console.log(`Batimentos recebidos: ${bpm} BPM`);
  res.status(200).send({ message: 'Batimentos recebidos com sucesso!' });
});

// Cria o servidor HTTP
const server = http.createServer(app);

// Inicializa o WebSocket Server (wss)
const wss = new WebSocket.Server({ server, path: '/ws' });  // WebSocket disponível em /ws

wss.on('connection', (ws) => {
  console.log('Cliente conectado ao WebSocket');

  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
  });

  ws.send('Conexão estabelecida com sucesso!');
});

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
