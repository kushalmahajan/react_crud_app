import React from 'react';
import PrefetchExample from './prefetch.js';
import LazyLoadExample from './lazy_load.js';

class App extends React.Component {

    render() {
        const title = 'Minimal React Webpack Babel Setup';
        return (
            <div>
                <h3>{title}</h3>
                <PrefetchExample />
                <LazyLoadExample />
            </div>
        );
    }
}
export default App;

