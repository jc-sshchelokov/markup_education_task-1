const burgermenu = () => {
  const burger = document.querySelector('.header__burger'),
    navMenu = document.querySelector('.header__nav'),
    navLink = document.querySelectorAll('.header__list-link');

  if (burger === null || navMenu === null || navLink.length === 0) {
    return false;
  }

  const addActiveClass = () => {
    burger.classList.add('header__burger_active');
    navMenu.classList.add('header__nav_active');
    document.body.style.overflow = 'hidden';
  };

  const removeActiveClass = () => {
    burger.classList.remove('header__burger_active');
    navMenu.classList.remove('header__nav_active');
    document.body.style.overflow = 'unset';
  };

  burger.addEventListener('click', () => {
    if (burger.classList.contains('header__burger_active')) {
      removeActiveClass();
    } else {
      addActiveClass();
    }
  });
};

export default burgermenu;
