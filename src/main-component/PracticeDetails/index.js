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
           <Breadcumb bdtitle={'Practice Area'} bdsub={'Practice area details'}/>
           <PracticDetails/>
           <FooterSection/>
       </div>
    )
}

export default PracticeDetails;