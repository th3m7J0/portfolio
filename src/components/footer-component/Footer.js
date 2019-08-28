import React from 'react';
import './Footer.css';


function Footer() {
    return(
        <div id="footer" className="bg-white">

                    <div className="row container-fluid">
                        <div className="col-lg-3 col-md-12 col-sm-12 pb-3">
                            <a href="#">
                                <img src="https://bridgr.co/wp-content/uploads/2018/01/bridgr-logo-footer.png" alt="BRIDGR" className="mx-auto d-block pt-4 pl-4"/>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pb-3">
                            <ul className="list-inline text-center pt-4">
                                <li className="list-inline-item">
                                    <a className="nav-link" href="#">OUR SOLUTION </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="nav-link" href="#">BLOG</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="nav-link"  href="#">JOBS</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pb-3">
                            <ul className="list-inline text-center pt-4">
                                <li className="list-inline-item mx-2">
                                    <a href="https://www.facebook.com/th3m7J0"
                                       target="_blank"><i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <a href="https://github.com/th3m7J0"
                                       target="_blank"><i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <a  href="https://www.linkedin.com/in/mecheref-adel-youcef-34b170168/"
                                       target="_blank"><i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <a href="mailto:a.mecheref@esi-sba.dz"
                                       target="_blank"><i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="text-center mtb">
                        <small>(modified by th3m7J0) <br/> <hr className="small-hr"/>Copyright © 2018 BRIDGR. All rights reserved.</small>
                    </div>

        </div>
    )
}

export default Footer;
