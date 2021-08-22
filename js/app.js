const navbar = {
   container: document.querySelector('header.header'),
   active: document.querySelector('.header .nav-link'),
   activeLink: function (target) {
      if (navbar.active != target) {
         navbar.active.classList.remove('active');
         navbar.active = target;
         navbar.active.classList.add('active');
      }
   },
   clickHandler: function (e, target, offset) {
      e.preventDefault();
      navbar.activeLink(target);

      const href = target.getAttribute('href');
      const elementOffsetTop = document.querySelector(href).offsetTop - offset;

      window.scroll({
         top: elementOffsetTop,
         behavior: 'smooth',
      });
   },
   smothScroll: function (offset) {
      navbar.container.addEventListener(
         'click',
         function (e) {
            const target = e.target;
            if (target.classList.contains('nav-link')) {
               navbar.clickHandler(e, target, offset);
            }
         },
         false
      );
   },
};

navbar.smothScroll(100);
window.addEventListener('resize', () => navbar.smothScroll(100));
