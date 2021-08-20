// declaring main variables

const divList = document.querySelector('.todo-container');
const addInput = document.querySelector('#todo-input'); // input from user
const addButton = document.querySelector('.todo-button'); // add to do list button

// declaring my addActivity function which is represented by the "plus+" icon on the UI.
const addActivity = () => {
  const olEl = divList.querySelector('#item-list'); // targeting the olElement (which has an #item-list ID)from the DivList.
  const liEl = document.createElement('li'); // creating an li Element

  // passing the whole block of 'button-container' div element as an innerHTML of the LiElement
  // concatenated with the user input value which is represented by addInput.value
  liEl.innerHTML = `<div class="button-container">
    <input class="check-box" type="checkbox">${addInput.value}
          <button class="edit"><i class="fa fa-pencil" style="font-size:12px;color:rgb(101, 192, 49)"></i></button>
          <button class="delete"><i class="fa fa-trash-o" style="font-size:12px;color:red"></i></button>
    </div>`;

  olEl.appendChild(liEl); // annexing the liEl inside the ordered list element

  // setting the default value of the input form into an empty string
  // this enables us to clean the input form(only place holder) every time the user finish adding a single input.
  addInput.value = '';

  // creating my delete button variable
  
const delButton = liEl.querySelector('.delete'); // targeting the delete button
const deleteActivity = (i) =>{    
      i = 0;
      let item = document.getElementsByTagName("li")[i];
      i++;
      item.parentNode.removeChild(item);
     console.log("delete button was executed"); // printing a simple message that the delet button is working 
  }


//adding my click event listener to the delete button
const deleteActivityHandler = delButton.addEventListener('click',deleteActivity);  


};

// adding my click event listener to the addButton
/* const clickListener = */ addButton.addEventListener('click', addActivity);
// i have commented out the declaration of my "key-Up-listener" because the linting test obliged me to read the variable for the second time.

// adding my enter key event listener so that the input can be saved when the user press the enter key
/* const keyUpListener = */ addInput.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    addActivity();
    // i have commented out the declaration of my "key-Up-listener" because the linting test obliged me to read the variable for the second time.
  }
});




