// debugger
// renderIphone

let $sel = document.getElementById('renderIphones');

console.log($sel)
let _render = '';

for (i = 0; i < 4; i++) {
    _render += `<div class="box-product">
                <div class="box-img">
                    <a href="">
                        <img src="./img/iphone/iphone14pro/iphone_14_pro_gold.png" alt="">
                    </a>
                </div>
                <div class="box-title">
                    iPhone 14 Promax 128GB
                </div>
                <div class="box-price">
                    <div class="price-actual">
                        27.000.000
                    </div>
                    <div class="price-old">
                        32.000.000
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

