const express = require('express');
const app = express();
const auth = require('./routes/auth');
const visitors = require('./routes/visitors');
const http = require('http');
const cors = require('cors');
const socket = require('socket.io');

const server = http.createServer(app);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000", // frontend
    methods: ["GET", "POST"],
  }
});

// test socket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/api', auth);
app.use('/', visitors);

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = { app, io };
