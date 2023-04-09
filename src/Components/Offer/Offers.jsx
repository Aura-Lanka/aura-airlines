import React , {useEffect,useRef} from "react";
import './Offers.css';
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';

function Offers() {
    const topContainer = useRef();
    const navigate = useNavigate();


    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);
      

    const handleRequestDetails =() =>{
        navigate('/Book');
    }

    return (
        <>
        <div ref={topContainer}/>
            <div
                id="carouselExampleControls"
                className="carousel slide  carsouel1-edit"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">         
                    <h1 className="main-heading">Enjoy our Exclusive Offers</h1>
                    <div className="carousel-item active">
                        <img
                            src="./offer.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
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

            <h1 className="sm-heading text-primary fw-bold">Offers Are....!!</h1>

                <p className="text-center container text-part2">
                    Solid for reduced rates
                </p>

                <p className="text-center container text-part2">
                    Usually Offer when an Aircraft
                    <li> Is landing to pickup passengers</li>
                    <li>Has to flown empty back to its home</li>
                </p>
       
                <p className="text-center container text-part2">
                    Solely for the benfit of our clients
                </p>
        

            <div className="book-part2">
                <div className="table-responsive-sm text-center">

                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th className="text-center">Type</th>
                            <th className="text-center">Seats</th>
                            <th className="text-center">From</th>
                            <th className="text-center">to</th>
                            <th className="text-center">Available From</th>
                            <th className="text-center">Available From</th>
                            <th className="text-center">Btn</th>
                        </tr>
                    </thead>


                    <tbody>

                    <tr>
                    <td colspan="7" class="table-active">Coming Soon!</td>
                    </tr>

                        {/*Table rows

                        <tr>
                            <td>a</td>
                            <td>5</td>
                            <td>gale</td>
                            <td>Jaffina</td>
                            <td>13.02.2023</td>
                            <td>28.02.2023</td>
                            <td><button className="buttonInput" 
                            style={{padding: '3px'}} onClick={handleRequestDetails}> Request Details</button></td>
                        </tr>
                        <tr>
                            <td>b</td>
                            <td>5</td>
                            <td>gale</td>
                            <td>Jaffina</td>
                            <td>13.02.2023</td>
                            <td>28.02.2023</td>
                            <td><button className="buttonInput" style={{padding: '3px', marginLeft:'4px'}} onClick={handleRequestDetails}>Request Details</button></td>
                        </tr>
                        <tr>
                            <td>c</td>
                            <td>5</td>
                            <td>gale</td>
                            <td>Jaffina</td>
                            <td>13.02.2023</td>
                            <td>28.02.2023</td>
                            <td><button className="buttonInput" style={{padding: '3px', marginLeft:'4px'}} onClick={handleRequestDetails}>Request Details</button></td>
                        </tr>
                        <tr>
                            <td>d</td>
                            <td>5</td>
                            <td>gale</td>
                            <td>Jaffina</td>
                            <td>13.02.2023</td>
                            <td>28.02.2023</td>
                            <td><button className="buttonInput" style={{padding: '3px', marginLeft:'4px'}} onClick={handleRequestDetails}>Request Details</button></td>
                        </tr>
                        <tr>
                            <td>e</td>
                            <td>5</td>
                            <td>gale</td>
                            <td>Jaffina</td>
                            <td>13.02.2023</td>
                            <td>28.02.2023</td>
                            <td><button className="buttonInput" style={{padding: '3px', marginLeft:'4px'}} onClick={handleRequestDetails}>Request Details</button></td>
                        </tr>

                    rows end*/}
                    </tbody>
                    
                </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Offers; 