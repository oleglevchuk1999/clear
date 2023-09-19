import React, { useState }  from 'react';
import './Count.css';
import MyButton from '../UI/MyButton/MyButton';
const Count = () => {
    const [count,setCount] = useState(0);
    return ( 
        <div className='count'>
        <p>Вы кликнули {count} раз</p>
        <MyButton  onClick={() => setCount(count + 1)}>
            +
        </MyButton>
        <MyButton  onClick={() => setCount(count - 1)}>
            -
        </MyButton>
        </div>
     );
}
 
export default Count;