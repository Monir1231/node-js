import { Duplex } from "stream";

const duplexStream = new Duplex({
   write(chunk,encoding,callback){
     console.log( ` writing:${chunk.toString()}`)
     callback()
   },
   read(){
    this.push("Hello from duplex!. \n ")
    this.push(null)
   }


})

duplexStream.on("data",(chunk)=>{
  console.log(`Reading: ${chunk.toString()}`)
})

duplexStream.write("This is a test writing...")
duplexStream.write("This is a 2ed test writing...")
duplexStream.end("writing end")