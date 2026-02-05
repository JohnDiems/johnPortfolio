const openBtns = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

openBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const modal = btn.nextElementSibling;
        if (modal && modal.classList.contains('modal')) {
            modal.classList.add('show');
        }
    });
});

document.querySelectorAll('.close-modal').forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
        const modal = closeBtn.closest('.modal');
        if (modal) modal.classList.remove('show');
    });
});

modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach((m) => m.classList.remove('show'));
    }
});