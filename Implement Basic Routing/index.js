import http from 'http'

const server = http.createServer((req,res)=>{
   const { url} = req
   console.log(url)
    res.writeHead(200,{'content-type':'text/plain'})
  
    if(url === "/"){
        res.end("welcome our home page")
    } else if (url === "/about"){
      res.end ("welcome our about page")
    } else if (url === "/contact"){
      res.end ("welcome our contact page")
    } else{
        res.end("404 page")
    }
})

const port = process.env.PORT || 3000

// server start 

server.listen(port , ()=>{
    console.log(`Server is listeing on ${port} port`)
})