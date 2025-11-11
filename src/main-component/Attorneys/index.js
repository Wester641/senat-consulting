import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import TeamSection2 from '../../components/Team2'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const Attorneys = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Our Attorneys'} bdsub={'Attorneys'} />
            <TeamSection2 />
            <FooterSection />
        </div>
    )
}

export default Attorneys;