//IIFE  
( () => {
//DOM elements store in variable
const modalBoxContainer = document.querySelector('.lightbox-container');
const storeImg = document.querySelectorAll('.store-img');
const modalImageContainer = modalBoxContainer.querySelector('.lightbox-item');
const modalCloseButton = modalBoxContainer.querySelector('.lightbox-close');
const modalToggleButtons = modalBoxContainer.querySelectorAll('.lightbox-control');

let emptyImageContainer = [];
let counter = 0;
//Modal-pop functionality
storeImg.forEach(item => {
    let image = item.src;      
    emptyImageContainer.push(image);
    item.addEventListener('click', (e) => {
        modalImageContainer.style.backgroundImage = `url(${image})`;
        modalBoxContainer.classList.add('show');
        counter = emptyImageContainer.indexOf(image);
    })
})
//Modal close button functionality
modalCloseButton.addEventListener('click', (e) => {
    modalBoxContainer.classList.remove('show');
})
//Left & right button functionality
modalToggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-caret-left')){
            counter--;
            if(counter < 0) {
                counter = emptyImageContainer.length -1;
            }
            modalImageContainer.style.backgroundImage = `url(${emptyImageContainer[counter]})`;
            modalBoxContainer.classList.add('show');
        } else if(e.target.classList.contains('fa-caret-right')){
            counter++;
            if(counter > emptyImageContainer.length -1) {
                counter = 0;
            }
            modalImageContainer.style.backgroundImage = `url(${emptyImageContainer[counter]})`;
            modalBoxContainer.classList.add('show');
        } 
    })
})
})();

