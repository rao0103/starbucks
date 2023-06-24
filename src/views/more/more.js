import './more.css'

let ziti = document.querySelector('.ziti');
console.log(ziti);
ziti.addEventListener('click', () => {
    window.history.go(-1)
    // location.href = './home.html';
});