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
        isLoading: true,
        sortKey: 'created'
    }
    render() {
        const title = 'Minimal React Webpack (4) Babel Setup | List with pagination and sorting | React router 4';
        const { page, pagination, list, isLoading } = this.state;
        return (
            <div>
                <Header><h3 style={{ fontSize: '18px' }}>{title}</h3></Header>
                <div className='p-15'>
                    <Container>
                        <Filters sortKey={this.state.sortKey} handleSort={this.handleSort} />
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
    handleSort = (key) => {
        const data = this.sortData(key);
        this.setState({ sortKey: key, list: data });
    }
    sortData = (key = this.state.sortKey, data = this.state.list) => {
        console.log(data, key);
        if (key === 'height') {
            return data.sort((a, b) => b[key] - a[key]);
        }
        if (key === 'created') {
            return data.sort((a, b) => new Date(b[key]) - new Date(a[key]));
        }
        return data.sort((a, b) => {
            var nameA = a[key].toUpperCase();
            var nameB = b[key].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    getData = async () => {
        try {
            const data = await fetch(`https://swapi.co/api/people?page=${this.state.page}&format=json`);
            const jsonData = await data.json();
            const { count, next, previous } = jsonData;
            const pagination = { count, next, previous };
            const list = this.sortData(this.state.sortKey, jsonData.results);
            this.setState({ list, pagination, isLoading: false });
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

