const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveal.length; i++) {
    const {top, bottom} = reveal[i].getBoundingClientRect();

    if ((bottom < 0 || top > window.innerHeight) & reveal[i].classList.contains('reveal_active')) {
      reveal[i].classList.toggle('reveal_active');
    } else if (bottom > 0 & top < window.innerHeight & !reveal[i].classList.contains('reveal_active')) {
      reveal[i].classList.toggle('reveal_active');
    }
  }
});