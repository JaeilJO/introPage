"use strict";
function anchorHandler(id) {
    const section = document.querySelector(`#${id}`);
    if (section === null) {
        return;
    }
    const absolutePosition = section.getBoundingClientRect().top + window.scrollY;
    const cordination = absolutePosition - 250;
    window.scrollTo({ top: cordination, left: 0, behavior: 'smooth' });
}
