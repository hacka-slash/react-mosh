import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
            {id: 1, value:4},
            {id: 2, value:3},
            {id: 3, value:2},
            {id: 4, value:0}
        ]
    }
    handleIncrement = counter => {
        console.log(counter);
    }
    handleDelete = (counterId) =>{
        //console.log("DELETE!", counterId)
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: newCounters});
    };

    render() { 
        return (
        <div>
            {this.state.counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}
                counter={counter}>
                <h4>Title #{counter.id}</h4>
            </Counter>
            )}
        </div>  
        
        );
    }
}
 
export default Counters;