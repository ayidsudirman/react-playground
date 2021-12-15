import React, { useState} from 'react';
import SideEffectFunction from './Helper/SideEffectFunction';
import NewsFeed from './Helper/NewsFeed';

const SideEffect = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(currentState => !currentState)

        return ( 
        <div>
            <br />                                 
            <button onClick={handleToggle}>Toggle</button>
            {toggle && <SideEffectFunction />}
            <hr />
            <NewsFeed />
        </div>
     );
}
 
export default SideEffect;