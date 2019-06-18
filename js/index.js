// Your code goes here
//mouseover event
const over = document.querySelector('header nav');
let backgroundColor;
over.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    //resting the color back
    setTimeout(() => {
     event.target.style.color = '';
    }, 500);
    });
    //Keydown event
    const downEvent = document.querySelector(' .intro p');
    downEvent.addEventListener('keydown', keyEvent, false);
         function keyEvent() {
            if(event.keyCode == '13') {
                event.target.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    event.target.style.backgroundColor = '';
                   }, 5000);
               }
         }
