import React from 'react';
import './Comment.css';
import Avatar from '../Avatar/Avatar';
const Comment = (props) => {
    return ( 
    
    <div className='comment'>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.mail}</p>
        <Avatar auth = '123' srs = '567'/>
    </div> );
}
 
export default Comment;