// let $input1 = document.querySelector('.gray input');
// let $input2 = document.querySelector('.blue');

// let $img = document.querySelector('.img img');

// console.log($input1);
// console.log($img);

// $input1.addEventListener('click', function () {
//   $img.src = './img/mac/macbookpro/macbookpro_m1pro_spacegray.webp';
// });

// $input2.addEventListener('click', function () {
//   $img.src = './img/mac/macbookpro/macbookpro_m1pro_silver.webp';
// });
//==========================

//=============================
let $testLink = document.querySelector('.testlink');
console.log($testLink);

let $getlink = document.querySelector('.getlink');
console.log($getlink.href);

let url = new URL($getlink.href);
console.log(url);

// $testLink.innerHTML = url;
let $btn = document.querySelector('.addpara');
console.log($btn);

let $display = document.querySelector('.display');
$display.innerHTML = url;

$getlink.addEventListener('click', function () {
  url.searchParams.append('product', 'mac');
  url.searchParams.append('id', '2');
  $getlink.href = url;
  $display.innerHTML = url;
});

$btn.addEventListener('click', function () {
  //let obj = { type: 'iphone', model: 14 };
  //url.searchParams.append(obj);
  url.searchParams.append('type', 'iphone');
  url.searchParams.append('model', '14');
  console.log(url);
  $getlink.href = url;
  $display.innerHTML = url;

  // /const params2 = new URLSearchParams("foo=1&bar=2");
  //$testLink.innerHTML = url;
});

let $getBtn = document.querySelector('.getpara');
console.log($getBtn);

// let $display = document.querySelector('.display');

$getBtn.addEventListener('click', function () {
  //let newpara = new URLSearchParams(url.search);
  let newpara = url.searchParams;
  //console.log(newpara);
  $display.innerHTML = newpara;
  let entries = newpara.entries();
  //console.log(entries);
  // for (const entry of entries) {
  //   console.log(`${entry[0]}: ${entry[1]}`);
  // }
  let type = newpara.get('type');
  let model = newpara.get('model');
  console.log(type, model);
});
