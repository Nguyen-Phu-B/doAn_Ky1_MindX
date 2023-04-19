//get parameter from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product');

//import du lieu
import { data_iphone } from '../database/data_iphone.js';
import { data_mac } from '../database/data_mac.js';
import { data_watch } from '../database/data_watch.js';

let data;
let titleHeader;
if (product == 'macbook') {
  data = data_mac;
  titleHeader = 'MACBOOK';
} else if (product == 'iphone') {
  data = data_iphone;
  titleHeader = 'IPHONE';
} else if (product == 'apple') {
  data = data_watch;
  titleHeader = 'WATCH';
}

console.log(data);

let renderText = '';

//load du lieu container
let $container = document.querySelector('#content-product');
renderText = `<div class="titleHeader">${titleHeader}</div>
<div class="container">
<div class="row" id="item-product">
</div>
</div>`;
$container.innerHTML = renderText;

//load toan du san pham Mac
let $itemMac = document.querySelector('#item-product');
let paramData = data;
renderText = '';
for (let i = 0; i < paramData.length; i++) {
  let imgProduct =
    paramData[i].color_img && paramData[i].color_img.length > 0
      ? paramData[i].color_img[0]['img']
      : '';
  let actualPrice = paramData[i].actualPrice;
  let oldPrice = paramData[i].oldPrice;
  let fmActualPrice = Number(actualPrice).toLocaleString();
  let fmOldlPrice = Number(oldPrice).toLocaleString();

  let title = paramData[i].model;
  let uppercaseTitle = title.toUpperCase();

  let idProduct = paramData[i].id;
  let nameProduct = paramData[i].model.split(' ')[0];

  renderText += `<div class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="box-item">
      <div class="box-product" >
        <div class="box-img" data-product_id="${idProduct}" data-product_name="${nameProduct}">
          <a href="./productdetail.html">
            <img
              src="${imgProduct}"
              alt=""
            />
          </a>
        </div>
        <div class="box-detail">
          <div class="box-title">
          ${uppercaseTitle}
          </div>
          <div class="box-price">
            <div class="price-actual">${fmActualPrice}</div>
            <div class="price-old">${fmOldlPrice}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

$itemMac.innerHTML = renderText;

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
    //console.log($item.href);
  });
}
