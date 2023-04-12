let $input_color_gray = document.querySelector('.attribute-color-gray input');
let $input_color_silver = document.querySelector(
  '.attribute-color-silver input'
);
let $input_color_starlight = document.querySelector(
  '.attribute-color-starlight input'
);
let $input_color_midnight = document.querySelector(
  '.attribute-color-midnight input'
);

let $img = document.querySelector(
  '#content-mac .product-details-page .picture img'
);

console.log($input_color_gray);
console.log($img);

$input_color_gray.addEventListener('click', function () {
  $img.src = './img/mac/macbookpro/macbookpro_m2_spacegray.webp';
});

$input_color_silver.addEventListener('click', function () {
  $img.src = './img/mac/macbookpro/macbookpro_m2_silver.webp';
});

$input_color_starlight.addEventListener('click', function () {
  $img.src = './img/mac/macbookair/macbookair_m2_starlight.png';
});

$input_color_midnight.addEventListener('click', function () {
  $img.src = './img/mac/macbookair/macbookair_m2_midnight.png';
});
