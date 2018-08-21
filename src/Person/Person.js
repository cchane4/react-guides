// a component at its core is just a function that returns html 
import React from 'react'; 
import './Person.css';
// props refers to properties in the jsx code 
// state is not available in function components
// these things dont manipulate your application state
// most parts of the application should just render to the dom but they shouldnt allow you to change the application state 
//  you can pass methods as props so that you can call a method that might change the state in another component which doesnt have direct access to the state

const person = (props) => { 
    return (
    <div className="Person">
        <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} /> 
    </div>
    )
}; 

export default person; 