/*
 * Copyright (c) 2024 NusaTheme
 * Author: NusaTheme
 * This file is made for CURRENT TEMPLATE
*/

window.addEventListener('load', function () {
  platformDetection();
  initSkrollrElement();
  preloader();
  stickyHeader();
  pageCursor();
  initSlider();
  initPageNav();
  mobileMenu();
  initBackToTop();
  contactForm();
  initTyped();
  initParallaxBackground();
  initRellax();
  Splitting();
});
window.addEventListener('resize', function () {
  platformDetection();
})
window.addEventListener('scroll', function () {
  stickyHeader();
})


// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

function platformDetection() {
  const html = document.querySelector('html');
  var mobileTest;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || window.innerWidth < 992) {
    mobileTest = true;
    html.classList.add("mobile");
  }
  else {
    mobileTest = false;
    html.classList.remove("mobile");
  }
}
function initWow() {
  const wowInstance = new WOW({
    offset: 100,
    mobile: true,
    live: true,
  });
  wowInstance.init();

  const wowNumber = new WOW({
    offset: 100,
    mobile: true,
    live: true,
    boxClass: 'wow-num',
    callback: function (box) {
      if (box.querySelectorAll('.counter').length > 0) {
        $(box).find('.counter').countTo();
      }
    }
  });
  wowNumber.init();
}
function mobileMenu() {
  const button = document.querySelector('.js-menu-toggle');
  if (!button) return;
  const siteMenu = document.querySelector('.site-menu');
  const links = siteMenu.querySelectorAll('a');
  button.addEventListener('click', function () {
    siteMenu.classList.toggle('opened');
    button.classList.toggle('active');
  });
  links.forEach(link => {
    link.addEventListener('click', function () {
      setTimeout(function () {
        siteMenu.classList.toggle('opened');
        button.classList.toggle('active');
      }, 200);
    })
  })
}

function initTyped() {
  const texts = document.querySelectorAll('.typed-strings span');
  if (texts.length > 0) {
    var typed = new Typed('.typed', {
      strings: Array.from(texts).map(text => text.innerHTML),
      typeSpeed: 100,
      backDelay: 1000,
      loop: true,
      contentType: 'html', // or text
      // defaults to false for infinite loop
      loopCount: false,
    });

  }
}

function initParallaxBackground() {

  $(".parallax-bg-1").each(function () { $(this).parallax("50%", 0.1); });
  $(".parallax-bg-2").each(function () { $(this).parallax("50%", 0.2); });
  $(".parallax-bg-3").each(function () { $(this).parallax("50%", 0.3); });
  $(".parallax-bg-4").each(function () { $(this).parallax("50%", 0.4); });
  $(".parallax-bg-5").each(function () { $(this).parallax("50%", 0.5); });
  $(".parallax-bg-6").each(function () { $(this).parallax("50%", 0.6); });
  $(".parallax-bg-7").each(function () { $(this).parallax("50%", 0.7); });
  $(".parallax-bg-8").each(function () { $(this).parallax("50%", 0.8); });
}

function initSkrollrElement() {

  const scrollY5 = document.querySelectorAll('.scroll-y-5');
  scrollY5.forEach(element => {
    element.setAttribute('data-bottom-top', 'transform: translateY(5%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-5%);')
  })
  const scrollY10 = document.querySelectorAll('.scroll-y-10');
  scrollY10.forEach(element => {
    element.setAttribute('data-bottom-top', 'transform: translateY(10%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-10%);')
  })

  const scrollY15 = document.querySelectorAll('.scroll-y-15');
  scrollY15.forEach(element => {
    element.setAttribute('data-bottom-top', 'transform: translateY(15%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-15%);')
  });

  const scrollY25 = document.querySelectorAll('.scroll-y-25');
  scrollY25.forEach(element => {
    element.setAttribute('data-bottom-top', 'transform: translateY(25%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-25%);')
  });

  const scrollY50 = document.querySelectorAll('.scroll-y-50');
  scrollY50.forEach(element => {
    element.setAttribute('data-bottom-top', 'transform: translateY(50%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-50%);')
  });

  const centerScrollY10 = document.querySelectorAll('.center-scroll-y-10');
  centerScrollY10.forEach(element => {
    element.setAttribute('data-center', 'transform: translateY(10%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-10%);')
  });

  const centerScrollY15 = document.querySelectorAll('.center-scroll-y-15');
  centerScrollY15.forEach(element => {
    element.setAttribute('data-center', 'transform: translateY(15%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-15%);')
  });

  const centerScrollY25 = document.querySelectorAll('.center-scroll-y-25');
  centerScrollY25.forEach(element => {
    element.setAttribute('data-center', 'transform: translateY(25%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-25%);')
  });

  const centerScrollY50 = document.querySelectorAll('.center-scroll-y-50');
  centerScrollY50.forEach(element => {
    element.setAttribute('data-center', 'transform: translateY(50%);')
    element.setAttribute('data-top-bottom', 'transform: translateY(-50%);')
  });

  const scrollFadeOutUp = document.querySelectorAll('.scroll-fadeout-up');
  scrollFadeOutUp.forEach(element => {
    element.setAttribute('data-center', 'transform: translateY(0px); opacity: 1;')
    element.setAttribute('data-top-bottom', 'transform: translateY(-100px); opacity: 0;')
  });

  const scrollFadeOutDown = document.querySelectorAll('.scroll-fadeout-down');
  scrollFadeOutDown.forEach(element => {
    element.setAttribute('data-center', 'transform: translateY(0px); opacity: 1;')
    element.setAttribute('data-top-bottom', 'transform: translateY(100px); opacity: 0;')
  });

  const scrollFadeOutUp200 = document.querySelectorAll('.scroll-fadeout-up-200');
  scrollFadeOutUp200.forEach(element => {
    if (window.innerWidth < 1024) {
      element.setAttribute('data-start', 'opacity: 1;transform: translateY(0px);');
      element.setAttribute('data-top', 'opacity: 0;transform: translateY(-50px);');
    } else {
      element.setAttribute('data-center', 'opacity: 1;transform: translateY(0px);');
      element.setAttribute('data--200-center', 'opacity: 0;transform: translateY(-50px);');
    }
  })

  const scrollFadeOutUpTop = document.querySelectorAll('.scroll-fadeout-up-top');
  scrollFadeOutUpTop.forEach(element => {
    element.setAttribute('data-start', 'opacity: 1;transform: translateY(0px);');
    element.setAttribute('data-top', 'opacity: 0;transform: translateY(-50px);');
  })

  const skrollrInstance = skrollr.init();
  if (skrollrInstance.isMobile()) {
    skrollrInstance.destroy();
  }
}

function initRellax() {
  if (document.querySelectorAll('.relax').length > 0) {
    var rellax = new Rellax('.rellax', {
      vertical: true,
      horizontal: false
    });
  }

  if ($("[data-rellax-y]").length) {
    var rellax_y = new Rellax("[data-rellax-y]", {
      vertical: true,
      horizontal: false
    });
  }

  if ($("[data-rellax-x]").length) {
    if (($(window).width() >= 1024)) {
      var rellax_x = new Rellax("[data-rellax-x]", {
        horizontal: true
      });
    }
  }
}

function initCounter() {
  $('.counter').countTo();
}

function initSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      spaceBetween: 32,
      speed: 1000,
      pagination: { el: ".swiper-testimonial-pagination", type: "progressbar" },
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 32,
        }
      },
      navigation: {
        nextEl: ".testimonial-slider-nav .nav-next",
        prevEl: ".testimonial-slider-nav .nav-prev",
      }
    })
  }

  const imageSlider1 = document.querySelectorAll('.image-slider-1');
  imageSlider1.forEach(slider => {
    const nextBtn = slider.querySelector('.nav-next');
    const prevBtn = slider.querySelector('.nav-prev');
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      pagination: { el: slider.querySelector('.swiper-pagination') },
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      }
    })
  })
}

function debounce(func, timeout = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => func.apply(this, args), timeout);
  };
}

function initPageNav() {
  const onePageNavInstance = Object.create(onePageLink);
  onePageNavInstance.render();
}

var onePageLink = {
  config: {
    sections: [],
    currentClassName: 'active',
    linkSelector: '.one-page-link',
    scrollOffset: 80
  },

  render: function () {
    const links = document.querySelectorAll(this.config.linkSelector);
    const self = this;
    links.forEach(link => {
      if (self.isValidSelector(link.getAttribute('href'))) {
        self.config.sections.push(document.querySelector(link.getAttribute('href')));
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const destinationId = e.currentTarget.getAttribute('href');
          if (!destinationId) return;
          const destination = document.querySelector(destinationId);
          window.scrollTo({
            top: destination.offsetTop - (self.config.scrollOffset - 16),
            left: 0,
            behavior: "smooth",
          });
        });
      }
    });
    this.getCurrentSection();

    window.addEventListener('scroll', debounce(this.handleWindowOnScrolled.bind(this), 300));
  },

  isValidSelector: function (selector) {
    try {
      document.querySelector(selector)
    }
    catch {
      return false
    }
    return true
  },

  handleWindowOnScrolled: function () {
    this.getCurrentSection();
  },

  getCurrentSection: function () {
    const winH = window.innerHeight;
    this.config.sections.forEach(section => {
      if (section) {
        const sectionY = section.getBoundingClientRect().y;
        const sectionH = section.getBoundingClientRect().height;
        if (sectionY < winH && Math.abs(sectionY) < sectionH) {
          if (sectionY < this.config.scrollOffset + 1) {
            this.setActiveMenuLink(section.getAttribute('id'));
          }
        }
      }
    });
  },

  setActiveMenuLink: function (sectionId) {
    const currentActiveLink = document.querySelector(`${this.config.linkSelector}.${this.config.currentClassName}`);
    if (currentActiveLink) {
      currentActiveLink.classList.remove('active');
      const nextCurrentLink = document.querySelector(`a[href="#${sectionId}"]`);
      nextCurrentLink.classList.add('active');
    }
  }
}

function initBackToTop() {
  const backToTopInstance = Object.create(BackToTop);
  backToTopInstance.config = {
    button: document.querySelector('.back-to-top')
  }
  backToTopInstance.init();

}

var BackToTop = {
  config: {
    button: undefined,
    path: undefined,
  },
  init: function () {
    if (!this.config.button) return;
    const progressWrap = this.config.button.querySelector('.progress-wrap');
    this.config.path = progressWrap.querySelector('path');

    this.config.button.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    })

    this.updateProgress();
    window.addEventListener('scroll', debounce(this.updateProgress.bind(this), 100));
  },

  updateProgress: function () {
    const body = document.body;
    const html = document.documentElement;
    const documentH = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight;
    const windowScrollY = window.scrollY;

    const buttonWrap = this.config.button.closest('.back-to-top-wrapper');
    if (windowScrollY / documentH > 0.2) {
      buttonWrap.classList.add('active');
      setTimeout(() => {
        this.config.button.classList.add('active');
      }, 100)

      const pathLength = this.config.path.getTotalLength();
      this.config.path.style.strokeDasharray = pathLength + ' ' + pathLength;
      const progress = pathLength - (windowScrollY * (pathLength / documentH));
      this.config.path.style.strokeDashoffset = progress;
    } else {
      this.config.button.classList.remove('active');
      setTimeout(() => {
        buttonWrap.classList.remove('active');
      }, 300)
    }

  }

}

function contactForm() {
  const contactForm = document.querySelector('#contactForm');
  if (!contactForm) return;
  const formAction = contactForm.getAttribute('action');
  const formMessage = document.querySelector('.form-action-message');
  const successMessage = formMessage.querySelector('.success-message');
  const errorMessage = formMessage.querySelector('.error-message');

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (formAction === '#') {
      showSuccessMessage();
      return;
    }
    // Construct a FormData instance
    const formData = new FormData();
    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
      });
      if (response.status === 200) {
        contactForm.classList.add('wow-out', 'animated');
        setTimeout(() => {
          contactForm.classList.add('fadeOutUp');
          setTimeout(() => {
            showSuccessMessage();
            contactForm.classList.add('invisible');
          }, 1000)
        }, 200)
      } else {
        showErrorMessage();
      }
    } catch (e) {
      console.error(e);
      showErrorMessage();
    }
  })

  function showSuccessMessage() {
    successMessage.classList.remove('d-none');
    successMessage.classList.add('wow', 'fadeInDown');
    setTimeout(() => {
      successMessage.classList.add('animated');
    }, 200);
  }

  function showErrorMessage() {
    errorMessage.classList.remove('d-none');
    errorMessage.classList.add('wow', 'fadeInUp');
    setTimeout(() => {
      errorMessage.classList.add('animated');
    }, 200);
  }
}

function pageCursor() {
  const cursors = document.querySelectorAll('.mouse-cursor');
  const cursorTargetSelectors = ['a', '.cursor-pointer', 'button'];
  const cursorTargets = document.querySelectorAll(cursorTargetSelectors.join(','));
  if (cursors.length === 2) {
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorOuter = document.querySelector('.cursor-outer');

    window.addEventListener('mousemove', function (event) {
      cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });

    cursorTargets.forEach(target => {
      target.addEventListener('mouseenter', function () {
        cursorInner.classList.add('cursor-hover');
        cursorOuter.classList.add('cursor-hover');
      });

      target.addEventListener('mouseleave', function () {
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
      });
    });
    cursorInner.style.visibility = 'visible';
    cursorOuter.style.visibility = 'visible';
  }
}

function preloader() {
  const preloader = document.querySelector('.preloader');

  setTimeout(() => {
    preloader.classList.add('preloaded');

    initWow();
    // theme.wowAnimation.init();
    setTimeout(() => {
      preloader.classList.add('d-none');
      preloader.remove();
    }, 2000);
  }, 1000);
}

function stickyHeader() {
  if (window.scrollY > 0) {
    document.querySelector('.site-header').classList.add('body-scrolled');
    document.querySelector('.site-header').classList.remove('transparent');
  } else {
    document.querySelector('.site-header').classList.remove('body-scrolled');
    document.querySelector('.site-header').classList.add('transparent');
  }

}

