document.addEventListener('DOMContentLoaded', init);

function init() {
    const registerForm = document.querySelector('#registerForm');
    const loginForm = document.querySelector('#loginForm');

    registerForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const username = document.querySelector('#regUsername').value;
        const password = document.querySelector('#regPassword').value;

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
            });
            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                window.location.href = '../../index.html';
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    });

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const username = document.querySelector('#loginUsername').value;
        const password = document.querySelector('#loginPassword').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
            });
            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                window.location.href = '../../index.html';
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    });
}