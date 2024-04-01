// function formSubmit(event) {
//   event.preventDefault();

//   // text
//   // console.log(event.target.uname.value);

//   // radio
//   // console.log(event.target.marital_status.value);

//   // checkbox
//   let checkBoxes = event.target.lang;
//   let checkedBoxes = [];
//   for (let i = 0; i < checkBoxes.length; i++) {
//     if (checkBoxes[i].checked) {
//       checkedBoxes.push(checkBoxes[i].value);
//     }
//   }
//   // console.log(checkedBoxes);

//   // select
//   // console.log(
//   //   Array.from(event.target.cars.selectedOptions).map((x) => x.value)
//   // );

//   let formData = {
//     uname: event.target.uname.value,
//     marital_status: event.target.marital_status.value,
//     lang: checkedBoxes,
//     cars: Array.from(event.target.cars.selectedOptions).map((x) => x.value),
//   };

//   // console.log(formData);
//   // console.log(JSON.stringify(formData));

//   // let strFormData = `{"uname":"asdasd","marital_status":"married","lang":["az","en","tr"],"cars":["mrc","frd"]}`;
//   // console.log(JSON.parse(strFormData));
// }

// // console.log(document.forms);
// // console.log(document.forms[0]);
// // console.log(document.forms['testForm']);

// document.forms[0].addEventListener('submit', formSubmit);

function getProducts() {
  fetch('https://fakestoreapi.com/products/category/jewelery', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      setHTML(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function createProduct() {
  let newProductData = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };

  fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify(newProductData),
  });
}

function deleteProduct() {
  fetch('https://fakestoreapi.com/products/1', {
    method: 'DELETE',
  });
}

function setHTML(data) {
  console.log(data);
}
