$('form#createProductForm').on('submit', (e) => {
  e.preventDefault();
  let form = e.target;
  let newProduct = {
    id: getNewId(),
    name: form.name.value,
    price: form.price.value,
    picture: form.picture.value,
  };

  let oldProducts = getLocaleData('products') || [];
  console.log(oldProducts);
  oldProducts.push(newProduct);
  console.log(oldProducts);
  setLocaleData('products', oldProducts);
  setLocaleData('lastId', newProduct.id);
});
