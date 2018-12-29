
import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';


class NewUser extends Component  {

    state = {
        repos: null
      }
    
    userRepoHandler = (repo) => {
        this.setState({
            repos: repo
        })
    };

    GetUser = (e) =>  {
        let repos = null;
        e.preventDefault();

        const user = e.target.elements.username.value;

        if (user) {
            let url = `https://api.github.com/users/${user}`;
            axios.get(url)
                .then( (res) => {
                    repos =  res.data.public_repos;;
                    //console.log(res);
                    console.log(repos);
                    this.userRepoHandler(repos);
                })
        } 
        else return;
    }

    render() {
        return (
            <div className="Body">
                <form onSubmit={this.GetUser}>
                    <h1 className="HttpCall">HTTP Calls in React!</h1>
                    <input style={{margin:"20px auto", display: "block"}} type="text" name="username" />
                    <button style={{margin:"20px auto", display: "block"}}>Submit</button>
                </form>

                { this.state.repos ? <p>Numbers of Repos: {this.state.repos} </p>: 
                <p>Please enter an username:</p>}
            </div>
        );
    }  
}

export default NewUser;
