const { Server } = require('socket.io');

function setupWebSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: '*', // Be more specific in production
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
      console.log('Message Received: ', msg);
      io.emit('chat message', msg);
    });
  });
}

module.exports = { setupWebSocket };
