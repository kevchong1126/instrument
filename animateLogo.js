const column1 = document.querySelectorAll('.animate-1');
const column2 = document.querySelectorAll('.animate-2');
const column3 = document.querySelectorAll('.animate-3');

let i = 0;

setInterval(() =>{
    if (i === column1.length) i = 0;

    if (i === 0){
        column1[column1.length-1].classList.remove('active');
        column2[column1.length-1].classList.remove('active');
        column3[column1.length-1].classList.remove('active');
    }else{
        column1[i-1].classList.remove('active');
        column2[i-1].classList.remove('active');
        column3[i-1].classList.remove('active');
    }

    column1[i].classList.add('active');

    column2[i].classList.add('active');
    column2[i].style.transitionDelay = '0.15s';

    column3[i].classList.add('active');
    column3[i].style.transitionDelay = '0.25s';

    i++;

}, 1500);