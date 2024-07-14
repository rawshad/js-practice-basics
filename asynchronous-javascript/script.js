// Synchronous Code

// Example - 1
// const p = document.querySelector('.p');
// p.textContent = 'My name is Muztahid';
// alert('Text Set!');
// p.style.color = 'red';


// Asynchronous code
// Example -1 - Timer with call back
// const p = document.querySelector('.p');
// setTimeout(() => {
//     p.textContent = "My name is Muztahid";
// }, 5000);
// p.style.color = 'red';

// Call back functions alone do note make code asynchronous, we just have to know which one does and which not;

// Example - 2
// const img = document.querySelector('.dog');
// img.src = 'dog.jpg';
// img.addEventListener('load', function () {
//     img.classList.add('fade in');
// });
// p.style.width = '300px';

// AJAX
/*
Asynchronous Javascript and XML : Allows us to communicate remote servers in a asynchronous way. With AJAX calls, we can request data from web servers dynamically.
*/

//API
/*
Application Programming Interface - Piece of software tha can be used by another piece of software, in order to allow applications to talk to each other. It is true for programming in generall not only with web development.
*/

// Old school approach for an API call
// const countriesContainer = document.querySelector('.countries');

// function getCountryData(country) {
//     const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);//this keyword represented request here, keep the constant in third bracket is destructuring data
//     console.log(data);

//     const html = `
//             <article class="country">
//                 <img src="${data.flags.png}" alt="" class="country_img">
//                 <div class="country_data">
//                     <h3 class="country_name">${data.name.official}</h3>
//                     <div class="country_data">
//                         <h4 class="country_name">${data.name.common}</h4>
//                         <p class="country_populaton">${(+data.population / 1000000).toFixed(1)} million</p>
//                         <p class="country_currency">${data.currencies.name}</p>
//                     </div>
//                 </div>
//             </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html);
// })
// }

// getCountryData('bangladesh');
// getCountryData('bharat');
// getCountryData('pakistan');
// getCountryData('bhutan');


//render neighbouring countries

// const countriesContainer = document.querySelector('.countries');
// const renderCountry = function (data) {
//     const html = `
//             <article class="country">
//                 <img src="${data.flags.png}" alt="" class="country_img">
//                 <div class="country_data">
//                     <h3 class="country_name">${data.name.official}</h3>
//                     <div class="country_data">
//                         <h4 class="country_name">${data.name.common}</h4>
//                         <p class="country_populaton">${(+data.population / 1000000).toFixed(1)} million</p>
//                         <p class="country_currency">${data.currencies.name}</p>
//                     </div>
//                 </div>
//             </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html);
// }

//Example of callback hell
// function getCountryAndNeighbour(country) {
//     // AJAX call country -1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);//this keyword represented request here, keep the constant in third bracket is destructuring data
//         console.log(data);
//         //Render Country -1
//         renderCountry(data);
//         //Get neighbour country -2
//         const [neighbour] = data.borders;
//         if (!neighbour) return;

//         // AJAX call country -2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();
//         request2.addEventListener('load', function() {
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);
//             renderCountry(data2);
//         })
//     })
// }

// getCountryAndNeighbour('bangladesh');


//PROMISE
//To solve the call back hell problem PROMISE comes into play in js es6 as a feature
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);//this keyword represented request here, keep the constant in third bracket is destructuring data
//     console.log(data);

const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data) {
    const html = `
            <article class="country">
                <img src="${data.flags.png}" alt="" class="country_img">
                <div class="country_data">
                    <h3 class="country_name">${data.name.official}</h3>
                    <div class="country_data">
                        <h4 class="country_name">${data.name.common}</h4>
                        <p class="country_populaton">${(+data.population / 1000000).toFixed(1)} million</p>
                        <p class="country_currency">${data.currencies.name}</p>
                    </div>
                </div>
            </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
}

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//         function (response) {
//             console.log(response);
//             return response.json();
//         }).then(
//             function(data) {
//                 console.log(data);
//                 renderCountry(data[0]);
//             }
//         )
// };

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)//fetch data to get the response
//     .then(response => response.json()//convert response to json
//     .then(data => renderCountry(data[0])))//get data and implemented in dom
// };
// getCountryData('bangladesh');


//chaining promises
const getCountryData = function (country) {
    // country -1
    fetch(`https://restcountries.com/v3.1/name/${country}`)//fetch data to get the response
        .then(response => response.json())//convert response to json
            .then(data => {
                renderCountry(data[0]);
                const neighbour = data[0].borders[0];
                if (!neighbour) return;

                //Country -2
                return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);})
                .then(response => response.json())
                .then(data => renderCountry(data[0]));
};
getCountryData('bangladesh');



