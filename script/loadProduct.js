import { data_iphone } from '../database/data_iphone.js';
console.log(data_iphone);

let $sel = document.getElementById("renderIphones");

let _render = '';

// for (let i = data_iphone.length - 1; i > 0; i--) {
// for (let i = 0; i < data_iphone.length; i++) { 
//     let title = `${data_iphone[i].model} ${data_iphone[i].color[0]} ${data_iphone[i].memory[0]} gb`;
//     let uppercaseTitle = title.toUpperCase();
//     _render += `<div class="box-product">
//                 <div class="box-img">
//                     <a href="">
//                         <img src=".${data_iphone[i].imgProduct[0]}" alt="">
//                     </a>
//                 </div>
//                 <div class="box-title">
//                     ${uppercaseTitle}
//                 </div>
//                 <div class="box-price">
//                     <div class="price-actual">
//                         ${data_iphone[i].actualPrice[0]}
//                     </div>
//                     <div class="price-old">
//                         ${data_iphone[i].oldPrice[0]}
//                     </div>
//                 </div>
//                 <div class="btn-add-cart">
//                     <a  class="box-add-cart" href="">
//                         <div class="box-add-btn">
//                             Add to cart
//                         </div>
//                         <div class="box-icon">
//                             <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
//                         </div>
//                     </a>
//                 </div>
//             </div> `
// }

for (let i = 0; i < data_iphone.length; i++) {
    let color = data_iphone[i].color && data_iphone[i].color.length > 0 ? data_iphone[i].color[0] : '';
    let memory = data_iphone[i].memory && data_iphone[i].memory.length > 0 ? data_iphone[i].memory[0] : '';
    let imgProduct = data_iphone[i].imgProduct && data_iphone[i].imgProduct.length > 0 ? data_iphone[i].imgProduct[0] : '';
    let actualPrice = data_iphone[i].actualPrice;
    let oldPrice = data_iphone[i].oldPrice; 

    let title = `${data_iphone[i].model}`;
    let uppercaseTitle = title.toUpperCase();
    _render += `<div class="box-product">
                <div class="box-img">
                    <a href="">
                        <img src="..${imgProduct}" alt="">
                    </a>
                </div>
                <div class="box-title">
                    ${uppercaseTitle}
                </div>
                <div class="box-price">
                    <div class="price-actual">
                        ${actualPrice}
                    </div>
                    <div class="price-old">
                        ${oldPrice}
                    </div>
                </div>
                <div class="btn-add-cart">
                    <a  class="box-add-cart" href="">
                        <div class="box-add-btn">
                            Add to cart
                        </div>
                        <div class="box-icon">
                            <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
                        </div>
                    </a>
                </div>
            </div> `;
}
    
    // let title = `${data_iphone[i].model} ${data_iphone[i].color[0]} ${data_iphone[i].memory[0]} gb`;
    // let uppercaseTitle = title.toUpperCase();


        // _render += `<div class="box-product">
        //         <div class="box-img">
        //             <a href="">
        //                 <img src="./img/iphone/iphone14pro/iphone_14_pro_gold.png" alt="">
        //             </a>
        //         </div>
        //         <div class="box-title">
        //             ${uppercaseTitle}
        //         </div>
        //         <div class="box-price">
        //             <div class="price-actual">
        //                 ${data_iphone[i].actualPrice[0]}
        //             </div>
        //             <div class="price-old">
        //                 ${data_iphone[i].oldPrice[0]}
        //             </div>
        //         </div>
        //         <div class="btn-add-cart">
        //             <a  class="box-add-cart" href="">
        //                 <div class="box-add-btn">
        //                     Add to cart
        //                 </div>
        //                 <div class="box-icon">
        //                     <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
        //                 </div>
        //             </a>
        //         </div>
        //     </div> `
        
$sel.innerHTML = _render;

var links = document.querySelectorAll('.box-add-cart');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      addToCart();
  });
});

// Function addCookies
const addToCart = () => {
    const cookies = document.cookie;
   
    let numberCart = cookies.split('=').pop();
    numberCart++;
    document.cookie = `cart = ${numberCart}`;
    const cookies1 = document.cookie;
    console.log(cookies1)
    console.log(cookies1.split('=').pop());
}
