/*
    Scrimba M4 Solo Project: Oldagram 
    Author: Cassie Lewis
    https://clewisdev.com
    Date: March 2023
*/

/****** VARIABLES ******/

const choresInput = document.getElementById("choresinput")
let choresList = document.getElementById("choreslist");

const chore = choresInput.value;
console.log(chore);

/****** FUNCTIONS ******/

function renderChores() {
    choresList += `
        <li class="chore"
            chore
        </li>    
    `
}


/****** EVENT LISTENERS ******/