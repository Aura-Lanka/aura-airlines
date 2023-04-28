import React, {useEffect, useRef} from "react";
import './About.css';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";


function About() {

    const topContainer = useRef();
    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);

    return(
    <>
        <div ref={topContainer} />

          <div className='About us'>

            <div
                id="carouselExampleControls"
                className="carousel slide  carsouel1-edit"
                data-bs-ride="carousel"
                >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="./mainimg.png"
                            className="d-block w-100"
                            alt="..."
                            />
                        <div class="tittle-welcome">Let’s Get to Know About<br/> Aura Airlines</div>
                    </div>
                </div>
            </div>

{/*vision & mission start*/}

      <div class="wrapper">
        <figure class="card_mi">
          <img class="img_mi" src="https://images.unsplash.com/photo-1579118559062-39e94a22dbb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" width="100" height="640" alt="" />
          <figcaption><span className="font-link">
            <blockquote>
              Our Mission
            </blockquote>
            <cite>
              We at Aura Airlines thrive to maintain flawless safety records by striving for the highest professional 
              and regulatory requirements in Airline Industry. We are dedicated towards earning customer satisfaction by 
              improving local opportunity, social responsibility, economic and environmental well-being of its stakeholders 
              by diversifying todays airline business requirements.
            </cite><br/><br/><br/><br/>

            <blockquote>
              Our vision
            </blockquote>
            <cite>
              To be the leader in business and leisure airline by conquering global skies. <br/><br/>

              To be the preferred partner in delivering products and services that sustain and enhance our national objectives. 
              We strive for the upliftment of the environment in which we live and the communities that we operate in.
            </cite></span>
          </figcaption>
        </figure>
      </div>

{/*vision & mission end*/}


{/*our services start */}






{/*our services end */}


        <div className='desciritionColor-about '>

        <h3 className='desciritionText-about3'><span className="font-link"><b>Who We Are</b></span></h3>
        <div className='borber'>
        <p className='we-are text-center' ><span className="font-link">We are a team with excellent service and promised core values.</span></p>
        <br />
        <h2 className='we-core p-1 mr-5'><span className="font-link">Core Values</span></h2>
        <br /><span className="font-link">
        <ul>
        <li  ><b><strong>Customer first and always right:</strong> Customer is always our priority.</b></li>
        <br />
        <li><b><strong>Consistency of the product:</strong> Succeed to ensure highest quality product delivery and maintain the desired standard. Commitment to treat Customer needs as priority.</b></li>
        <br />
        <li><b><strong>Teamwork:</strong> Work as a team, identify each team member and get involved towards success by competence, commitment, and determination.</b></li>
        <br />
        <li><b><strong>Achievement:</strong> We thrive for better ways to pursue our customer and employee satisfaction and achieving organisational and personal goals for a secure tomorrow.</b></li>
        <br />
        <li><b><strong>Excellence:</strong> Commitment to do best in all what we do and strive for professional excellence by exceeding expectations to buy out the organisational excellence.</b></li>
        </ul></span>
        </div>
        </div>

        <div><h3 className='desciritionText-about3'><b>Our Services</b></h3></div><br/><br/>
        
        {/*Our services start*/}

        <div class='container-services'>
          <div class='card-left'>
            <div class='card-image'>
              <img src='https://st2.depositphotos.com/2036511/8872/v/950/depositphotos_88723682-stock-illustration-gold-vip-member-rosette.jpg&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Corporate VIP/VVIP Client</p>
            </div>
          </div>
          <div class='card-top'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1517896103326-de0a426263a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Passenger Charter</p>
            </div>
          </div>
          <div class='card-right'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1472745433479-4556f22e32c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Leisure</p>
            </div>
          </div>
          <div class='card-right'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1496542300521-498212704527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Aerial Work</p>
            </div>
          </div>
          <div class='card-top'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1628237094183-262cb5c8e173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Branding and Advertising</p>
            </div>
          </div>
          <div class='card-bottom'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1638165212448-4b182782c533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Medical Evacuation</p>
            </div>
          </div>
          <div class='card-left'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'/>
            </div>
            <div class='card-text'>
              <p>Special Events-Product Launches</p>
            </div>
          </div>
          <div class='card-bottom'>
            <div class='card-image'>
              <img src='https://aonehelicopters.com/uploads/595/371/cf/service_images/wa87RBNM3g.jpg&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Flower Drops</p>
            </div>
          </div>
          <div class='card-right'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Banner Towing/ Flag Displays</p>
            </div>
          </div>
          <div class='card-top'>
            <div class='card-image'>
              <img src='./wedding_cle.jpg'/>
            </div>
            <div class='card-text'>
              <p>Wedding Photography</p>
            </div>
          </div>
          <div class='card-left'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1471804230854-2df0a09fdc18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Anniversary celebrations</p>
            </div>
          </div>
          <div class='card-top'>
            <div class='card-image'>
              <img src='https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </div>
            <div class='card-text'>
              <p>Want More...</p>
              <Link className="nav-link nav-link-color text-capitalize" aria-current="page" to="/Contact"><p class="text-transform: lowercase;">Please Contact Us</p></Link>
              {/*<p>Please Contact Us</p>*/}
            </div>
          </div>
        </div>
  
        {/*Our services end*/}

        <div className='row descirition margin'>
        <h3 className='descirition5-about'>Message From Chairman</h3>

        {/*chairman profile start*/}

        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
        <div class="container profile-page">
            <div class="row">
                <div class="">
                    <div className="card profile-header text-center">
                        <div class="body">
                            <div class="row">
                                <div class="profile-image float-md-right"> 
                                    <img src="./chairman.png" alt=""/> 
                                </div>

                                <h4 class="m-t-0 m-b-0"><strong>Dr. Viranjith Thambugala</strong></h4>
                                <div class="job_post">CHAIRMAN</div><br/><br/>
                                <p className="voice text-center">"Enjoy the next level of private flying with our private 
                                helicopter charter service - Aura Airlines, feel the extraordinary experience. Complete with a 
                                fleet of AIRBUS Helicopters, AIRBUS approved service facility and a hangar in Ratmalana and highly 
                                experienced staff, your safety, comfort, privacy and convenience are our top priorities. 
                                Fly with us to experience the difference and enjoy while being completely at ease about your 
                                safety. Make every flight personal & assure safe, efficient & reliable solutions to deliver 
                                superior customers for all stakeholders. Our aim is to provide safe, efficient, high quality 
                                and integrated utility aircraft services to build infrastructure, and protect people and
                                property."</p>
                                <p class="social-icon m-t-5 m-b-0 text-center">
                                    <a title="Twitter" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                    <a title="Facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
                                    <a title="Instagram" href="javascript:void(0);"><i class="fa fa-instagram "></i></a>
                                </p>
                    
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>

        {/*chairman profile end*/}            
        </div>
        </div>
        <Footer/>
    </>
    )
}
export default About ;