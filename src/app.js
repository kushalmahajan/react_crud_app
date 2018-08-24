import React from 'react';
import Header from './components/header/index.js';
import './style.css';
import Filters from './components/filters/filters.js';
import MoviesList from './components/list/list.js';
import Pagination from './components/pagination/pagination.js';
import isEmpty from 'lodash/isEmpty';
import Loader from './base_components/loader/loader.js';
import Container from './base_components/card/card.js';

class App extends React.Component {
    state = {
        page: 1,
        list: [],
        pagination: {},
        isLoading: true
    }
    render() {
        const title = 'Minimal React Webpack Babel Setup';
        const { page, pagination, list, isLoading } = this.state;
        return (
            <div>
                <Header><h3 style={{ fontSize: '18px' }}>{title}</h3></Header>
                <div className='p-15'>
                    <Container>
                        <Filters />
                        {
                            isLoading ? (
                                <Loader />
                            ) : (
                                    <div>
                                        <MoviesList data={list} />
                                        <Pagination data={pagination} page={page} handler={this.handlePagination} />
                                    </div>
                                )
                        }
                    </Container>
                </div>
            </div>
        );
    }
    getData = async () => {
        try {
            const data = await fetch(`https://swapi.co/api/people?page=${this.state.page}&format=json`);
            const jsonData = await data.json();
            const { count, next, previous } = jsonData;
            const pagination = { count, next, previous };
            this.setState({ list: jsonData.results, pagination, isLoading: false });
        } catch (err) {
            console.log(err);
        }
    }
    componentDidMount() {
        this.getData();
    }
    handlePagination = (isPrev) => {
        let { page } = this.state;
        page = isPrev ? page - 1 : page + 1;
        this.setState({
            page,
            isLoading: true
        }, this.getData);
    }
}
export default App;

