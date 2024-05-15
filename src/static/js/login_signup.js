document.addEventListener('DOMContentLoaded', () => {
    const register = document.getElementById('wrapper_register');
    const login = document.getElementById('wrapper_login');
    const flyout = document.getElementById('register_link');
    const flyin = document.getElementById('login_link');

    register.addEventListener('click', () => {
        flyout.classList.toggle('hidden');
        flyin.classList.toggle('hidden');
    });
    login.addEventListener('click', () => {
        flyout.classList.toggle('hidden');
        flyin.classList.toggle('hidden');
    });
  });
