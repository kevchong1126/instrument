const button = document.querySelector('.play-button');
const iframe = document.querySelector('.video');

button.addEventListener('click', () => {
    button.classList.add('hidden');
    iframe.src = 'https://player.vimeo.com/video/428281636?autoplay=1';
})