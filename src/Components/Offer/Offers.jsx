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
                            src="./mainimg.webp"
                            className="d-block w-100"
                            alt="..."
                            />
                        <div class="tittle-welcome">Enjoy our Exclusive Offers</div>
                    </div>
                </div>
            </div>


            <h1 className="sm-heading text-primary fw-bold">Offers Are....!!</h1>

            <div class="container">
	            <div class="row">

		            <div class="col-md-4">
                        <div class="profile-card-4 text-center"><img src="./home_3.webp" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-description"><span className="font-link">Solid for reduced rates</span></div>
                            </div>
	                    </div>
                    </div>

		            <div class="col-md-4">
                        <div class="profile-card-4 text-center"><img src="./home_2.webp" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-description2"><span className="font-link">Usually offer when an Aircraft</span></div>
                                <div class="profile-description3"><span className="font-link">
                                    <li> Is landing to pickup passengers</li>
                                    <li>Has to flown empty back to its home</li>
                                </span></div>
                            </div>
	                    </div>
                    </div>

		            <div class="col-md-4">
                        <div class="profile-card-4 text-center"><img src="./C01.webp" class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-description"><span className="font-link">Solely for the benefit of our clients</span></div>
                            </div>
	                    </div>
                    </div>

                </div>
            </div><br/> 

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