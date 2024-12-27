const hamburger = document.querySelector('.hamburger');
const sidePanel = document.querySelector('.side-panel');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    sidePanel.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidePanel.classList.remove('open');
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (!sidePanel.contains(e.target) && !hamburger.contains(e.target)) {
        sidePanel.classList.remove('open');
    }
});
