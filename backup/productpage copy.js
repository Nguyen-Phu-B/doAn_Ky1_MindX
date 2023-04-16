//get parameter from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product1 = urlParams.get('product');
const product2 = Number(urlParams.get('id'));

//import dữ liệu và xác định sản phẩm cần load lên page
import { mac_data } from './data_mac.js';
import { watch_data } from './data_watch.js';
let product;

for (let item of mac_data) {
  if (item.product == product1 && item.id == product2) {
    product = item;
  }
}

let renderText = `<div class="product-details-page">
<div class="page-body">
  <div class="gallery">
    <div class="picture">
      <img
        src="${product.color_img[0]['img']}"
        alt=""
      />
    </div>
  </div>
  <div class="overview">
    <div class="wrapper-info">
      <div class="product-name">
      ${product.model}
      </div>
      <div class="star-review"></div>
    </div>
    <div class="prices">
      <div class="price-actual">${product.actualPrice}</div>
      <div class="price-old">${product.oldPrice}</div>
    </div>
    <div class="attributes">
      <div class="product-attribute">
        <div class="product-attribute-label">Màu sắc</div>
        <div class="product-attribute-input">
          
        </div>
      </div>
    </div>
    <div class="add-cart">
      <div class="add-to-cart-panel">MUA NGAY</div>
    </div>
    <div class="product-policy">
      <div class="prd-policy">
        <ul class="fa-ul">
          <li>
            <span class="fa-li"
              ><i class="fa-solid fa-circle-check"></i></span
            >Hư gì đổi nấy 12 tháng
          </li>
          <li>
            <span class="fa-li"
              ><i class="fa-solid fa-circle-check"></i></span
            >Bảo hành chính hãng 1 năm
          </li>
          <li>
            <span class="fa-li"
              ><i class="fa-solid fa-circle-check"></i></span
            >Giao hàng nhanh toàn quốc
          </li>
          <li>
            <span class="fa-li"
              ><i class="fa-solid fa-circle-check"></i></span
            >Gọi đặt mua 1900 6626 (7:30 - 22:00)
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>`;

let $contentpage = document.querySelector('.product-details-page');
$contentpage.innerHTML = renderText;

//Load dữ liệu màu sắc
let $attribute_input = document.querySelector('.product-attribute-input');
let colorText = ``;

//console.log(product.color);

for (let item of product.color_img) {
  if (item['color'] == 'space gray') {
    colorText += `<label class="attribute-color-gray">
          <input type="radio" name="color_mac" value="space gray" checked />
          <div></div>
        </label>`;
  } else if (item['color'] == 'silver') {
    colorText += `<label class="attribute-color-silver">
      <input type="radio" name="color_mac" value="silver" />
      <div></div>
    </label>`;
  } else if (item['color'] == 'starlight') {
    colorText += `<label class="attribute-color-starlight">
      <input type="radio" name="color_mac" value="starlight" />
      <div></div>
    </label>`;
  } else if (item['color'] == 'midnight') {
    colorText += `<label class="attribute-color-midnight">
      <input type="radio" name="color_mac" value="midnight" />
      <div></div>
    </label>`;
  } else if (item['color'] == 'gold') {
    colorText += `<label class="attribute-color-gold">
      <input type="radio" name="color_mac" value="gold" />
      <div></div>
    </label>`;
  }
}

$attribute_input.innerHTML = colorText;

//Đổi hình theo màu
let $img = document.querySelector(
  '#content-mac .product-details-page .picture img'
);

let $colorCheck = document.querySelectorAll('.product-attribute-input input');
//console.log($colorCheck);

for (let item of $colorCheck) {
  item.addEventListener('click', function () {
    let color = item.value;
    //console.log(color);
    for (let x of product.color_img) {
      //console.log(x);
      if (x['color'] == color) {
        $img.src = x['img'];
        break;
      }
    }
  });
}
