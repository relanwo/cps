import '../scss/style.scss';
import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])

window.onload = () => {
  const width = window.innerWidth
  if (width < 768){
    const slider = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      init: true
    })
  }
}

// открытие закрытие sidenav
let burgerButton = document.querySelector(".menu__button");
let crossButton = document.querySelector('.sidenav-header__cross');
let sidenav = document.querySelector('.sidenav')
let overlay = document.querySelector('.overlay')

window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    overlay.classList.remove('overlay--active');
    sidenav.classList.remove('sidenav--active');
  }
}, true);

burgerButton.addEventListener('click', function () {
  sidenav.classList.add('sidenav--active');
  overlay.classList.add('overlay--active');
})
crossButton.addEventListener('click', function () {
  sidenav.classList.remove('sidenav--active');
  overlay.classList.remove('overlay--active');
})
overlay.addEventListener('click', function () {
  sidenav.classList.remove('sidenav--active');
  overlay.classList.remove('overlay--active');
})

// модальные окна
let callButton = document.querySelector(".menu__call");
let feedbackButton = document.querySelector(".menu__feedback");
let modalCall = document.querySelector('.modal-call')
let crossFeedbackButton = modalCall.querySelector('.modal__cross');
let modalFeedback = document.querySelector('.modal-feedback')
let crossModalFeedback = modalFeedback.querySelector('.modal__cross');
let callSidenavButton = document.querySelector('.sidenav-footer__call')
let feedbackSidenavButton = document.querySelector('.sidenav-footer__chat')


callButton.addEventListener('click', function () {
  modalCall.classList.add('modal-call--active');
  overlay.classList.add('overlay--active');
})
callSidenavButton.addEventListener('click', function () {
  modalCall.classList.add('modal-call--active');
  overlay.classList.add('overlay--active');
  sidenav.classList.remove('sidenav--active');
})
crossFeedbackButton.addEventListener('click', function () {
  modalCall.classList.remove('modal-call--active');
  overlay.classList.remove('overlay--active');
})

feedbackButton.addEventListener('click', function () {
  modalFeedback.classList.add('modal-feedback--active');
  overlay.classList.add('overlay--active');
})
feedbackSidenavButton.addEventListener('click', function () {
  modalFeedback.classList.add('modal-feedback--active');
  overlay.classList.add('overlay--active');
  sidenav.classList.remove('sidenav--active');
})
crossModalFeedback.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-feedback--active');
  overlay.classList.remove('overlay--active');
})

// читать далее для 768 и 1120
let moreButton = document.querySelector(".services-text__button");
let paragraphs = document.querySelectorAll('.services-text__paragraph');

var changeButtonRead = function () {
  if (moreButton.innerHTML === "Читать далее") {
    moreButton.innerHTML = "Скрыть";
  } else {
    moreButton.innerHTML = "Читать далее";
  }

  moreButton.classList.toggle('services-text__button--active');
};

let resizeRead = function () {
  let arrRead = [];
  let selectorRead = 'services-text__paragraph_hidden';
  let paramRead = 1;

  if (window.matchMedia('(min-width: 1120px)').matches) {
    selectorRead = 'services-text__paragraph_768hidden';
    paramRead = 2;
  }

  arrRead.push(paramRead, selectorRead)
  return arrRead;
};

moreButton.addEventListener('click', function () {
  let arrRead = resizeRead();
  for (var i = arrRead[0]; i < paragraphs.length; i++) {
    paragraphs[i].classList.toggle(arrRead[1]);
  }
  arrRead.length = 0;

  changeButtonRead(moreButton.innerHTML);
});

// brands-slider при 768 и 1120
var buttonBrands = document.querySelector(".brands-slider__dropdown");
var cardsBrands = document.getElementsByClassName("brands-slider__card");

var changeButtonShowMoreBrands = function () {
  if (buttonBrands.innerHTML === "Показать все") {
    buttonBrands.innerHTML = "Скрыть";
  } else {
    buttonBrands.innerHTML = "Показать все";
  }

  buttonBrands.classList.toggle('brands-slider__dropdown--active');
};


let resizeBrands = function () {
  let param = 6;
  let selector = 'brands-slider__card--hidden768';
  let length = 9;
  let arr = [];

  if (window.matchMedia('(min-width: 1120px)').matches) {
    selector = 'brands-slider__card--hidden1120';
    param = 8;
    length = 12;
  }

  arr.push(param, selector, length)
  return arr;
};

buttonBrands.addEventListener('click', function () {
  let arr = resizeBrands();
  for (var i = arr[0]; i < arr[2]; i++) {
    cardsBrands[i].classList.toggle(arr[1]);
  }
  arr.length = 0;
  changeButtonShowMoreBrands(buttonBrands.innerHTML);
});

// tech-slider при 768 и 1120
var buttonTech = document.querySelector(".tech-slider__dropdown");
var cardsTech = document.getElementsByClassName("tech-slider__card");

var changeButtonShowMoreTech = function () {
  if (buttonTech.innerHTML === "Показать все") {
    buttonTech.innerHTML = "Скрыть";
  } else {
    buttonTech.innerHTML = "Показать все";
  }

  buttonTech.classList.toggle('tech-slider__dropdown--active');
};


let resizeTech = function () {
  let param = 3;
  let selector = 'tech-slider__card--hidden768';
  let length = 6;
  let arr = [];

  if (window.matchMedia('(min-width: 1120px)').matches) {
    selector = 'tech-slider__card--hidden1120';
    param = 4;
    length = 8;
  }

  arr.push(param, selector, length)
  return arr;
};

buttonTech.addEventListener('click', function () {
  let arr = resizeTech();
  for (var i = arr[0]; i < arr[2]; i++) {
    cardsTech[i].classList.toggle(arr[1]);
  }
  arr.length = 0;
  changeButtonShowMoreTech(buttonTech.innerHTML);
});
