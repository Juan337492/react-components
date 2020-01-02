import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        cnt: 0
    };
    handleButtonClick = () => {
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })

    }
    cntButtonClick = () => {
        const newCtn = this.state.cnt + 2 
        this.setState({
            cnt: newCtn
        })
    }

    render() {
        let value = '';
        if (this.state.count % 2==0){
            value = <p>boom!</p>
        }
        return (
            <div>
    <p>{value}</p>
    <p>The current count: {this.state.count}</p>
                <button
                onClick={this.handleButtonClick}>
                    Add 1
                </button>
        <p>New counter: {this.state.cnt}</p>
                <button 
                onClick={this.cntButtonClick}>
                    Add 2
                </button>
            </div>
        )
    }
}

export default Counter