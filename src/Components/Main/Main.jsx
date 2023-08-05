import React from 'react'
import "./main.css"
import "./flaticon.css"

const Main = () => {
  return (
    <>
      <div class="container-fluid p-0 mb-5">
          <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class="w-100 sty" src="carousel-2.jpg" alt="carosel_1" />
                      <div class="carousel-caption">
                          <div class="container">
                              <div class="row justify-content-center">
                                  <div class="col-lg-7 pt-5">
                                      <h5 class="text-white text-uppercase">Welcome to the Aura Airlines</h5>
                                      <h1 class="display-4 text-white mb-3 animated slideInDown">Life Is Short And The World Is Wide!</h1>
                                      <p class="fs-5 text-white-50 mb-5 animated slideInDown home_para">Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private plane services. We pride ourselves on offering a professional service.</p>
                                      <a class="btn btn-primary py-2 px-3 animated slideInDown" href='/Book'>
                                          Book Now
                                          <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                              <i class="fa fa-arrow-right"></i>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img class="w-100 sty" src="carousel-0.jpg" alt="carosel_2" />
                      <div class="carousel-caption">
                          <div class="container">
                              <div class="row justify-content-center">
                                  <div class="col-lg-7 pt-5">
                                      <h5 class="text-white text-uppercase">Welcome to the Aura Aura Airlines</h5>
                                      <h1 class="display-4 text-white mb-3 animated slideInDown">Best Airline To Fly To Serve</h1>
                                      <a class="btn btn-primary py-2 px-3 animated slideInDown" href='/Book'>
                                          Book Now
                                          <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                              <i class="fa fa-arrow-right"></i>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img class="w-100 sty" src="carousel-3.jpg" alt="carosel_3" />
                      <div class="carousel-caption">
                          <div class="container">
                              <div class="row justify-content-center">
                                  <div class="col-lg-7 pt-5">
                                      <h5 class="text-white text-uppercase">Welcome to the Aura Aura Airlines</h5>
                                      <h1 class="display-4 text-white mb-3 animated slideInDown">Experience Your Travel With Aura Airlines.</h1>
                                      <p class="fs-5 text-white-50 mb-5 animated slideInDown home_para">Whether you're traveling for business or pleasure, a private plane charter provides the ultimate travel experience.</p>
                                      <a class="btn btn-primary py-2 px-3 animated slideInDown" href='/Book'>
                                          Book Now
                                          <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                              <i class="fa fa-arrow-right"></i>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img class="w-100 sty" src="carousel-1.jpg" alt="carosel_4" />
                      <div class="carousel-caption">
                          <div class="container">
                              <div class="row justify-content-center">
                                  <div class="col-lg-7 pt-5">
                                      <h5 class="text-white text-uppercase">Welcome to the Aura Aura Airlines</h5>
                                      <h1 class="display-4 text-white mb-3 animated slideInDown">ARE YOU READY FOR TAKE-OFF?</h1>
                                      <a class="btn btn-primary py-2 px-3 animated slideInDown" href='/Book'>
                                          Book Now
                                          <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                              <i class="fa fa-arrow-right"></i>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>

        <section class="section_para nopad cac text-center">
            <h4 class="main_para">Aura Airlines is a concept conglomerate in the Airline Industry in Sri Lanka which was founded in 2018 and dedicates its approach mainly
                to uplift Airline services solely for the benefit of the entire community. Private & Business Airline, as an exclusive platform which customers
                can benefit from in the fields of Leisure, Corporate and VIP transport solutions, and service for both domestic and international market.</h4>
        </section>

      </div>

      {/* About Us */}

      <div class="container-xxl py-3">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="position-relative overflow-hidden h-100" style={{maxHeight: '400px'}}>
                        <img class="position-absolute w-100 h-100 pt-5 pe-5" src="img/about2.jpg" alt="" style={{objectFit: 'cover'}} />
                        <img class="position-absolute top-0 end-0 bg-white ps-2 pb-2" src="img/about5.jpg" alt="" style={{width: '200px',height: '200px'}} />
                    </div>
                    <br />
                    <p class="mb-5" style={{textAlign: 'center'}}>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional and personalised service.</p>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                        <h1 class="display-6 mb-2"><span style={{color: '#FF6F0F'}}>Welcome to The Aura Airlines</span> Let Your Dreams Take A Flight</h1>
                        <div class="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                            <p class="text-dark mb-2">"Enjoy the next level of private flying with our private helicopter charter service - Aura Airlines, feel the extraordinary experience. Complete with a fleet of AIRBUS Helicopters, AIRBUS approved service facility and a hangar in Ratmalana and highly experienced staff, your safety, comfort, privacy and convenience are our top priorities. Fly with us to experience the difference and enjoy while being completely at ease about your safety. Make every flight personal & assure safe, efficient & reliable solutions to deliver superior customers for all stakeholders. Our aim is to provide safe, efficient, high quality and integrated utility aircraft services to build infrastructure, and protect people and property."</p>
                            <span class="text-primary">Dr. Viranjith Thambugala, Chairman And Founder</span>
                        </div>
                        {/* <p class="mb-5">Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional and personalised service.</p> */}
                        <a class="btn btn-primary py-2 px-3 me-3" href="/">
                            About More
                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </a>
                        <a class="btn btn-outline-primary py-2 px-3" href="/">
                            Contact Us
                            <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Our Services */}

    <div class="categories-area section-padding30 py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle text-center position-relative pb-3 mb-0 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
                        <h1 class="mb-0">What We Can Do For You</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-30">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Corporate VIP/VVIP client</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Special events-product launches</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Passenger charter</a></h4>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-30">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Flower drops</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Medical evacuation</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Banner towing/ Flag displays</a></h4>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-30">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Celebrations</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Wedding photography</a></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h4><a href="services.html">Branding and advertising</a></h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    {/* Why Aura Airlines Charter */}

          <div class="container-xxl py-5">
              <div class="container">
                  <div class="row g-5">
                      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div class="border-start border-5 border-primary ps-4 mb-5">
                              <h6 class="text-body text-uppercase mb-2">Why Choose Us!</h6>
                              <h1 class="display-6 mb-0">
                                Why Aura Airlines Charter
                              </h1>
                          </div>
                         
                          <div class="row gy-5 gx-4">
                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Island wide coverage</h6>
                                  </div>
                              
                              </div>
                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Full of comfort, Luxury and convenience</h6>
                                  </div>
                              
                              </div>
                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Anytime, Anywhere</h6>
                                  </div>
                                  
                              </div>
                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Ensure safety, Security and privacy</h6>
                                  </div>
             
                              </div>
                              
                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Available 24/7/365</h6>
                                  </div>
             
                              </div>

                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Guaranteed safety and our dedication</h6>
                                  </div>
             
                              </div>

                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Best value for money</h6>
                                  </div>
             
                              </div>

                              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                  <div class="d-flex align-items-center mb-0">
                                      <i
                                          class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                      ></i>
                                      <h6 class="mb-0">Preeminent and personalized service</h6>
                                  </div>
             
                              </div>

                          </div>
                      </div>
                      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                          <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ maxHeight: '400px' }}>
                              <img
                                  class="position-absolute w-100 h-100"
                                  src="img/Choose.jpg"
                                  alt=""
                                  style={{ objectFit: 'cover' }}
                              />
                              <div class="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: '200px', height: '200px' }}>
                                  <div class="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3" >
                                      <h1 class="text-white">6</h1>
                                      <h2 class="text-white">Years</h2>
                                      <h5 class="text-white mb-0">Experience</h5>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row g-5 py-3">

                  <div class="col-lg-6">
                      <div class="blog-item">
                          <div class="position-relative overflow-hidden rounded-top-one">
                              <img class="img-fluid" src="img/about5.jpg" alt="" />
                          </div>
                          <div class="bg-dark-one d-flex align-items-center rounded-bottom-one p-2">
                              <h4 class="h5 text-uppercase text-light">Safety</h4>
                          </div>
                          <div class="bg-dark-one d-flex align-items-center rounded-bottom-one p-2">
                              <h3 class="h6 text-light">Aura Airlines considers safety as its prime consideration and therefore has implemented safety management systems (SMS) throughout our operation both horizontally and vertically.Highly experienced crew will provide extra support with safety ensuring health and personal welfare of our valuable clients.</h3>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="blog-item">
                          <div class="position-relative overflow-hidden rounded-top-one">
                              <img class="img-fluid" src="img/about5 - Copy.jpg" alt="" />
                          </div>
                          <div class="bg-dark-one d-flex align-items-center rounded-bottom-one p-2">
                              <h4 class="h5 text-uppercase text-light">Dedication</h4>
                          </div>
                          <div class="bg-dark-one d-flex align-items-center rounded-bottom-one p-2">
                              <h3 class="h6 text-light">Our product reflects and improves the quality of life with the mission of the airline to make air travel an integral part of the tourism industry and Aura Airlines to be the most flexible, reliable, and safest mode of transport for domestic air travel among tourists, corporate clients, and locals.<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></h3>
                          </div>
                      </div>
                  </div>

              </div>

          </div>

          

      </>

      
  )
}

export default Main