import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import PracticDetails from '../../components/practicedetails'
import FooterSection from '../../components/Footer'


const PracticeDetails = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'Услуги'} bdsub={'Детали услуг'}/>
           <PracticDetails/>
           <FooterSection/>
       </div>
    )
}

export default PracticeDetails;