import React from 'react';
import NewUser from './NewUser';
import getUser from './GetUser';
import axios from 'axios';



const DisplayUser = () => {
    return (
        <div>
            <NewUser getUser={getUser}/>
        </div>
    )
};

export default DisplayUser;