import React, {useState, useEffect, useRef} from "react";
import "../../App.css";
import './Destination.css'
import Footer from "../Footer/Footer"
import Image from "../../Image";

function Destination() {

        const topContainer = useRef();
        useEffect(() => {
          topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
          }, []);

        const [images, setImages] = useState([])

        useEffect(() => {
                const fetchImages = async ()=> {
                        const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
                        const data = await response.json()
                        setImages(data)
                        console.log(data)
                }

                fetchImages()
        }, [])

    return(
        <>
        <div ref={topContainer} />

        <div className="Destination">
        <div className='position-relative'>
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
                                <div class="tittle-welcome">Fly with Us to<br/>Amazing Destinations</div>
                            </div>

                        </div>
                </div>
        </div>

        {!images ? <h2 className="flex item-center justify-center h-screen font-bold text-4xl
        text-center text-slate-800">Loading....</h2> :
                <section className="px-5 container mx-auto">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 
                        lg:mt-20 lg:mb-16 text-slate-800 capitalize">Sample Articles</h1>

                        <div class="container">
                        <div class="row">
                        <div className="col-md-4">
                            {images.map((image) => (
                                <Image key={image.id} {...image} />
                            ))}     
                        </div>
                        </div>
                        </div>

                </section>
        }

        </div>
        <Footer />
        </>
    )
}

export default Destination;