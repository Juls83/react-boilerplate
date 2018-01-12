import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
                        id:"1", value: 0
                    }
    }

    increase = () => {
        this.setState({ id:"1", value: this.state.value + 1})
    }
    
    render() {
        return (
            <div>
                <div className=".counter">
                    <label className="value">{this.state.value}</label>
                    <button id="+" className="button" onClick={this.increase}>+</button>
                    <button id="-" className="button">-</button>
                </div>
            </div>
        )
    }
}

export default App;