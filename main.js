
document.addEventListener('DOMContentLoaded', function () {

    const card = document.querySelector('.card__inner');
    const homeFlip = document.querySelector('.home__flip')
        
    if (card) {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped')
        });
        }

    if (homeFlip) {
        homeFlip.addEventListener('click', function () {
            window.location.href = "flip.html";
            });
        }    
})



