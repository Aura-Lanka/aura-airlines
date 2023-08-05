import React from 'react'
import './Offers.css'

const Offers_page = () => {
    return (
        <>
            <div class="container-fluid page-header_offers"><br /><br /><br />
                <h1 class="display-3 text-uppercase text-white mb-3">Airlines Offers</h1>
                <div class="d-inline-flex text-white">
                    <h6 class="text-uppercase m-0"><a class="text-white" href="/">HOME</a></h6>
                    <h6 class="text-body m-0 px-3">/</h6>
                    <h6 class="text-uppercase text-body m-0">Offers</h6>
                </div>
            </div>

            <div class="container-xxl bg-light my-3 py-0">
                <div class="container py-5">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Offers</div>
                        <h1 class="display-6 mb-0">Exclussive Welcome Offers</h1>
                    </div>
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                <div class="text-center p-4 pt-0">
                                    <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                        <small>Offer</small>
                                    </div>
                                    <h4 class="mb-3">Solid for reduced rates</h4>
                                    <div class="causes-progress bg-light p-3 pt-2">
                                        <img class="img-fluid" src="img/home_2.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                <div class="text-center p-4 pt-0">
                                    <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                        <small>Offer</small>
                                    </div>
                                    <h4 class="mb-3">Usually offer when an Aircraft</h4>
                                    <p><li> Is landing to pickup passengers</li>
                                        <li>Has to flown empty back to its home</li>
                                    </p>
                                    <div class="causes-progress bg-light p-3 pt-2">
                                        <img class="img-fluid" src="img/C01.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                <div class="text-center p-4 pt-0">
                                    <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                        <small>Offer</small>
                                    </div>
                                    <h5 class="mb-3">Solely for the benefit of our clients</h5>
                                    <div class="causes-progress bg-light p-3 pt-2">
                                        <img class="img-fluid" src="img/home_1.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offers_page