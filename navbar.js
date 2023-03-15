const hamburgerContainer = document.querySelector('.hamburger-container');
const listItems = document.querySelector('.list-items');
const listArr = document.querySelectorAll('.list-item');

const tabletMedia = window.matchMedia('(min-width: 768px)');

window.addEventListener('resize',() => {
    if (tabletMedia.matches){
        hamburgerContainer.classList.remove('active');
        listItems.classList.remove('mobile');
        listArr[listArr.length-1].classList.add('mobile-link');
        listArr[listArr.length-2].classList.add('mobile-link');
    }
})


hamburgerContainer.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('active');
    listItems.classList.toggle('mobile');
    listArr[listArr.length-1].classList.remove('mobile-link');
    listArr[listArr.length-2].classList.remove('mobile-link');
})