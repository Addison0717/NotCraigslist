import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import AdContainer from './components/AdContainer/AdContainer'
import AdForm from './components/AdForm/AdForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/ads" component={Main} />
          <Route exact path="/ads/:id" component={AdContainer} />
          <Route exact path="/addlisting" component={AdForm} />
        </div>
      </Router>
    )
  }
}

export default App;
