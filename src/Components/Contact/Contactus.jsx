import React from 'react'
import './Contact.css'

const Contactus = () => {
    return (
        <>
            <div class="container-fluid page-header_contact"><br /><br /><br />
                <h1 class="display-3 text-uppercase text-white mb-3">Contact / Inquire</h1>
                <div class="d-inline-flex text-white">
                    <h6 class="text-uppercase m-0"><a class="text-white" href="/">HOME</a></h6>
                    <h6 class="text-body m-0 px-3">/</h6>
                    <h6 class="text-uppercase text-body m-0">Contact & Inquire</h6>
                </div>
            </div>

            <div class="container-fluid wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="section_title_div text-center position-relative pb-3 mb-0 mx-auto" style={{ maxwidth: '600px' }}>
                        <h5 class="fw-bold text-primary text-uppercase">Contact Us</h5>
                        <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                    </div>
                    <div class="row g-5 mb-5">
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-phone-alt text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Call to ask any question</h5>
                                    <h4 class="text-primary mb-0">+(94) 77 3333966</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-envelope-open text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Email to get free quote</h5>
                                    <h4 class="text-primary mb-0" style={{ textTransform: 'lowercase'}}>info@auralanka.com</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Visit our office</h5>
                                    <h4 class="text-primary mb-0">Thalangama, Malabe</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control border-0 bg-light px-4" placeholder="Your Name" id="cus_name" style={{ height: '55px' }} />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="email" class="form-control border-0 bg-light px-4" placeholder="Your Email" id="email" style={{ height: '55px' }} />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control border-0 bg-light px-4" placeholder="Contact Number" id="mobi_num" style={{ height: '55px' }} />
                                    </div>
                                    <div class="col-12">
                                        <textarea class="form-control border-0 bg-light px-4 py-3" rows="4" id="message" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" onclick="saveContact_page();" id="contactBtn" value="S E N D  M E S S A G E" type="button">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <iframe class="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9289182575776!2d79.94536431472044!3d6.899104895014838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250cc8213779f%3A0x8bd22483ff750811!2s949%20Udawatta%20Road%2C%20Malabe!5e0!3m2!1sen!2slk!4v1674928115597!5m2!1sen!2slk"
                                frameborder="0" style={{ minHeight: '350px', border: '0' }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
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

export default Contactus