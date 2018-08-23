import React from 'react';
import Button from './base_components/button.js';

export default class LazyLoad extends React.Component {
    state = {};

    handleClick = async () => {
        const math = await import(/* webpackChunkName: "math" */ './math');
        this.setState({
            result: math.cube(5)
        });
    }
    render() {
        const { result } = this.state;
        return (
            <div>
                <Button default onClick={this.handleClick} title='Lazy Load Click- Calculate cube of 5' />
                {result && <span>Cube of 5 is - {result}</span>}
            </div>
        );
    }

}