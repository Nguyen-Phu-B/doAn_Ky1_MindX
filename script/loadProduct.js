import { data_iphone } from '../database/data_iphone.js';
import { data_mac } from '../database/data_mac.js';
import { data_watch } from '../database/data_watch.js';

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

// render MAC, Watch
const renderDataToPage_other = (paramData, selRender) => {
  let _render = '';
  for (let i = paramData.length - 1; i > 0; i -= 1) {
    let imgProduct =
      paramData[i].color_img && paramData[i].color_img.length > 0
        ? paramData[i].color_img[0]['img']
        : '';
    let actualPrice = paramData[i].actualPrice;
    let oldPrice = paramData[i].oldPrice;

    let idProduct = paramData[i].id;
    let nameProduct = paramData[i].model.split(' ')[0];

    let title = paramData[i].model;
    let uppercaseTitle = title.toUpperCase();

    let fmActualPrice = Number(actualPrice).toLocaleString();
    let fmOldlPrice = Number(oldPrice).toLocaleString();

    _render += `<div class="box-product" >
                    <div class="box-img" data-product_id="${idProduct}" data-product_name="${nameProduct}">
                        <a href="./productdetail.html">
                            <img src="..${imgProduct}" alt="">
                        </a>
                    </div>
                    <div class="box-title">
                        
                        ${uppercaseTitle}
                        
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

  //Add tham số khi click chi tiết sản phẩm
  let $link = document.querySelectorAll(`#content .box-img a`);
  for (let $item of $link) {
    $item.addEventListener('click', function (event) {
      //event.preventDefault();
      let dataproduct = $item.parentElement;
      let url = new URL($item.href);
      url.searchParams.append('product', dataproduct.dataset.product_name);
      url.searchParams.append('id', dataproduct.dataset.product_id);
      $item.href = url;
      console.log($item.href);
    });
  }

  //Add tham số khi user xem tất cả sản phầm của một loại (như mac, watch)
  let $linkTitle = document.querySelectorAll(`#content .box-header a`);
  //console.log($linkTitle);
  for (let $item of $linkTitle) {
    $item.addEventListener('click', function (event) {
      //event.preventDefault();
      console.log($item);
      let dataproduct = $item.parentElement;
      let url = new URL($item.href);
      url.searchParams.append('product', dataproduct.dataset.product_name);
      //console.log(url);
      $item.href = url;
    });
  }
};

let $selIphone = document.getElementById('renderIphones');
let $selMac = document.getElementById('renderMacs');
let $selWatch = document.getElementById('renderWatchs');
renderDataToPage(data_iphone, $selIphone);
renderDataToPage_other(data_mac, $selMac);
renderDataToPage_other(data_watch, $selWatch);

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
  productId = param.dataset.productId;
  productName = param.dataset.productName.split(' ')[0];

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
