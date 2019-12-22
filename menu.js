'use strict';

document.addEventListener('DOMContentLoaded', function OpenPopUp () {
    let popupContainer = document.getElementsByClassName("popup-container")[0];

    let triggerBtn = document.getElementsByClassName("btn")[0];

    function showPopup() {
        popupContainer.style.visibility = "visible";
        popupContainer.style.opacity = "1";
    }

    function hidePopup() {
        popupContainer.style.visibility = "hidden";
        popupContainer.style.opacity = "0";
    }

    triggerBtn.onclick = (e) => {
        showPopup();
    }

    let cancelBtn = document.getElementsByClassName("btn-cancel")[0];

    cancelBtn.onclick = () => {
        hidePopup();
    }


})


document.addEventListener('DOMContentLoaded', function menuOpen () {
let button = document.querySelector('.menuhidden');
let menu = document.querySelector('.menu');
let active = false;

button.addEventListener('click', function () {
    if (active === false) {
        menu.classList.add('active');
        active = true
    } else {
        menu.classList.remove('active');
        active = false
    }
})
});
document.addEventListener('DOMContentLoaded', function () {
    let rd = document.querySelector('.rrdd');
    let hrd = document.querySelector('.hhrd');

    let left = 0;
    let top = 0;
    let nLeft = 0;
    let nTop = 0;
    function animate() {
        left += -(nLeft + left) / 250;
        top += -(nTop + top) / 250;

        rd.style.transform = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        hrd.style.transform = 'translate3d(' + left + 'px, ' + top + 'px, 0)';

        requestAnimationFrame(animate);
    }

    animate();


    document.addEventListener('mousemove', function (event) {
        if (event.target && event.target.tagName.toLowerCase() === 'a') {
            let bounds = event.target.getBoundingClientRect();
            nLeft = bounds.left + bounds.width / 300;
            nTop = bounds.top + bounds.height / 300;


        } else {
            nLeft = event.clientX;
            nTop = event.clientY;

        }
    })

});
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    if (!header) return;

    let hidden = false;

    function handleScroll() {
        const scrolled = window.scrollY;

        console.log(12434234);
        if (scrolled > 70) {
            if (!hidden) {
                console.log('hide');
                header.classList.add('hidden');
                hidden = true;
            }
        } else {
            if (hidden) {
                console.log('show');
                header.classList.remove('hidden');
                hidden = false;
            }
        }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

});


document.addEventListener('DOMContentLoaded', function () {
    let next = document.getElementById('next');
    let prew = document.getElementById('prew');

    let slides = document.getElementsByClassName('slide');
    for(let i=0; i<slides.length; i++) {
        slides[i].style.zIndex = slides.length - i;
    }

    next.onclick = function () {
        let activeEl = document.querySelector('.active');
        if(activeEl.nextElementSibling) {
            activeEl.style.left = "-100%";
            activeEl.classList.remove('active');
            activeEl.nextElementSibling.classList.add('active');
            this.classList.remove('no_active');
            prew.classList.remove('no_active');
            if(!activeEl.nextElementSibling.nextElementSibling) {
                this.classList.add('no_active');
            }
        }
    }
    prew.onclick = function () {
        let activeEl = document.querySelector('.active');
        if(activeEl.previousElementSibling) {
            activeEl.previousElementSibling.style.left = "0%";
            activeEl.classList.remove('active');
            activeEl.previousElementSibling.classList.add('active');
            this.classList.remove('no_active');
            next.classList.remove('no_active');
            if(!activeEl.previousElementSibling.previousElementSibling) {
                this.classList.add('no_active');
            }
        }
    }


})







