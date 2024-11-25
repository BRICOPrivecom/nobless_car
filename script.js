function openModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    if (overlay && modal) {
    overlay.style.display = 'block';
    modal.classList.add('modal--open');
    }
    
}

function closeModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    if (overlay && modal) {
    overlay.style.display = 'none';
    modal.classList.remove('modal--open');
    }
}