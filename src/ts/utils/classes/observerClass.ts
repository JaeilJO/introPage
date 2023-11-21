export default class Observer {
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
