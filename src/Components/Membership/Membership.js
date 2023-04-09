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
                  <img
                    src="./membership.png"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <h1 className="img-tittle">For an Extraordinary Fly</h1>

          <div><br/>
            <p className="text-center container text-part2">
              <ul>
                <li>&rarr; 24/7 dedicated personal advisor</li>
                <li>&rarr; Add rates per every travel </li>
                <li>&rarr; Free travel for the added rates</li>
                <li>&rarr; Get exclusive offers for  travels</li>
                <li>&rarr; Livestyle management</li>
                <li>&rarr; Handling hotel arrangements</li>
                <li>&rarr; Handling ticket reservations for events </li>
              </ul>
            </p>

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
    <img  src="./home_2.png"
          alt="" 
          width="100%" height="100%" />    
    </div>
    </div>
    </div>

        <h3 className="sm-heading text-primary fw-bold">We're With You Always</h3>

            {/*form start*/}
            <div class="container">
                <div className="row">

                <div className="col-md-7">
                    <div className="book contact1">
                        <form onSubmit={sendMembership}>
                            <label>Name<em className="text-danger">*</em></label>
                            <div className="row ">
                                <div className="col-md-6">
                                    <input id="first_name" 
                                    type="text" name="first_name" className="b-Input w-100" placeholder="First Name" required/>
                                </div>
                                <div className="col-md-6">
                                    <input id="last_name" 
                                    type="text" name="last_name" className="b-Input w-100" placeholder="Last Name" required/>
                                </div>
                            </div>

                            <div className="edit-margin">
                            <label>Phone Number<em className="text-danger">*</em></label><br />
                            <div className="row ">
                                <div className="col-md-2">
                                    <input id="country_code" 
                                    type="text" name="country_code" className="b-Input w-100" placeholder="+94" required/>
                                </div>
                                <div className="col-md-4">
                                    <input  id="phone_number" 
                                    type="tel" name="phone_number" className="b-Input w-100" placeholder="77+++++++++" required/>
                                </div>
                            </div>

                            </div>

                            <div className="edit-margin">
                                <label>Email Address<em className="text-danger">*</em></label><br />
                                <input id="email"
                                type="email" email='email' name="email" className="b-Input w-100" placeholder="John@gmail.com"  
                                oninvalid="this.setCustomValidity('Please Enter valid email')"
                                oninput="setCustomValidity('')" required/>
                            </div>
                            
                            <div className="mt-5">
                            <label>How Do You Wish To Be Reached<em className="text-danger">*</em></label><br />
                                <label className="px-3"><input id="oneWay" for ="oneWay"
                                type="radio" className="mx-2" name="flightInfo"/>Call us</label>

                                <label className="px-3"><input id="roundTrip" for ="roundTrip" 
                                type="radio" className="mx-2 " name="flightInfo"/>Email us</label>

                                <div className='edit-margin'>
                                    <label >Hometown</label><br />
                                    <input  className='b-Input w-100' name='text' type="text"/>
                                </div>

                                <div className='edit-margin'>
                                    <label>How often do you travel?</label><br />
                                    <input  className='b-Input w-100' name='text' type="text" required />
                                </div>

                                <div className='edit-margin'>
                                    <label >What benefits of Membership are you most interested in?</label><br />
                                    <textarea  className="b-Input w-100" name='message' cols="30" rows="10" required></textarea>
                                </div>

                                
                                <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' type="submit" >Send</button>
                                </div> 
                        </div>
                        </form>
                    </div>
                </div>
            {/*form end*/}

            {/*Assistance details*/}

                <div className="col-md-4" /*my-auto*/>
                <h2 className="headinng-Inquire p-5 mt-5 text-primary">Sign Up to Our  Newsletter</h2>

                    <div className="book contact1">

                    <h5>We Respect Your Privacy and it's Our Priority</h5><br />
                        <form>
                          <div className="edit-margin">
                            <label>Phone Number<em className="text-danger">*</em></label><br />
                            <div className="row ">
                                <div className="col-md-2">
                                    <input id="country_code" 
                                    type="text" name="country_code" className="b-Input w-100" placeholder="+94" required/>
                                </div>
                                <div className="col-md-4">
                                    <input  id="phone_number" 
                                    type="tel" name="phone_number" className="b-Input w-100" placeholder="77+++++++++" required/>
                                </div>
                            </div>

                            </div>

                            <div className="edit-margin">
                                <label>Email Address<em className="text-danger">*</em></label><br />
                                <input id="email"
                                type="email" email='email' name="email" className="b-Input w-100" placeholder="John@gmail.com"  
                                oninvalid="this.setCustomValidity('Please Enter valid email')"
                                oninput="setCustomValidity('')" required/>
                            </div>

                            <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' type="submit" >Subscribe</button>
                                </div> 
                        </form>
                    </div>
                    <div className="rounded mx-auto d-block col-md-7 text-center"><img className="d-block w-100" src="./06-rounded.png" alt="" /></div>
                </div>
            </div>
            </div>   

            {/*Assistance details end*/}


      </div>
      <Footer />
    </>
  );
}

export default Membership;
