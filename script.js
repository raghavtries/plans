const textarea = document.getElementById('textarea');
const container = document.querySelector('.container');

textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    if (textarea.scrollHeight > container.clientHeight) {
        container.scrollTop = textarea.scrollHeight;
    }
});

window.addEventListener('resize', () => {
    if (textarea.scrollHeight > container.clientHeight) {
        container.scrollTop = textarea.scrollHeight;
    }
});

// Initial adjustment
textarea.style.height = 'auto';
textarea.style.height = textarea.scrollHeight + 'px';
