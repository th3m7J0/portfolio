import React from 'react';
import './SignUp.css';




function SignUp() {
    return(
        <div id="sign-up" className="bg-light">
            <br/><br/>
            <div className="container">
                <div className="row pad justify-content-md-center align-items-center">
                    <h4 className="col-md-8 col-sm-12 fw-300 text-white">
                        Interested in joining our network of experts, consulting firms and
                        technology providers?</h4>
                    <div className="col-md-3 col-sm-12 justify-content-center">
                        <a className="btn btn-block btn-sm  btn-dark" href="#">
                            Sign up </a>
                    </div>
                </div>

            </div>
            <br/><br/>
        </div>
    )
}

export default SignUp;
