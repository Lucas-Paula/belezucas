const swiper = new Swiper('.swiper', {
    spaceBetween: 6,
    slidesPerView: 2.5,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      1728: {
        spaceBetween: 20  ,
        slidesPerView: 3.5,
      }
    }
  });
  