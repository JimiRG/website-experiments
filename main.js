const transitionTimeout = 300

document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.card_inner');
    const homeFlip = document.querySelector('.home_card.flip')
    const homeListen = document.querySelector('.home_card.listeners')
    const homeEffect = document.querySelector('.home_card.effects')
    const scaryDiv = document.getElementById('scary')
    const scaryButton = document.getElementById('scary_button')
    const scaryText = document.getElementById('scary_button-text')
    var scarySound = new Audio("sounds/scary.mp3")
    var cashSound = new Audio("sounds/money.wav")
        
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

    if (scaryDiv) {
        scaryDiv.addEventListener('mouseenter', function () {
            scaryText.innerHTML = "If you dare";
            scaryButton.classList.add('mouse-on');
            scaryText.classList.add('flame-on');
            scarySound.play();
        });
        scaryDiv.addEventListener('mouseleave', function () {
            scaryText.innerHTML = "Click me";
            scaryButton.classList.remove('mouse-on');
            scaryText.classList.remove('flame-on');
            scaryButton.classList.remove('clicked');
            scaryText.classList.remove('clicked');
            scarySound.pause();
            scarySound.currentTime = 0;
            cashSound.pause();
            cashSound.currentTime = 0;
        });
        scaryDiv.addEventListener('click', function () {
            scaryText.innerHTML = "You've won $1000";
            scaryButton.classList.remove('mouse-on');
            scaryText.classList.remove('flame-on');
            scaryButton.classList.add('clicked');
            scaryText.classList.add('clicked');
            scarySound.pause();
            scarySound.currentTime = 0;
            cashSound.play();
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




