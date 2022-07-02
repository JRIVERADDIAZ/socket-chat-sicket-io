const Server = require("./models/server")
require('dotenv').config()

const server = new Server()

server.execute()

// app.use(express.static(__dirname + '/public'))


// io.on('connection', (socket) => {  //socket === client || user

//     // socket.emit('mensaje-bienvenida', {
//     //     msg:'Bienvenid@ al server',
//     //     decha: new Date()
//     // })

//     //    setTimeout(() => {
//     //         socket.emit('mensaje-cliente',{ msg: 'cliente', nombre: 'Freud'})
//     //    }, 2000);
 
//     socket.on('message-to-server', ( data ) => {
     
//         io.emit('message-from-server', data )

//     } )
// });

// server.listen(8080, () => {
//     console.log('Server corriendo en puerto 3000');
// });