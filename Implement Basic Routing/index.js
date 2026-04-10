import http from 'http'

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Welcome")
})

const port = process.env.PORT || 3000

// server start 

server.listen(port , ()=>{
    console.log(`Server is listeing on ${port} port`)
})