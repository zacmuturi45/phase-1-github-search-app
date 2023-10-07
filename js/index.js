const init = () => {
//First, grab the form and input tab using the variables 'inputForm' and 'inpu' respectively.
const inputForm = document.getElementById('github-form');
const input = document.querySelector('input#search');

//add event listener to the the form. The event is 'submit'. I then send a fetch request to the github user API using a modified url. 
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/users?q=${input.value}`)
 //The url uses input values from the form by getting direct input using input.value. This points the url to user information in the github api.
    .then(response => response.json())
//The response is then converted from json to a javascript object and forwarded to the second then method.
//The secon then method below passes the javascript object to the unexpressive iterator which extracts the username, avatar and repository links.    
    .then(data => {
        const info = data.items;
        info.forEach((items) => {
//I then create a paragraph, ammend the extracted links to the paragraph then finally ammend the paragraph to the body which consequently displays the user info on the page.           
          const p = document.createElement('p');
          document.body.appendChild(p);
          p.innerHTML = `<img src="${items.avatar_url}"><br>Username: ${items.login} <br> My link: <a href=${items.html_url}/?tab=repositories>click here</a>`;
        });
    });
})
};

document.addEventListener('DOMContentLoaded', init);