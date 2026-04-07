import os from "os"
// console.log("CPU",os.arch())
// console.log(os.availableParallelism())
// console.log(os.networkInterfaces())
// console.log(os.cpus())
console.log("total mem:",os.totalmem()/(1024 * 1024 * 1024),"GP")