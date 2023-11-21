import Observer from './utils/classes/observerClass';
import aboutSectionObserveCallback from './utils/functions/aboutSectionObserveCallback';
import mainSectionObserveCallback from './utils/functions/mainSectionObserveCallbakc';
import projectSectionObserveCallback from './utils/functions/projectSectionObserveCallback';
import skillsSectionObserveCallback from './utils/functions/skillsSectionObserveCallback';

/**
 * Main Observer
 */
const mainObserver = new Observer('#main', mainSectionObserveCallback, 0.6);
mainObserver.createObserver();

/**
 * About Observer
 */
const aboutItems = document.querySelectorAll('.about-section-contents--item');
aboutItems.forEach((about) => {
    const observer = new Observer(about, aboutSectionObserveCallback, 1);
    observer.createObserver();
});

/**
 * Project Observer
 */
const projectObserver = new Observer('#project', projectSectionObserveCallback, 0.6);
projectObserver.createObserver();

/**
 * Skills Observer
 */
const skills = document.querySelectorAll('.skills-list__item');
skills.forEach((skill) => {
    const observer = new Observer(skill, skillsSectionObserveCallback, 1);
    observer.createObserver();
});
