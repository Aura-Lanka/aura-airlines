import React , {useEffect,useRef} from "react";
import './Contact.css';
import Footer from "../Footer/Footer";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

function Contact() {
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
            <div>
                <div className='position-relative'>
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
                                <div class="tittle-welcome">Fly With Aura!</div>
                            </div>

                        </div>

                    </div>
                </div>



                <h3 className="sm-heading text-primary fw-bold">We're With You Always</h3>

                {/*form*/}

                <div class="session ">

                    <div class="left">
                    <img  src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" className="h-100" alt="..." />
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
                                
                            <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' id="btn" type="submit">Send</button>
                            </div>

                        </form>
                    </div>
                </div>

                {/*form end*/}

                <div className="container">
                    <h3 className='sm-heading text-primary fw-bold'>Want Some Assistance...?</h3>
                    <div className='butt-on d-grid gap-2 col-3 mx-auto'>
                        <li className="nav-item edit">
                            <Link className="nav-link nav-link-color" aria-current="page" to="/Inquire">
                                <button className='buttonInput'>Inquire Now</button>
                            </Link>
                        </li>
                    </div>
                </div>

                
                
            </div>
            <Footer/>
        </>
    )
}

export default Contact;