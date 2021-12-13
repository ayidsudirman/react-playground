import { Fragment } from "react";
import { useHistory } from "react-router-dom";

const Sastra = () => {
    const history = useHistory();
    return ( 
        <Fragment>
            <p>Sastra Nababan Bicara Hooks: </p>
            <button onClick={() => history.push('/sastra/component-state')}>1. Component State</button><br /><br />
            <button onClick={() => history.push('/sastra/side-effect')}>2. Side Effect</button><br /><br />
            <button onClick={() => history.push('/sastra/state-management')}>3. State Management</button><br /><br />
            <button onClick={() => history.push('/sastra/performance-optimization')}>4. Performance Optimization</button><br /><br />
        </Fragment>

     );
}
 
export default Sastra;