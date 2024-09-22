import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList/RowList';
import { ThreeDots } from 'react-loader-spinner'; 
import './Home.css';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); 
    }, []);

    return (
        <div className="whole">
            {isLoading ? (
                <div className="loader-container">
                    <ThreeDots color="#ffffff" height={80} width={80} />
                </div>
            ) : (
                <>
                    <Header />
                    <Banner />
                    <RowList />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
