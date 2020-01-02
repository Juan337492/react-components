import React from 'react';

class Boom extends React.Component {
state = {
    count : 0
}
counter = () => {
    var value = this.state.count + 1;
    this.setState({
        count : value
    })
}
    render(){
     var timer = setInterval(this.counter,1000)
     var outPut = ' ';
     if (this.state.count % 2==0 && this.state.count <= 8){
         outPut = <p>tick!</p>;
     }
     if (this.state.count % 2 !==0 && this.state.count <= 8){
        outPut = <p>tock!</p>;
     }
     if(this.state.count > 8 ){
         outPut = <p>BOOM!</p>;
     }
     if(this.state.count > 9 ){
         let reset = 0;
         clearInterval(timer)
        this.setState({
            count: reset
        })
    }
        return(
            <div>
                <h2>Counter</h2>
                {outPut}
                {timer}
            </div>
        )
    }
}
export default Boom