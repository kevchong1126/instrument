const cards = document.querySelectorAll('.card-content');
const animate = document.querySelectorAll('.animate-fade-in');
const options = {
    threshold : 0.3
};

const callback = (entries,observer) => {

    entries.forEach(entry => {
        if (entry.isIntersecting){
           entry.target.children[0].classList.add('fade-in');
           entry.target.children[1].classList.add('fade-in'); 
           observer.unobserve(entry.target);
        }
    })
};

const callback1 = (entries, observer) => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('fade-in');
            observer1.unobserve(entry.target);
        }
    });
    
};

const observer = new IntersectionObserver(callback,options);
const observer1 = new IntersectionObserver(callback1,options);

cards.forEach(card => {
    observer.observe(card)
})

animate.forEach(el => {
    observer1.observe(el);
})

