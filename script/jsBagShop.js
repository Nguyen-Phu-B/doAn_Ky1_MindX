import { data_iphone } from '../database/data_iphone.js';
import { mac_data } from '../database/data_maca.js';

let products = JSON.parse(localStorage.getItem('products')) || [];;

// KHÔNG HIỂU SAO KHÔNG LẤY ĐƯỢC ID getElementById('cal_items')
// // change sl bag
// const changeItemCount = () => {
//     // Lấy giá trị của cookie 'productCount'
//     const productCount = products.length;
//     console.log(productCount);

//     // Cập nhật nội dung của phần tử có id 'cal_items' với giá trị từ cookie
//     if (!productCount) {
//         return;
//     } else {
//         document.getElementById('cal_items').innerHTML = productCount;
//     }
// }

// changeItemCount();

const loadDataBagShop = (prData) => {
    let _render = '';
    let countPr = 0;
    let $selTble = document.getElementById('tbody_tble');
    let renderedIds = []; // mảng ghi nhớ những id đã render

    for (let i = 0; i < prData.length; i++) {

        let prRendered = {
            id: 0,
            color: '',
        }

        prRendered.id = prData[i].id;
        prRendered.color = prData[i].color[[0]];

        // Bỏ qua sản phẩm này nếu đã được render trước đó
        if (renderedIds.find(item => item.id === prData[i].id && item.color === prData[i].color[0])) {
            continue; 
        }
        // Đánh dấu id của sản phẩm đã được render
        renderedIds.push(prRendered);

        // đếm các id trung nhau làm số lượng sản phẩm
        countPr = prData.reduce((acc, item) => {
            if (item.id === prData[i].id
                &&
                JSON.stringify(item.color) === JSON.stringify(prData[i].color)) {
                acc++;
            }
            return acc;
        }, 0); 

        let priceProduct = Number(prData[i].actualPrice).toLocaleString();
        let title = prData[i].model.toUpperCase();
        let idProduct = prData[i].id
        let colorPr = prData[i].color;
        let imgPr = prData[i].imgProduct;

        _render += `
        <tr>
            <td class="img-product">
                <a href="">
                    <img src=".${imgPr}" alt="">
                </a>
            </td>
            <td class="product">
                <a class="title-product" href=""><b>${title}</b></a>
                <div class="sub-product">
                    <p>Màu sắc: ${colorPr}</p>
                </div>
                <div class="edit-item">
                    <a href="">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                </div>
            </td>
            <td class="price-product">
                <b>${priceProduct}</b>
            </td>
            <td class="count-product">
                <div class="inp-st">
                    <input type="text" name="" id="" data-id="${idProduct}" data-color="${colorPr}"  value="${countPr}">
                </div>
            </td>
            <td class="edit-tbl">
                <a href="">
                    <i data-id="${idProduct}" data-color="${colorPr}" class="fa-solid fa-trash-can fa-xl"></i>
                </a>
            </td>
        </tr>`
    }

    $selTble.innerHTML = _render;
}

loadDataBagShop(products);

const calTotal = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].actualPrice;
    }
    return total;
}

const updateTotal = () => {
    let total = calTotal();
    let fmTotal = Number(total).toLocaleString();

    document.getElementById('sub_sum').innerHTML = fmTotal;
    document.getElementById('sum_price').innerHTML = fmTotal;
}
updateTotal();

// kiểm tra và update 
const updateDataToLocal = (prId,prColor, prQual) => {
    let count = 0;
    for (let i = 0; i < products.length; i++){
        if (products[i].id === prId && products[i].color[0] === prColor) {
            count++;
            if (count < prQual) {
                products.push(products[i])
            } else if (count > prQual) {
                products.splice(i, 1);
                i--;
            }
        }
    }
}

// lấy dữ liệu quali và id từ inp số lượng
const changeDataLocal = (event) => {
    let idDta = parseInt(event.target.dataset.id);
    let colorDta = event.target.dataset.color;
    let countInp = parseInt(event.target.value);

    updateDataToLocal(idDta, colorDta, countInp);
    // Lưu mảng products vào localStorage
    localStorage.setItem('products', JSON.stringify(products));
    updateTotal();
}

// hàm lắng nghe sự kiện inp số lượng
const changeInpCalProduct = document.querySelectorAll('.inp-st input');
changeInpCalProduct.forEach(input => {
    input.addEventListener('change', changeDataLocal)
});

// Lắng nghe sự kiện click vào biểu tượng xóa sản phẩm
const deleteProductIcons = document.querySelectorAll('.edit-tbl i');
deleteProductIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        event.preventDefault();
        let idDta = parseInt(event.target.dataset.id);
        let colorDta = event.target.dataset.color;
        let validate = confirm('Bạn có chắc chắn muốn xóa hàng sản phẩm này?');
        if (validate = true) {
            row.remove(); // Xóa hàng sản phẩm
            updateDataToLocal(idDta, colorDta, 0);
            localStorage.setItem('products', JSON.stringify(products));
            updateTotal(); // Cập nhật tổng
        }
    });
});
