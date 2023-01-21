'use strict';
console.log(window);
// gate open animation
document.querySelectorAll('a').forEach(a => {
    const gate = a.dataset.gate;
    const currDoorLeft = document.querySelector(`.door-${gate}-left`);
    const currDoorRight = document.querySelector(`.door-${gate}-right`);
    const currLink = document.querySelector(`.link-${gate}`);

    // on hover
    a.addEventListener('mouseenter', () => {
        currDoorLeft.style.transform = 'translateX(-67%)';
        currDoorRight.style.transform = 'translateX(67%)';
        if (window.innerWidth > 1200) {
            currLink.style.lineHeight = '150vh';
        }
    });
    a.addEventListener('mouseleave', () => {
        currDoorLeft.style.transform = 'translateX(0%)';
        currDoorRight.style.transform = 'translateX(0%)';
        if (window.innerWidth > 1200) {
            currLink.style.lineHeight = 'unset';
        }
    });
    // on click
    a.addEventListener('click', () => {
        currDoorLeft.style.transform = 'translateX(-100%)';
        currDoorRight.style.transform = 'translateX(100%)';
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
