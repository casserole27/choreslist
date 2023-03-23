/*
    Scrimba M4 Solo Project: Oldagram 
    Author: Cassie Lewis
    https://clewisdev.com
    Date: March 2023
*/

/****** VARIABLES ******/

let myChores = [];
const choresInput = document.getElementById("choresinput")
const ulEl = document.getElementById("ul-el");
const choresStorage = JSON.parse( localStorage.getItem("myChores") );

/******BUTTONS *******/
const arrowBtn = document.getElementById("arrow-btn");
const xBtn = document.getElementById("x-btn");


if (choresStorage) {
    myChores = choresStorage;
    renderChores(myChores);
}

/****** FUNCTIONS ******/

function getChores() {
    //! Have to use an array for multiple values
   
    if (!myChores.includes(choresInput.value)) {
        myChores.push(choresInput.value);
    }
      
    localStorage.setItem("myChores", JSON.stringify(myChores));
    renderChores(myChores);
    choresInput.value = "";
}


function renderChores(chores) {
    
   let listItems = ""

   //! How to NOT render a blank text item
   
   chores.forEach(chore => {
        listItems += `
        <li class="chore">
            ${chore}
        </li>`   
   }); 

    ulEl.innerHTML = listItems;
};

function removeChores() {
    localStorage.clear()
    myChores = [];
    choresInput.value = "";
    renderChores(myChores);
}


/****** EVENT LISTENERS ******/

arrowBtn.addEventListener("click", getChores);
xBtn.addEventListener("click", removeChores);