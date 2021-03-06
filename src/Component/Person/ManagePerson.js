import React, { Component } from 'react';
import '../../App.css';
import Person from './Person';
import { connect } from 'react-redux';


class ManagePerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
            {name: 'Max', age: 28},
            {name: 'nu', age: 29},
            {name: 'Stephanie', age: 29}
            ],
            number: 21
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
        number: null
        })
    };


    nameChangedHandler = (event) => {
        this.setState({
        persons: [
            {name: 'Max', age: 35},
            {name: event.target.value, age: 29},
            {name: 'Stephanie', age: 31}
        ],
        number: null
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
                    onClick={() => this.switchNameHandler('Dashan!!')}> switch name 
                </button>
                <Person 
                    greeting="Hello"
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
                <br/>
                <div>
                    Number: <span>{this.props.number}</span>
                    <p>
                        <button style={style} onClick={this.props.onNumberUp}>NumberUp</button>- 
                        <button style={style} onClick={this.props.onNumberDown}>NumberDown</button>
                    </p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNumberUp: () => dispatch({type: 'NUMBER_UP'}),
        onNumberDown: () => dispatch({type: 'NUMBER_DOWN'})
    }
};

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ManagePerson);
