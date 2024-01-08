import React, { Component } from 'react';
import ClassButton from './components/ClassButton';
import FunctionButton from './components/FunctionButton';

class App extends Component {
  render() {
    return (
      <main id="content">
        <ClassButton title="Click" type="button" />
        <FunctionButton title="Click" type="button" />
      </main>
    );
  }
}

export default App;