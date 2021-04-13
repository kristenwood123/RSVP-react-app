import React, { Component } from 'react'

export const Context = React.createContext();

class MyProvider extends Component {

  state = {}
  render() {
    return (
      <Context.Provider value={
        {state: this.state,
          setMessage: (value) => this.setState({
          message: value })}}>
            {this.props.children}
      </Context.Provider>
    )
  }
}
export default MyProvider