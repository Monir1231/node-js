
import EventEmitter from 'node:events';

// create server 
 function createServer(){
  const  eventEmitter = new EventEmitter()

//   connect user to server 

function connect(user){
console.log(` ${user} is conneced..`)
eventEmitter.emit("userConnected",user)
}

// disconncet user to server 

function disconncet(user){
console.log(` ${user} is disconneced..`)
eventEmitter.emit("userDisConnected",user)
}

 return{
    connect,
    disconncet,
   on:eventEmitter.on.bind(eventEmitter),
   emit:eventEmitter.emit.bind(eventEmitter)
 }
 }

//  create server instant 

const chatServer = createServer()

// register events 

chatServer.on("userConnected",(user)=>{
    console.log(`Welcome ${user}`)
})

chatServer.on("userDisConnected",(user)=>{
    console.log(`Godbye ${user}`)
})

chatServer.connect("monir")
chatServer.disconncet("Monir")