import React from 'react';

export default class LazyLoad extends React.Component {
    state = {};

    handleClick = async () => {
        const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
        this.setState({
            result: _.join(['Lodash', 'Loaded', 'Lazily'], ' ')
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