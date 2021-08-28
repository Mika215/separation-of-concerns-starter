export const deleteActivityHandler = () => {
// console.log('hello');
    
        if (deleteActivityHandler.target.classList.contains('fa-trash-o') || deleteActivityHandler.target.classList.contains('delete')) {
          const txt = deleteActivityHandler.target.parentNode.parentNode.innerText;
          const listItems = document.querySelectorAll('#item-list li');
          for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].innerText == txt) {
              document.querySelector('#item-list').removeChild(listItems[i]);
            }
          };
        };
     
      };
