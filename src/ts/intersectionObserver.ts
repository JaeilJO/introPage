class Observer {
    private element: Element | null;
    private callback: (target: Element) => void;
    private threshold: number;

    constructor(element: string | Element, callback: (target: Element) => void, threshold: number) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
        } else {
            this.element = element;
        }
        this.callback = callback;
        this.threshold = threshold;
    }

    createObserver() {
        //element가 없을경우
        if (!this.element) {
            return new Error('element를 입력해야합니다');
        }

        const options = {
            threshold: this.threshold,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    this.callback(target);
                }
            }, options);
        });
        observer.observe(this.element);
    }
}

/**
 * Main Observer
 */

// * Main CallBack Function
const mainCallback = (element: Element) => {
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

const mainObserver = new Observer('#main', mainCallback, 0.6);
mainObserver.createObserver();

/**
 * Project Observer
 */

// * Project CallBack Function
const projectCallBack = (element: Element) => {
    const projectImage = element.querySelector('.project-section-contents--item--image');

    if (projectImage) {
        projectImage.classList.remove('not-show');
    }
};

const projectObserver = new Observer('#project', projectCallBack, 0.6);
projectObserver.createObserver();

/**
 * Skills Observer
 */

// * Skills CallBack Function
const skillsCallBack = (element: Element) => {
    const listItem = element;
    listItem.classList.remove('not-show');
};

const skills = document.querySelectorAll('.skills-list__item');
skills.forEach((skill) => {
    const observer = new Observer(skill, skillsCallBack, 1);
    observer.createObserver();
});

/**
 * About Observer
 */

// * About CallBack Function
const aboutCallback = (element: Element) => {
    const aboutItme = element;
    aboutItme.classList.remove('not-show');
};
const aboutItems = document.querySelectorAll('.about-section-contents--item');
aboutItems.forEach((about) => {
    const observer = new Observer(about, aboutCallback, 1);
    observer.createObserver();
});
