import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';


class App extends Component {
  state = {  
        counters: [
            {id: 1, value:4},
            {id: 2, value:3},
            {id: 3, value:2},
            {id: 4, value:0}
        ]
    }
    handleIncrement = counter => {
        //console.log(counter);
        const counters = [...this.state.counters]; 
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
        console.log(counters);
        //console.log(this.state.counters[0]);
    }
    handleDelete = (counterId) =>{
        //console.log("DELETE!", counterId)
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: newCounters});
    };
    handleReset = () => {
        const counters = [...this.state.counters];
        counters.forEach(counter => {
            counter.value = 0;
        });
        this.setState({counters: counters})
    };

    render(){
      return (
        <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}

          />
        </main>
        </React.Fragment>
        

      
      );
    }
}
 
export default App;

