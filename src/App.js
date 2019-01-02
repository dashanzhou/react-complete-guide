import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManagePerson from './Component/Person/ManagePerson';
import NewUser from './Component/Person/NewUser';
import home from './Component/Home';
import about from './Component/About';
import contact from './Component/Contact';
import Error from './Component/Error';
import Navigation from './Component/Navigation';
import ValiationForm from './Component/ValidationForm';


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
              <Route path="/new" component={NewUser}/>
              <Route path="/join" component={ValiationForm}/>
              <Route path="/person" component={ManagePerson}/>
              <Route component={Error}/>
            </Switch>
            
          </div>
        </Router>
    );
  }
  
}

export default App;
