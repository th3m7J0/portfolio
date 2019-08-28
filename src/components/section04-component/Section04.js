import React from 'react';
import './Section04.css';
import CardBlock2 from '../card-block-2-component/CardBlock2';


function Section04() {
    return(
        <div id="section04">
            <div className="header text-center">
                <h2>From smaller projects to more advanced ones!</h2>
                <hr className="small-hr"/>
                <small className="lead text-secondary">Our ambition is to accompany you from the smallest successes to the biggest
                    ones.</small>
            </div>
            <br/><br/>
            <div className="container">
                    <div className="row ">
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"far fa-file-alt"} title={"Audit 4.0"} />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"far fa-bookmark"} title={"Go Paperless"}/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"fas fa-cogs"} title={"Integrators"}/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"fas fa-tv"} title={"Dashboards"}/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"fas fa-tachometer-alt"} title={"Robots"}/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"fas fa-chart-line"} title={"Advenced Analytics"}/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"fab fa-react"} title={"Artificial intelligence"}/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <a href="#">
                                <CardBlock2 image={"fa fa-book"} title={"And much more.."} mycolor={"ffa801"}/>
                            </a>
                        </div>

                    </div>
                
            </div>
            <br/>
        </div>
    )
}


export default Section04;
