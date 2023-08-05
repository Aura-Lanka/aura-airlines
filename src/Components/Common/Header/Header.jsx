import React, { useEffect } from 'react';
import "./header.css"
import "./bootstrap.min.css"
import "./main.js"
import $ from 'jquery'; // Import jQuery

const Header = () => {

    useEffect(() => {
        // Add the provided jQuery code here
        $(window).scroll(function () {
          if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
              $('.fixed-top').addClass('bg-dark shadow');
            } else {
              $('.fixed-top').removeClass('bg-dark shadow');
            }
          } else {
            if ($(this).scrollTop() > 45) {
              $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
              $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
          }
        });
      }, []); 

  return (
    <>
     
     <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><i class="fa fa-map-marker-alt me-2"></i>949/13 Udawatta Road, Thalangama North, Malabe</small>
                <small class="ms-4"><i class="fa fa-envelope me-2"></i>info@auraairline.com</small>
            </div>
            <div class="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a class="text-white-50 ms-3" href="https://www.facebook.com/viranjiththambugala"><i class="fab fa-facebook-f"></i></a>
                <a class="text-white-50 ms-3" href="https://www.youtube.com/watch?v=KkQATIXBY5w"><i class="fab fa-twitter"></i></a>
                <a class="text-white-50 ms-3" href="https://www.youtube.com/channel/UCYXgAIF4A6Tm5-kzKR_UbDA"><i class="fab fa-youtube"></i></a>
                <a class="text-white-50 ms-3" href="/"><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="logo">
                <a href="/">
                    <img src="airlogo.png" alt="Logo"></img>
                </a>
            </div>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" class="nav-item nav-link active">Home</a>
                    <a href="/about" class="nav-item nav-link">About</a>
                    <a href="/Membership" class="nav-item nav-link">Membership</a>
                    <a href="Destination" class="nav-item nav-link">Destinations</a>
                    <a href="/Offers" class="nav-item nav-link">Offers</a>
                    <a href="/Inquire" class="nav-item nav-link">Contact / Inquire</a>
                </div>
                <div class="d-none d-lg-flex ms-2">
                    <a class="btn btn-outline-primary py-2 px-3" href="/Book">
                        Book Now
                        <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    </div>

   
    </>
  )
}

export default Header