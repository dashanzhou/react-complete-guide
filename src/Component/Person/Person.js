import React, { Fragment } from 'react';
import './Person.css';

const person = (props) => {
    return (
        <Fragment>
            
                
            <Fragment><p className="Person">{props.greetings}</p></Fragment> 
            
            <p className="Person"
                onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            

        </Fragment>
    )
};

export default person;