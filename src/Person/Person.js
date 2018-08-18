// a component at its core is just a function that returns html 
import React from 'react'; 

const person = () => { 
    return <p> I'm a person and I am {Math.floor (Math.random() * 30 )} years old!</p>

}; 

export default person; 