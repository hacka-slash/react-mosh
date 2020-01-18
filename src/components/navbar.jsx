import React, { Component } from 'react';

//This component is stateless.. A stateless functional component
//Meaning this component is simple enough to not need to be defined in a 
//class. It can simply just return a .jsx
const NavBar = (props) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                 Navbar 
                 <span 
                    className="badge badge-pill badge-secondary">
                        {props.totalCounters}
                 </span>
            </a>
        </nav>
     );
};

 
export default NavBar;