
let wrapperRegister = document.getElementById('wrapper_register');
let wrapperLogin = document.getElementById('wrapper_login');


document.addEventListener('DOMContentLoaded', () => {
    const register = document.getElementById('wrapper_register');
    const login = document.getElementById('wrapper_login');
    const flyout = document.getElementById('register_link');
    const flyin = document.getElementById('login_link');
  
    // console.log(btn.classList); // HTMLButtonElement object
    console.log(flyout.classList);
    console.log(flyin.classList);
    // ✅ Works as expected
    register.addEventListener('click', () => {
        // console.log(flyout);
        flyout.classList.toggle('hidden');
        flyin.classList.toggle('hidden');
        console.log(flyout.classList);
        console.log(flyin.classList);
    });
    btn.addEventListener('click', () => {
        // console.log(flyout);
        flyout.classList.toggle('hidden');
        flyin.classList.toggle('hidden');
        console.log(flyout.classList);
        console.log(flyin.classList);
    });
  });

// wrapperRegister.addEventListener('click', function () {
//     let flyout = document.getElementById('register_link');
//     flyout.classList.add('hidden');
// });

// wrapperLogin.addEventListener('click', function () {
//     let flyout = document.getElementById('mobile-menu');
//     flyout.classList.remove('hidden');
// });
// const wrapper = document.querySelector('.wrapper');
// const registerLink = document.querySelector('.register');
// const loginLink = document.querySelector('.login');

// registerLink.onclick = () => {
//     wrapper.classList.add('active');
// }

// document.querySelector(".wrapper_register").addEventListener("click", function() {
//     const wrapper = document.querySelector("register_link").add("hidden");
//     console.log("Value:",wrapper)
//     // const div = document.querySelector("div");
//     // div.classList.remove("bg-[#864b4b]");
//     // div.style.backgroundColor = colorValue;
//   });

// document.querySelector(".wrapper_register").addEventListener("click", function() {
// const colorValue = document.querySelector("input").value;
// const div = document.querySelector("div");
// div.classList.remove("bg-[#864b4b]");
// div.classList.add(`bg-[${colorValue}]`);
// });