import React from 'react';

const ChildComponent = ({title, user, action}) => {
	// sleep(2000); // heavy process simulation
	console.log('Child Component Rendered');
    return ( 
        <>
           <b>--Child Component--</b>
					 <p>{title}, {user.name} </p>
					 <button onClick={action}>Like</button>
        </>
     );
}


export function sleep(millisecond) {
  const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now()
	} while (currentDate - date < millisecond)
}
 
export default ChildComponent;