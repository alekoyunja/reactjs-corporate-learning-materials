import React, { Component } from 'react';

class ClassButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // state' i props' tan almak için kullanılan method
  static getDerivedStateFromProps(props, state) {
    return {
      title: props.title,
    };
  }

  componentDidMount() {
    //component ilk render edildikten sonra çalışır
    console.log("componentDidMount çalıştı");
    console.log(this.state);
  }

  componentWillUnmount() {
    //component kaldırılmadan önce çalışır
    console.log("componentWillUnmount çalıştı");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //component update edilmeden önce çalışır
    console.log("shouldComponentUpdate çalıştı");
    return false;
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
      <button type={this.props.type} onClick={(e) => this.onClicked(e)}>{this.props.title}{this.state.count}</button>
    );
  }
}

export default ClassButton;