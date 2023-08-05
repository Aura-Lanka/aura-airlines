import React from 'react'
import './Membership.css'

const Membership_page = () => {
    return (
        <>

            <div class="container-fluid page-header_member"><br /><br /><br />
                <h1 class="display-3 text-uppercase text-white mb-3">Membership</h1>
                <div class="d-inline-flex text-white">
                    <h6 class="text-uppercase m-0"><a class="text-white" href="/">HOME</a></h6>
                    <h6 class="text-body m-0 px-3">/</h6>
                    <h6 class="text-uppercase text-body m-0">Membership</h6>
                </div>
            </div>

            <div class="container-xxl py-3 category">
                <div class="container">

                    <div class="row g-3">

                        <div class="col-lg-7 col-md-6">
                            <div class="row g-3">
                                <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a class="position-relative d-block overflow-hidden" href="/">
                                        <img class="img-fluid" src="img/category/cat-5.jpg" alt="aura_offer1" />
                                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                            <h5 class="m-0">24/7 Dedicated Personal Advisor</h5>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a class="position-relative d-block overflow-hidden" href="/">
                                        <img class="img-fluid" src="img/category/cat-3.jpg" alt="aura_offer2" />
                                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                            <h5 class="m-0">Add Rates Per Every Travel</h5>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a class="position-relative d-block overflow-hidden" href="/">
                                        <img class="img-fluid" src="img/category/cat-6.jpg" alt="aura_offer3" />
                                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                            <h5 class="m-0">Lifestyle Management</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: '350px' }}>
                            <a class="position-relative d-block h-100 overflow-hidden" href="/">
                                <img class="img-fluid position-absolute w-100 h-100" src="img/category/cat-9.jpg" alt="aura_offer4" style={{ objectFit: 'cover' }} />
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                    <h5 class="m-0">Handling Ticket Reservations For Events</h5>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="row g-3">
                        <div class="col-lg-12 col-md-6">
                            <div class="row g-3">

                                <div class="col-lg-4 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a class="position-relative d-block overflow-hidden" href="/">
                                        <img class="img-fluid" src="img/category/cat-10.jpg" alt="aura_offer5" />
                                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                            <h5 class="m-0">Free Travel For The Added Rates</h5>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a class="position-relative d-block overflow-hidden" href="/">
                                        <img class="img-fluid" src="img/category/cat-7.jpg" alt="aura_offer6" />
                                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                            <h5 class="m-0">Handling Hotel Arrangements</h5>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a class="position-relative d-block overflow-hidden" href="/">
                                        <img class="img-fluid" src="img/category/cat-7.jpg" alt="aura_offer7" />
                                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                                            <h5 class="m-0">Get Exclusive Offers For Travels</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div class="container quote px-lg-0">
                    <div class="row g-0 mx-lg-0">
                        <div class="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute img-fluid w-100 h-100" src="img/about2.jpg" style={{ objectFit: 'cover' }} alt="mambership" />
                            </div>
                        </div>
                        <div class="col-lg-6 quote-text py-1 wow fadeIn" data-wow-delay="0.5s">
                            <div class="p-lg-5 pe-lg-0">

                                <h1 class="display-5 mb-2">We're With You Always</h1>
                                <p class="mb-4 pb-2">Membership has it's Privileges & Last for an Eternity.</p>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select border-0" style={{ height: '55px' }}>
                                                <option selected>Select A Title</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Miss">Miss</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Full Name" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control border-0" placeholder="Contact Number" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control border-0" placeholder="Email Address" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select border-0" style={{ height: '55px' }}>
                                                <option selected>How Do You Wish To Be Reached</option>
                                                <option value="Call us">Call us</option>
                                                <option value="Email us">Email us</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control border-0" placeholder="Hometown" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12">
                                            <textarea class="form-control border-0" placeholder="How often do you travel?"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <textarea class="form-control border-0" placeholder="What benefits of Membership are you most interested in?"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-secondary subscribe_section wow fadeInUp" data-wow-delay="0.1s">
                <div class="row justify-content-md-center px-xl-5">
                    <div class="col-md-6 col-12 py-5">
                        <div class="section_title_div text-center position-relative pb-3 mb-5 mx-auto" style={{ minwidth: '600px' }}>
                            <h5 class="fw-bold text-primary text-uppercase">Sign Up to Our Newsletter</h5>
                            <h1 class="mb-0" style={{ color: '#fff' }}>We Respect Your Privacy and it's Our Priority</h1>
                        </div>

                        <form>
                            <div class="input-group wow fadeInLeft" data-wow-delay="0.1s">
                                <input type="text" class="form-control border-white p-4" id="cus_name_subscriber" placeholder="Your Name" style={{ height: '55px' }} />
                            </div><br />
                            <div class="input-group wow fadeInRight" data-wow-delay="0.1s">
                                <input type="text" class="form-control border-white p-4" id="email_subscriber" style={{ textTransform: 'lowercase', height: '55px' }} placeholder="Email Address" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary px-4" id="subBtn" value="S E N D  M E S S A G E" type="button" style={{ height: '55px' }}    >Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Membership_page