function anchorFunc(id) {
    const section = document.querySelector(`#${id}`);
    const absolutePosition = section.getBoundingClientRect().top + window.scrollY;
    const cordination = absolutePosition - 250;
    window.scrollTo({ top: cordination, left: 0, behavior: 'smooth' });
}
