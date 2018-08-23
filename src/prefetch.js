import React from 'react';
import(/* webpackPrefetch: true */ /* webpackChunkName: "lodash" */ 'lodash');

export default class Prefetch extends React.Component {
    state = {};

    handleClick = async () => {
        this.setState({
            result: _.join(['Lodash', 'Prefetched', 'working', 'perfect'], ' ')
        });
    }
    render() {
        const { result } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                {result && <span>{result}</span>}
            </div>
        );
    }

}