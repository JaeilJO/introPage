"use strict";
const hamburgerbutton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger--menu');
const hamburgerAnchors = document.querySelectorAll('.hamburger--menu--navigation-anchor');
if (hamburgerbutton) {
    hamburgerbutton.addEventListener('click', () => {
        hamburgerbutton.querySelectorAll('.hamburger-bar').forEach((bar) => {
            let hamburgerButtonStatus = bar.classList.contains('close');
            if (hamburgerMenu) {
                if (hamburgerButtonStatus) {
                    bar.classList.remove('close');
                    hamburgerMenu.classList.add('close');
                }
                else {
                    bar.classList.add('close');
                    hamburgerMenu.classList.remove('close');
                }
            }
        });
    });
    hamburgerAnchors.forEach((anchor) => {
        anchor.addEventListener('click', () => {
            hamburgerbutton.querySelectorAll('.hamburger-bar').forEach((bar) => {
                bar.classList.remove('close');
                if (hamburgerMenu) {
                    hamburgerMenu.classList.add('close');
                }
            });
        });
    });
}
