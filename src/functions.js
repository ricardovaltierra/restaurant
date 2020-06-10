import home from './home';

export function tabHome() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(home);
}

export default { tabHome };