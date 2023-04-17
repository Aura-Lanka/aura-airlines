import React , {useEffect,useRef} from "react";
import "../../App.css";
import Footer from "../Footer/Footer"
import './Inquire.css';
import emailjs from 'emailjs-com';

function Inquire() {

  const topContainer = useRef();
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytqgg7y', 'template_rtao99g', e.target, 'ua3xOIc_sBj-iyTME')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const sendEmailContact = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_la587t8', 'template_rtao99g', e.target, 'LsjBjVjMkntTZqi78')
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
      <div className="Inquire">
        <div className='inquiry'>
            <img
              src="./home_2.png"
              alt=""
              width="100%"
              height="100%"
            />
            <h1 className="tittle-Inquire pb-5">
                <b>Inquire Now</b>
            </h1>
        </div><br/>



        <h3 className="sm-heading text-primary fw-bold">We're With You Always</h3>

        {/*form start*/}
        
        <div class="container">
                <div className="row">

                <div className="col-md-7">
                    <div className="book contact1">
                        <form onSubmit={sendEmailContact}>
                            <label>Name<em className="text-danger">*</em></label>
                            <div className="row ">
                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label>First Name<em className="text-danger">*</em></label><br />
                                    <input className='b-Input w-100' name='first_name' type="text" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label>Last Name<em className="text-danger">*</em></label><br />
                                    <input  className='b-Input w-100' name='last_name'  type="text" required />
                                </div>
                            </div>

                            
                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label >Email Address<em className="text-danger">*</em></label><br />
                                    <input  className='b-Input w-100' name='email' type="email" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label>Subject<em className="text-danger">*</em></label><br />
                                    <input  className='b-Input w-100' name='subject' type="text" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label >Message<em className="text-danger">*</em></label><br />
                                    <textarea  className="b-Input w-100" name='message' cols="30" rows="10" required></textarea>
                                </div>
                            </div>

                           
                            <div className='edit-margin'>
                              <label>How Do You Wish To Be Reached<em className="text-danger">*</em></label><br />
                                <label className="px-3"><input id="oneWay" for ="oneWay"
                                type="radio" className="mx-2" name="flightInfo"/>Call us</label>

                                <label className="px-3"><input id="roundTrip" for ="roundTrip" 
                                type="radio" className="mx-2 " name="flightInfo"/>Email us</label>
                            </div>
                            

                            <div className='edit-margin'>
                                <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                    <button className='buttonInput'>Send</button>
                                </div>
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
                                <div className="col-md-4">
                                    <input id="country_code" 
                                    type="text" name="country_code" className="b-Input w-100" placeholder="+94" required/>
                                </div>
                                <div className="col-md-8">
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
                  </div>
              </div>
            </div>   

            {/*Assistance details end*/}















      </div>
      <Footer />
    </>
  );
}

export default Inquire;
