import React, {useEffect, useRef} from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

function Home() {
    const topContainer = useRef();
        useEffect(() => {
          topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
          }, []);

    return (
        <div>
        <div ref={topContainer} />
            {/* <div className="main-heading">
                <h1 className="main-heading">Welcome</h1>
            </div> */}
            <div
                id="carouselExampleControls"
                className="carousel slide  carsouel1-edit"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="./home_1.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div class="tittle-welcome">Welcome to Aura Airlines</div>
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="./home_2.png"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div class="tittle-welcome">Welcome to Aura Airlines</div>
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="./home_3.png"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div class="tittle-welcome">Welcome to Aura Airlines</div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-part container">
                <p className="text-center container text-part1">
                    Aura Airlines is a concept conglomerate in the Airline Industry in Sri Lanka which was founded in 2018 and dedicates its approach mainly 
                    to uplift Airline services solely for the benefit of the entire community. Private & Business Airline, as an exclusive platform which customers 
                    can benefit from in the fields of Leisure, Corporate and VIP transport solutions, and service for both domestic and international market.

                </p>
                <div className="row row-edit  text-center">
                    <div className="col-md-2 my-auto">
                        <button className="buttonInput " type="submit" value="Subscribe" >
                            Inquire Now
                        </button>
                    </div>
                    <div className="col-md-2 my-3">
                        <button className="buttonInput" type="submit" value="Subscribe">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>


        <section class="light">
            <div class="container py-2">

                <article class="postcard light blue">
                    <img class="postcard__img" src="home_3.png" alt="Image Title" />
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue">Our Services</h1>
                        <div class="postcard__bar"></div><br/>
                        <div class="postcard__preview-txt">
                            <div class="row">
                                <div class="col col-md-6">
                                    <ul>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Corporate VIP/VVIP client</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Passenger charter</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Leisure</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Aerial work</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Branding and advertising</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Medical evacuation</li>
                                    </ul>
                                </div>
                                <div class="col col-md-6">
                                    <ul>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Special events-product launches</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Flower drops</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Banner towing/ Flag displays</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Wedding photography</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Celebrations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <img class="postcard__img" src="home_2.png" alt="Image Title" />
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue">Why Aura Airlines Charter</h1>
                        <div class="postcard__bar"></div><br/>
                        <div class="postcard__preview-txt">
                            <div class="row">
                                <div class="col col-md-6">
                                    <ul>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Island wide coverage</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Anytime, Anywhere</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Available 24/7/365</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Best value for money</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Ensure safety, Security and privacy</li>
                                    </ul>
                                </div>
                                <div class="col col-md-6">
                                    <ul>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Full of comfort, Luxury and convenience</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; To fly happily</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Guaranteed safety and our dedication</li>
                                        <li><i class="fa fa-plane" aria-hidden="true"></i>&nbsp; Preeminent and personalized service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <img class="postcard__img" src="offer.jpg" alt="Image Title" />
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue">Safety</h1>
                        <div class="postcard__bar"></div><br/>
                        <div class="postcard__preview-txt">
                            Aura Airlines considers safety as its prime consideration and therefore has
                            implemented safety management systems (SMS) throughout our operation both
                            horizontally and vertically.Highly experienced crew will provide extra support
                            with safety ensuring health and personal welfare of our valuable clients.
                        </div>
                    </div>
                </article>
                <article class="postcard light blue">
                    <img class="postcard__img" src="home_1.jpg" alt="Image Title" />
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue">Dedication</h1>
                        <div class="postcard__bar"></div><br/>
                        <div class="postcard__preview-txt">
                            Our product reflects and improves the quality of life with the mission of the airline
                            to make air travel an integral part of the tourism industry and Aura Airlines to be
                            the most flexible, reliable, and safest mode of transport for domestic air travel
                            among tourists, corporate clients, and locals.
                        </div>
                    </div>
                </article>
            </div>
        </section>


{/* Article start */}


<h3 className="sm-heading mx-auto pt-5 font-weight-bold display-6">Articles</h3>
<div>
    <div  className="row article-destination; text-center">
        <div className="col-md-4"> 
            <img 
                src="https://wallpaper.dog/large/20522603.jpg" 
                alt=""
                width="100%"
                height="80%"/>
            <h4 className="p-1">Article 1</h4>
        </div>
        <div className="col-md-4">
            <img
                src="https://wallpaper.dog/large/20522590.jpg" 
                alt=""
                width="100%"
                height="80%"/>  
            <h4 className="p-1" v>Article 2</h4>
        </div>
        <div className="col-md-4">
            <img
                src="https://wallpaper.dog/large/20522582.jpg"
                alt=""
                width="100%"
                height="80%"/>  
            <h4 className="p-1" v>Article 3</h4>
        </div>
    </div>
    <div className="row row-edit  text-center" >
        <div className="col-md-2 my-auto">
            <div className="buttonInput">
                <NavLink exact to="/Destination" className="readMore">Read More</NavLink>
            </div>
        </div>        
    </div>
</div><br/>

{/* Articles end */}

{/* carousel start*/}

        <div class="container">
            <div class="row">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-none d-lg-block">
                    <div class="slide-box">
                        <img src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="0"/>
                        <img src="https://images.pexels.com/photos/4403893/pexels-photo-4403893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="1"/>
                        <img src="https://images.pexels.com/photos/2751667/pexels-photo-2751667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="2"/>
                        <img src="https://images.pexels.com/photos/739409/pexels-photo-739409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="3"/>
                    </div>
                    </div>
                    <div class="d-none d-md-block d-lg-none">
                    <div class="slide-box">
                        <img src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="0"/>
                        <img src="https://images.pexels.com/photos/4403893/pexels-photo-4403893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="1"/>
                        <img src="https://images.pexels.com/photos/2751667/pexels-photo-2751667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="2"/>
                    </div>
                    </div>
                    <div class="d-none d-sm-block d-md-none">
                    <div class="slide-box">
                        <img src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="0"/>
                        <img src="https://images.pexels.com/photos/4403893/pexels-photo-4403893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="1"/>
                    </div>
                    </div>
                    <div class="d-block d-sm-none">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="0"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-none d-lg-block">
                    <div class="slide-box">
                        <img src="https://images.pexels.com/photos/6045035/pexels-photo-6045035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="4"/>
                        <img src="https://images.pexels.com/photos/5042817/pexels-photo-5042817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="5"/>
                        <img src="https://images.pexels.com/photos/6840389/pexels-photo-6840389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="6"/>
                        <img src="https://images.pexels.com/photos/4403902/pexels-photo-4403902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="7"/>
                    </div>
                    </div>
                    <div class="d-none d-md-block d-lg-none">
                    <div class="slide-box">
                        <img src="https://images.pexels.com/photos/739409/pexels-photo-739409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="3"/>
                        <img src="https://images.pexels.com/photos/6045035/pexels-photo-6045035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="4"/>
                        <img src="https://images.pexels.com/photos/5042817/pexels-photo-5042817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="5"/>
                    </div>
                    </div>
                    <div class="d-none d-sm-block d-md-none">
                    <div class="slide-box">
                        <img src="https://images.pexels.com/photos/2751667/pexels-photo-2751667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="2"/>
                        <img src="https://images.pexels.com/photos/739409/pexels-photo-739409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="3"/>
                    </div>
                    </div>
                    <div class="d-block d-sm-none">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/4403893/pexels-photo-4403893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="1"/>
                    </div>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            </div>
        </div>

{/* carousel end*/}

            <Footer />
        </div>
    );
}
export default Home;