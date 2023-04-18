import { data_iphone } from '../database/data_iphone.js';
console.log(data_iphone);

let $sel = document.getElementById('renderIphones');

let _render = '';

// Đọc dữ liệu từ localStorage nếu có
let products = JSON.parse(localStorage.getItem('products')) || [];

// render iPhone
for (let i = data_iphone.length - 1; i > 0; i -= 3) {
  console.log(i);
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

  // Tạo đối tượng sản phẩm từ thông tin lấy được
  let product = {
    id: productId,
    name: productName,
  };

  products.push(product);

  // lưu giữ liệu vào localStorage dưới dạng JSON
  localStorage.setItem('products', JSON.stringify(products));
  console.log(products);

  let productsCount = products.length;

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

changeItemCount();
