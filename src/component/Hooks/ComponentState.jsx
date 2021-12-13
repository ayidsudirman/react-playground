import React, { useState } from "react";
import UseCounter from './Helper/UseCounter';

const ComponentState = () => {
    const [state, setState] = useState({
        subscribe: false,
        // like: 0,
        dislike: 0
    });

    const handleSubscribe = () => {
        setState({
            ...state,
            subscribe: !state.subscribe
        })
    }

    // const handleLike = () => {
    //     setState(currentState => ({
    //         ...state,
    //         like: currentState.like + 1
    //     }))
    // }

    const [like, handleLike, handleTripleLike] = UseCounter(0);


    // const handleDislike = () => {
    //     setState({
    //         ...state,
    //         dislike: state.dislike + 1
    //     })
    // }

    const [dislike, handleDislike] = UseCounter(0);


    // const handleTripleLike = () => {
    //     handleLike();
    //     handleLike();
    //     handleLike();
    // }


    return ( 
        <>
            <p>
                <button onClick={handleSubscribe}>Subscribe</button>
                <span> {JSON.stringify(state.subscribe)}</span>
            </p>
            <p>
                <button onClick={handleLike}>Like</button>
                <span> : {like}</span>
            </p>
            <p>
                <button onClick={handleDislike}>Dislike</button>
                <span> : {dislike}</span>
            </p>
            <p>
                <button onClick={handleTripleLike}>Triple Like</button>
                <span> : {like}</span>
            </p>
        </>
     );
}
 
export default ComponentState;