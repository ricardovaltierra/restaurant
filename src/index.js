import './main.css';
import navbar from './navbar';
import mainElement from './main-element.js';
import footer from './footer';

import { tabHome } from './functions';

document.getElementById('content').appendChild(navbar);
document.getElementById('content').appendChild(mainElement);
document.getElementById('content').appendChild(footer);
tabHome();

document.getElementById('logo').addEventListener('click', tabHome);
