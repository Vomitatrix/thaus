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

// switching low res maps for high res
const gateSilas = document.querySelector('.gate-silas');
const gateMasa = document.querySelector('.gate-thaus');
const graina = new Image();
const masa = new Image();

graina.src = 'img/graina.jpg';
graina.onload = () => {
    gateSilas.style.backgroundImage = `url('${graina.src}')`;
};
masa.src = 'img/masa.jpg';
masa.onload = () => {
    gateSilas.style.backgroundImage = `url('${masa.src}')`;
};
