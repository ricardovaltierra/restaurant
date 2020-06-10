import home from './home';
import concepto from './concepto';


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

export default { tabHome, tabConcepto };