import React from 'react';

class App extends React.Component {
    state = {}
    handleClick = async () => {
        const result = await import(/* webpackChunkName: "lodash" */ 'lodash');
        this.setState({
            _: result
        })
    }
    render() {
        const { _ } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                {_ && <span>{_.join(['Lodash', 'dynamically ', 'loaded'], ' ')}</span>}
            </div>
        );
    }
}
export default App;

