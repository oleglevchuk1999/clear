import  { useState } from 'react';
import Count from '../../components/Count/Count';
import './About.css'
import MyCount from '../../components/MyCount/MyCount';
import InputComponent from '../../components/InputComponent/InputComponent';
import OutputComponent from '../../components/OutputComponent/OutputComponent';
import Comment from '../../components/Coment/Comment';


const About = () => {
    const [displayText, setDisplayText] = useState('');

    const handleTextChange = (newText) => {
        setDisplayText(newText);
    };

     const name = 'Ylegsey';
     const age = '24';
     const mail = 'o.levghyk@mail.ru';

    return ( <div className='about'>
    <Count/>
    <MyCount/>
    <InputComponent onTextChange={handleTextChange}/>
    <OutputComponent text={displayText}/>
    <Comment name={name}  age={age} mail={mail}/>


</div> );
}
 
export default About;