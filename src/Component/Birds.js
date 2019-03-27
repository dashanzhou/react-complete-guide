import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')

@observer
class Birds extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    render() {
        const { BirdStore } = this.props;

        return (
            <div className="App">
                <h2> You have {BirdStore.birdCount} birds. </h2>

                <form onSubmit={e => this.handleSubmit(e)}> 
                    <input type="text" placeholder="Enter bird" ref={input => this.bird = input} />
                    <button>Add bird</button>
                </form>
            </div>
        )
    }
}

export default Birds;