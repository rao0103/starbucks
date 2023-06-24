import './store.css';

var scale = new AMap.Scale({
    visible: false,
}),
    toolBar = new AMap.ToolBar({
        visible: false,
        position: {
            top: '110px',
            right: '40px',
        },
    }),
    controlBar = new AMap.ControlBar({
        visible: false,
        position: {
            top: '10px',
            right: '10px',
        },
    }),
    overView = new AMap.HawkEye({
        visible: true,
    }),
    map = new AMap.Map('container', {
        zoom: 11,
    });
map.addControl(scale);
map.addControl(toolBar);
map.addControl(controlBar);
map.addControl(overView);
function toggleScale(checkbox) {
    if (checkbox.checked) {
        scale.show();
    } else {
        scale.hide();
    }
}
function toggleToolBar(checkbox) {
    if (checkbox.checked) {
        showToolBar();
    } else {
        hideToolBar();
    }
}
function toggleControlBar(checkbox) {
    if (checkbox.checked) {
        document.getElementById('controlBar').checked = true;
        controlBar.show();
    } else {
        document.getElementById('controlBar').checked = false;
        controlBar.hide();
    }
}
function toggleOverViewShow(checkbox) {
    if (checkbox.checked) {
        overView.show();
    } else {
        overView.hide();
    }
}
function showToolBar() {
    document.getElementById('toolbar').checked = true;
    toolBar.show();
}
function hideToolBar() {
    document.getElementById('toolbar').checked = false;
    toolBar.hide();
}

let lis = document.querySelectorAll('.item')
let nums = document.querySelectorAll('.num>img')
console.log(lis,nums);

for(let i = 0 ; i<lis.length;i++){
    lis[i].addEventListener('click',function(){
        for(let m = 0 ; m<lis.length;m++){
            lis[m].style.background = "#fff"
            nums[m].src = "https://www.starbucks.com.cn/assets/icons/icon-pin-solid-grey.svg"
        }
        lis[i].style.background = "rgba(0, 0, 0, 0.12)"
        nums[i].src = 'https://www.starbucks.com.cn/assets/icons/icon-pin-solid-green.svg'
    })
}