'use strict'

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


    popupContainer.onclick = (e) => {

        if(e.target.attributes.getNamedItem("data-js") && e.target.attributes.getNamedItem("data-js").value == "popup") {
            hidePopup();
        }

    };

    let cancelBtn = document.getElementsByClassName("btn-cancel")[0];

    cancelBtn.onclick = () => {
        hidePopup();
    }


//все слайды display none, active display block
//сделать слайды с анимацией? для анимации транспорт в ссs
//анимировать только transform
//буквы на главной тень должна отклоняться
//отресайзить и обновить
// transition, подписаться на события окна
//соединить все js