import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import  LoginAuth   from './loginAuth';
import Contact from './Contact';

class Login extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        redirectToReferrer: false 
      };
    }
    
  
    login = (props) => {
      this.props.onLoggedIn();
      console.log('clicking login: ' + this.props.isAuthenticated);
    }
  
    logout = (props) => {
      this.props.onLoggedOut();
      console.log('clicking login: ' + this.props.isAuthenticated);
    }
  
    // AuthHandle = (props) => {
    //   if (this.props.authenticate )
    //     return (<p> Welcome! <button onClick={() => { this.logout(props); }}>Sign out</button> </p>);
    //   else 
    //     return (<p>You are not logged in.</p>);
    // }
  
    render() {
      let { from } = this.props.location.state || { from: { pathname: "/" } };
      let { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) return <Redirect to={from} />;

      return (
        <div className='Body'>
          <p><LoginAuth name='test'/></p>
          
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }
  
  const mapActionToProps = (dispatch) => {
    return {
        onLoggedIn: () => dispatch({type: 'LOG_IN'}),
        onLoggedOut: () => dispatch({type: 'LOG_OUT'})
    }
  };
  
  const mapStatesToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
  };
  
  export default connect(mapStatesToProps, mapActionToProps) (Login);