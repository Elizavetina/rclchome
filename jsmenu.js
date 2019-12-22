'use strict'
document.addEventListener('DOMContentLoaded',
    function em() {
        const forms = document.querySelectorAll('form');
        const messageField = document.querySelector('.message-text');
        const overlay = document.querySelector('.overlay');
        console.log(123)
        if (!messageField || !overlay) return;

        overlay.addEventListener('click', function () {
            document.documentElement.classList.remove('popupActive');
        });

        Array.from(forms).forEach(form => createForm(form, messageField));


        function createForm(form, mess) {
            const action = form.action;
            const elements = form.elements;

            if (!action || !elements.length) return;

            function validate() {
                let result = true;

                for (let i = 0; elements.length > i; i++) {
                    let el = elements[i];


                    if (el.type === 'text' ||
                        el.type === 'tel' ||
                        el.type === 'email' ||
                        el.tagName.toLocaleLowerCase() === 'textarea') {
                        if (!el.value) {
                            el.classList.add('error');
                            el.addEventListener('input', () => {
                                el.classList.remove('error')
                            });
                            result = false;
                        }
                    } else if (el.type === 'checkbox' || el.type === 'radio') {
                        if (!el.checked) {
                            el.classList.add('error');
                            el.addEventListener('change', () => {
                                el.classList.remove('error')
                            })
                            result = false;
                        }
                    } else if (el.tagName.toLocaleLowerCase() === 'select' &&
                        !el.getAttribute('multiple')) {
                        if (el.selectedIndex === 0) {
                            el.classList.add('error');
                            el.addEventListener('change', () => {
                                el.classList.remove('error')
                            })
                            result = false;
                        }
                    }

                    function removeClass() {
                        this.classList.remove('error');
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








        const forms = document.querySelectorAll('form');
        const messageText = document.querySelector('.message-text');
        if (!messageText) return;
        for (let i=0; forms.length > i; i++) {
            createForm(forms[i], messageText);
        }
        function  createForm (form, messageText) {
            const action = form.action;
            const elements = form.elements;
            if (!action || ! elements.length) return;
            function validate() {
                let result = true;

                for (let i = 0; elements.length > i; i++) {
                    let el = elements[i];


                    if (el.type === 'text' ||
                        el.type === 'tel' ||
                        el.type === 'email' ||
                        el.tagName.toLocaleLowerCase() === 'textarea') {
                        if (!el.value) {
                            el.classList.add('error');
                            el.addEventListener('input', () => {
                                el.classList.remove('error')
                            });
                            result = false;
                        }
                    } else if (el.type === 'checkbox' || el.type === 'radio') {
                        if (!el.checked) {
                            el.classList.add('error');
                            el.addEventListener('change', () => {
                                el.classList.remove('error')
                            })
                            result = false;
                        }
                    } else if (el.tagName.toLocaleLowerCase() === 'select' &&
                        !el.getAttribute('multiple')) {
                        if (el.selectedIndex === 0) {
                            el.classList.add('error');
                            el.addEventListener('change', () => {
                                el.classList.remove('error')
                            })
                            result = false;
                        }
                    }

                    function removeClass() {
                        this.classList.remove('error');
                    }
                }

                return result;
            }
        }
    })