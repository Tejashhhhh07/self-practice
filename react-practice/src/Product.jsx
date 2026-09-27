import React, { useState } from 'react'

function Product({number}) {
    var[a,b]=useState(10);
  return (
    <div>
         <h1>{a}</h1>
         <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text'>Click</button>
         <h1>{number}</h1>
    </div>
  )
}

export default Product