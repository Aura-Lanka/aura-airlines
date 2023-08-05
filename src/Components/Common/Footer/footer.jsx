import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <>

          <div class="container-fluid bg-dark footer mt-1 pt-5 wow fadeIn" data-wow-delay="0.1s" >
              <div class="container py-3">
                  <div class="row g-5">
                      <div class="col-lg-3 col-md-6" style={{ textAlign: 'left' }}>
                            <a href="/" class="navbar-brand">
                                <img src="airlogo.png" alt="Aura Lanka Logo" width="300" height="300"></img>
                            </a>
                          {/* <h1 class="text-white mb-4"  style={{ textAlign: 'left' }}>
                              <i class="fa fa-building text-primary me-3"></i>APEX
                          </h1> */}
                          {/* <p>
                            Aura Airlines is a concept of conglomerate in the Airline Industry in Sri Lanka dedicating its approach mainly to Private & Business Airline, as an exclusive platform which customers can benefit from in the fields of Leisure, Corporate and VIP transport solutions, and service for both domestic and international market.
                          </p> */}
                          
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h4 class="text-light mb-4" style={{ textAlign: 'left' }}>Address</h4>
                          <p><i class="fa fa-envelope me-3"></i>info@auraairline.com</p>
                          <p><i class="fa fa-phone-alt me-3"></i>+(94) 77 3333966</p>
                          <p><i class="fa fa-user me-3"></i>Dr. Viranjith Thambugala</p>
                          <p>
                              <i class="fa fa-map-marker-alt me-3"></i>Udawatta, Thalangama, Malabe
                          </p>

                          <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-primary me-1" href="https://www.facebook.com/viranjiththambugala"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-primary me-1" href="https://www.youtube.com/watch?v=KkQATIXBY5w"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-primary me-1" href="https://www.youtube.com/watch?v=KkQATIXBY5w"><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-primary me-0" href="/"><i class="fab fa-instagram"></i></a>
                          </div>
                          
                      </div>
                      <div class="col-lg-3 col-md-6"  style={{ textAlign: 'left' }}>
                          <h4 class="text-light mb-4">Quick Links</h4>
                          <a class="btn btn-link" href="/">Home</a>
                          <a class="btn btn-link" href="/about">About</a>
                          <a class="btn btn-link" href="/Air">Aircraft Guide</a>
                          <a class="btn btn-link" href="/Membership">Membership</a>
                          <a class="btn btn-link" href="Destination">Destinations</a>
                          <a class="btn btn-link" href="/Offers">Offers</a>
                          <a class="btn btn-link" href="/Inquire">Inquire</a>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h4 class="text-light mb-4"  style={{ textAlign: 'left' }}>Newsletter</h4>
                          <p>Get in touch for latest updates.</p>
                          <div class="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                              <input
                                  class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                  type="text"
                                  placeholder="Your email"
                              />
                              <button
                                  type="button"
                                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                              >
                                  SignUp
                              </button>
                              
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container-fluid copyright">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                              &copy; <a href="#">Aura Airlines</a>, All Right Reserved.
                          </div>
                          <div class="col-md-6 text-center text-md-end">

                              Designed By <a href="https://htmlcodex.com"> Aura Lanka</a>
                              <br />Distributed By
                              <a href="https://themewagon.com" target="_blank"> Aura Airlines</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </>
  )
}

export default footer