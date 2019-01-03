import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';


////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function loginAuth() {
  return (
    <Router>
      <div className="Body">
        <p><Link to="/public">Public Page</Link></p>
        <p><Link to="/protected">Protected Page</Link></p>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

// fakeAuth = (props) => {
//   authenticate(cb) {
//     this.login(props);
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.logout()
//     setTimeout(cb, 100);
//   }
// };

function logout(props) {
  this.props.onLoggedOut();
  setTimeout(logout, 100);
}

// function AuthHandle(props) {
//   if (this.props.authenticate )
//     return (<p> Welcome! <button onClick={() => { this.logout(props); }}>Sign out</button> </p>);
//   else 
//     return (<p>You are not logged in.</p>);
// }

 const AuthButton = withRouter(
  ({ history }) =>
    this.props.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            this.logout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
); 

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        props.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false 
    };
  }
  

  // login = (props) => {
  //   this.props.onLoggedIn;
  //   this.setState({ redirectToReferrer: true });
  //   //setTimeout(login, 100);
  // };

  // logout = (props) => {
  //   this.props.onLoggedOut;
  //   this.setState({ redirectToReferrer: false });
  //   //setTimeout(logout, 100);
  // }

  AuthHandle = (props) => {
    if (this.props.authenticate )
      return (<p> Welcome! <button onClick={() => { this.logout(props); }}>Sign out</button> </p>);
    else 
      return (<p>You are not logged in.</p>);
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <Router>
          <div className="Body">
            <p><Link to="/public">Public Page</Link></p>
            <p><Link to="/protected">Protected Page</Link></p>
          </div>
        </Router>

        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.props.onLoggedIn}>Log in</button>
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