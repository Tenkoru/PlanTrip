"use strict";

const auth = document.querySelector(".auth");
const inputs = [].slice.call(document.querySelectorAll(`.input`));
const displayButtonContainer = document.querySelector(`.displayButtons`); 
const listSortArrow = document.querySelector(`.list__sort-arrow`);

if (auth) {
	const passwordSwitchers = [].slice.call(
		document.querySelectorAll(`.auth__password-switcher`)
	);
	const registerLink = auth.querySelector(`#register`);
	const forgotLink = auth.querySelector(`#forgot`);
	const backArrows = [].slice.call(
		auth.querySelectorAll(`.auth__back-arrow`)
	);

	function passwordViewSwitch() {
		const passwordInput = this.parentNode.querySelector(
			`.auth__input--password`
		);

		if (this.classList.contains(`auth__password-switcher--active`)) {
			passwordInput.type = `password`;
			this.classList.remove(`auth__password-switcher--active`);
		} else {
			passwordInput.type = `text`;
			this.classList.add(`auth__password-switcher--active`);
		}
	}

	function changeActiveAuthForm(activeFormId) {
		const authForms = [].slice.call(
			document.querySelectorAll(`.auth__wrapper`)
		);
		const activeForm = document.querySelector(`#${activeFormId}`);

		authForms.forEach(function(item) {
			item.classList.remove(`auth__wrapper--active`);
		});

		activeForm.classList.add(`auth__wrapper--active`);
	}

	passwordSwitchers.forEach(function(item) {
		item.addEventListener(`click`, passwordViewSwitch);
	});

	registerLink.addEventListener(
		`click`,
		changeActiveAuthForm.bind(null, `authRegister`)
	);
	forgotLink.addEventListener(
		`click`,
		changeActiveAuthForm.bind(null, `authReset`)
	);

	backArrows.forEach(function(item) {
		item.addEventListener("click", changeActiveAuthForm.bind(null, `auth`));
	});
}

if (inputs) {
	function inputPlaceholderHandler() {
		this.value
			? this.classList.add(`input--filled`)
			: this.classList.remove(`input--filled`);
	}
	inputs.forEach(function(item) {
		item.addEventListener(`input`, inputPlaceholderHandler);
	});
}

if (displayButtonContainer) {
    function changeListStyle(event) {
        const element = event.target.closest('.displayButtons__button');
        const listContent = document.querySelector('.list__content');
        const buttons = [].slice.call(displayButtonContainer.querySelectorAll('.displayButtons__button'));

        if (element) {
            if (element.id === 'displayButtonGrid') {
                listContent.classList.add('list__content--grid');
                buttons.forEach(function(item) {
                    item.classList.remove('displayButtons__button--active');
                });
                element.classList.add('displayButtons__button--active');
            } else {
                listContent.classList.remove('list__content--grid');
                buttons.forEach(function(item) {
                    item.classList.remove('displayButtons__button--active');
                });
                element.classList.add('displayButtons__button--active');
            }
        }

    }

    displayButtonContainer.addEventListener(`click`, changeListStyle);
}

if (listSortArrow) {
    function changeArrowDirection() {
        this.classList.toggle('list__sort-arrow--up');
    }
    listSortArrow.addEventListener(`click`, changeArrowDirection);
}