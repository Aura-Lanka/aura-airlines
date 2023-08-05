import React from 'react'
import './About.css';

const Aboutus = () => {
    return (
        <>
            <div class="container-fluid page-header_about"><br /><br /><br />
                <h1 class="display-3 text-uppercase text-white mb-3">About Us</h1>
                <div class="d-inline-flex text-white">
                    <h6 class="text-uppercase m-0"><a class="text-white" href="/">HOME</a></h6>
                    <h6 class="text-body m-0 px-3">/</h6>
                    <h6 class="text-uppercase text-body m-0">About</h6>
                </div>
            </div>

            {/* Know About Aura Airlines */}

            <section class="container-fluid py-3">
                <div class="container">
                    <div class="row g-5">

                        <div class="col-md-6 d-flex">
                            <div class="img img-video d-flex align-self-stretch align-items-center justify-content-center mb-4 mb-sm-0" style={{ backgroundImage: 'url(img/about4.jpg)' }}>
                                <a data-bs-toggle="modal" data-src="https://www.youtube.com/embed/MjDrlJZ6-Bs" data-bs-target="#videoModal" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                    <span class="fa fa-play"></span>
                                </a>
                            </div>
                        </div>

                        <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content rounded-0">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Aura Airlines</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="ratio ratio-16x9">
                                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/MjDrlJZ6-Bs" id="video" title="highlight-video" allowfullscreen allowscriptaccess="always"
                                                allow="autoplay"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 pl-md-5">
                            <div class="row justify-content-start py-5">
                                <div class="col-md-12 heading-section ftco-animate">
                                    <span class="subheading">Welcome to Aura Airlines</span>
                                    <h2 class="mb-4">Let’s Get to Know About Aura Airlines</h2>
                                    <p>Aura Airlines is a concept conglomerate in the Airline Industry in Sri Lanka which was founded in 2018 and dedicates its approach mainly to uplift Airline services solely for the benefit of the entire community. Private & Business Airline, as an exclusive platform which customers can benefit from in the fields of Leisure, Corporate and VIP transport solutions, and service for both domestic and international market.
                                    </p>
                                    <div class="tabulation-2 mt-4">
                                        <ul class="nav nav-pills nav-fill d-md-flex d-block">
                                            <li class="nav-item mb-md-0 mb-2">
                                                <a class="nav-link active py-2" data-toggle="tab" href="#home1">Our Mission</a>
                                            </li>
                                            <li class="nav-item px-lg-2 mb-md-0 mb-2">
                                                <a class="nav-link py-2" data-toggle="tab" href="#home2">Our Vision</a>
                                            </li>

                                        </ul>
                                        <div class="tab-content rounded mt-2">
                                            <div class="tab-pane container p-0 active" id="home1">
                                                <p>We at Aura Airlines thrive to maintain flawless safety records by striving for the highest professional and regulatory requirements in Airline Industry. We are dedicated towards earning customer satisfaction by improving local opportunity, social responsibility, economic and environmental well-being of its stakeholders by diversifying todays airline business requirements.</p>
                                            </div>
                                            <div class="tab-pane container p-0 fade" id="home2">
                                                <p>To be the leader in business and leisure airline by conquering global skies.</p>
                                                <p>To be the preferred partner in delivering products and services that sustain and enhance our national objectives. We strive for the upliftment of the environment in which we live and the communities that we operate in.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}

            <section>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <span class="subheading">Who We Are</span>
                                <h2 class="mb-4">We are a team with excellent service and promised core values</h2>

                                <h6 class="mb-3">
                                    <i class="far fa-check-circle text-primary me-3"></i>Customer first and always right: Customer is always our priority.
                                </h6>
                                <h6 class="mb-3">
                                    <i class="far fa-check-circle text-primary me-3"></i>Consistency of the product: Succeed to ensure highest quality product delivery and maintain the desired standard. Commitment to treat Customer needs as priority.
                                </h6>
                                <h6 class="mb-3">
                                    <i class="far fa-check-circle text-primary me-3"></i>Teamwork: Work as a team, identify each team member and get involved towards success by competence, commitment, and determination.
                                </h6>
                                <h6 class="mb-3">
                                    <i class="far fa-check-circle text-primary me-3"></i>Achievement: We thrive for better ways to pursue our customer and employee satisfaction and achieving organisational and personal goals for a secure tomorrow.
                                </h6>
                                <h6 class="mb-3">
                                    <i class="far fa-check-circle text-primary me-3"></i>Excellence: Commitment to do best in all what we do and strive for professional excellence by exceeding expectations to buy out the organisational excellence.
                                </h6>

                            </div>
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="img-border">
                                    <img class="img-fluid" src="img/31226-min.jpg" alt="who we are" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}

            <section>

                <div class="categories-area section-padding30 py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-tittle text-center position-relative pb-3 mb-0 mx-auto" style={{ maxWidth: '600px' }}>
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
            </section>

            {/* Chairman Section */}

            <section>
                <div class="container-fluid p-0 my-5">
                    <div class="row g-0">
                        <div class="col-lg-6" style={{ minWidth: '500px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100" src="img/aboutus.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div class="col-lg-6 bg-dark p-5">
                            <div class="mb-5">
                                <h5 class="text-primary text-uppercase">Chairman And Founder</h5>
                                <h4 class="display-6 text-uppercase text-light mb-0">Dr. Viranjith Thambugala</h4>
                            </div>
                            <div class="owl-carousel testimonial-carousel">
                                <div class="testimonial-item">
                                    <p class="fs-5 fw-normal text-light mb-4"><i class="fa fa-quote-left text-primary me-3"></i>Enjoy the next level of private flying with our private helicopter charter service - Aura Airlines, feel the extraordinary experience. Complete with a fleet of AIRBUS Helicopters, AIRBUS approved service facility and a hangar in Ratmalana and highly experienced staff, your safety, comfort, privacy and convenience are our top priorities. Fly with us to experience the difference and enjoy while being completely at ease about your safety. Make every flight personal & assure safe, efficient & reliable solutions to deliver superior customers for all stakeholders. Our aim is to provide safe, efficient, high quality and integrated utility aircraft services to build infrastructure, and protect people and property. <i class="fa fa-quote-right text-primary me-3"></i></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aboutus