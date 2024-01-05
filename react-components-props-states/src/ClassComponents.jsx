import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Arttır</button>
      </div>
    );
  }
}

export default ClassComponent;