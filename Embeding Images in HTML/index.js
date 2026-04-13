import fs from 'fs'

// read image file and embaded image into htm file 

fs.readFile("images/female-persons-hands-are-holding-the-smartphone-and-taking-a-of-the-sunset-smartphonegraphy-photo.jpg",(err,data)=>{
 if(err){
    console.log("Eorror file the images",err)
    return;
 }
 
//  convart data to base64
const base64Images = data.toString('base64')
// console.log("base64images :", base64Images)

// data:[MINE type],[ecoding],[data]

const imgsrc = `data:image/jpeg;base64,${base64Images}`
// console.log(imgsrc)

// create htmlcontent

const htmlContent =`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>embaded img to html</title>
</head>

<style>

body{
text-align: center;
margin: 50px;
}

img{
width:300px;
border: 2px solid #000;
border-radius:10px;
}
</style>
<body>
    <h1>Embaded Img To Html</h1>
    <img src ="${imgsrc}" alt="afternoon-img"/>
</body>
</html>
`

// create html file 
fs.writeFile('index.html',htmlContent,(err)=>{
if(err){
    console.log('writing a html file:',err)
}

console.log('file create succedful')
})

})