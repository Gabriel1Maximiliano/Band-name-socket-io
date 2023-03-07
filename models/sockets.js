const BandList = require('./band-list');

class Sockets  {

    constructor( io ){
 
       this.io = io;
       this.socketEvents();
       this.bandList = new BandList();       
    }
socketEvents() {
    // On Connection
   this.io.on('connection', ( socket ) => {

      console.log('cliente conectado')

      // emitir al cliente conectado todas las bandas

      socket.emit('current-bands', this.bandList.getBands())
    });
     //const data =this.bandList.getBands()
    //console.log( data)
}
}

module.exports = Sockets;