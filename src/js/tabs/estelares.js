export default function estelares() {
  const estelaresPage = document.createElement('div');
  const item1 = document.createElement('div');
  const item2 = document.createElement('div');
  const item3 = document.createElement('div');

  estelaresPage.id = 'estelares';

  item1.classList.add('item-1');
  item2.classList.add('item-2');
  item3.classList.add('item-3');

  estelaresPage.appendChild(item1);
  estelaresPage.appendChild(item2);
  estelaresPage.appendChild(item3);

  return estelaresPage;
}