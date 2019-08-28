import React, {Component} from 'react';
import './Section01.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Section01 extends Component {

    constructor() {
        super();
        this.state = {
            scrolled: false,
            humberger: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false});
            }
        })

        window.addEventListener("resize", ()=>{
            const isBerger = window.innerWidth< 990;
            if(isBerger){
                this.setState({humberger:true});
            } else {
                this.setState({humberger:false});
            }
            console.log(this.state.humberger);
        });

    }

    render() {
        return (
            <div className="Header">
                <nav
                    className={this.state.scrolled ? "navbar navbar-expand-lg navbar-light bg-light scrolled fixed-top " : "navbar navbar-expand-lg navbar-dark  fixed-top"}>
                    {this.state.scrolled ?
                        <a className="navbar-brand" href="#">
                            <img src="https://bridgr.co/wp-content/uploads/2018/01/Footer_BRIDGR_logo.png"
                                 alt="BRIDGR"
                                 className="logo-inverse mx-auto d-block my-auto"/>
                        </a> : <a className="navbar-brand" href="#">
                            <img src="https://bridgr.co/wp-content/uploads/2018/01/Footer_BRIDGR_logowhite.png"
                                 alt="BRIDGR"
                                 className="logo-inverse mx-auto d-block my-auto"/>
                        </a>}
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={this.state.humberger?"berger":"nav-item"}>
                                <a className={this.state.humberger?"berger":"nav-link"} href="#">OUR SOLUTION </a>
                            </li>
                            <li className={this.state.humberger?"berger":"nav-item"}>
                                <a className={this.state.humberger?"berger":"nav-link"} href="#">INSIGHTS</a>
                            </li>
                            <li className={this.state.humberger?"berger":"nav-item"}>
                                <a className={this.state.humberger?"berger":"nav-link"} href="#">ABOUT</a>
                            </li>
                            <li className={this.state.humberger?"berger":"nav-item"}>
                                <a className={this.state.humberger?"berger":"nav-link"}  href="#">FRANÇAIS</a>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary btn-sm">Post a project</button>
                        <button type="button" className={this.state.scrolled?"btn btn-light text-black-50 border btn-sm":"btn btn-outline-light btn-sm"}>Login</button>
                    </div>
                </nav>
                <section id="section01" className="container-fluid text-center">
                    <h1 className="display-4 text-responsive">Successfully ensure your<br/>
                        <span>digital transition</span>
                        <hr/>
                    </h1>
                    <p className="text-white lead text-responsive-2">Take advantage of new technologies and rise to the
                        top of your industry.</p>
                    <button type="button" className="contact btn btn-primary btn-lg mb-3">Contact us</button>
                    <button type="button" className="btn btn-outline-light btn-lg mb-3">Become an expert / provider</button>
                    <br/>

                    <AnchorLink href="#section02"><span></span></AnchorLink>

                </section>


            </div>
        )
    }

}


export default Section01;
