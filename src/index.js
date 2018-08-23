import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';


const createRoot = () => {
    var root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
}
createRoot();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
// async function getComponent() {
//     var element = document.createElement('div');
//     const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }
// getComponent().then(component => {
//     document.body.appendChild(component);
// });


