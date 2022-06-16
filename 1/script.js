const product_name_user = prompt('Название товара', '');
console.log(typeof product_name_user);
const product_quantity_user = prompt('Количество товара', '');
if (isFinite(product_quantity_user)) {
  console.log(typeof +product_quantity_user);
} else {
  alert ('Вы ввели некорректные данные');
}

const product_category_user = prompt('Категория товара', '');
console.log(typeof product_category_user);
const product_price_user = prompt('Цена товара', '');
if (isFinite(product_price_user)) {
  console.log(typeof +product_quantity_user);
} else {
  alert('Вы ввели некорректные данные');
}

