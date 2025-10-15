import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Porfolio from '../../components/case'
import FooterSection from '../../components/Footer'


const CaseStadies = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'Case Stadies'} bdsub={'Resent Case Studies'}/>
           <Porfolio/>
           <FooterSection/>
       </div>
    )
}

export default CaseStadies;