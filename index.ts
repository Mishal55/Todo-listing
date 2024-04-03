//Todo app listing in typescript BY MISHAL NADEEM

import inquirer from "inquirer"

//user variable

let Todos = [];
while(true){
    let input = await inquirer.prompt([
     
{
    name: "todoitems",
    type: "input",
    message: "add todo items in listing"
},
{
    name: "addmore",
    type: 'list',
    choices: ["yes","no"]
}
 ]);

//output of program

const{todoitems,addmore}=input;
Todos.push(todoitems);
if(addmore == "no"){
    console.log("todolist:");

    for(let i=0;i<Todos.length; i++)
        {console.log(Todos[i])}
    
//exit loop
break;

}

};