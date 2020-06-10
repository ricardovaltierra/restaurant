import home from './home';

function tabHome() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(home());
}

export default { tabHome }