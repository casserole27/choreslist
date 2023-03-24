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









// for (let i = 0; i < chores.length; i++) {
    // listItem.textContent = choresInput.value;
    // ulEl.appendChild(listItem);
    

    // const content = listItem.textContent;

    // console.log(content);



    
//    let listItems = ""

//     chores.forEach(chore => {
//         listItems += `
//         <li 
//             class="chore"
//             data-item="listItem">
//             ${chore}
//         </li>`   
//    }); 

//     ulEl.innerHTML = listItems;



    // return arr.filter(function(chore){
    //     console.log(chore)
    //     console.log(value.textContent)
    //     if (chore != value.textContent) {
    //     //    myChores.push(chore);  
    //        console.log(myChores);   
    //     };

    
//?https://developer.mozilla.org/en-US/docs/Web/API/Event/target
 



  



//! This function will remove a list item,
//! but it comes back when you enter another chore
//! Remove from array?
//? https://www.geeksforgeeks.org/remove-elements-from-a-javascript-array/
// document.addEventListener("click", function(e) {
//     const target = e.target.tagName === "LI"
//     if (target) {
//         console.log(target); //! Target is a string
        
//    }; 
// }); 
          
      
//     };
// };

        
    // const liEl = document.querySelectorAll(".chore");
 
    // for (let i = 0; i < liEl.length; i++) {
    //     liEl[i].addEventListener("click", function() {
    //         liEl[i].classList.add("li-remove");
    //     });   
    //     }; 
    

    // function removeChoreFromList() {
    //     return myChores.filter(function(item => item !== li) {
    //         return li != value;
    //     })

    // }

   // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === value) {
    //             arr.splice(arr[i], 1)
    //             localStorage.clear()
    //             localStorage.setItem("myChores", JSON.stringify(myChores))
                
    //     }};
  