// $('div#test').html('Hello');
// $('div#test').on('click', () => {
//   console.log('Div clicked');
// });
// console.log($('ul#list1').children().css("color", "red"));

$('div#test1').on('click', () => {
  $('ul#list1').fadeToggle(2000);
});
$('div#test2').on('click', () => {
  $('ul#list1').toggle();
});

$('div#test3').on('click', () => {
  // $.cookie('name', 'john', { expires: 1, path: '/' });
  $.cookie('user', { name: 'john', age: 27 });
});
$('div#test4').on('click', () => {
  console.log($.cookie('name'));
});

$().ready(() => {
  $('ul#list1').fadeIn(1000);
  setTimeout(() => {
    $('ul#list1').fadeOut(1000);
  }, 1000);
});

// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/todos',
//   data: {
//     name: 'john',
//   },
//   method: 'POST',
//   success: function (result) {
//     $('div#test').html(JSON.stringify(result));
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });
