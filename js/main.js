"use strict";

const inputs = [].slice.call(document.querySelectorAll('.input'));

function inputPlaceholderHandler() {
    this.value ? this.classList.add('input--filled') : this.classList.remove('input--filled');
};

inputs.forEach(function(item) {
    item.addEventListener('input', inputPlaceholderHandler);
});