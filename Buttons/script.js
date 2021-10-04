// 1. Dropdown with inputs

// keep an .active class when inbox checked - css style

const inputElements = document.querySelectorAll('#dropdown-inputs input[type=checkbox]');

inputElements.forEach((input) => {
    input.addEventListener('change', () => {
        input.parentNode.parentNode.classList.toggle('active');
    });
});

// keep the menu open by stopping the event from bubbling up

const ulElements = document.querySelectorAll('ul.dropdown-menu');

ulElements.forEach((ul) => {
    ul.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});