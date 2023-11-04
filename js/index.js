function setScreenSize() {
    //1vh를 구하는 것
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);
