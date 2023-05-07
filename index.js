/* 在點擊導航列上的鏈接時，滑動到對應的區塊 */
const navLinks = document.querySelectorAll('nav a');

for (let link of navLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target.getAttribute('href');
    const targetElement = document.querySelector(target);

    targetElement.scrollIntoView({ behavior
