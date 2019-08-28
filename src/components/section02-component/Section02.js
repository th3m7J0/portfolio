import React from 'react';
import './Section02.css';
import CardBlock from '../card-block-component/CardBlock';


function Section02() {
    return(
        <div id="section02">
            <div className="header container-fluid text-center">
                <hr/><br/>
                <div className="mt-3">
                    <small className="text-white">Adapted expertise and technologies to your challenges</small>
                </div><br/>
            </div>
            <div className="px col-lg-auto col-sm-12  text-center">
                <h2 className="text-white">Fast-track your innovation with services tailored to industrial challenges</h2>
            </div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 pb-4">
                        <CardBlock image={"https://bridgr.co/wp-content/uploads/2018/10/005-leader-1.png"}
                                   title={"Independent Experts and Consulting Firms"}
                                   text={"Personalized and on-demand expertise to your challenges and problems."} />
                    </div>
                    <div className="col-md-6 col-sm-12 pb-4">
                        <CardBlock image={"https://bridgr.co/wp-content/uploads/2018/10/009-chip-1.png"}
                                   title={"Technology Providers and Integrators"}
                                   text={"Get the list of the most suited suppliers to your reality."} />
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-6 col-sm-12 pb-4">
                        <CardBlock image={"https://bridgr.co/wp-content/uploads/2018/10/002-resume.png"}
                                   title={"Digital Transformation Plan"}
                                   text={"Digital and powerful tools to help you prioritize your strategic projects."} />
                    </div>
                    <div className="col-md-6">
                        <CardBlock image={"https://bridgr.co/wp-content/uploads/2018/10/006-analysis.png"}
                                   title={"Access to funding"}
                                   text={"Access all public and private resources to finance your projects."} />
                    </div>
                </div>
                <br/><br/><br/>
            </div>

        </div>
    )
}

export default Section02;


