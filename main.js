const transitionTimeout = 300

document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.card_inner');
    const homeFlip = document.querySelector('.home_card.flip')
    const homeListen = document.querySelector('.home_card.listeners')
    const homeEffect = document.querySelector('.home_card.effects')
    const scaryButton = document.getElementById('scary_button')
    const scaryText = document.getElementById('scary_button-text')
    var scarySound = new Audio("sounds/scary.mp3")
        
    if (cards) {
        cards.forEach((card) => {
            card.addEventListener('click', function () {
                card.classList.toggle('is-flipped')
            });
        });
        };

    if (homeFlip) {
        homeFlip.addEventListener('click', function () {
            window.location.href = "flip.html";
            }
        );
    };

    if (homeListen) {
        homeListen.addEventListener('click', function () {
            window.location.href = "listeners.html";
            }
        );   
        };

    if (homeEffect) {
        homeEffect.addEventListener('click', function () {
            window.location.href = "effects.html";
            }
        );
    };

    if (scaryButton) {
        scaryButton.addEventListener('mouseover', function () {
            scaryText.innerHTML = "If you dare";
            scaryButton.classList.toggle('mouse-on');
            scaryText.classList.toggle('flame-on');
            scarySound.play();
        });
        scaryButton.addEventListener('mouseout', function () {
            scaryText.innerHTML = "Click me";
            scaryButton.classList.toggle('mouse-on');
            scaryText.classList.toggle('flame-on');
            scarySound.pause();
        });
    }
    
});

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




