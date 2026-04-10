import http from 'http'
const server = http.createServer((req,res)=>{

    console.log("Request method:", req.method)
    // write head 
    res.writeHead(200,{'content-type':'text/plain'})

    // hanle req 

    if(req.method === "GET"){
        res.end("you made a get request")
    }else if (req.method === "POST"){
       res.end("you made a post request")
    } else if (req.method === "PUT"){
       res.end("you made a put request")
    } else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("404- Not found")
    }
})


// define port 

const port = 3000


// start server 
server.listen(port,()=>{
    console.log(`server is listening on ${port} port`)
})