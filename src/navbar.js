import Image from './img/logo.png';

export default function navbar() {

  const nav = document.createElement('nav');
  
  nav.innerHTML = `<a href="#" class="home" id="logo-link"><img src="${Image}" alt="Don Pastor" class="logo"></a>
                   <a href="#" class="nav-element" id="id-concepto">concepto</a>
                   <a href="#" class="nav-element" id="id-estelares">los estelares</a>
                   <a href="#" class="nav-element" id="id-carta">de la carta</a>
                   <a href="#" class="nav-element" id="id-domicilio">a domicilio</a>
                   <a href="#" class="nav-element" id="id-contacto">contacto</a>`;
  
  return nav;
}