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

// 滑块验证
let blue = document.getElementById('blue');// 滑块的节点
let bgSmall = document.getElementById('bgSmall');// 小插块的图片
console.log(blue,bgSmall);
let initialX,initialY; // 储存初始触摸位置
let offsetX = 0,offsetY = 0; // 设置一开始的偏移量为0

// 获取元素的起始位置
let initialPosition = blue.getBoundingClientRect();
console.log(initialPosition.left);

// 监听触摸开始事件
blue.addEventListener('touchstart',function(e) {
    let touch = e.touches[0];//获取第一个触摸点的信息

    // 记录第一个出点的初始位置
    initialX = touch.clientX;
    initialY = touch.clientY;

    offsetX = parseFloat(blue.style.left) || 0
    offsetY = parseFloat(blue.style.top) || 0
});

// 监听触摸移动事件
blue.addEventListener('touchmove',function(e) {
    // 阻止默认事件
    e.preventDefault();

    let touch = e.touches[0];

    // 计算触摸位与初始位置的差值
    let moveX = touch.clientX - initialX;

    // 计算元素的新位置
    let newPosition = offsetX + moveX;

    // 判断新位置是否超出起始位置
    if(newPosition < initialPosition.left) {
        blue.style.left = initialPosition.left + 'px';
    }
})

// 监听触摸结束事件
blue.addEventListener('touchend',function() {
    // 清空初始位置的变量
    initialX = null
    initialY = null
})

