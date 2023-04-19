//import dữ liệu và xác định sản phẩm cần load lên page
import { data_iphone } from '../database/data_iphone.js';
import { mac_data } from '../database/data_maca.js';

//get parameter from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameProduct = urlParams.get('product');
const idProduct = Number(urlParams.get('id'));

console.log(nameProduct, idProduct);


let dataAll = [...data_iphone, ...mac_data];
let product = '';

//tìm sản phẩm
for (let item of dataAll) {
  let product_id = item.id;
  let product_name = item.model.split(' ')[0];
  if (product_name == nameProduct && product_id == idProduct) {
    product = item;
    console.log('ssss', product);
    break;
  }
}

//nếu có sản phẩm, thực hiện load dữ liệu
if (product != '') {
  let $contentpage = document.querySelector('#content-product');

  let imgProduct = product.imgProduct[0];

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
          <a href="" class="add-to-cart-panel">MUA NGAY</a>
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
    
    for (let i = 0; i < product.color.length; i++) {
        let color = product.color[i];
        let strColor = color.split(' ');
        let colorI = strColor[strColor.length - 1]
        console.log(colorI);
        colorText += `<label class="attribute-color-${colorI}">
          <input type="radio" name="color_mac" value="${i}" title="${color}" checked />
          <div></div>
        </label>`;
    }

  $attribute_input.innerHTML = colorText;

  //Đổi hình theo màu
  let $img = document.querySelector(
    '#content-product .product-details-page .picture img'
  );
    console.log($img);

  let $colorCheck = document.querySelectorAll('.product-attribute-input input');

    console.log('s',$colorCheck);
    
    for (let j = 0; j < $colorCheck.length; j++) {
        $colorCheck[j].addEventListener('click', function () {
            let color = $colorCheck[j].value;
            console.log(color);
            for (let i = 0; i < $colorCheck.length; i++) {
                if (color == i) {
                    $img.src = product.imgProduct[i];
                }
            }
        });
  }
}
