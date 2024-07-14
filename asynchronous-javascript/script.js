// Synchronous Code

// Example - 1
// const p = document.querySelector('.p');
// p.textContent = 'My name is Muztahid';
// alert('Text Set!');
// p.style.color = 'red';


// Asynchronous code
// Example -1 - Timer with call back
const p = document.querySelector('.p');
setTimeout(() => {
    p.textContent = "My name is Muztahid";
}, 5000);
p.style.color = 'red';

// Call back functions alone do note make code asynchronous, we just have to know which one does and which not;

// Example - 2
const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function () {
    img.classList.add('fade in');
});
p.style.width = '300px';

// AJAX
/*
Asynchronous Javascript and XML : Allows us to communicate remote servers in a asynchronous way. With AJAX calls, we can request data from web servers dynamically.
*/

//API
/*
Application Programming Interface - Piece of software tha can be used by another piece of software, in order to allow applications to talk to each other. It is true for programming in generall not only with web development.
*/


