import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>     
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand brand-edit" to="/"><img className="logo-edit" src="./airlogo.png" alt="logo-name" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-absolute top-0 end-0" style={{margin:'10px 0'}}>

                            <ul className="navbar-nav mx-5 mb-lg-1 end-0">
                                <li><Link to='https://www.facebook.com/'><i className="fa-brands fa-square-facebook fa-2x mx-2"></i></Link></li>
                                <li><Link to='https://www.youtube.com/' ><i className="fa-brands fa-youtube fa-2x mx-2"></i></Link></li>
                                <li><Link to='https://www.instagram.com/' ><i className="fa-brands fa-instagram fa-2x mx-2"></i></Link></li>
                                <li><Link to='https://www.gmail.com/'><i className="fa-solid fa-envelope fa-2x mx-2"></i></Link></li>
                            </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                            <ul className="nav nav-pills flex-column flex-sm-row">
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-color" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-link-color" aria-current="page" to="/Book">Book</Link>
                                </li>

                                {/*<li className="nav-item">
                                    <Link className="nav-link nav-link-color" aria-current="page" to="/Air">Aircraft Guide</Link>
                                </li>*/}

            
                                {/* <li className="nav-item dropdown">
                                <Link class="nav-link nav-link-color dropdown-toggle" to="/Air" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Aircraft Guide
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Air">Turbine engine helicopter</Link></li>
                                    <li className="dropdown-item">Another action</li>
                                </ul>
                                </li> */}
                             
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/Contact">Contact Us</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/Membership">Membership</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="Destination">Destinations</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/Offers">Offers</Link>
                            </li>
                            {/*
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/Inquire">Inquire</Link>
                            </li>*/}
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}
export default Navbar;