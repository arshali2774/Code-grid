gsap.set('.lines', {
  yPercent: 100,
});

const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelectorAll('.Para');

buttonOpen.addEventListener('click', () => {
  gsap.fromTo(
    '.color',
    {
      yPercent: 100,
    },
    {
      yPercent: -100,
      stagger: 0.2,
      duration: 1.5,
    }
  );
});
buttonClose.forEach((item) => {
  item.addEventListener('click', () => {
    gsap.to('.color', {
      yPercent: -200,
      stagger: 0.2,
      duration: 1.5,
    });
    document.body.style.background = item.dataset.color;
  });
});
