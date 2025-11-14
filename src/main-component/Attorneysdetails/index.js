import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import AttorneysDetails from '../../components/AttorneysDetails'
import FooterSection from '../../components/Footer'
import { useEffect } from 'react';


const Attorneysdetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Our Attorneys'} bdsub={'Attorneys Single'} />
            <AttorneysDetails />
            <FooterSection />
        </div>
    )
}

export default Attorneysdetails;