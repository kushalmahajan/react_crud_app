import React from 'react';
import(/* webpackPrefetch: true */ /* webpackChunkName: "lodash" */ 'lodash');
import Button from './base_components/button.js';

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
                <Button primary onClick={this.handleClick} title='Prefetch Click' />
                {result && <span>{result}</span>}
            </div>
        );
    }

}