import React from 'react';
import HomeText from '../../components/HomeText/HomeText';
import Loader from '../../components/Loader/Loader';
import './Homepage.css';

const Homepage = () => {
    return ( <>
        <HomeText/>
        <Loader/>
    </>
        
    );
}

export default Homepage;