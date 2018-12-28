import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManagePerson from './Component/Person/ManagePerson';
import DisplayUser from './Component/Person/DisplayUser';
import home from './Component/Home';
import about from './Component/About';
import contact from './Component/Contact';
import Error from './Component/Error';
import Navigation from './Component/Navigation';


class App extends Component {
  render() {
    return(
        <Router>
          <div>
            <header className="App-header">
              <Navigation/>
            </header>
            <Switch>
              <Route path="/" exact component={home}/>
              <Route path="/home" component={home}/>
              <Route path="/about" component={about}/>
              <Route path="/contact" component={contact}/>
              <Route path="/new" component={DisplayUser}/>
              <Route path="/person" component={ManagePerson}/>
              <Route component={Error}/>
            </Switch>
            
          </div>
        </Router>
    );
  }
  
}

export default App;
