//LOAD DU LIEU THEO PRODUCT
import { mac_data } from './data_mac.js';
let $content = document.getElementById('content');
let $boxBooth;
// let $productPage;
let boxProductText = '';
let boxHeaderText = '';
let header;

//MAC
header = 'Mac';
boxHeaderText += `<div class="box-header">
<h2><a href="./product.html">${header}</a></h2>
</div>
<div class="box-booth">
</div>`;
$content.innerHTML = boxHeaderText;
$boxBooth = document.querySelector('#content .box-booth');

for (let i = 0; i < 4; i++) {
  let image = mac_data[i].color_img[0]['img'];
  let oldPrice = mac_data[i].oldPrice;
  let actualPrice = mac_data[i].actualPrice;
  let title = mac_data[i].model;
  let dataProduct = mac_data[i].product;
  let dataId = mac_data[i].id;
  //let hrefLink =
  boxProductText += `<div class="box-product" data-p1="${dataProduct}" data-p2="${dataId}">
      <div class="box-img">
        <a href="./producpage.html">
          <img
            src="${image}"
            alt=""
          />
        </a>
      </div>
      <div class="box-title">${title}</div>
      <div class="box-price">
        <div class="price-actual">${actualPrice}</div>
        <div class="price-old">${oldPrice}</div>
        </div>
    </div>`;
}
$boxBooth.innerHTML = boxProductText;

//Add them số khi click link
let $link = document.querySelectorAll('#content .box-booth a');

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
  });
}
