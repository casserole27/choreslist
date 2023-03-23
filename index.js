/*
    Scrimba M4 Solo Project: Oldagram 
    Author: Cassie Lewis
    https://clewisdev.com
    Date: March 2023
*/

/****** VARIABLES ******/

let myChores = [];
const choresInput = document.getElementById("choresinput")
let choresList = document.getElementById("choreslist");

const arrowBtn = document.getElementById("arrow-btn");
const xBtn = document.getElementById("x-btn");

/****** FUNCTIONS ******/

function getChores() {
    //! Have to do an array for more than one value
    myChores.push(choresInput.value);
    choresInput.value = "";
    renderChores(myChores);
}

function renderChores(chores) {
    
   let listItems = ""
    
   chores.forEach(chore => {
        listItems += `
        <li class="chore">
            ${chore}
        </li>    
`
   });

    choresList.innerHTML = listItems;
}

function removeChores() {
    myChores = [];
    choresInput.value = "";
    renderChores(myChores);
}


/****** EVENT LISTENERS ******/

arrowBtn.addEventListener("click", getChores);
xBtn.addEventListener("click", removeChores);