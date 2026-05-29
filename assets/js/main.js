/* ============================================
   Hayal Güzellik — Ana JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------
     KARANLIK MOD AÇ/KAPA + localStorage
     ------------------------------------------- */
  var themeToggle = document.getElementById('themeToggle');
  var html = document.documentElement;
  var STORAGE_KEY = 'hayal-theme';

  // Kaydedilmiş temayı yükle, yoksa sistem tercihini kullan
  var savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  // <meta name="theme-color"> değerini güncelle
  function updateMetaThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.content = (theme === 'dark') ? '#2D2424' : '#FFF8F0';
    }
  }

  updateMetaThemeColor(html.getAttribute('data-theme'));

  // Tema butonuna tıklayınca aç/kapa
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = (current === 'dark') ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
      updateMetaThemeColor(next);
    });
  }

  /* -------------------------------------------
     MOBİL MENÜ
     ------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');
  var nav = navList ? navList.parentElement : null;
  var navLinks = document.querySelectorAll('.nav__link');

  function toggleMenu(force) {
    var isOpen;
    if (force !== undefined) {
      isOpen = force;
    } else {
      isOpen = (navToggle.getAttribute('aria-expanded') === 'false');
    }
    navToggle.setAttribute('aria-expanded', isOpen);
    nav.classList.toggle('nav--open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      toggleMenu();
    });
  }

  // Menüdeki bir linke tıklayınca menüyü kapat
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      toggleMenu(false);
    });
  }

  // Escape tuşu ile menüyü kapat
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      toggleMenu(false);
    }
  });

  /* -------------------------------------------
     SCROLL REVEAL — sayfa kaydırılınca elementler
     yavaşça görünür olur
     ------------------------------------------- */
  var revealElements = document.querySelectorAll(
    '.service-card, .gallery__item, .about__content, .about__visual, .contact__info, .contact__form-wrapper'
  );

  // Her elemente "reveal" class'ını ekle (başlangıçta gizli)
  for (var i = 0; i < revealElements.length; i++) {
    revealElements[i].classList.add('reveal');
  }

  function checkReveal() {
    var windowHeight = window.innerHeight;
    for (var i = 0; i < revealElements.length; i++) {
      var el = revealElements[i];
      // Element zaten görünür olduysa atla
      if (el.classList.contains('reveal--visible')) continue;

      var rect = el.getBoundingClientRect();
      // Element ekranın altından 50px yukarıya girdiyse görünür yap
      if (rect.top < windowHeight - 50) {
        el.classList.add('reveal--visible');
      }
    }
  }

  // Sayfa kaydırılınca ve ilk yüklemede kontrol et
  window.addEventListener('scroll', checkReveal, { passive: true });
  checkReveal();

  /* -------------------------------------------
     İLETİŞİM FORMU (Web3Forms)
     ------------------------------------------- */
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector('.contact__submit');
      var originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Gönderiliyor...';
      formStatus.textContent = '';

      var formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          formStatus.textContent = 'Mesajınız başarıyla gönderildi!';
          formStatus.style.color = 'var(--accent)';
          contactForm.reset();
        } else {
          formStatus.textContent = 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
          formStatus.style.color = 'var(--error)';
        }
      })
      .catch(function () {
        formStatus.textContent = 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.';
        formStatus.style.color = 'var(--error)';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
    });
  }

  /* -------------------------------------------
     HEADER GÖLGE — sayfa aşağı kaydırılınca header'a
     gölge eklenir
     ------------------------------------------- */
  var header = document.querySelector('.header');

  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 2px 20px var(--shadow)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  if (header) {
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

});
