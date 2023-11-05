// main section Intersection Observer

let mainObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const mainElement = entry.target;

        const lottiePlayer = mainElement.querySelector('.main-animation');
        if (entry.isIntersecting) {
            lottiePlayer.play();
        }
    });
});

let mainSection = document.querySelector('#main');
mainObserve.observe(mainSection);

// project section Itersection Observer

let projectObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const projectSection = entry.target;

            if (entry.isIntersecting) {
                const projectImage = projectSection.querySelector('.project-image');
                projectImage.classList.remove('not-show');
            }
        });
    },
    { threshold: 0.6 }
);

let projectSection = document.querySelector('#project');
projectObserver.observe(projectSection);
