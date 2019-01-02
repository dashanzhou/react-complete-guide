import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';



const ButtonOne = (props) => {
    
    return (
        <div>
            <button style={props.styles}>I am ButtonOne</button>
            
        </div>
    )
}

export default stylesWrapper(ButtonOne);