export default function domicilio() {
  const domicilioPage = document.createElement('div');
  const item1 = document.createElement('div');
  const item2 = document.createElement('div');
  const item3 = document.createElement('div');

  domicilioPage.id = 'domicilio';

  item1.classList.add('item-1');
  item2.classList.add('item-2');
  item3.classList.add('item-3');

  item3.innerHTML = `<h2 class="map">Pasele... aquí es!</h2>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2359392003095!2d-101.69265404903729!3d21.14300678586762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf0b545daf33%3A0x9f91063f6d6da243!2sDon%20Pastor%20Leon!5e0!3m2!1sen!2smx!4v1591742180485!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></iframe>`;

  domicilioPage.appendChild(item1);
  domicilioPage.appendChild(item2);
  domicilioPage.appendChild(item3);

  return domicilioPage;
}