export default function concepto() {
  const conceptoPage = document.createElement('div');
  const item = document.createElement('div');
  conceptoPage.id = 'concepto';
  item.classList.add('item');

  conceptoPage.appendChild(item);

  return conceptoPage;
}