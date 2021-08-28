export const deleteActivityHandler = (event) => {
// console.log('hello');
    
        if (event.target.classList.contains('fa-trash-o') || event.target.classList.contains('delete')) {
          const txt = event.target.parentNode.parentNode.innerText;
          const listItems = document.querySelectorAll('#item-list li');
          for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].innerText == txt) {
              document.querySelector('#item-list').removeChild(listItems[i]);
            }
          };
        };
     
      };
