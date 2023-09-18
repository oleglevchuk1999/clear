import React, { useState }  from 'react';
import './Count.css';
import { Button } from '@material-ui/core';
const Count = () => {
    const [count,setCount] = useState(0);
    return ( 
        <div className='count'>
        <p>Вы кликнули {count} раз</p>
        <Button variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
            +
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
            -
        </Button>
        </div>
     );
}
 
export default Count;