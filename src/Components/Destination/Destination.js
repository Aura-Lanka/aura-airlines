import React, {useEffect, useRef} from "react";
import "../../App.css";
import './Destination.css'
import Footer from "../Footer/Footer"

function Destination() {

        const topContainer = useRef();
        useEffect(() => {
          topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
          }, []);

    return(
        <>
        <div ref={topContainer} />
        <div className="Destination">
        <div className="destin ">
                {/*<h1 className='tittle-about p-3 text-center'><b>DESTINATION</b></h1>*/}
                <h1 className="img-tittle text-center p-1">Fly with Us to<br/>Amazing <br/> Destinations</h1>
                <img
                    src="./destination.png"
                    alt=""
                    width="100%"
                    height="100%"
                />
                <div className="carousel-caption">
                    {/* <button className="button-img3">Book Now</button> */}
                </div>
        </div>
                <div className="all-article pb-5">
                <div  className="row article-destination">
        <div className="col-md-5"> 
                <h4 className="p-1">Article 1</h4>
        <img
                    src="https://i0.wp.com/wheelchairtravel.org/wp-content/uploads/2020/01/faq-air-boarding-v2020-header.jpg?fit=2500%2C1333&ssl=1"
                    alt=""
                    width="100%"
                    height="70%"
                  /></div>
        <div className="col-md-5">  
                    <h4 className="p-1" v>Article 2</h4>
        <img
                    src="https://media.wired.com/photos/60089424ec9655e0017e4e38/4:3/w_2131,h_1598,c_limit/Business-Boarding-Aircrafts-Covid-1229537692.jpg"
                    alt=""
                    width="100%"
                    height="70%"
                  /></div>
                </div>
              
                <div  className="row article-destination">
        <div className="col-md-5"> 
                <h4 className="p-1">Article 3</h4>
        <img
                    src="https://wallpaper.dog/large/20522624.jpg"
                    alt=""
                    width="100%"
                    height="50%"
                  /></div>
        <div className="col-md-5">  
                    <h4 className="p-1">Article 4</h4>
        <img
                    src="https://wallpaper.dog/large/20522598.jpg"
                    alt=""
                    width="100%"
                    height="50%"
                  /></div>
                </div>
                <div  className="row article-destination">
        <div className="col-md-5"> 
                <h4 className="p-1">Article 5</h4>
        <img
                    src="https://wallpaper.dog/large/20522651.jpg"
                    alt=""
                    width="100%"
                    height="70%"
                  /></div>
        <div className="col-md-5">  
                    <h4 className="p-1">Article 6</h4>
        <img
                    src="https://aerospace.honeywell.com/content/dam/aerobt/en/images/learn/about-us/press-releases/horizontal/AeroBT-GoDirect_Fuel_Efficiency_2880x1440.jpg"
                    alt=""
                    width="100%"
                    height="70%"
                  /></div>
                </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Destination;