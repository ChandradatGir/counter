import React, {Component} from 'react';

class Counter extends Component{
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

/*create increment functionality
*** Increment - is a function that allows us to increment the Counter
*** Decrement - is a function that allows us to decrement the counter
*/
increment = () => {
  this.setState ({
    count: this.state.count +1
  })
}

decrement = () => {
  this.setState ({
    
    count: this.state.count -1
  })
}

  render() {
    return(
      <div className="container">
        <div className="navbar" >Counter.js</div>
        <div className="Counter" >
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}> Increment</button>
          <button type="button" onClick={this.decrement} > Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter;
