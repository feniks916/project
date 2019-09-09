import '../scss/style.scss';

console.log('Works!');

var popup = document.querySelector('.swim_window');
var popupToggle = document.getElementById('open_callback');
var popupToggle1 = document.getElementById('open_callback1');
var popupClose = document.getElementById('close');

popupToggle.onclick = function() {
    popup.style.display = "flex";
}

popupToggle1.onclick = function() {
    popup.style.display = "flex";
}

popupClose.onclick = function() {
    popup.style.display = "none";
}

document.addEventListener('keydown', function(evt) {
    
    if (evt.keyCode === 27) {
        popup.style.display = "none";
    }
  });

var newPopup = document.querySelector('.swim_call');
var btnOpen = document.getElementById('openIt');
var btnOpen1 = document.getElementById('openIt1');
var popupClose2 = document.getElementById('close2');

btnOpen.onclick = function() {
    newPopup.style.display = "flex";
}

btnOpen1.onclick = function() {
    newPopup.style.display = "flex";
}

popupClose2.onclick = function() {
    newPopup.style.display = "none";
}

document.addEventListener('keydown', function(evt) {
    
    if (evt.keyCode === 27) {
        newPopup.style.display = "none";
    }
  });



  var brands = document.querySelector('.main_brands');
  var brandsButton = document.querySelector('.mb_close');
  var brandsClose = document.querySelector('.mb_close2');



  brandsButton.onclick = function() {
    if (window.screen.width >= 1440){
    brands.style.overflow = "visible";
    brands.style.height = "50vh";
    brandsButton.style.display = "none";
    brandsClose.style.display = "block";}
    else{
        brands.style.overflow = "visible";
        brands.style.height = "80vh";
        brandsButton.style.display = "none";
        brandsClose.style.display = "block"; 
    }
  }

  brandsClose.onclick = function () {
    brands.style.overflow = "hidden";
    brands.style.height = "160px";
    brandsClose.style.display = "none";
    brandsButton.style.display = "block";
  }

  var brandsText = document.querySelector('.main_reviews--text');
  var brandsButton1 = document.querySelector('.mb_close1');
  var brandsClose2 = document.querySelector('.mb_close3');



  brandsButton1.onclick = function() {

    brandsText.style.overflow = "visible";
    brandsText.style.height = "100%";
    brandsButton1.style.display = "none";
    brandsClose2.style.display = "block";
  }

  brandsClose2.onclick = function () {
    brandsText.style.overflow = "hidden";
    brandsText.style.height = "160px";
    brandsClose2.style.display = "none";
    brandsButton1.style.display = "block";
  }

  var typesText = document.querySelector('.main_types');
  var typesButton1 = document.querySelector('.types_close');
  var typesClose2 = document.querySelector('.types_close2');



  typesButton1.onclick = function() {

      if (window.screen.width >= 1440) {
    typesText.style.overflow = "visible";
    typesText.style.height = "50vh";
    typesButton1.style.display = "none";
    typesClose2.style.display = "block";}
    else{
        typesText.style.overflow = "visible";
        typesText.style.height = "90vh";
        typesButton1.style.display = "none";
        typesClose2.style.display = "block";
    }
  }

  typesClose2.onclick = function () {
    typesText.style.overflow = "hidden";
    typesText.style.height = "160px";
    typesClose2.style.display = "none";
    typesButton1.style.display = "block";
  }


  var asideOpen = document.querySelector('.aside_open');
  var aside = document.querySelector('.aside');
  var asideClose = document.getElementById('close3');
  var opacity = document.querySelector('.opacity');

  asideOpen.onclick = function ( ) {
    aside.style.display = "flex";
    opacity.style.opacity = "0.1";
  }

  asideClose.onclick = function () {
    aside.style.display = "none";
    opacity.style.opacity = "1";  
  }


