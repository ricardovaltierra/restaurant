import _ from 'lodash';

function component() {
  // const element = document.createElement('div');

  const element = console.log("This is a test");

  // Lodash now imported
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

component();
// document.body.appendChild(component());