function modal() {
    function showModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('modal_active');
                document.body.style.overflow = 'hidden';
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('modal_active');
                document.body.style.overflow = '';
            }
        });

        close.addEventListener('click', () => {
            modal.classList.remove('modal_active');
            document.body.style.overflow = '';
        });
    }
    showModal('.button_main','.modal','.modal__main-close');
    showModal('.first-btn','.modal','.modal__main-close');
    showModal('.prices__btn','.modal','.modal__main-close');
    showModal('.footer__btn','.modal','.modal__main-close');
}
export default modal;