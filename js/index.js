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
    addEventListener("keydown", (event) => {
        if(event.keyCode == 13)
        downEvent.style.backgroundColor = 'yellow';
    });
  //Wheel event
  const wheelEvent = document.querySelector('.content-section p');
  wheelEvent.addEventListener('wheel', (event) => {
    event.target.style.fontSize = '22px';
  });
    
