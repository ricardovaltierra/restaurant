export default function home() {
  const homepage = document.createElement('div');
  const item = document.createElement('div');
  homepage.id = 'home';
  item.classList.add('item');

  homepage.appendChild(item);

  return homepage;
}