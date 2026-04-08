import fs from 'fs'

const ReadableSteams = fs.createReadStream("file/text.txt",{
    encoding: 'utf-8',
    highWaterMark:1024
})

ReadableSteams.on("data",(chunk)=>{
 console.log(`Received chunk: ${chunk.length} bytes`)
})

ReadableSteams.on("end",()=>{
    console.log("File reading end")
})