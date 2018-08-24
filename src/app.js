import React from 'react';
import Header from './components/header/index.js';
import './style.css';
import Container from './components/container/container.js';
import Filters from './components/filters/filters.js';
import MoviesList from './components/movies/data.js';

class App extends React.Component {
    state = {
        data: {}
    }
    render() {
        const title = 'Minimal React Webpack Babel Setup';
        const { data } = this.state;
        return (
            <div>
                <Header><h3 style={{ fontSize: '18px' }}>{title}</h3></Header>
                <div className='p-15'>
                    <Container>
                        <Filters />
                        <MoviesList /> :
                    </Container>
                </div>

            </div>
        );
    }
}
export default App;

