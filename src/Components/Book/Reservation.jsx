import React from 'react'
import "./reservation.css";

const Reservation = () => {
    return (
        <>
            <div class="container-fluid page-header_booking">
                <h1 class="display-3 text-uppercase text-white mb-3">Ticket Reservation</h1>
                <div class="d-inline-flex text-white">
                    <h6 class="text-uppercase m-0"><a class="text-white" href="/">HOME</a></h6>
                    <h6 class="text-body m-0 px-3">/</h6>
                    <h6 class="text-uppercase text-body m-0">Reservation</h6>
                </div>
            </div>

            <div class="container-fluid my-3 px-0">
                <div class="video wow fadeInUp" data-wow-delay="0.1s">
                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://drive.google.com/file/d/1-nRbPRxrB6DWlxiny6tK8ndFCr3xnbyl/preview" data-bs-target="#videoModal">
                        <span></span>
                    </button>

                    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Aura Airlines Video</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <div class="ratio ratio-16x9">
                                        <iframe class="embed-responsive-item" src="https://drive.google.com/file/d/1-nRbPRxrB6DWlxiny6tK8ndFCr3xnbyl/preview" id="video" allowfullscreen allowscriptaccess="always" title='Ticket Payment Process' allow="autoplay"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <h1 class="text-white mb-4">Ready to Travel? We’ve Got Great Flight Deals!</h1>
                    <h3 class="text-white mb-4"><i class="fa fa-phone text-primary me-3"></i>Call us 24/7 at <span style={{ color: '#FF6F0F' }}>+(94) 77 3333966</span> to Get Aura Flights!</h3>
                    {/* <div class="col-lg-6">
                        <div class="h-100 para_one">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, modi voluptatem eum atque possimus tempora, iure ad quae rerum deserunt dicta tempore cupiditate. Totam sed unde, tempore quae, perspiciatis facere, cupiditate alias nostrum numquam veniam modi voluptates nam. Qui, debitis.</p>
                        </div>
                    </div> */}
                </div>
                <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '-6rem' }}>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="bg-light text-center p-5">
                                <h1 class="mb-4">Book A Trip</h1>
                                <p style={{ textAlign: 'center' }}>Customers can make a reservation after completing this form.Customer service will verify for availability and confirm reservations made by consumers.</p>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="First Name" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Last Name" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Contact Number" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Email Address" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" value="" placeholder="Departure City" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Destination City" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="date" class="form-control border-0" placeholder="Date of Departure" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="No of Passengers" style={{ height: '55px' }} />
                                        </div>
                                        
                                        <div class="col-12">
                                            <textarea class="form-control border-0" placeholder="Special Request"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container border-around">
                <div class="row mx-auto d-flex justify-content-center">
                    <div class="col-md-4"><img class="d-block w-100" src="img/06-rounded.webp" alt="" /></div>
                    <div class="col-md-4"><img class="d-block w-100" src="img/00004-rounded.webp" alt="" /></div>
                    <div class="col-md-4"><img class="d-block w-100" src="img/wpimag-rounded.webp" alt="" /></div>
                </div>
            </div>

        </>
    )
}

export default Reservation