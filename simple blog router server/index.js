
import http from 'http'

const server = http.createServer((req,res)=>{
    const {url} = req
    res.writeHead(200, {'content-type':'text/plain'})
    if (url === "/" ){
        res.end("Welcome to blog home page")
    } else if (url === "/blogs"){
        res.end("welcome to dispaly all blogs ")
    } else if (url.startsWith("/blogs")){
        const postId = url.split("/")[2]
       
      res.end(`welcome to blog single page: ${postId}`)
    } else {
        res.end("404 error")
    }
})

const port = process.env.PORT || 4000

server.listen(port,()=>{
    console.log(`server is listing on ${port} port.`)
})