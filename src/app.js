import React from 'react';
import PrefetchExample from './prefetch.js';
import LazyLoadExample from './lazy_load.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <PrefetchExample />
                <LazyLoadExample />
            </div>
        );
    }
}
export default App;

