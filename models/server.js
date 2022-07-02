
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')
const Sockets = require('./sockets')

class Server {

    constructor() {

        this.App = express( ) //servidor de express 
        this.port = process.env.PORT

         // https server

        this.server = http.createServer( this.App )

        //Confirguracion de sockets
        this.io = socketIo(this.server)
        
    }

    middlewares() {
        //deploy public directory 
       this.App.use( express.static( path.resolve(__dirname, '../public' )))
    }

    configSockets() {
        new Sockets( this.io )
    }

    execute() {
     
        //Init Middlewares
        this.middlewares()
        
        //init sockets
        this.configSockets()
       
        // init Server
        this.server.listen(this.port, (data) => {
            console.log('Server Runing at port', this.port);
        } )
    }

}

module.exports = Server