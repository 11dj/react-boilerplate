import React, { Component } from 'react';
import './App.css';

export default class ComponentA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      keyword: '',
      sorted: false,
      list: this.props.result
    }
  }

  sorted =() => {
    this.setState({ list: this.state.list.reverse(), sorted: !this.state.sorted })
  }

  render() {
    return (
      <div>
        Component A
      </div> 
    );
  }
}
