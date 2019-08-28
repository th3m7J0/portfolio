import React from 'react';
import './Register.css';


function Register() {
    return(
        <div id="register" className="bg-white">
            <div className="bb container-fluid">
                <div className="row">
                    <div className="offset-1 col-md-4  mt">
                        <p><b>Newsletter</b></p>
                        <p>Get the latest industry news by e-mail</p>
                    </div>
                    <div className="col-md-6 ml-auto col-sm-12 align-self-center">
                        <form className="form-inline justify-content-end mr align-items-center pb-5 pt-5">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-white border-right-0"><i className="fa fa-envelope"></i></div>
                                </div>
                                <input type="email" className="form-control pl-0 " id="email"
                                       placeholder="Email Address" autoComplete={"off"}/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-0 " >Register</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;
