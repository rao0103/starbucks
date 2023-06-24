import './menu.less';


let dataList;//存请求的数据

$.ajax({
    url: '/menu.json',
    type: 'get',
    dataType:"json",
    data: {},
    async:false,
    success: function (data) {
       dataList = data;
    }
})
// console.log(dataList);

// 获取节点
const wrapper = document.querySelector('.wrapper');
for(let i=0;i<dataList.length;i++){
    let ulNode = document.createElement('ul');
    ulNode.className = 'grid padded-3 product';
    ulNode.innerHTML = `<h3 class="caption">${dataList[i].tit}</h3>`;
    wrapper.appendChild(ulNode);
    Object.values(dataList[i].list).forEach(item => {
        let liNode = document.createElement('li');
        liNode.innerHTML = `
                            <a id="menu-product-related-cold-brew" href="#" class="thumbnail">
                                <div class="preview circle" style="background-image: url(https://www.starbucks.com.cn${item.preview})"></div>
                                <strong>${item.title}</strong>
                            </a>
                        `;
        ulNode.appendChild(liNode)
    })
}
