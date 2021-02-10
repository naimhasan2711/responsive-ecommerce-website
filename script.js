/*----------------drop down menu for small screen start ----------------- */

var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
/*----------------drop down menu for small screen end ----------------- */

/*---------------- single product details image moving-start ----------------- */
var productImage = document.getElementById("ProductImg");

var smallImage1 = document.getElementById("small-img-1");
var smallImage2 = document.getElementById("small-img-2");
var smallImage3 = document.getElementById("small-img-3");
var smallImage4 = document.getElementById("small-img-4");

smallImage1.addEventListener("click", function () {
  productImage.src = smallImage1.src;
});

smallImage2.addEventListener("click", function () {
  productImage.src = smallImage2.src;
});

smallImage3.addEventListener("click", function () {
  productImage.src = smallImage3.src;
});

smallImage4.addEventListener("click", function () {
  productImage.src = smallImage4.src;
});

/*---------------- single product details image moving-end ----------------- */
