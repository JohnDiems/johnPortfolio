const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('show');
    }
});