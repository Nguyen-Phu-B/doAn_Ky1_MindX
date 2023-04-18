import { data_iphone } from '../database/data_iphone.js';
import { mac_data } from '../database/data_maca.js';

// Đọc dữ liệu từ localStorage nếu có
let products = JSON.parse(localStorage.getItem('products')) || [];;
// Get URL
let url = window.location.href
// Tách phần query string của URL
let queryString = url.split('?')[1];
let queryStringSr;
if (typeof queryString !== 'undefined') {
  queryStringSr = queryString.split('_')[1];
}
console.log(queryString);

// render Product
const renderDataToPage = (paramData, selRender) => {
    let _render = '';
    for (let i = paramData.length -1 ; i > 0 ; i--) {
    
        let actualPrice = paramData[i].actualPrice;
        let oldPrice = paramData[i].oldPrice; 
    
        let idProduct = paramData[i].id;
    
        let title = paramData[i].model;
        let uppercaseTitle = title.toUpperCase();
    
        let fmActualPrice = Number(actualPrice).toLocaleString();
        let fmOldlPrice = Number(oldPrice).toLocaleString();

        for (let j = 0; j < paramData[i].color.length; j++) {
            let imgProduct = paramData[i].imgProduct && paramData[i].imgProduct.length > 0 ? paramData[i].imgProduct[j] : '';
            let colorTitl = paramData[i].color[j];
            _render += `<div class="box-product">
                        <div class="box-img">
                            <a href="">
                                <img src="..${imgProduct}" alt="">
                            </a>
                        </div>
                        <div class="box-title">
                            <a href="" title="${uppercaseTitle} ${colorTitl}">
                            ${uppercaseTitle}
                            </a>
                        </div>
                        <div class="box-price">
                            <div class="price-actual">
                                ${fmActualPrice}
                            </div>
                            <div class="price-old">
                                ${fmOldlPrice}
                            </div>
                        </div>
                        <div class="btn-add-cart">
                            <a  class="box-add-cart" href="" data-product-id="${idProduct}" data-product-name="${title}" data-product-color="${colorTitl}">
                                <div class="box-add-btn">
                                    Add to cart
                                </div>
                                <div class="box-icon">
                                    <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
                                </div>
                            </a>
                        </div>
                    </div> `;
        }
        
    }
    selRender.innerHTML = _render;
}
// render Series
const renderDataModel = (paramData, selRender, prModel) => {
    let _render = '';
    for (let i = paramData.length -1 ; i > 0 ; i--) {
    
        let actualPrice = paramData[i].actualPrice;
        let oldPrice = paramData[i].oldPrice; 
    
        let idProduct = paramData[i].id;
    
        let title = paramData[i].model;
        let uppercaseTitle = title.toUpperCase();
    
        let fmActualPrice = Number(actualPrice).toLocaleString();
        let fmOldlPrice = Number(oldPrice).toLocaleString();

        for (let j = 0; j < paramData[i].color.length; j++) {
            let imgProduct = paramData[i].imgProduct && paramData[i].imgProduct.length > 0 ? paramData[i].imgProduct[j] : '';
            let colorTitl = paramData[i].color[j];
            if (paramData[i].series == prModel) {
                _render += `<div class="box-product">
                            <div class="box-img">
                                <a href="">
                                    <img src="..${imgProduct}" alt="">
                                </a>
                            </div>
                            <div class="box-title">
                                <a href="" title="${uppercaseTitle} ${colorTitl}">
                                ${uppercaseTitle}
                                </a>
                            </div>
                            <div class="box-price">
                                <div class="price-actual">
                                    ${fmActualPrice}
                                </div>
                                <div class="price-old">
                                    ${fmOldlPrice}
                                </div>
                            </div>
                            <div class="btn-add-cart">
                                <a  class="box-add-cart" href="" data-product-id="${idProduct}" data-product-name="${title}" data-product-color="${colorTitl}">
                                    <div class="box-add-btn">
                                        Add to cart
                                    </div>
                                    <div class="box-icon">
                                        <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
                                    </div>
                                </a>
                            </div>
                        </div> `;
            }
        }
        
    }
    selRender.innerHTML = _render;
}

// Nếu query là iphone||macbook thì dùng trang allProduct
if (queryString == 'iphone') {
    let $selAll = document.getElementById("renderAll");
    let $ttAll = document.getElementById('ttAll')
    $ttAll.innerHTML = `<h2>${queryString.toUpperCase()}</h2>`
    renderDataToPage(data_iphone, $selAll);
}
if (queryString == 'iphone_14' || queryString == 'iphone_13' || queryString == 'iphone_12' || queryString == 'iphone_11' || queryString == 'iphone_se') {
    let $selAll = document.getElementById("renderAll");
    let $ttAll = document.getElementById('ttAll')
    $ttAll.innerHTML = `<h2>${queryString.toUpperCase().replace('_', ' ')}</h2>`
    renderDataModel(data_iphone, $selAll, queryStringSr);
}
if (queryString == 'macbook') {
    let $selAll = document.getElementById("renderAll");
    let $ttAll = document.getElementById('ttAll')
    $ttAll.innerHTML = `<h2>${queryString.toUpperCase()}</h2>`
    renderDataToPage(mac_data, $selAll);
} 
if (queryString == 'macbook_pro' || queryString == 'macbook_air') {
    let $selAll = document.getElementById("renderAll");
    let $ttAll = document.getElementById('ttAll')
    $ttAll.innerHTML = `<h2>${queryString.toUpperCase().replace('_', ' ')}</h2>`
    let valQuery = queryString.replace('_', ' ');
    renderDataModel(mac_data, $selAll, valQuery);
}
// Nếu query không tồn tại thì dùng index thường
if (!queryString) {
    let $selIphone = document.getElementById("renderIphones");
    let $selMac = document.getElementById("renderMacs");
    renderDataToPage(data_iphone, $selIphone);
    renderDataToPage(mac_data, $selMac);
}


//xư lý sự kiện click add-cart lưu data vào localStorage
let addCart = document.querySelectorAll('.box-add-cart');
// gán sự kiện click cho 'add-cart' - thay đổi số trên bag
addCart.forEach(function(addCart) {
    addCart.addEventListener('click', function(event) {
        event.preventDefault();
        addToCart(this);
        changeItemCount();
    });
});

// click lưu thông tin sản phẩm vào localStorage và số lượng sản phẩm cào cookie
const addToCart = (param) => {

    // Lấy thông tin sản phẩm từ thuộc tính data của thẻ click
    let productId = param.dataset.productId;
    let productName = param.dataset.productName.split(' ')[0];
    let productColor = param.dataset.productColor;
    // kiểm trả điều kiện để chọn data
    let result = null;
    if (productName.toLowerCase() == 'iphone') {
        let j = 0;
        while (j < data_iphone.length) {
            if (data_iphone[j].id == productId) {
                result = data_iphone[j];
                break;
            }
            j++;
        }
    } else if (productName.toLowerCase() == 'macbook') {
        let j = 0;
        while (j < mac_data.length) {
            if (mac_data[j].id == productId) {
                result = mac_data[j];
                break;
            }
            j++;
        }
    }

    if (result) {
        for (let i = 0; i < result.color.length; i++) {
            if (result.color[i].trim() !== productColor.trim()) {
                result.color.splice(i, 1);
                result.imgProduct.splice(i, 1);
                i--;
            }
        }

        // Nếu không còn phần tử nào trong mảng color thì đặt giá trị imgProduct là một mảng rỗng
        if (result.color.length === 0) {
            result.imgProduct = [];
        }
        
        products.push(result);
        console.log(products)
    }


    // lưu giữ liệu vào localStorage dưới dạng JSON
    localStorage.setItem('products', JSON.stringify(products));

    alert('Sản Phẩm Được Thêm Vào Giỏ Hàng')
}

// change sl bag
const changeItemCount = () => {
    // Lấy giá trị của cookie 'productCount'
    const productCount = products.length;
    console.log(productCount);

    // Cập nhật nội dung của phần tử có id 'cal_items' với giá trị từ cookie
    if (!productCount) {
        return;
    } else {
        document.getElementById('cal_items').innerHTML = productCount;
    }
}

changeItemCount();

