import React, { Component } from 'react'
import abc from './abc.gif'
export class Spinner extends Component {
  render() {
    return (
      
        <div className="text-center">
            <img src={abc} alt="loading" />
        </div>
      
    )
  }
}

export default Spinner
