import React, { Component } from 'react';

class ClassButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onClicked(e) {
    console.log(this.state.count);

    //state' in değiştyirmek için kulllaılan method setState
    // state' i birer birer arttırdık
    this.setState(() => {

      return {
        count: this.state.count + 1
      };
    });
  }

  render() {
    return (
      <button type={this.props.type} onClick={(e) => this.onClicked(e)}>{this.props.title}</button>
    );
  }
}

export default ClassButton;