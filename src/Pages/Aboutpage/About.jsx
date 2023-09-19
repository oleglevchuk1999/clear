import React from 'react';
import Count from '../../components/Count/Count';
import './About.css'
import MyCount from '../../components/MyCount/MyCount';
import MyButton from '../../components/UI/MyButton/MyButton';


const About = () => {

    return ( <div className='about'>
    <Count/>
    <MyCount/>
    <MyButton>+</MyButton>

</div> );
}
 
export default About;