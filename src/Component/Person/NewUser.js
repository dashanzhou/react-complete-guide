import React from 'react';
import getUser from './GetUser';

const NewUser = (props) =>  {

    return (
        <form onSubmit={props.getUser}>
            <h1 className="HttpCall">HTTP Calls in React!</h1>
            <input style={{margin:"20px auto", display: "block"}} type="text" name="username"/>
            <button style={{margin:"20px auto", display: "block"}}>Submit</button>
        </form>
    );
}

export default NewUser;
