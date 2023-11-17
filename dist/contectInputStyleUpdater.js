"use strict";
const contectSection = document.getElementById('contect');
if (contectSection) {
    /**
     * Input Event
     */
    contectSection.querySelectorAll('input').forEach((input) => {
        input.addEventListener('input', (e) => {
            const target = e.target;
            if (target) {
                let value = target.value;
                if (value) {
                    input.style.border = '1px solid #dfba37';
                }
                else {
                    input.style.border = '1px solid #5b5b5b';
                }
            }
        });
    });
    /**
     * Text Area Event
     */
    const textarea = contectSection.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', (e) => {
            const target = e.target;
            if (target) {
                let value = target.value;
                if (value) {
                    textarea.style.border = '1px solid #dfba37';
                }
                else {
                    textarea.style.border = '1px solid #5b5b5b';
                }
            }
        });
    }
}
