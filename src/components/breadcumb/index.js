import React from 'react';

import {Link} from 'react-router-dom'

import './style.css'

const Breadcumb = (props) => {

    return(
        <div className="breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcumb-wrap text-center">
                            <h2>{props.bdtitle}</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>{props.bdsub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Breadcumb;
