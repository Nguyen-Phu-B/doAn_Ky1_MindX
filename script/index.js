//LOAD DU LIEU THEO PRODUCT
import { mac_data } from './data_mac.js';
import { watch_data } from './data_watch.js';
import { iphone_data } from './data_iphone.js';
let $content = document.getElementById('content');
let $boxBooth;
let $link;
let boxProductText = '';
let boxHeaderText = '';
let header;
let data;

let list_proc_name = [
  { name: 'Mac', data: mac_data, type: 'mac' },
  { name: 'Watch', data: watch_data, type: 'watch' },
  { name: 'iPhone', data: iphone_data, type: 'iphone' },
];

//Load title cho sản phẩm (MAC/Watch)
for (let item of list_proc_name) {
  header = item['name'];
  boxHeaderText += `<div class="box-header shop1-${header}">
  <h2><a href="./product.html" data-t1="${item.type}">${header}</a></h2>
  </div>
  <div class="box-booth shop2-${header}">
  </div>`;
  $content.innerHTML = boxHeaderText;
}

//Load data cho sản phẩm (MAC/Watch)
for (let item of list_proc_name) {
  header = item['name'];
  $boxBooth = document.querySelector(`#content .shop2-${header}`);

  data = item['data'];
  boxProductText = '';
  for (let i = 0; i < 4; i++) {
    let image = data[i].color_img[0]['img'];
    let oldPrice = data[i].oldPrice;
    let actualPrice = data[i].actualPrice;
    let title = data[i].model;
    let dataProduct = data[i].product;
    let dataId = data[i].id;
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
}

//Add tham số khi click chi tiết sản phẩm
for (let item of list_proc_name) {
  header = item['name'];
  $link = document.querySelectorAll(`#content .shop2-${header} a`);

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
}

//Add tham số khi user xem tất cả sản phầm của một loại (như mac, watch)

let $linkTitle = document.querySelectorAll(`#content .box-header a`);
//console.log($linkTitle);
for (let $item of $linkTitle) {
  $item.addEventListener('click', function (event) {
    //event.preventDefault();
    //console.log($item);
    let url = new URL($item.href);
    url.searchParams.append('product', $item.dataset.t1);
    //console.log(url);
    $item.href = url;
  });
}
