import React from 'react';

class Contact extends React.Component {

    state ={
        name: 'Dashan'
    }
    
    chnageName = (newName) => {
        this.setState(
            {
                name:newName  
            }
        )
    }
    
    chnageNamefromInput = (event) => {
        this.setState(
            {
                name:event.target.value  
            }
        )
    }


    render() {
    
        return (
            <div className="App">
                <br /><br/>
    
                <button onClick={() => this.chnageName('Awesome Dashan - :-(')}>
                    Change State using A non function</button>
                <button onClick={this.chnageName.bind(this, 'Awesome Dashan - :-)')}>
                    Change State using bind function</button>
                <br/>
                <input type='text' onChange={this.chnageNamefromInput} 
                    value={this.state.name}></input>
                <br/>
                Name: {this.state.name}
                <br></br><br/>
                <h1>Contact</h1>
            </div>
        );
    }
    
}

export default Contact;
