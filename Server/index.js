import { write } from 'fs'
import http from 'http'

const server = http.createServer((req,res)=>{
    res.write("Welcome ")
    res.end()
})

server.listen(3000,()=>{
    console.log("server running on port 3000")
})