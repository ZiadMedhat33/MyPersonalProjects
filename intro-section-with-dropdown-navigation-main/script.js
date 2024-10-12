function add(elem) {
    const svg = elem.querySelector('svg');
    svg.classList.add("reverse");
}
function remove(elem, d) {
    if (elem.getAttribute("aria-expanded") == 'false') {
        const svg = elem.querySelector('svg');
        svg.classList.remove("reverse");
    }
}
const button = document.getElementById('Features');
const button2 = document.getElementById("Company");
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'aria-expanded') {

            const ariaExpanded = button.getAttribute('aria-expanded');
            if (ariaExpanded === 'true') {
                add(button)
            } else {
                remove(button)
            }
        }
    }
};
const callback2 = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'aria-expanded') {

            const ariaExpanded = button2.getAttribute('aria-expanded');
            if (ariaExpanded === 'true') {
                add(button2)
            } else {
                remove(button2)
            }
        }
    }
};
const observer = new MutationObserver(callback);
const observer2 = new MutationObserver(callback2);
const config = { attributes: true, attributeFilter: ['aria-expanded'] };
observer.observe(button, config);
observer2.observe(button2, config);
