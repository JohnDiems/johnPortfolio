// Toggle menu function
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('hidden');
    menu.classList.toggle('block', !isOpen);
    0
    line1.classList.toggle('rotate-45');
    line1.classList.toggle('translate-y-2');
    line2.classList.toggle('opacity-0');
    line3.classList.toggle('-rotate-45');
    line3.classList.toggle('-translate-y-2');
});

const scrollSmooth = function (value) {
    const element = document.getElementById(value);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}