import React, { Component } from "react";
import Navigation from "./Navigation";
import AuthenticationProvider from "./pages/login/Data/AuthenticationProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </div>
    );
  }
}

export default App;