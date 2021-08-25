// declaring main variables

const divList = document.querySelector('.todo-container');
const addInput = document.querySelector('#todo-input'); // input from user
const addButton = document.querySelector('.todo-button'); // add to do list button
const errDiv = document.querySelector('.error'); // adding the error div on DOM

// *** declaring my inputValidator function ***
const inputValidator = () => {
  const message = [];
  message.push('*You did not enter something.\nplease enter an activity!');
  const errorElement = document.createElement('div');
  errorElement.innerText = message;
  errorElement.style.color = 'red'; // assigning a red color to the errorElement
  errDiv.appendChild(errorElement);
};

//  *** declaring my addActivity function ***
const addActivity = () => {
  if (
    addInput.value === ' ' ||
    addInput.value === '' ||
    addInput.value === '  ' ||
    addInput.value === null
  ) {
    inputValidator(); // calling back my input validator function to alert the given reminder message
  } else {
    const olEl = divList.querySelector('#item-list'); // targeting the olElement (which has an #item-list ID)from the DivList.
    const liEl = document.createElement('li'); // creating an li Element

    liEl.innerHTML = `<div class="button-container">
    <input class="check-box" type="checkbox">${addInput.value}
          <button class="edit"><i class="fa fa-pencil" style="font-size:30px;color: #000000"></i></button>
          <button class="delete"><i class="fa fa-trash-o" style="font-size:30px;color:#000000"></i></button>
    </div>`;

    olEl.appendChild(liEl);

    addInput.value = '';
  }
};

// *** adding Listeners ***

// adding my click event listener to the addButton
addButton.addEventListener('click', addActivity);
// adding my enter key event listener
addInput.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    addActivity();
  }
});

//   // creating my delete button variable
//   const delButton = liEl.querySelector('.delete'); // targeting the delete button
//   const deleteActivity = () => {
//     let i;
//     i = 0;
//     const item = document.getElementsByTagName(li")[i];
//     i++;
//     item.parentNode.removeChild(item);
//     // console.log('delete button was executed'); // printing a simple message that the delete button is working
//   };

//  // adding my click event listener to the delete button
//  delButton.addEventListener('click', deleteActivity)
