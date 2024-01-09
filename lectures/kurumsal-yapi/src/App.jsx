import React, { Component } from 'react';
import Kisiler from './Kisiler';

class App extends Component {
  render() {
    return (
      <main id="content">
        <Kisiler kisiler={[
        {
            id: 0,
            firstname: "Alptuğ",
            lastname: "Okan",
            age: 39
        },
        {
            id: 1,
            firstname: "Ayşe",
            lastname: "Aslım",
            age: 29
        },
    ]} />
      </main>
    );
  }
}

export default App;