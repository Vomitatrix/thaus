'use strict';

// gate open animation
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
const gateThaus = document.querySelector('.gate-thaus');
const imgSilas = new Image();
const imgThaus = new Image();

imgSilas.src = 'img/silas.png';
imgSilas.onload = () => {
    gateSilas.style.backgroundImage = `url('${imgSilas.src}')`;
};
imgThaus.src = 'img/thaus.png';
imgThaus.onload = () => {
    gateThaus.style.backgroundImage = `url('${imgThaus.src}')`;
};
