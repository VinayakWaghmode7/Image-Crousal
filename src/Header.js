import React from 'react';
import { useState } from 'react';

function Header({props}) {

  const [name, setName] = useState("Vinayak");
  //console.log(useState);

  
  return (
    <>
    <div>{name} from {props}</div>
    <button onClick={()=>{setName("Virat Kohli")
    }}>Change Name</button>
    </>
    
  )
}

export default Header