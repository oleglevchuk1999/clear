import React from 'react';
import Count from '../../components/Count/Count';
import './About.css'
import MyCount from '../../components/MyCount/MyCount';

const About = () => {

    return ( <div className='about'>
    <Count/>
    <MyCount/>
</div> );
}
 
export default About;