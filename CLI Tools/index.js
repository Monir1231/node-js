#!/usr/bin/env node

// console.log("This Is My First CLI Tool")

// const args = process.argv.slice(2);
// if(args.length === 0){
//     console.log("Usage this command: first-projcet-cli-tool <name>")
// } else{
//     console.log(` Hello ${args[0]}! Welcome to cli tool`)
// }

// readLine 

// import readline from 'readline';
// // console.log(readline)
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
    
// });

// // ask the question 
// rl.question("What is your name \n",(name)=>{
//   console.log(`Hello, ${name}`)
//   rl.close()
// })



// Adding External Packages & Make CLI tool Interactive and User Friendly
import readline from 'readline'
import chalk from 'chalk'


const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

const questions = [
    {
        type:'input',
        name:'name',
        message: chalk.blue("what is your name?\n"),
        
    },
    {
        type:'input',
        name:'age',
        message: chalk.green("How old are you?\n"),
        validate : (value) =>{
            if(!isNaN(parseInt(value)) && parseInt(value) >= 0){
                return true
            } else{
                return chalk.red("inter a valid age ")
            }
        }
    },
    {
        type:'input',
        name:'city',
        message: chalk.yellow("where do you live? \n")
    },
    {
        type:'confirm',
        name:'agree',
        message: chalk.yellow("DO you agree to avove information?\n"),
        default: true
    },
]

// funcation to ask questionv recursively

const askQuestion = (index = 0 , answers ={})=>{

    // if all question 

    if(index >= questions.length){
       console.log(chalk.green('\n Here is you information:'))
       console.log(`Name: ${answers.name}`)
        console.log(`Age: ${answers.age}`)
         console.log(`City: ${answers.city}`)
           console.log(`Aggreed: ${answers.agree ? chalk.green("yes"):chalk.red("no")}`)

        //    close 
        rl.close()
        return
        
    }

    // get the current question 

    const question = questions[index]

    // ask the question 
    rl.question(question.message + '',(anwser)=>{
        if(question.validate){
            const validation = question.validate(anwser)
            if(validation !== true){
                console.log(validation)
                return askQuestion(index,answers)
            }
        }
        //  store the anwser  
        answers[question.name] = anwser
        // ask the nextQuestion 
        askQuestion(index + 1 , answers)
    })
    

}

// start asking 
askQuestion()