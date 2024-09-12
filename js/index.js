// Your code goes here
//mouseover event
const over = document.querySelector('header nav');
let backgroundColor;
over.addEventListener('mouseover', (event) => {
   event.preventDefault();
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
 //Drag and Drop event
 //Creating the virtual attribute for img
  
   const dd = document.querySelector('.content-destination img');
   /* const att = document.createAttribute('draggable');
   att.value = "";
   dd.setAttributeNode(att); */
    dd.addEventListener('dragstart', (event) => {
     event.preventDefault(); 
     event.target.style.opacity = '0.2';
 }, false);
  dd.addEventListener('dragstart', (event) => {
      event.target.style.opacity = '0.5'
  })
// load Event
const imgLoad = document.querySelector('.intro h2');
window.addEventListener('load', () => {
  imgLoad.innerHTML = 'Fun Bus Weekend';
});
//focus event not working
const fcEvent = document.querySelector('header nav');
fcEvent.addEventListener('focus', (event) => {
   event.target.style.backgroundColor = 'blue';
});
//resize event

window.addEventListener("resize", windowSizing);
let size = 0;
function windowSizing() {
  let content = size += 1;
  document.querySelector('header h1').innerHTML = content;
}
//scroll
window.addEventListener('scroll', function(){
  console.log('Scrolled');
});
//select event not working
const selectEvent = document.querySelector('.destination p');
selectEvent.addEventListener('select', (event) => {
  alert('Selected');
});
//dblclick
const dblClick = document.querySelector('.img-content');
dblClick.addEventListener('dblclick', (event) => {
 event.target.style.border = '4px solid red ';
});