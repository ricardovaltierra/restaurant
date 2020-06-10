export default function carta() {
  const cartaPage = document.createElement('div');
  const item1 = document.createElement('div');
  const item2 = document.createElement('div');
  const item3 = document.createElement('div');

  cartaPage.id = 'carta';

  item1.classList.add('item-1');
  item2.classList.add('item-2');
  item3.classList.add('item-3');

  cartaPage.appendChild(item1);
  cartaPage.appendChild(item2);
  cartaPage.appendChild(item3);

  return cartaPage;
}