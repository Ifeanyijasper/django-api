const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register');
const loginLink = document.querySelector('.login');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}