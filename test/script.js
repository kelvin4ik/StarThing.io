"use strict"
document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
        document.getElementById('blackOverlay').style.opacity = '0';
    }, 500);
});

var x = 10;

function createFunction1() {
  var x = 20;
  return new Function("return x;"); 
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; 
  }
  return f;
}
var f1 = createFunction1();
console.log(f1()); 
var f2 = createFunction2();
console.log(f2()); 

const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  Linux: function () {
    return navigator.userAgent.match(/LinuxM/i);
},
  any: function () {
      return (
              isMobile.Android()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              || isMobile.Linux()
              );
  }
};

if (isMobile.any()) {
  document.body.classList.add('touch');
} else {
  document.body.classList.add('_pc')
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

   function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // замінено getBoundingClientReact на getBoundingClientRect
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + 
      // замінено pageYOffset на Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
      Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) - 
      document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    speed:1500,
    autoplay:true,
    autoplaySpeed:4000,
    centerMode:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    pauseOnDotsHover:false,
  });
});
