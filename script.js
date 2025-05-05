document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameMsg = document.getElementById('usernameMsg');
    const passwordMsg = document.getElementById('passwordMsg');
    const form = document.getElementById('activityForm');

    username.addEventListener('focus', () => {
        usernameMsg.textContent = 'Please enter your username';
    });

    username.addEventListener('blur', () => {
        usernameMsg.textContent = '';
    });

    password.addEventListener('focus', () => {
        passwordMsg.textContent = 'Please enter your password';
    });

    password.addEventListener('blur', () => {
        passwordMsg.textContent = '';
    });

    form.addEventListener('submit', (e) => {
        if (password.value.trim() === '') {
            e.preventDefault();
            passwordMsg.textContent = 'Password is required!';
        }
    });
});
