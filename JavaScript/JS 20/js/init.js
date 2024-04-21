$().ready(() => {
  let products = getLocaleData('products');
  let temp = 0;

  for (let i = 0; i < products?.length; i++) {
    if (products[i].id > temp) {
      temp = products[i].id;
    }
  }

  setLocaleData('lastId', temp);
});
