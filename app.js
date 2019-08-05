var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var position = {
    x: 200,
    y: 200
};

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/wait.html');
// });

io.on('connection', function(socket){
  console.log('User connected!');
  socket.on('disconnect', function(){
    console.log('User disconnected!');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on("connection", socket => {
    socket.emit("position", position);
    socket.on("move", data => {
        switch(data) {
            case "left":
                position.x -= 5;
                io.emit("position", position);
                break;
            case "right":
                position.x += 5;
                io.emit("position", position);
                break;
            case "up":
                position.y -= 5;
                io.emit("position", position);
                break;
            case "down":
                position.y += 5;
                io.emit("position", position);
                break;
        }
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
