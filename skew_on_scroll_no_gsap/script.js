const content = document.querySelectorAll('section');
console.log(content);
let currentScrollPos = window.scrollY;

const callDiscort = () => {
  const newPos = window.scrollY;
  const diff = newPos - currentScrollPos;
  const speed = diff * 0.35;
  content.forEach((item) => {
    item.style.transform = `skewY(${speed}deg)`;
  });

  currentScrollPos = newPos;
  requestAnimationFrame(callDiscort);
};
callDiscort();
