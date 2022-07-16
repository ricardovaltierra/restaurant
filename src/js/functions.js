import home from './tabs/home';
import concepto from './tabs/concepto';
import estelares from './tabs/estelares';
import carta from './tabs/carta';
import domicilio from './tabs/domicilio';
import contacto from './tabs/contacto';

function setActiveTab(selectedTab) {
  const content = document.getElementById('main');
  const navElements = document.getElementsByClassName('nav-element');
  const navTabMenu = document.getElementById(`id-${selectedTab.name}`);
  const navElementsValues = Object.values(navElements);

  content.innerHTML = '';
  content.appendChild(selectedTab());

  navElementsValues.forEach(val => val.classList.remove('active'));
  navTabMenu.classList.add('active');
}

export function tabHome() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(home());
}

export function tabConcepto() {
  setActiveTab(concepto);
}

export function tabEstelares() {
  setActiveTab(estelares);
}

export function tabCarta() {
  setActiveTab(carta);
}

export function tabDomicilio() {
  setActiveTab(domicilio);
}

export function tabContacto() {
  setActiveTab(contacto);
}

export function setIcon(favicon) {
  const head = document.querySelector('head');
  const linkIcon = document.createElement('link');
  linkIcon.setAttribute('rel', 'shortcut icon');
  linkIcon.setAttribute('href', favicon);
  head.appendChild(linkIcon);
}

export default {
  tabHome, tabConcepto, tabEstelares, tabCarta, tabDomicilio, tabContacto, setIcon,
};