import React from 'react';
import Container from '../../base_components/card/card.js';

class Filters extends React.Component {
    state = {

    }
    render() {
        console.log(this.props.sortKey);
        return (
            <Container style={{ textAlign: "right" }}>
                <span>Sort by: </span>
                <select onChange={e => this.props.handleSort(e.target.value)} defaultValue={this.props.sortKey}>
                    <option value='name'>Name</option>
                    <option value='gender'>Gender</option>
                    <option value='height'>Height</option>
                    <option value='created'>Created Date</option>
                </select>
            </Container>
        )
    }
}
export default Filters;