import React, { useState, useEffect } from 'react';

const SideEffectFunction = () => {   
    console.log('Function init');
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(previousState => {
            return previousState + 1;
        })
    }

    useEffect( ()=> {
        //run on every render
        console.log('-> my first effect');
        // handleCount();
    },[])

    // componentDidMount Equivalent
    useEffect(()=>{
        console.log('-> componentDidMount Equivalent');        
    },[])
    
    // componentDidUpdate Equivalent
    useEffect(()=>{
        if(count > 0) {
            console.log('-> componentDidUpdate Equivalent');        
        }
    },[count])
    
    // componentWillUnMount Equivalent
    useEffect(()=>{
        //clean-up function
        return (
            ()=> {
                console.log('-> componentWillUnMount Equivalent');        
            }
        )
    },[])

    console.log(`-> start render: ${count}`)
    return ( 
        <div>
            <p>Side Effect</p>
            <button onClick={handleCount}>Count</button>
            <span> : {count}</span>  
        </div>
     );
}
 
export default SideEffectFunction;