"use strict"

window.addEventListener('load', windowload);

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
    // centerMode:true, // убираем этот параметр
    pauseOnFocus:false,
    pauseOnHover:false,
    pauseOnDotsHover:false,
    lazy: true,
    slidesToShow: 1, // показываем 1 слайд на экране
    slidesToScroll: 1, // прокручиваем 1 слайд за раз
    responsive: [
      {
        breakpoint: 768, // если ширина экрана меньше или равна 768 пикселей
        settings: {
          slidesToShow: 1, // показываем 1 слайд на экране
          slidesToScroll: 1 // прокручиваем 1 слайд за раз
        }
      },
      {
        breakpoint: 480, // если ширина экрана меньше или равна 480 пикселей
        settings: {
          slidesToShow: 1, // показываем 1 слайд на экране
          slidesToScroll: 1 // прокручиваем 1 слайд за раз
        }
      },
      {
        breakpoint: 320, // если ширина экрана меньше или равна 320 пикселей
        settings: {
          slidesToShow: 1, // показываем 1 слайд на экране
          slidesToScroll: 1 // прокручиваем 1 слайд за раз
        }
      }
    ]
  });
});
 /*--------------------------*/ 


function windowload(){

  function digitsCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
     if (digitsCounters) {
        digitsCounters.forEach(digitsCounter => {
          digitsCountersAnimate(digitsCounter);
        });
      }
    }

    function digitsCountersAnimate(digitsCounter) {
      let startTimestamp = null;
      const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
      const startValue = parseInt(digitsCounter.innerHTML);
      const startPosition = 0;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  //digitsCountersInit();

   let options = {
    threshold: 0.4
  }
  let observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
          }

        }
    });
  }, options);

    let sections = document.querySelectorAll('.page__section');
    if (sections.length) { 
      sections.forEach(section => {
        observer.observe(section);
      }); 
    }
}
