import React, {useEffect, useRef} from "react";
import './About.css';
import Footer from '../Footer/Footer';


function About() {

    const topContainer = useRef();
    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);

    return(
    <>
        <div ref={topContainer} />
  
    <div className='About us'>

        {/* <h1 className='tittle-about pb-3 mt-3 text-center'><b>About us</b></h1> */}
        <div className='margin1'>
        <img width="100%" height="550"  src="https://media.vanityfair.com/photos/563d20b0ffe4c2a35a2a9145/master/pass/t-a-wing-and-a-prayer-us-airlines.jpg" alt="" />
        <div className='position-absolute img-title'>
        <h1 className="p-2">Fly with <br/> Aura !!!</h1>
        </div>
        
        <div className="carousel-caption">
        {/* <button className="button-img1">Book Now</button> */}
        </div>
        </div>
        <div className='row descirition margin'>
            <div className='col-md-5 my-auto'>
                <h2 className='p-1'>Our Mission</h2>
                <p className='desciritionText-about' >We at Aura Airlines thrive to maintain flawless safety records by striving for the highest professional and regulatory requirements in Airline Industry. We are dedicated towards earning customer satisfaction by improving local opportunity, social responsibility, economic and environmental well-being of its stakeholders by diversifying todays airline business requirements.</p>
            </div>
            <div className='col-md-7'>
            <img  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" width="100%" height="500" />    
            </div>
        </div>
        <div className='row descirition margin'>
            <div className='col-md-7'>
            <img src="https://burst.shopifycdn.com/photos/clouds-from-aircraft-window.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="" width="100%" height="500" />    
            </div>
            <div className='col-md-5 my-auto '>
                <h2 className='p-1'>Our vision</h2>
                <p className='desciritionText-about' >To be the leader in business and leisure airline by conquering global skies.</p>
            </div>
        </div>
        <div className='desciritionColor-about '>

        <h3 className='desciritionText-about3'><b>Who We Are</b></h3>
        <div className='borber'>
        <p className='we-are text-center' >We are a team with excellent service and promised core values.</p>
        <br />
        <h2 className='we-core p-1 mr-5'>Core Values</h2>
        <br />
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
        </ul>
        </div>
        </div>

        <h3 className='desciritionText-about3'><b>Our Services</b></h3>
        <div className='borber container'>
        <div className="row">
            <div className="services col-md-3">
                &rarr; Corporate VIP/VVIP Client
            </div>
            <div className="services col-md-3">
                &rarr; Passenger Charter
            </div>
            <div className="services col-md-3">
                &rarr; Leisure
            </div>
            <div className="services col-md-3">
                &rarr; Aerial Work
            </div>
            <div className="services col-md-3">
                &rarr; Branding and Advertising
            </div>
            <div className="services col-md-3">
                &rarr; Medical Evacuation
            </div>
            <div className="services col-md-3">
                &rarr; Special Events-Product Launches
            </div>
            <div className="services col-md-3">
                &rarr; Flower Drops
            </div>
            <div className="services col-md-3">
                &rarr; Banner Towing/ Flag Displays
            </div>
            <div className="services col-md-3">
                &rarr; Wedding Photography
            </div>
            <div className="services col-md-3">
                &rarr; Anniversary celebrations
            </div>
            
        </div>

        </div>
        <div className='row descirition margin'>
        <h3 className='descirition5-about'>Message From Chairman</h3>
            <div className='col-md-5 my-auto'>
                <p className='desciritionText-about' >Success of a human being is really a great news for them as well as for you ..specially for you as it paved a way to go.</p>
            </div>
            <div className='col-md-7'>
            <img  src="https://petapixel.com/assets/uploads/2022/05/how-to-take-photos-out-of-an-airplane-window-featured.jpg" alt="" width="100%" height="500" />    
            </div>
        </div>
        </div>
        <Footer/>
    </>
    )
}
export default About ;