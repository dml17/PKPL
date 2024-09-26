const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.some(user => user.username === username && user.password === password);
    
    if (userFound) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Username or password incorrect. Please try again.');

    }
});