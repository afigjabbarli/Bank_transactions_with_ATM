let passwords = ["63DJ3B9"];
let budgets = [5000];
let firstNames = ["Afig"];
let lastNames = ["Jabbarli"];
console.log("Welcome dear user")
console.log(" ")
console.log("Please choose one of the commands")
console.log("[1]-Withdraw Cash")
console.log("[2]-Deposit Money")
console.log("[3]-Check Balance")
console.log("[4]-Change PIN")
console.log("[5]-Exit")
console.log(" ")
let command = prompt("Command:", "command")
if(command === "Withdraw Cash"){
  console.log("Please enter your password:");let password = console.log(prompt("Please enter your password:", "password"));
  for (let index = 0; index < passwords.length; index++) {
    const element = passwords[index];
    if(element === password){
        let info = `Dear ${firstNames[index]} ${lastNames[index]} You have ${budgets[index]} money in your account`;
        console.log(info);
    }
  }
}
else if(command === "Deposit Money"){

}
else if(command === "Check Balance"){

}
else if(command === "Change PIN"){

}
else if(command === "Exit"){

}
else{
    alert("This command is not available in the system!!!")
}