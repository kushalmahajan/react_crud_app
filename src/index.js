import _ from 'lodash';
import print from './print';

function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    button.innerHTML = 'Click me and see console';
    element.appendChild(button);
    return element;
}

document.body.appendChild(component());