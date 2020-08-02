import home from './home';
import concepto from './concepto';
import estelares from './estelares';
import carta from './carta';
import domicilio from './domicilio';
import contacto from './contacto';

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

export default {
  tabHome, tabConcepto, tabEstelares, tabCarta, tabDomicilio, tabContacto,
};