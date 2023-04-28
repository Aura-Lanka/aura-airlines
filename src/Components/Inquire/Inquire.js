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
                        <div class="tittle-welcome">Inquire Now!</div>
                    </div>
                </div>
            </div>


            <h3 className="sm-heading text-primary fw-bold">We're With You Always</h3>
     
                {/*form*/}

                <div class="session ">

                    <div class="left">
                    <img  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="h-100" alt="..." />
                    </div>
                    <div class="contactUs-form">
                    <form onSubmit={sendEmailContact}>
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

                            <div className="row">
                                <div className="col-md-6">
                                    <label >Email Address<em className="text-danger">*</em></label><br />
                                    <input  class="form-control item" name='email' type="email" placeholder="John@gmail.com" required />
                                </div>

                                <div className="col-md-6">
                                    <label>Subject<em className="text-danger">*</em></label><br />
                                    <input  class="form-control item" name='subject' type="text" placeholder="Please type here..." required />
                                </div>
                            </div>
                            </div>

                            <div class="form-group">
                                <label >Message<em className="text-danger">*</em></label><br />
                                <textarea  class="form-control item" name='message' cols="30" rows="10" placeholder="Please type here..." required></textarea>
                            </div>

                            <div class="form-group">
                                <label>How Do You Wish To Be Reached<em className="text-danger">*</em></label><br />
                                <label className="px-3"><input id="oneWay" for ="oneWay"
                                    type="radio" className="mx-2" name="flightInfo"/>Call us</label>

                                <label className="px-3"><input id="roundTrip" for ="roundTrip" 
                                    type="radio" className="mx-2 " name="flightInfo"/>Email us</label>
                            </div><br />
                                
                            <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' id="btn" type="submit">Send</button>
                            </div>

                        </form>
                    </div>
                </div><br/>

                {/*form end*/}

                <h2 className="headinng-Inquire p-5 mt-5 text-primary">Sign Up to Our  Newsletter</h2>

                {/*form 2*/}

                <div class="session_2">

                    <div class="left">
                    <img  src="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="h-100" alt="..." />
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

export default Inquire;
