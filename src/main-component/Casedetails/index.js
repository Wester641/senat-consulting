import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import CaseDetails from '../../components/casedetails'
import FooterSection from '../../components/Footer'


const CaseStadiesDetails = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'Case Stadies Single'} bdsub={'Case Single'}/>
           <CaseDetails/>
           <FooterSection/>
       </div>
    )
}

export default CaseStadiesDetails;