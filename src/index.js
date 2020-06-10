import './main.css';
import navbar from './navbar';
import mainElement from './main-element';
import footer from './footer';

// import tabHome  from './functions';

import home from './home';

function tabHome() {
  const content = document.getElementById('main');
  content.innerHTML = '';
  content.appendChild(home());
}

document.getElementById('content').appendChild(navbar());
document.getElementById('content').appendChild(mainElement());
document.getElementById('content').appendChild(footer());
tabHome();

document.getElementById('logo').addEventListener('click', tabHome);
