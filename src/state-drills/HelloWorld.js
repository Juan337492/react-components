import React from 'react';

class HelloWorld extends React.Component {
state = {
    who : ''
}
helloFriend = () => {
    const friend = 'Hello, friend!';
    this.setState({
        who : friend
    })
}
helloReact = () => {
    const react = 'Hello, react!';
    this.setState({
        who : react
    })
}
helloWorld = () => {
    const world = 'Hello, world!';
    this.setState({
        who : world
    })
}
    render() {
        return(
            <div>
            {this.state.who}
                <button onClick = {this.helloFriend}>Friend</button>
                <button onClick = {this.helloReact}>React</button>
                <button onClick = {this.helloWorld}>World</button>
            </div>
        )
    }
}

export default HelloWorld