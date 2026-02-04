(function () {
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
