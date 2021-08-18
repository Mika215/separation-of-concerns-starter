
//declaring main variables

const divList = document.querySelector(".todo-container");
const addInput =document.querySelector("#todo-input");// input from user 
const addButton=document.querySelector(".todo-button"); //add to do list button

//declaring my addActivity function which is represented by the "plus+" icon on the UI.
const addActivity = () =>{
  //adding an if else conditional to make sure that the user enter an input before he can save it to the list.
  //however this app has a bug
  // if you enter multiple space it conciders it as if it is not an empty string 
  //there fore i tried to specify the below 3 conditions
  if(addInput.value ===" "||addInput.value==='' || addInput.value==='  '){
    alert('You did not enter something.\n\nplease enter an activity!');
    
  }else{
    const olEl=divList.querySelector('#item-list');//targetting the ordered list (with an #item-list ID)from the DivList
    const liEl=document.createElement('li');//creating an li Element

    //passing the whole block of 'button-container' div element as an innerHTML of the LiElement
    //concatinated with the userinput value which is represented by addInput.value
    liEl.innerHTML=`<div class="button-container">
    <input class="check-box" type="checkbox">${addInput.value}
          <button class="edit"><i class="fa fa-pencil" style="font-size:12px;color:rgb(101, 192, 49)"></i></button>
          <button class="delete"><i class="fa fa-trash-o" style="font-size:12px;color:red"></i></button>
    </div>`;

    olEl.appendChild(liEl);// annexing the liEl inside the ordered list element
    
    //setting the defult value of the input form into an empty string 
    //this enables us to clean the input form(only place holder) every time the user finish adding a single input.
    addInput.value='';
  };

};

//adding my click event listner to the addButton 
const clickListner = addButton.addEventListener('click',addActivity);


//adding my enter key event listner so that the input can be saved when the user press the enter key
const keyUpListner = addInput.addEventListener('keyup',()=>{
    if(event.which===13){
        addActivity();
    };
});
