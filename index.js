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
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-close-btn")

/******BUTTONS *******/
const arrowBtn = document.getElementById("arrow-btn");
const xBtn = document.getElementById("x-btn");


if (choresStorage) {
    myChores = choresStorage;
    renderChores(myChores);
};

/****** FUNCTIONS ******/

function getChores() {
   
    if (!myChores.includes(choresInput.value)) {
        myChores.push(choresInput.value);
        
    };
      
    localStorage.setItem("myChores", JSON.stringify(myChores));
    
    renderChores();
    choresInput.value = "";

};


 //! How to NOT render a blank text item

function renderChores() {
    
    ulEl.innerHTML = "";
    
    for (let i = 0; i < myChores.length; i++) {
        
        const chore = document.createElement("li");
        chore.textContent = myChores[i];
        ulEl.appendChild(chore);

        chore.addEventListener("click", function() {
            let content = this.textContent;
            this.style.visibility = "hidden";
            removeChores(myChores, content);
        
          if (myChores.length === 0) {
            showModal()
          };
          
        });
     };
};
  

function removeChores(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1)
        localStorage.clear()
        localStorage.setItem("myChores", JSON.stringify(myChores))
    }
};


function removeAllChores() {
    localStorage.clear()
    myChores = [];
    choresInput.value = "";
    renderChores(myChores);
};   
 
function showModal() {
    modal.style.display = "flex";
};

function closeModal() {
    modal.style.display = "none";
};

/****** EVENT LISTENERS ******/

arrowBtn.addEventListener("click", getChores);
xBtn.addEventListener("click", removeAllChores);
modalBtn.addEventListener("click", closeModal);









