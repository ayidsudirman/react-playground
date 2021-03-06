import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Hooks.css";

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })

//     }

//     componentDidMount(){
//         document.title = `Title Change: ${this.state.count}`
//     }
    
//     componentDidUpdate(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = "ReactJS Hello World" 
//     }

//     render(){
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [ count, setCount ] = useState(0);
    const history = useHistory();

    useEffect(()=>{
        document.title = `Title Change: ${count}`;
        return () => {
            document.title = "ReactJS Hello World"
        }
    })

    return (
        <div className="p-hooks">
                <p>Nilai saya saat ini adalah : {count}</p>
                <button onClick={()=> setCount(count + 1)}>Update Nilai</button>
                <hr />
                <p>Berikut link untuk pelajaran lebih detail tentang hooks dan context :</p>
                <button onClick={()=> history.push('/sastra')}>Sastra Nababan</button>
            </div>

    )
}

export default Hooks;