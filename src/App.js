import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import MainContainer from './containers/main'

class App extends Component {

  render() {
    return (
      <div>
         <Router>
            <div>  
              <Route exact path="/" component={MainContainer} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
