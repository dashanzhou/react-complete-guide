import React, { Component } from 'react';
import '../../App.css';
import Person from './Person';


class ManagePerson extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: [
            {name: 'Max', age: 28},
            {name: 'nu', age: 29},
            {name: 'Stephanie', age: 29}
            ],
            repos: null
        };
    }
    
    switchNameHandler = (newName) => {
        //console.log('was clicked!');
        //don't do this -  this.state.persons[0].name = 'Dashan';
        this.setState({
        persons: [
            {name: newName, age: 35},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 31}
        ],
        repos: null
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
        persons: [
            {name: 'Max', age: 35},
            {name: event.target.value, age: 29},
            {name: 'Stephanie', age: 31}
        ],
        repos: null
        })
    };

    render() {
        const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'

        };

        return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button 
            style={style}
            onClick={() => this.switchNameHandler('Dashan!!')}> switch name </button>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing </Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />

        </div>
        );
    }
}

export default ManagePerson;
