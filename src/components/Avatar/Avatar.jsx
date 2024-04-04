import React from 'react';

const Avatar = (props) => {
    return ( 
    <div>
        <p>{props.auth}</p>
        <p>{props.srs}</p>
    </div>
     );
}
 
export default Avatar;