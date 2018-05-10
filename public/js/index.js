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
    var li = jQuery('<li></li>');
    li.text(`${msg.from}: ${msg.text}`);

    jQuery('#msgs').append(li);
});
// socket.on('newEmail', function (email) {
//     console.log('New email', email);
//});

// socket.emit('createMsg', {
//     from: 'Nick',
//     text: "Hey lol"
// }, function (data) {
//     console.log('Got it', data);
//});

jQuery('#msg-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMsg', {
        from: "User",
        text: jQuery('[name=msg]').val()
    }, function () {

    });
});