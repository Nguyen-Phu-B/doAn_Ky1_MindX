//get parameter from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product');

//import du lieu
import { mac_data } from './data_mac.js';
import { watch_data } from './data_watch.js';
import { iphone_data } from './data_iphone.js';

let data;

if (product == 'mac') {
  data = mac_data;
} else if (product == 'watch') {
  data = watch_data;
} else if (product == 'iphone') {
  data = iphone_data;
}

let renderText = '';

//load du lieu container mac
let $container = document.querySelector('#content-mac');
renderText = `<div class="container">
<div class="row" id="itemMac">
</div>
</div>`;
$container.innerHTML = renderText;

//load toan du san pham Mac
let $itemMac = document.querySelector('#itemMac');
renderText = '';
for (let i = 0; i < data.length; i++) {
  let image = data[i].color_img[0]['img'];
  let oldPrice = data[i].oldPrice;
  let actualPrice = data[i].actualPrice;
  let title = data[i].model;
  let dataProduct = data[i].product;
  let dataId = data[i].id;
  console.log(dataProduct, dataId);
  renderText += `<div class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="box-item">
      <div class="box-product" data-p1="${dataProduct}" data-p2="${dataId}">
        <div class="box-img">
          <a href="./producpage.html">
            <img
              src="${image}"
              alt=""
            />
          </a>
        </div>
        <div class="box-detail">
          <div class="box-title">${title}</div>
          <div class="box-price">
            <div class="price-actual">${actualPrice}</div>
            <div class="price-old">${oldPrice}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

$itemMac.innerHTML = renderText;

//Add them số khi click link
let $link = document.querySelectorAll('#itemMac .box-product a');

// console.log($link);

for (let $item of $link) {
  $item.addEventListener('click', function (event) {
    //event.preventDefault();
    console.log($item.parentElement.parentElement);
    let dataproduct = $item.parentElement.parentElement;

    // console.log(dataproduct.dataset.p1);
    // console.log(dataproduct.dataset.p2);

    let url = new URL($item.href);
    url.searchParams.append('product', dataproduct.dataset.p1);
    url.searchParams.append('id', dataproduct.dataset.p2);
    $item.href = url;

    // console.log($item.href);
  });
}
