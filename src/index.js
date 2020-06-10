import './main.css';
import navbar from './navbar';
import mainElement from './main-element';
import footer from './footer';

import { tabHome, tabConcepto } from './functions';

document.getElementById('content').appendChild(navbar());
document.getElementById('content').appendChild(mainElement());
document.getElementById('content').appendChild(footer());
tabHome();

document.getElementById('logo-link').addEventListener('click', tabHome);
document.getElementById('id-concepto').addEventListener('click', tabConcepto);
document.getElementById('id-estelares').addEventListener('click', tabHome);
document.getElementById('id-carta').addEventListener('click', tabHome);
document.getElementById('id-domicilio').addEventListener('click', tabHome);
document.getElementById('id-contacto').addEventListener('click', tabHome);
