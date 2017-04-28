var items = 1;
$(document).ready(function(){
  if (items != 0) {
    $("#cart-icon").append("<div class='simpleCart_quantity'></div>")
  }
  else{
    simpleCart.empty();
    window.location.reload();
  }
function reloadQuantity(){
  var numitems = simpleCart.quantity();
  console.log(numitems);
  if(numitems===0 ){
    var emptycart = 'Your Shopping Cart is Empty';
    $('#remove-table').html(emptycart);
  }
}
reloadQuantity();




  });






simpleCart({

  cartColumns: [{
      view: "image",
      attr: "thumb",
      label: false
    }, {
      attr: "name",
      label: "Name"
    }, {
      view: "currency",
      attr: "price",
      label: "Price"
    },
     { view: "decrement", label: false},
    {
      attr: "quantity",
      label: "Qty"
    },
      { view: "increment", label: false},
    {
      view: "currency",
      attr: "total",
      label: "SubTotal"
    }, {
      view: "remove",
      text: "X",
      label: false
    }
  ],
  // "div" or "table" - builds the cart as a
  // table or collection of divs
  cartStyle: "table"

});

// $(document).ready(function(){
// if(lol==='3'){
//
// }
//
// })
