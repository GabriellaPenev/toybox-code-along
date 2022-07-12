

// 1: Store the button with a class of menuClose in a variable 
const menuClose = document.querySelector('button.menuClose');

// 2: Store the div with a class of slideOutNav in a variable:
const slideOutNav = document.querySelector('div.slideOutNav');

// 3. Store the label with a class of menuButton in a variable:
const menuOpen = document.querySelector('label.menuButton');
console.log(menuOpen);

// 3: Add an event listener to the menuClose variable object that's a representation of the X button in the slideOutNav, and write a function so that when the X button is 'clicked' the slideOutNav slides back to the left of the screen, and is hidden from the page

menuClose.addEventListener('click', function(event) {
    event.target.parentElement.parentElement.style.left = '-506px';
    
});

menuOpen.addEventListener('click', function(event){
    event.target.nextElementSibling.style.left = '506px';
    // this is not working, returns null - something wrong with the nextElementSibling target, even though the div.slideOutNav is the next element sibling according to the console log below!!!
});

console.log(menuOpen.nextElementSibling);
