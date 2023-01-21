'use strict';

document.querySelectorAll('a').forEach(a => {
    const gate = a.dataset.gate;

    // on hover
    a.addEventListener('mouseenter', e => {
        document.querySelector(`.door-${gate}-left`).style.transform =
            'translateX(-50%)';
        document.querySelector(`.door-${gate}-right`).style.transform =
            'translateX(50%)';
    });
    a.addEventListener('mouseleave', e => {
        document.querySelector(`.door-${gate}-left`).style.transform =
            'translateX(0%)';
        document.querySelector(`.door-${gate}-right`).style.transform =
            'translateX(0%)';
    });
    // on click
    a.addEventListener('click', e => {
        document.querySelector(`.door-${gate}-left`).style.transform =
            'translateX(-100%)';
        document.querySelector(`.door-${gate}-right`).style.transform =
            'translateX(100%)';
    });
});
