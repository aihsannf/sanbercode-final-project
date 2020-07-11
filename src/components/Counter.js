import React, { useState, useEffect } from 'react';
import './style/Counter.css';

const Counter = () => {
    // menggunakan Hooks untuk melakukan perubahan pada functional components
    const [count, setCount] = useState(0);
    
    // menggunakan useEffect untuk lifecycle(side effect) pada function component
    useEffect(() => {
        document.title = `Counter : ${count}`
        return() => {
            document.title= "Sanbercode Final Project"
        }
    })

    return(
        <>
            <div className='counter-cont'>
                <h1>Counter</h1>
                <h2>{count}</h2>
                <button className='btn' onClick={() => setCount(count + 1)} >+</button>
                <button className='btn' onClick={() => setCount(count - 1)} >-</button><br/>
                <button className='btn1' onClick={() => setCount(0)} >Reset</button> 
            </div>
        </>
    );
}

export default Counter;