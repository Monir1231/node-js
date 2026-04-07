import http from 'http'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":' text/plain'})
    res.end("server is running...?")
})

// start the server 

server.listen(3000,()=>{
    console.log("server is listing on port 3000")
})