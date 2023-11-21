const projectSectionObserveCallback = (element: Element) => {
    const projectImage = element.querySelector('.project-section-contents--item--image');

    if (projectImage) {
        projectImage.classList.remove('not-show');
    }
};

export default projectSectionObserveCallback;
