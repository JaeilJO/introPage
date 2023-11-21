const mainSectionObserveCallback = (element: Element) => {
    /**
     * Lottie Player 공식 github에서 TypeScript의 경우 lottieplayer를 any로 두라고 하고있음
     * https://github.com/LottieFiles/lottie-player
        - 위 링크의 Typescript ReactJS 부분 참조
     */
    const lottiePlayer: any = element.querySelector('.main-animation');
    if (lottiePlayer) {
        lottiePlayer.play();
    }
};

export default mainSectionObserveCallback;
