import { mac_data } from './data_mac.js';
let $itemMac = document.getElementById('itemMac');

let renderText = '';

for (let item of mac_data) {
  console.log(item);
  renderText += `<div class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="box-item">
      <div class="box-product">
        <div class="box-img">
          <a href="">
            <img
              src="${item.img[0]}"
              alt=""
            />
          </a>
        </div>
        <div class="box-detail">
          <div class="box-title">${item.model}</div>
          <div class="box-price">
            <div class="price-actual">${item.actualPrice}</div>
            <div class="price-old">${item.oldPrice}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

$itemMac.innerHTML = renderText;
