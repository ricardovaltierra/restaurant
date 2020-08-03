import home from './tabs/home';
import concepto from './tabs/concepto';
import estelares from './tabs/estelares';
import carta from './tabs/carta';
import domicilio from './tabs/domicilio';
import contacto from './tabs/contacto';

export function tabHome() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(home());
}

export function tabConcepto() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(concepto());
}

export function tabEstelares() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(estelares());
}

export function tabCarta() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(carta());
}

export function tabDomicilio() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(domicilio());
}

export function tabContacto() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(contacto());
}

export function setIcon(favicon) {
  const head = document.querySelector('head');
  const linkIcon = document.createElement('link');
  linkIcon.setAttribute('rel', 'shortcut icon');
  linkIcon.setAttribute('href', favicon);
  head.appendChild(linkIcon);
}

export default {
  tabHome, tabConcepto, tabEstelares, tabCarta, tabDomicilio, tabContacto, setIcon
};