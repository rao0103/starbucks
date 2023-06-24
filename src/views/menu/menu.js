import './menu.less';


let dataList = [
    {
        tit: "咖啡融合冰淇淋",
        list: [
            {
                preview: "/images/products/affogato.jpg",
                title: "阿馥奇朵™"
            },
            {
                preview: "/images/products/cold-brew-float.jpg",
                title: "冷萃浮乐朵™"
            },
            {
                preview: "/images/products/cold-brew-malt.jpg",
                title: "麦芽雪冷萃™"
            },
            {
                preview: "/images/products/instore-nitro-cold-brew-float.jpg",
                title: "气致™冷萃浮乐朵™"
            }
        ]
    },
    {
        tit: "星巴克冷萃咖啡系列",
        list: [
            {
                preview: "/images/products/cold-brew.jpg",
                title: "冷萃冰咖啡"
            },
            {
                preview: "/images/products/vanilla-flavor-sweet-cream-cold-brew.jpg",
                title: "轻甜奶油冷萃"
            },
            {
                preview: "/images/products/cold-foam-cold-brew.jpg",
                title: "绵云冷萃"
            }
        ]
    },
    {
        tit: "手工调制浓缩咖啡",
        list: [
            {
                preview: "/images/products/caffe-americano.jpg",
                title: "美式咖啡(热/冷)"
            },
            {
                preview: "/images/products/caffe-latte.jpg",
                title: "拿铁(热/冷)"
            },
            {
                preview: "/images/products/caffe-mocha.jpg",
                title: "摩卡(热/冷)"
            },
            {
                preview: "/images/products/cappuccino.jpg",
                title: "卡布奇诺(热/冷)"
            },
            {
                preview: "/images/products/caramel-macchiato.jpg",
                title: "焦糖玛奇朵(热/冷)"
            },
            {
                preview: "/images/products/espresso.jpg",
                title: "浓缩咖啡"
            },
            {
                preview: "/images/products/flat-white.jpg",
                title: "馥芮白™"
            },
            {
                preview: "/images/products/hazelnut-flavored-latte.jpg",
                title: "榛果风味拿铁(热/冷)"
            },
            {
                preview: "/images/products/vanilla-flavored-latte.jpg",
                title: "香草风味拿铁(热/冷)"
            }
        ]
    },
    {
        tit: "星冰乐®",
        list: [
            {
                preview: "/images/products/caramel-espresso-frappuccino.jpg",
                title: "焦糖浓缩咖啡星冰乐"
            },
            {
                preview: "/images/products/green-tea-frappuccino.jpg",
                title: "抹茶星冰乐"
            },
            {
                preview: "/images/products/mango-passion-tea.jpg",
                title: "芒果西番莲果茶星冰乐"
            },
            {
                preview: "/images/products/mocha-frappuccino.jpg",
                title: "摩卡星冰乐"
            },
            {
                preview: "/images/products/mocha-java-chip-frappuccino.jpg",
                title: "摩卡可可碎片星冰乐"
            },
            {
                preview: "/images/products/instore-nitro-cold-brew-float.jpg",
                title: "香草风味星冰乐"
            }
        ]
    },
    {
        tit: "气致™冷萃咖啡",
        list: [
            {
                preview: "/images/products/nitro-cold-brew.jpg",
                title: "气致™冷萃咖啡"
            }
        ]
    },
    {
        tit: "经典巧克力饮品",
        list: [
            {
                preview: "/images/products/signature-chocolate-beverage.jpg",
                title: "经典巧克力饮品（热/冷）"
            }
        ]
    },
    {
        tit: "茶瓦纳™",
        list: [
            {
                preview: "/images/products/signature-chocolate-beverage.jpg",
                title: "阿馥奇朵™"
            },
            {
                preview: "/images/products/cold-brew-float.jpg",
                title: "冷萃浮乐朵™"
            },
            {
                preview: "/images/products/cold-brew-malt.jpg",
                title: "麦芽雪冷萃™"
            },
            {
                preview: "/images/products/instore-nitro-cold-brew-float.jpg",
                title: "气致™冷萃浮乐朵™"
            }
        ]
    },
    {
        tit: "深度烘焙",
        list: [
            {
                preview: "/images/products/origami-verona.jpg",
                title: "星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®佛罗娜烘焙咖啡系列"
            }
        ]
    },
    {
        tit: "中度烘焙",
        list: [
            {
                preview: "/images/products/origami-pike-place.jpg",
                title: "星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®派克市场烘焙咖啡系列"
            }
        ]
    },
    {
        tit: "经典巧克力饮品",
        list: [
            {
                preview: "/images/products/signature-chocolate-beverage.jpg",
                title: "阿馥奇朵™"
            },
            {
                preview: "/images/products/cold-brew-float.jpg",
                title: "冷萃浮乐朵™"
            },
            {
                preview: "/images/products/cold-brew-malt.jpg",
                title: "麦芽雪冷萃™"
            },
            {
                preview: "/images/products/instore-nitro-cold-brew-float.jpg",
                title: "气致™冷萃浮乐朵™"
            }
        ]
    }
];

// let dataList;//存请求的数据

// $.ajax({
//     url: '/menu.json',
//     type: 'get',
//     dataType:"json",
//     data: {},
//     async:false,
//     success: function (data) {
//        dataList = data;
//     }
// })
// console.log(dataList);

// 获取节点
const wrapper = document.querySelector('.wrapper');

Object.values(dataList).forEach(item => {
    let ulNode = document.createElement('ul');
    ulNode.className = 'grid padded-3 product';
    ulNode.innerHTML = `<h3 class="caption">${item.tit}</h3>`;
    wrapper.appendChild(ulNode);
    Object.values(item.list).forEach(item2 => {
        let liNode = document.createElement('li');
        liNode.innerHTML = `
                            <a id="menu-product-related-cold-brew" href="#" class="thumbnail">
                                <div class="preview circle" style="background-image: url(https://www.starbucks.com.cn${item2.preview})"></div>
                                <strong>${item2.title}</strong>
                            </a>
                        `;
        ulNode.appendChild(liNode)
    })
})