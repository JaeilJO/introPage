const contectSection = document.getElementById('contect');

contectSection.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', (e) => {
        let value = e.target.value;
        if (value) {
            input.style.border = '1px solid #dfba37';
        } else {
            input.style.border = '1px solid #5b5b5b';
        }
    });
});

const textarea = contectSection.querySelector('textarea');

textarea.addEventListener('input', (e) => {
    let value = e.target.value;
    if (value) {
        textarea.style.border = '1px solid #dfba37';
    } else {
        textarea.style.border = '1px solid #5b5b5b';
    }
});
