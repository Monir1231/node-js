import { readFile } from 'node:fs';
import { writeFile } from 'node:fs';
readFile('file/text.txt','utf-8',(err,data) => {
 if(err) throw err
 console.log(data)
 
})

const content = "hello dev"
writeFile('file/message.txt',content,'utf-8',(err)=>{
if(err) throw err
console.log("file create done")
})