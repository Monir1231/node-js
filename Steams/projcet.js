import fs from 'fs'

const source = fs.createReadStream('file/text.txt')
const destination = fs.createWriteStream('file/large-text.txt')

// pipe the readable stream 

source.pipe(destination)

let Totalbytes = 0;
 source.on('data',(chunk)=>{
    Totalbytes += chunk.length;
    console.log(`Copyed ${Totalbytes} bytes so far`)
 })

source.on('end',()=>{
    console.log("file copy successful")
})