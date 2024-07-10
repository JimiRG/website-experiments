const transitionTimeout = 300

document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.card__inner');
    const homeFlip = document.querySelector('.home__flip')
        
    if (cards) {
        cards.forEach((card) => {
            card.addEventListener('click', function () {
                card.classList.toggle('is-flipped')
            });
        })
        }

    if (homeFlip) {
        homeFlip.addEventListener('click', function () {
            window.location.href = "flip.html";
            });
        }    
})

window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }, transitionTimeout);


    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            
            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, transitionTimeout);
        })
    }

};


