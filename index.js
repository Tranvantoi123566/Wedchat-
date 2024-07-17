const express = require('express');
const app = express();
const path = require('path')
const http = require('http').Server(app);
const io = require('socket.io')(http);



// Khai báo danh sách người dùng


// Thiết lập Express để sử dụng file public
app.use(express.static('public'));



// Trang chủ
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// Lắng nghe kết nối từ client
io.on('connection', (socket) => {
  console.log('co Nguoi ket noi:', socket.id);
  
  socket.on('gui',(data) =>{
    console.log(data)
    io.sockets.emit('gui-di',data);
    
    });
    

  
  
  
});

// Khởi động server
http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
