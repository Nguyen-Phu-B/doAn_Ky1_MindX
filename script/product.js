//import du lieu
import { mac_data } from './data_mac.js';
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
for (let i = 0; i < mac_data.length; i++) {
  let image = mac_data[i].color_img[0]['img'];
  let oldPrice = mac_data[i].oldPrice;
  let actualPrice = mac_data[i].actualPrice;
  let title = mac_data[i].model;
  let dataProduct = mac_data[i].product;
  let dataId = mac_data[i].id;
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
