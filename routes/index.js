module.exports = function Route(app, server){
  app.get("/", function(req,res){
    res.render("index");
  });
  var io = require("socket.io").listen(server);
  var counter = 0;
  io.sockets.on('connection', function(socket){
    socket.on('push_button', function(data){
      // console.log('the data for push_button:',data);
      counter +=1;
      socket.emit('push_counter', {number:counter});
    })
    socket.on('reset_button', function(data){
      // console.log('the data from reset_button: ', data);
      counter = 0;
      socket.emit('reset_zero', {count:counter});
    })
  })


};
