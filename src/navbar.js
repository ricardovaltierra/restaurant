import Image from './img/logo.png';

export default function navbar() {

  const nav = document.createElement('nav');
  const logo = document.createElement('a');

  logo.id = 'logo-link';
  logo.innerHTML = `<img src="${Image}" alt="Don Pastor" class="logo">`;

  nav.appendChild(logo);
  nav.innerHTML = `<a href="#concepto" class="nav-element">concepto</a>
                   <a href="#estelares" class="nav-element">los estelares</a>
                   <a href="#carta" class="nav-element">de la carta</a>
                   <a href="#domicilio" class="nav-element">a domicilio</a>
                   <a href="#contacto" class="nav-element">contacto</a>`;
  
  return navbar;
}