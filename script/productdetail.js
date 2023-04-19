//get parameter from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameProduct = urlParams.get('product');
const idProduct = Number(urlParams.get('id'));

console.log(nameProduct, idProduct);

//import dữ liệu và xác định sản phẩm cần load lên page
import { data_mac } from '../database/data_mac.js';
import { data_watch } from '../database/data_watch.js';

let dataAll = [...data_mac, ...data_watch];
let product = '';

//tìm sản phẩm
for (let item of dataAll) {
  let product_id = item.id;
  let product_name = item.model.split(' ')[0];
  if (product_name == nameProduct && product_id == idProduct) {
    product = item;
    console.log(item);
    break;
  }
}

//nếu có sản phẩm, thực hiện load dữ liệu
if (product != '') {
  let $contentpage = document.querySelector('#content-product');

  let imgProduct = product.color_img[0]['img'];

  let title = product.model;
  let uppercaseTitle = title.toUpperCase();

  let fmActualPrice = Number(product.actualPrice).toLocaleString();
  let fmOldlPrice = Number(product.oldPrice).toLocaleString();

  let renderText = `
  <div class="product-details-page">
    <div class="page-body">
      <div class="gallery">
        <div class="picture">
          <img
            src="${imgProduct}"
            alt=""
          />
        </div>
      </div>
      <div class="overview">
        <div class="wrapper-info">
          <div class="product-name">
          ${uppercaseTitle}
          </div>
          <div class="prices">
          <div class="price-actual">${fmActualPrice}</div>
          <div class="price-old">${fmOldlPrice}</div>
        </div>
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

  $contentpage.innerHTML = renderText;

  //Load dữ liệu màu sắc
  let $attribute_input = document.querySelector('.product-attribute-input');
  let colorText = ``;

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
    } else if (item['color'] == 'red') {
      colorText += `<label class="attribute-color-red">
      <input type="radio" name="color_mac" value="red" />
      <div></div>
    </label>`;
    } else if (item['color'] == 'graphite') {
      colorText += `<label class="attribute-color-graphite">
      <input type="radio" name="color_mac" value="graphite" />
      <div></div>
    </label>`;
    }
  }

  $attribute_input.innerHTML = colorText;

  //Đổi hình theo màu
  let $img = document.querySelector(
    '#content-product .product-details-page .picture img'
  );

  let $colorCheck = document.querySelectorAll('.product-attribute-input input');

  for (let item of $colorCheck) {
    item.addEventListener('click', function () {
      let color = item.value;
      for (let x of product.color_img) {
        if (x['color'] == color) {
          $img.src = x['img'];
          break;
        }
      }
    });
  }
}
