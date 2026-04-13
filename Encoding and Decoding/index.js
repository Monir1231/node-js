import fs from 'fs'

console.log(fs)

// import 

fs.readFile("file/text.txt",(err,data)=>{
 if(err) throw err
 const encodingData = data.toString('base64')
 console.log(encodingData)

 fs.writeFile("file/ouput.txt",encodingData,(err)=>{
 console.log("Error")
 })
//  deconding
const deconingData = Buffer.from(encodingData,'base64').toString('utf-8')
console.log("decoded Data: \n",deconingData)
})
