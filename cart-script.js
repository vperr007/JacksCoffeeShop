var items = 1;
$(document).ready(function() {
  if (items != 0) {
    $("#cart-icon").append("<div class='simpleCart_quantity'></div>")
  } else {
    simpleCart.empty();
  }

  // function reload(){
  //   window.localStorage.removeItem(key);
  // };

  function askQuantity() {
    var numitems = simpleCart.quantity();
    console.log(numitems);

    if (numitems < 1) {
      var shop = "<button class='btn btn-default' id='shop-btn' style='text-align:center'><a href='mainshop.html'>SHOP NOW</a></button>";
      var emptycart = 'Your Cart is Empty';
      $('.simpleCart_items').removeClass();
      $('#remove-table').html(emptycart).css({
          'font-size': '3vh',
          'padding-bottom': '4vh'
        })
        .after(shop);

      $('.center-section').css({'text-align': 'center'});

    }



  }
  askQuantity();




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
    {
      view: "decrement",
      label: false
    },
    {
      attr: "quantity",
      label: "Qty"
    },
    {
      view: "increment",
      label: false
    },
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
  cartStyle: "table",
  shippingFlatRate: 10

});

// $(document).ready(function(){
// if(lol==='3'){
//
// }
//
// })
