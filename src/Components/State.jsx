import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            count: this.state.count  - 1
        })
    }
    
  render() {
    const {count} = this.state;
    return (
      <div>
        {/* <h4>count is: {this.props.count}</h4> */}
        <h4>count is: {count}</h4>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement} disabled={count === 0 ? true : false}>-</button>
      </div>
    )
  }
}
