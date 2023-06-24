import '@/views/account/account.css'

// 用户登录
let ones = document.querySelectorAll('.one');
let up = document.querySelectorAll('.up')
// console.log(ones);
ones[0].addEventListener('focus',function(){
    up[0].style.top = '15px';
})
ones[0].addEventListener('blur',function(){
    up[0].style.top = '38px';
})

ones[1].addEventListener('focus',function(){
    up[1].style.top = '15px';
})
ones[1].addEventListener('blur',function(){
    up[1].style.top = '38px';
})


// 密码可见
let eyes = document.querySelector('.eyes');
console.log(eyes);
let sum = 0;
eyes.addEventListener('click',function() {
    sum++;
    if(sum%2 == 1) {
        eyes.style.background = `url(https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-show-password.svg)`;
        ones[1].type = 'text';
    }else {
        eyes.style.background = `url(https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hide-password.svg)`;
        ones[1].type = 'password';
    }
})
// eyes.addEventListener('click',function() {
//     sum++;
//     console.log(111);
//     if(sum%2 == 1) {
//         eyes.style.background = `url(https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-show-password.svg)`
//     }else {
//         eyes.style.background = `url(https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hide-password.svg
//         )`
//     }
// })

// 勾选
let pNode = document.querySelector('.next>p');
let num = 0
next.addEventListener('click',function() {
    num++;
    if(num%2 == 1) {
        pNode.classList.add('green')
    }else {
        pNode.classList.remove('green');
    }
})

