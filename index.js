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
        <li 
            class="chore"
            id="indiv-chore"
            data-chore= "${chore}">
            ${chore}
        </li>`   
   }); 

    ulEl.innerHTML = listItems;
};

//! This function will remove a list item,
//! but it comes back when you enter another chore
//! Remove from array?
//? https://www.geeksforgeeks.org/remove-elements-from-a-javascript-array/
function removeIndivChore() {
    const liEl = document.getElementsByClassName("chore");
    for (let li of liEl) {
        li.addEventListener("click", function() {
            li.classList.add("li-remove");
            // choresRemove()
          
            })
    };

    // const target = e.target.id
    // const target = e.target.dataset.chore;
    // if (target) {
    //     console.log(target); //! Target is a string
    //     console.log(myChores)
        

    };

    // function choresRemove(myChores, value) {
    //     return myChores.filter(function(li) {
    //         return li != value;
    //     })

    // }


function removeChores() {
    localStorage.clear()
    myChores = [];
    choresInput.value = "";
    renderChores(myChores);
}


/****** EVENT LISTENERS ******/

arrowBtn.addEventListener("click", getChores);
xBtn.addEventListener("click", removeChores);
document.addEventListener("click", removeIndivChore)