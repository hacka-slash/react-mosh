import React, { Component } from 'react';

class Counter extends Component {
    

     styles = {
         fontSize: 30,
         fontWeight: 'bold'
     };

    //  constructor(){
    //      super();
    //      this.handleIncrement = this.handleIncrement.bind(this);
    //  }
     renderTags(){
         if(this.state.tags.length === 0) return <p>There are no tags!</p>;

         return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
     }
     


    render() { 
        console.log(this.props);
        //let classes = "badge m-2 badge-";
        //let classes = this.getBadgeClasses();
        //classes += (this.state.count === 0) ? "warning" : "primary";
        return( 
        <div>
            <h4>Title #{this.props.counter.id}</h4>
            <span className={this.getBadgetClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">
                    Increment
            </button>
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id) } 
            className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            
        </div>
        );
    }

    getBadgetClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.props.counter.value;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;