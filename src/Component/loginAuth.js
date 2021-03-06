import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


let globalState = null;

const loginAuth = (props) =>{
  globalState = props.isAuthenticated;

  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

const fakeAuth = {

  authenticate(cb) {
    console.log('globalState: ' + globalState);
    setTimeout(cb, 100); // fake async
  },
  goback(cb) {
    console.log('globalState: ' + globalState);
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
  
    globalState ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.goback(() => history.push("/"));
          }}
        >
          Go Back!
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
        globalState ? (
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

export default loginAuth;