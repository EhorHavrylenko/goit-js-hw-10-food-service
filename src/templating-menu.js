import templateMenu from '../templates/menu-template.hbs';
import menu from '../src/menu.json';

const markupMenu = templateMenu(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markupMenu)

