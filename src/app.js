import React from 'react';
import Header from './components/header/index.js';
import './style.css';

class App extends React.Component {
    render() {
        const title = 'Minimal React Webpack Babel Setup';
        return (
            <div>
                <Header><h3>{title}</h3></Header>
            </div>
        );
    }
}
export default App;

