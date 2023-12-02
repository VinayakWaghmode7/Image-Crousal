import React from 'react';
import { useState } from 'react';

function Header({props}) {

  const [name, setName] = useState("Vinayak");
  //console.log(useState);

  
  return (
    <div>
    <div className='font-bold ml-[645px] '  >{name} from {props}</div>
    <div className='flex font-bold  flex-col justify-center mt-10'>
    <button  onClick={()=>{setName("Virat Kohli")
    }}>Change Name</button>
    </div>
    </div>
    
  )
}

export default Header