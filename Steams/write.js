import fs, { createWriteStream } from 'fs'

const writeableSteam = createWriteStream('file/text.txt')

writeableSteam.write("this is the first chunk. \n ")
writeableSteam.write("this is the secend chunk. \n ")
writeableSteam.write("this is the 3rd chunk.  \n ")
writeableSteam.write("this is the 4th chunk. \n ")

writeableSteam.end("this is the final chunk \n")

writeableSteam.on("finish", ()=>{
    console.log("Finish writing")
})