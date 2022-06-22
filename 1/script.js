const productName = prompt('Название товара', '');
const productQuantity = prompt('Количество товара', '');
const productCategory = prompt('Категория товара', '');
const productPrice = prompt('Цена товара', '');
const sum = productQuantity * productPrice;

if (productName === null || productName === "" || productQuantity === null || productQuantity === "" || productPrice === null || productPrice === "" || productCategory === null || productQuantity === "" || isNaN(productPrice) || isNaN(productQuantity)) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log(productName);
  console.log(typeof +productQuantity);
  console.log(typeof +productPrice);
  console.log(productCategory);
  console.log(`На складе ${productQuantity} единиц товара ${productName} на сумму ${sum} деревянных`);
}
