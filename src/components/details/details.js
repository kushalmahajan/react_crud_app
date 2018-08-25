import React from 'react';
import Container from '../../base_components/card/card.js';
import Loader from '../../base_components/loader/loader.js';
import Content from '../../components/details/content.js';

class Details extends React.Component {
    state = {
        isLoading: true,
        data: {}
    }
    render() {
        const { data, isLoading } = this.state;
        return (
            <Container className='m-15'>
                {
                    isLoading ? <Loader /> : <Content data={data} />
                }
            </Container>
        )
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { search } = this.props.location;
        search = search.substr(1);
        const result = await fetch(search);
        const data = await result.json();
        this.setState({ data, isLoading: false })
    }
}
export default Details;