import React , {useEffect,useRef} from "react";
import "../../App.css";
import Footer from "../Footer/Footer"
import './Membership.css'
import emailjs from 'emailjs-com';


function Membership() {
  const topContainer = useRef();
    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytqgg7y', 'template_l8zfg1m', e.target, 'ua3xOIc_sBj-iyTME')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  const sendMembership = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_la587t8', 'template_rwsodtf', e.target, 'LsjBjVjMkntTZqi78')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <>
      <div ref={topContainer}/>
      <div className="Membership">
          <div className="members position-relative">
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
                                <div class="tittle-welcome">For an Extraordinary Fly</div>
                            </div>

                        </div>

                    </div>

          <div><br/><br/>

        {/*destination offers start*/}

        <div class="ag-format-container">
            <div class="ag-courses_box">
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">24/7 Dedicated personal advisor</span>
                </div>

                </p>
            </div>
        
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">Add rates per every travel</span>
                </div>

                </p>
            </div>
        
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">Free travel for the added rates</span>
                </div>

                </p>
            </div>
        
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">Get exclusive offers for travels</span>
                </div>
        
                </p>
            </div>
        
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">Lifestyle management</span>
                </div>
        
                </p>
            </div>
        
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">Handling hotel arrangements</span>
                </div>

                </p>
            </div>
        
            <div class="ag-courses_item">
                <p class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title text-capitalize">
                    <span className="font-link">Handling ticket reservations for events</span>
                </div>

                </p>
            </div>
        
            </div>
        </div>
  
        {/*destination offers end*/}

          </div>
      </div>
      {/*
           <div className="container mt-5">
            <div className="card border-secondary">
              <div class="card-body text-secondary">
                    <ul>
                        <li>&rarr; 24/7 dedicated personal advisor</li>
                        <li>&rarr; Add rates per every travel </li>
                        <li>&rarr; Free travel for the added rates</li>
                        <li>&rarr; Get exclusive offers for  travels</li>
                        <li>&rarr; Livestyle management</li>
                        <li>&rarr; Handling hotel arrangements</li>
                        <li>&rarr; Handling ticket reservations for events </li>
                    </ul>
              </div>
              </div>
  </div>*/}
        
      <div className="member">       
   
        <div className='row descirition mb-5'>
    <div className='col-md-6 desciritionTextb-Membership; text-center'>
        <p className='desciritionText-Membership' >Membership has it's  Privileges & Last for an Eternity.</p>
    </div>
    <div className='col-md-6'>
    <img  src="./home_2.webp"
          alt="" 
          width="100%" height="100%" />    
    </div>
    </div>
    </div>

        <h3 className="sm-heading text-primary fw-bold">We're With You Always</h3>
     
                {/*form*/}

                <div class="session ">

                    <div class="left">
                    <img  src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="h-100" alt="..." />
                    </div>
                    <div class="contactUs-form">
                    <form onSubmit={sendMembership}>
                        <div class="form-group">

                            <div className="row">
                                <label>Name<em className="text-danger">*</em></label><br /> 

                                <div className="col-md-2">                                     
                                    <select  id="title" value=""
                                    name="title" class="form-select item" required>
                                        <option>Mr</option>
                                        <option>Ms</option>
                                        <option>Miss</option>
                                    </select>
                                </div>

                                <div className="col-md-5">
                                    <input id="first_name" type="text" name="first_name" class="form-control item" placeholder="First Name" required/>
                                </div>

                                <div className="col-md-5">
                                    <input id="last_name" type="text" name="last_name" class="form-control item" placeholder="Last Name" required/>
                                </div>
                            </div>

                            </div>

                            <div class="form-group">
                                
                                <div className="row ">
                                    <label>Phone Number<em className="text-danger">*</em></label><br />

                                    <div className="col-md-3">
                                        <input id="country_code"
                                        type="text" name="country_code" class="form-control item" placeholder="+94" required/>
                                    </div>

                                    <div className="col-md-5">
                                        <input id="phone_number"
                                        type="tel" name="phone_number" class="form-control item" placeholder="77+++++++++" required/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label >Email Address<em className="text-danger">*</em></label><br />
                                <input  class="form-control item" name='email' type="email" placeholder="John@gmail.com" required />
                            </div>

                            <div class="form-group">
                                <label>How Do You Wish To Be Reached<em className="text-danger">*</em></label><br />
                                <label className="px-3"><input id="oneWay" for ="oneWay"
                                    type="radio" className="mx-2" name="flightInfo"/>Call us</label>

                                <label className="px-3"><input id="roundTrip" for ="roundTrip" 
                                    type="radio" className="mx-2 " name="flightInfo"/>Email us</label>
                            </div><br />

                            <div class="form-group">
                                <label >Hometown</label><br />
                                <input  class="form-control item" name='text' type="text"/>
                            </div>

                            <div class="form-group">
                                <label>How often do you travel?</label><br />
                                <input  class="form-control item" name='text' type="text" required />
                            </div>

                            <div class="form-group">
                                <label >What benefits of Membership are you most interested in?</label><br />
                                <textarea  class="form-control item" name='message' cols="30" rows="10" placeholder="Please type here..."></textarea>
                            </div>
                                
                            <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' id="btn" type="submit">Send</button>
                            </div>

                        </form>
                    </div>
                </div><br/>

                {/*form end*/}

                <h2 className="headinng-Inquire p-5 mt-5 text-primary">Sign Up to Our  Newsletter</h2>

                {/*form 2*/}

                <div class="session ">

                    <div class="left">
                    <img  src="https://images.unsplash.com/photo-1612195745262-89163d541059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="h-100" alt="..." />
                    </div>
                    <div class="contactUs-form">
                        <form >

                            <h5>We Respect Your Privacy and it's Our Priority</h5><br /><br />

                            <div class="form-group">
                                
                                <div className="row ">
                                    <label>Phone Number<em className="text-danger">*</em></label><br />

                                    <div className="col-md-3">
                                        <input id="country_code"
                                        type="text" name="country_code" class="form-control item" placeholder="+94" required/>
                                    </div>

                                    <div className="col-md-5">
                                        <input id="phone_number"
                                        type="tel" name="phone_number" class="form-control item" placeholder="77+++++++++" required/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label >Email Address<em className="text-danger">*</em></label><br />
                                <input  class="form-control item" name='email' type="email" placeholder="John@gmail.com" required />
                            </div>

                            <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' id="btn" type="submit">Subscribe</button>
                            </div>

                        </form>
                    </div>
                </div>

                {/*form 2 end*/}

                <h5> </h5>

      </div>
      <Footer />
    </>
  );
}

export default Membership;
