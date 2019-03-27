import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () =>  {
    return (
        <div >
            <NavLink className="App-link" to="/">Home</NavLink> | 
            <NavLink className="App-link" to="/new">New</NavLink> | 
            <NavLink className="App-link" to="/join">Join</NavLink> | 
            <NavLink className="App-link" to="/about">About</NavLink> | 
            <NavLink className="App-link" to="/person">Display Person</NavLink> | 
            <NavLink className="App-link" to="/contact">Contact</NavLink> | 
            <NavLink className="App-link" to="/login">Login</NavLink>
            <NavLink className="App-link" to="/birds">Birds</NavLink>
        </div>
    );
}

export default Navigation;
