import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import Reviews from './Reviews/Reviews';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Banner></Banner>
            <CategoryBanner></CategoryBanner>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;