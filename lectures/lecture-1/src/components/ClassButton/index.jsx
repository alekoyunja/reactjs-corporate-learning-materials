import React, { Component } from 'react';

class ClassButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type={this.props.type}>{this.props.title}</button>
      
    );
  }
}

export default ClassButton;