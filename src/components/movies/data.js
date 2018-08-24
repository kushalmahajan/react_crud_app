import React from 'react';
import List from './list.js';

class MoviesList extends React.Component {
    state = {

    }
    render() {
        const { data } = this.state;
        return (
            <List data={(data || {}).results} />
        )
    }
    async getData() {
        try {
            const data = await fetch('https://swapi.co/api/films?format=json');
            const jsonData = await data.json();
            console.log('await response', jsonData);
            this.setState({ data: jsonData });
        } catch (err) {
            console.log(err);
        }

    }
    componentDidMount() {
        this.getData();
    }
}
export default MoviesList;