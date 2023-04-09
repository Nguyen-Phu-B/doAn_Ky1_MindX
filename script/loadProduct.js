import { data_iphone } from '../database/data_iphone.js';
console.log(data_iphone);

let $sel = document.getElementById("renderIphones");

let _render = '';



for (let i = data_iphone.length - 1; i > 4; i--) {
        _render += `<div class="box-product">
                <div class="box-img">
                    <a href="">
                        <img src="./img/iphone/iphone14pro/iphone_14_pro_gold.png" alt="">
                    </a>
                </div>
                <div class="box-title">
                    ${data_iphone[i].model}
                </div>
                <div class="box-price">
                    <div class="price-actual">
                        ${data_iphone[i].actualPrice[0]}
                    </div>
                    <div class="price-old">
                        ${data_iphone[i].oldPrice[0]}
                    </div>
                </div>
                <div class="btn-add-cart">
                    <a class="box-add-cart" href="">
                        <div class="box-add-btn">
                            Add to cart
                        </div>
                        <div class="box-icon">
                            <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
                        </div>
                    </a>
                </div>
            </div> `
        
    }
$sel.innerHTML = _render;

