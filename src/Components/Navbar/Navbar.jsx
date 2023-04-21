import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>     
        <nav class="navbar navbar-expand-lg navbar-light bg-info p-3">
            <div class="container-fluid">
                <Link className="navbar-brand brand-edit" to="/">
                    <img className="logo-edit" src="./airlogo.png" alt="logo-name" />
                </Link>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">

                    <li className="nav-item">
                        <Link className="nav-link nav-link-color" aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link nav-link-color" aria-current="page" to="/Book">Book</Link>
                    </li>

                    {/*<li className="nav-item">
                        <Link className="nav-link nav-link-color" aria-current="page" to="/Air">Aircraft Guide</Link>
                    </li>*/}

                    <li className="nav-item edit">
                        <Link className="nav-link nav-link-color" aria-current="page" to="/About">About Us</Link>
                    </li>

                    <li className="nav-item edit">
                        <Link className="nav-link nav-link-color" aria-current="page" to="/Contact">Contact Us</Link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Contact Us
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li className="nav-item edit">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/Inquire">Inquire Us</Link>
                            </li>
                        </ul>
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


                </ul>
                <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                    <li class="nav-item mx-2">
                    <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-youtube-square"></i></a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-facebook-square"></i></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;