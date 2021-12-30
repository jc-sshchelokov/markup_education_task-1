const burgerMenu = () => {
  const burger = document.querySelector('.header__burger');

  if (!burger) {
    return false;
  }

  burger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      if (innerWidth > 768) {
        document.body.classList.remove('nav-open');
      }
    }, 100);
  });
};

export default burgerMenu;
