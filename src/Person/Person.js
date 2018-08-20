// a component at its core is just a function that returns html 
import React from 'react'; 
// props refers to properties in the jsx code 
// state is not available in function components
const person = (props) => { 
    return (
    <div>
        <p> I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>)
}; 

export default person; 