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
                    <div className="carousel-item active">
                        <img
                            src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://wallpaperaccess.com/full/254381.jpg"
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

            <div className="book-part my-5">
                <h3 className="book-heading"><b>Offers Are</b></h3>
                <ul>
                    <li>&#x2022; Solid for reduced rates</li>
                    <li>&#x2022; Usually Offer when an Aircraft</li>
                        <ul>
                            <li >&rarr; is landing to pickup passengers</li>
                            <li>&rarr;  has to flown empty back to its home</li>
                        </ul>
                    <li>&#x2022; Solely for the benfit of our clients</li>
                </ul>
            </div>

            <div className="book-part">
                <div className="table-responsive-sm text-center">

                <table className="table text-center">
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
                    </tbody>
                </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Offers; 