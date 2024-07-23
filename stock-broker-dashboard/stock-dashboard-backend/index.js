const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
}));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST']
  }
});

let stocks = {
  GOOG: 0,
  TSLA: 0,
  AMZN: 0,
  META: 0,
  NVDA: 0,
};

const updateStocks = () => {
  stocks = {
    GOOG: (Math.random() * 10000).toFixed(2),
    TSLA: (Math.random() * 10000).toFixed(2),
    AMZN: (Math.random() * 10000).toFixed(2),
    META: (Math.random() * 10000).toFixed(2),
    NVDA: (Math.random() * 10000).toFixed(2),
  };
  io.emit('stockUpdate', stocks);
};

setInterval(updateStocks, 1000);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('stockUpdate', stocks);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
