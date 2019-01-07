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

class Login extends React.Component {
  
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {
        redirectToReferrer: false 
      };
    }
    
    handleLoginClick = (props) => {
        this.props.onLoggedIn();
        console.log('clicking login: ' + this.props.isAuthenticated);
    }
  
    handleLogoutClick = (props) => {
        this.props.onLoggedOut();
        console.log('clicking login: ' + this.props.isAuthenticated);
    }
  
 
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
    
        if (redirectToReferrer) return <Redirect to={from} />;

        let button;

        if (this.props.isAuthenticated) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        
        return (
            <div className='Body'>

                <p><LoginAuth isAuthenticated={this.props.isAuthenticated}/></p>
                
                <p>You must log in to view the page at {from.pathname}</p>
                {button}
            </div>
        );
    }
}
 
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
}
  
function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
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