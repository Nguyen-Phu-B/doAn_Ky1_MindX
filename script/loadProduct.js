import { data_iphone } from '../database/data_iphone.js';
<<<<<<< Updated upstream
import { mac_data } from '../database/data_maca.js';
=======
///console.log(data_iphone);

let $sel = document.getElementById('renderIphones');

let _render = '';
>>>>>>> Stashed changes

// Đọc dữ liệu từ localStorage nếu có
let products = JSON.parse(localStorage.getItem('products')) || [];

// render iPhone
<<<<<<< Updated upstream

const renderDataToPage = (paramData, selRender) => {
    let _render = '';
    for (let i = paramData.length -1 ; i > 0 ; i-=2) {
        let imgProduct = paramData[i].imgProduct && paramData[i].imgProduct.length > 0 ? paramData[i].imgProduct[0] : '';
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
=======
for (let i = data_iphone.length - 1; i > 0; i -= 3) {
  //console.log(i);
  let color =
    data_iphone[i].color && data_iphone[i].color.length > 0
      ? data_iphone[i].color[0]
      : '';
  let memory =
    data_iphone[i].memory && data_iphone[i].memory.length > 0
      ? data_iphone[i].memory[0]
      : '';
  let imgProduct =
    data_iphone[i].imgProduct && data_iphone[i].imgProduct.length > 0
      ? data_iphone[i].imgProduct[0]
      : '';
  let actualPrice = data_iphone[i].actualPrice;
  let oldPrice = data_iphone[i].oldPrice;

  let idProduct = data_iphone[i].id;
  let modelProduct = data_iphone[i].model.split(' ')[0];

  let title = `${data_iphone[i].model}`;
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
>>>>>>> Stashed changes
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
}
<<<<<<< Updated upstream

let $selIphone = document.getElementById("renderIphones");
let $selMac = document.getElementById("renderMacs");
renderDataToPage(data_iphone, $selIphone);
renderDataToPage(mac_data, $selMac);

//-------
=======
$sel.innerHTML = _render;
//==================================================
import { data_mac } from '../database/data_mac.js';
//console.log(data_mac);

$sel = document.getElementById('renderMacs');

_render = '';

// render Mac
for (let i = data_mac.length - 1; i > 0; i -= 1) {
  //console.log(i);
  //console.log(data_mac[i].color_img[0]['img']);

  let imgProduct =
    data_mac[i].color_img && data_mac[i].color_img.length > 0
      ? data_mac[i].color_img[0]['img']
      : '';
  //console.log(imgProduct);
  let actualPrice = data_mac[i].actualPrice;
  let oldPrice = data_mac[i].oldPrice;

  let idProduct = data_mac[i].id;
  let modelProduct = data_mac[i].model.split(' ')[0];

  let title = `${data_mac[i].model}`;
  let uppercaseTitle = title.toUpperCase();

  let fmActualPrice = Number(actualPrice).toLocaleString();
  let fmOldlPrice = Number(oldPrice).toLocaleString();

  _render += `<div class="box-product">
                <div class="box-img" data-product_id="${idProduct}" data-product_name="${modelProduct}">
                    <a href="./productdetail.html">
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
                    <a  class="box-add-cart" href="" data-product-id="${idProduct}" data-product-name="${modelProduct}">
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
$sel.innerHTML = _render;

//Add tham số khi click chi tiết sản phẩm
let $link = document.querySelectorAll(`.box-product .box-img a`);
for (let $item of $link) {
  $item.addEventListener('click', function (event) {
    // event.preventDefault();
    //console.log($item.parentElement);
    let dataproduct = $item.parentElement;

    //console.log(dataproduct.dataset.product_id);
    //console.log(dataproduct.dataset.product_name);

    let url = new URL($item.href);
    url.searchParams.append('product', dataproduct.dataset.product_name);
    url.searchParams.append('id', dataproduct.dataset.product_id);
    $item.href = url;
    // console.log($item.href);
  });
}

//==================================================
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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

=======
  // Tạo đối tượng sản phẩm từ thông tin lấy được
  let product = {
    id: productId,
    name: productName,
  };

  products.push(product);

  // lưu giữ liệu vào localStorage dưới dạng JSON
  localStorage.setItem('products', JSON.stringify(products));
  console.log(products);
>>>>>>> Stashed changes

  let productsCount = products.length;

<<<<<<< Updated upstream
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

=======
  // thêm số lượng các sản phẩm vào cookie
  document.cookie = `productCount= ${productsCount}`;

  alert('Sản Phẩm Được Thêm Vào Giỏ Hàng');
};

// change sl bag
const changeItemCount = () => {
  // Lấy giá trị của cookie 'productCount'
  const productCount = getCookie('productCount');
  console.log(productCount);

  // Cập nhật nội dung của phần tử có id 'cal_items' với giá trị từ cookie
  if (!productCount) {
    return;
  } else {
    document.getElementById('cal_items').textContent = productCount;
  }
};

// Hàm lấy giá trị của cookie theo tên
const getCookie = (name) => {
  let ccName = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(ccName) == 0) {
      return c.substring(ccName.length, c.length);
    }
  }
  return '';
};

>>>>>>> Stashed changes
changeItemCount();
