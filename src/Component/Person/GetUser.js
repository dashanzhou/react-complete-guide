import React from 'react';
import axios from 'axios';

//https://api.github.com/users/john

const GetUser = (e) =>  {
    e.preventDefault();
    const user = e.target.elements.username.value;
    //console.log(user);
    axios.get("https://api.github.com/users/john")
     .then( (res) => {
         console.log(res);
     })
}

export default GetUser;
