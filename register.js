const form = document.querySelector('form')

form.addEventListener('submit', function(event){

    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({username, email, password});
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration Successful!');
    window.location = 'login.html';
});