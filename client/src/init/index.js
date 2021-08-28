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

document.querySelector('html').addEventListener('click', e => {
  if (e.target.classList.contains('fa-trash-o') || e.target.classList.contains('delete')) {
    const txt = e.target.parentNode.parentNode.innerText;
    const listItems = document.querySelectorAll('#item-list li');
    for (var i = 0; i < listItems.length; i++) {
      if (listItems[i].innerText == txt) {
        document.querySelector('#item-list').removeChild(listItems[i]);
      }
    }
  }
});
