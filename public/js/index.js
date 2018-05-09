var socket = io();

socket.on('connect', function () {
    console.log('Connect');
   
    // socket.emit('createEmail', {
    //     to: 'Salus@lol.com',
    //     text: 'Hey this is it '
    // });

    // socket.emit('createMsg', {
    //     from: 'Nick',
    //     text: 'Hello all!'
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMsg', function(msg) {
    console.log('New message', msg);
});
// socket.on('newEmail', function (email) {
//     console.log('New email', email);
//});