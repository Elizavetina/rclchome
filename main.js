"use strict"
alert ("use")
document.addEventListener("mousedown", function () {
    down = true;
})
document.addEventListener("mousedoup", function () {
    down = false;
})
document.addEventListener("mousemove", function () {
    if (!down) return;
})
document.addEventListener("DOMContentLoaded", function () {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    p.innerHTML = (event.clientX - windowWidth / 2) + "," + (event.clientY - windowHeight / 2)
    //посчитать центр в середине коэффициент
    let p = document.createElement("p");
    p.classList.add("text")//добавляем класс к созданному контенту
    document.body.appendChild(p);//вставляет элемент в конец
    document.addEventListener("mousemove"), function (event) {
        console.log(event)
        p.innerHTML = event.clientX + "," + event.clientY;
        p.style.transform = 'translateY(' + event.clientY + 'px)';
        p.style.left = event.clientX + 'px';
    }
})

document.addEventListener("DOMContentLoaded", function () {

}) //делаем доступным если элемент после
let button = document.querySelector('button'); //ищем
let menu = document.querySelector('nav');
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

///
document.addEventListener('DOMContentLoaded', function () {
    alert("hi")
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let p = document.createElement('p');
    p.classList.add('text');
    document.body.appendChild(p);

    document.addEventListener('mousedown', function () {
        (down) = true;
    });
    document.addEventListener('mouseup', function () {
        (down) = false;
        p.style.top = '';
        p.style.left = '';
    });

    document.addEventListener('mousemove', function (event) {
        p.innerHTML = (event.clientX - windowWidth / 2) + ', ' +
            (event.clientY - windowHeight / 2);

        let rd = document.querySelector('.rd');
        rd.addEventListener('mouseove', function(){
            rd.style.transform = 'translateY(' + event.clientY + 'px)';
            rd.style.left = event.clientX + 'px';



        });

        if (!down) return;

        p.style.transform = 'translateY(' + event.clientY + 'px)';
        p.style.left = event.clientX + 'px';
    })
})



"use strict"

document.addEventListener('DOMContentLoaded', function () {


    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let rd = document.querySelector('.rrdd');//вводим класс
    let hrd = document.querySelector('.hhrd');


    document.addEventListener('mousemove', function (e) {
        let yPosition = e.pageY / windowWidth * 20;
        let xPosition = e.pageX / windowHeight * 20;
        //  hrd.style.top = -yPosition + 'px';//transform
        //hrd.style.left = -xPosition + 'px';//transform
        let left = 0;
        let top = 0;
        let nLeft = 0;
        let nTop = 0;
        //  rd.style.transform = 'translate3d' + left + 'px, 0' + top + 'px, 0';
        //top += 1;
        //  rd.style.transform = 'translate3d' + left + 'px, 0' + top + 'px, 0';
        //left += 1;

        function amimate() {
            top += (nTop - top) / 20; //чтобы была плавная анимация
            left += (nLeft - left) / 20;
        }

        rd.style.transform = 'translate3d' + left + 'px, 0' + top + 'px, 0';
        left += 1;
        hrd.style.transform = 'translate3d' + left + 'px, 0' + top + 'px, 0';
        left += 1;

        requestAnimationFrame(amimate)
        document.addEventListener('mousemove', function (e) {
                nLeft = e.xPosition;
                nTop = e.yPosition;
            }
        ), 1000 / 60
    });
},);


document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');
    for (let i = 0; i < sliders.length; i++) {
        createSlider((sliders[i]))
    };
    console.log(12313)                     // проверка каждого уровня кода
    function createSlider(slider) {
        const slides = slider.querySelectorAll('.slide');
        if (slides.length < 2) return;
        console.log(1666666)//проверка каждого уровня кода

        const prevButton = slider.querySelector('.prev-button');
        const nextButton = slider.querySelector('.next-button');
        if (!prevButton && !nextButton) return;

        console.log(16890000)                     // проверка каждого уровня кода
        let width= 0;

        let activeSlide = 0;
        for (let i = 0; slides.length > 1; i++) {
            if (slides[0].classList.contains('active')) {
                activeSlide = 1;
                //break
            }
        }

        slides[activeSlide].classList.add('active');

        if (prevButton) prev.button.addEventListener('click', function () {
            //slider [activeSlide].classList.remove('active');

            activeSlide--;
            if (activeSlide < 0) activeSlide = slides.length - 1;
            //slides [activeSlide].classList.add('active');
            wrapper.style.transform = `translate3d(-${width * activeSlide}px, 0, 0)`;//11

            if (nextButton) next.button.addEventListener('click', function () {
                slider [activeSlide].classList.remove('active');

                activeSlide++;
                if (activeSlide > 1) activeSlide = slides.length + 1;
                //  slides [activeSlide].classList.add('active');
                console.log(187777)//проверка каждого уровня кода

            })
        })
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    if (!header) return;
    let hidden = false;
    let scrollPrev = window.scrollTop ;
    let scrollTop =   window.innerHeight;///window.pageYOffset;//document.body.scrollHeight;

    function handleScroll() {
        const scrolled = window.scrollY;
        console.log(12434234);
        if (scrolled > 50 ) {
            if (!hidden) {
                console.log('hide');
                header.classList.add('hidden');
                hidden = true;
            }
        } else {
            if((hidden) || ((scrolled - scrollTop) > 60))  {
                console.log('show');
                header.classList.remove('hidden');
                hidden = false;
            }
        }

    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

});



'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    const messageField = document.querySelector('.message-text');
    const overlay = document.querySelector('.overlay');

    if (!messageField || !overlay) return;

    overlay.addEventListener('click', function () {
        document.documentElement.classList.remove('popupActive');
    });

    Array.from(forms).forEach(form => createForm(form, messageField));
});

function createForm(form, mess) {
    const action = form.action;
    const elements = form.elements;

    if (!action || !elements.length) return;

    function validate() {
        let result = true;

        for (let i = 0; elements.length > i; i++) {
            let el = elements[i];

            if (!el.dataset['required']) continue;

            if (el.type === 'text') {
                if (!el.value) {
                    el.classList.add('error');
                    el.addEventListener('input', () => {
                        el.classList.remove('error')
                    });
                    result = false;
                }
            }
        }

        return result;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validate()) return;

        document.documentElement.classList.add('popupActive');
        mess.innerHTML = 'Отправлено'
    })
}


//все слайды display none, active display block
//сделать слайды с анимацией? для анимации транспорт в ссs
//анимировать только transform
//буквы на главной тень должна отклоняться
//отресайзить и обновить
// transition, подписаться на события окна
//соединить все js