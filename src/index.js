import './assets/css/main.css';
import navbar from './js/navbar';
import mainElement from './js/main-element';
import footer from './js/footer';
import favicon from './assets/img/01.png';
import {
  tabHome, tabConcepto, tabEstelares, tabCarta, tabDomicilio, tabContacto, setIcon,
} from './js/functions';

setIcon(favicon);

const content = document.createElement('div');
content.id = 'content';
content.classList.add('wrapper');
content.appendChild(navbar());
content.appendChild(mainElement());
content.appendChild(footer());
document.body.appendChild(content);
tabHome();

document.getElementById('logo-link').addEventListener('click', tabHome);
document.getElementById('id-concepto').addEventListener('click', tabConcepto);
document.getElementById('id-estelares').addEventListener('click', tabEstelares);
document.getElementById('id-carta').addEventListener('click', tabCarta);
document.getElementById('id-domicilio').addEventListener('click', tabDomicilio);
document.getElementById('id-contacto').addEventListener('click', tabContacto);
