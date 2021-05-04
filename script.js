'use strict';

{
    // phone-processes
    const proDts = document.querySelectorAll('.pro-dt');

    proDts.forEach(proDt => {
        proDt.addEventListener('click', () => {
            proDt.nextElementSibling.classList.toggle('appear');

            proDts.forEach(proEl => {
                if (proDt !== proEl) {
                    proEl.nextElementSibling.classList.remove('appear');
                }
            });
        });

    });

    // helps
    const helpDts = document.querySelectorAll('.help-dt');

    helpDts.forEach(helpDt => {
        helpDt.addEventListener('click', () => {
            helpDt.nextElementSibling.classList.toggle('appear');
        });
    });

}