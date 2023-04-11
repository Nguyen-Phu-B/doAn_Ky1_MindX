let watch_data = [
  {
    id: 1,
    brand: 'apple',
    series: 'series 7',
    model: 'nhom GPS',
    display: [41, 45],
    color: ['midnight', 'starlight', 'blue', 'green'],
    oldPrice: [11990000, 12990000],
    actualPrice: [7990000, 8490000],
  },
  {
    id: 2,
    brand: 'apple',
    series: 'series 7',
    model: 'nhom GPS cellular',
    display: [41],
    color: ['green'],
    oldPrice: [14990000],
    actualPrice: [9990000],
  },
];

const $blueColor = document.getElementById('blue');
const $greenColor = document.getElementById('green');

const $img = document.getElementById('img');

$blueColor.addEventListener('click', function () {
  $img.src = 'watch_series7_nhom_blue.webp';
});

$greenColor.addEventListener('click', function () {
  $img.src = 'watch_series7_nhom_green.webp';
});
