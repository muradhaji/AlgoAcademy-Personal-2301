$().ready(() => {
  let products = getLocaleData('products') || [];
  let resHTML = '';

  for (let i = 0; i < products.length; i++) {
    resHTML += `
    <div class="product">
      <img src="${products[i].picture}" alt="">
      <div class="content">
        <span class="name">${products[i].name}</span>
        <span class="price">${products[i].price}</span>
        <div class="add" onclick="addToCart(${products[i].id})">Add To Cart</div>
      </div>
    </div>
    `;
  }

  $('div#productContainer').html(resHTML);
});
