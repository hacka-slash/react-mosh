import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
     };

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
     
     handleIncrement = () =>{
         //console.log(product);
         console.log('Increment Clicked', this);
         //this.state.count++;
         //The following lets React know that a property within the Virtual DOM has been changed
         this.setState({count: this.state.count+1});
     }


    render() { 
        console.log(this.props);
        //let classes = "badge m-2 badge-";
        //let classes = this.getBadgeClasses();
        //classes += (this.state.count === 0) ? "warning" : "primary";
        return( 
        <div>
            <h4>Title #{this.props.id}</h4>
            <span className={this.getBadgetClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement}className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            {this.state.tags.length === 0 && <p>Please create a new tag</p>}
            {this.renderTags()};
        </div>
        );
    }

    getBadgetClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;