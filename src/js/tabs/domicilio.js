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
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241360.8503462343!2d-98.51309207499999!3d19.052158299999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6e219e7e85f%3A0xf97c46ae172982c3!2sDon%20Pastor%20Zavaleta!5e0!3m2!1sen!2smx!4v1657952363561!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  domicilioPage.appendChild(item1);
  domicilioPage.appendChild(item2);
  domicilioPage.appendChild(item3);

  return domicilioPage;
}