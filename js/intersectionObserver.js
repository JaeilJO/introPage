class Observer {
    constructor(element, callback, threshold) {
        this.element = typeof element === 'object' ? element : document.querySelector(element);
        this.callback = callback;
        this.threshold = threshold;
    }

    createObserver() {
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
const mainCallback = (element) => {
    const lottiePlayer = element.querySelector('.main-animation');
    lottiePlayer.play();
};

const mainObserver = new Observer('#main', mainCallback, 0.6);
mainObserver.createObserver();

/**
 * Project Observer
 */

// * Project CallBack Function
const projectCallBack = (element) => {
    const projectImage = element.querySelector('.project-section-contents--item--image');
    projectImage.classList.remove('not-show');
};

const projectObserver = new Observer('#project', projectCallBack, 0.6);
projectObserver.createObserver();

/**
 * Skills Observer
 */

// * Skills CallBack Function
const skillsCallBack = (element) => {
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
const aboutCallback = (element) => {
    const aboutItme = element;
    aboutItme.classList.remove('not-show');
};
const aboutItems = document.querySelectorAll('.about-section-contents--item');
aboutItems.forEach((about) => {
    const observer = new Observer(about, aboutCallback, 1);
    observer.createObserver();
});
