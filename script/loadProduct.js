import { data_iphone } from '../database/data_iphone.js';
import { mac_data } from '../database/data_maca.js';

// Đọc dữ liệu từ localStorage nếu có
let products = JSON.parse(localStorage.getItem('products')) || [];

// render iPhone

const renderDataToPage = (paramData, selRender) => {
  let _render = '';
  for (let i = paramData.length - 1; i > 0; i -= 2) {
    let imgProduct =
      paramData[i].imgProduct && paramData[i].imgProduct.length > 0
        ? paramData[i].imgProduct[0]
        : '';
    let actualPrice = paramData[i].actualPrice;
    let oldPrice = paramData[i].oldPrice;

    let idProduct = paramData[i].id;

    let title = paramData[i].model;
    let uppercaseTitle = title.toUpperCase();

    let fmActualPrice = Number(actualPrice).toLocaleString();
    let fmOldlPrice = Number(oldPrice).toLocaleString();

    _render += `<div class="box-product">
                    <div class="box-img">
                        <a href="">
                            <img src="..${imgProduct}" alt="">
                        </a>
                    </div>
                    <div class="box-title">
                        <a href="" title="${uppercaseTitle}">
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
                        <a  class="box-add-cart" href="" data-product-id="${idProduct}" data-product-name="${title}">
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
  selRender.innerHTML = _render;
};

let $selIphone = document.getElementById('renderIphones');
let $selMac = document.getElementById('renderMacs');
renderDataToPage(data_iphone, $selIphone);
renderDataToPage(mac_data, $selMac);

//-------
let addCart = document.querySelectorAll('.box-add-cart');
// gán sự kiện click cho 'add-cart' - thay đổi số trên bag
addCart.forEach(function (addCart) {
  addCart.addEventListener('click', function (event) {
    event.preventDefault();
    addToCart(this);
    changeItemCount();
  });
});

// click lưu thông tin sản phẩm vào localStorage và số lượng sản phẩm cào cookie
const addToCart = (param) => {
  // Lấy thông tin sản phẩm từ thuộc tính data của thẻ click
  let productId = param.dataset.productId;
  let productName = param.dataset.productName;

  // Lấy thông tin sản phẩm từ thuộc tính data của thẻ click
  let productId = param.dataset.productId;
  let productName = param.dataset.productName.split(' ')[0];
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
    products.push(result);
  }

  let productsCount = products.length;

  alert('Sản Phẩm Được Thêm Vào Giỏ Hàng');
};

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
};

changeItemCount();
