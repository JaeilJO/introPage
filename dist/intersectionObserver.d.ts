declare class Observer {
    private element;
    private callback;
    private threshold;
    constructor(element: string | Element, callback: (target: Element) => void, threshold: number);
    createObserver(): Error | undefined;
}
/**
 * Main Observer
 */
declare const mainCallback: (element: Element) => void;
declare const mainObserver: Observer;
/**
 * Project Observer
 */
declare const projectCallBack: (element: Element) => void;
declare const projectObserver: Observer;
/**
 * Skills Observer
 */
declare const skillsCallBack: (element: Element) => void;
declare const skills: NodeListOf<Element>;
/**
 * About Observer
 */
declare const aboutCallback: (element: Element) => void;
declare const aboutItems: NodeListOf<Element>;
