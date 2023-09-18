import React, { useState }  from 'react';

const Count = () => {
    const [count,setCount] = useState(0);
    return ( 
        <div className='count'>
        <p>Вы кликнули {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
            +
        </button>
        <button onClick={() => setCount(count - 1)}>
            -
        </button>
        </div>
     );
}
 
export default Count;