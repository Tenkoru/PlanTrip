"use strict";

const inputs = [].slice.call(document.querySelectorAll('.input'));
const passwordSwitchers = [].slice.call(document.querySelectorAll('.auth__password-switcher'));

function inputPlaceholderHandler() {
    this.value ? this.classList.add('input--filled') : this.classList.remove('input--filled');
};
function passwordViewSwitch() {
    const passwordInput = this.parentNode.querySelector('.auth__input--password');

    if (this.classList.contains('auth__password-switcher--active')) {
        passwordInput.type = 'password';
        this.classList.remove('auth__password-switcher--active');
    } else {
        passwordInput.type = 'text';
        this.classList.add('auth__password-switcher--active');
    }
}

inputs.forEach(function(item) {
    item.addEventListener('input', inputPlaceholderHandler);
});
passwordSwitchers.forEach(function(item) {
    item.addEventListener('click', passwordViewSwitch);
});
