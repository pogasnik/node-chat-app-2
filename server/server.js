const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();  
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    var msg ={};
    socket.on('createMsg', (newMsg) => {
        console.log('Create Message', newMsg);
        io.emit('newMsg', {
            from: newMsg.from,
            text: newMsg.text,
            createdAt: new Date().getTime()
        });
        // socket.emit('newMsg', {
        //     from: newMsg.from,
        //     text: newMsg.text,
        //     time: new Date().getTime()
        // });
    });

    
    // socket.emit('newEmail', {
    //     from: 'Nick@lol.com',
    //     text: 'Hey, what is going on',
    //     createdAt: 1234
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});



server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})