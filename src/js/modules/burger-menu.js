const burgermenu = () => {
  const burger = document.querySelector('.header__burger');

  if (burger === null) {
    return false;
  }

  burger.addEventListener('click', () =>
    document.body.classList.toggle('nav-open')
  );
};

export default burgermenu;
