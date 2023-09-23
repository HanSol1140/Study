const plusBtn = document.querySelectorAll('.footer_menu>dl>dt');
for(let i=0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', showFooterMenu);
}

const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';

function showFooterMenu() {
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}