import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import AttorneysDetails from '../../components/AttorneysDetails'
import FooterSection from '../../components/Footer'


const Attorneysdetails = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'Our Attorneys'} bdsub={'Attorneys Single'}/>
           <AttorneysDetails/>
           <FooterSection/>
       </div>
    )
}

export default Attorneysdetails;