import React , {useEffect,useRef} from "react";
import './Contact.css';
import Footer from "../Footer/Footer";
import emailjs from 'emailjs-com';

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
                <h1 className="main-heading">Contact Us</h1>
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
                            {/* <div class="carousel-caption d-none d-md-block">
                                <button className="justify-content-center">book now</button>
                            </div> */}
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
                </div>
                <h3 className="sm-heading">We're with You Always</h3>
                <div className='book-part contact1'>
                    <form onSubmit={sendEmailContact}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>First Name*</label><br />
                                <input className='b-Input w-100' name='first_name' type="text" required />
                            </div>

                            <div className='col-md-6'>
                                <label>Last Name*</label><br />
                                <input  className='b-Input w-100' name='last_name'  type="text" required />
                            </div>
                            
                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label >Email Address*</label><br />
                                    <input  className='b-Input w-100' name='email' type="email" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label>Subject*</label><br />
                                    <input  className='b-Input w-100' name='subject' type="text" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label >Message*</label><br />
                                    <textarea  className="b-Input w-100" name='message' cols="30" rows="10" required></textarea>
                                </div>
                            </div>
                            <div className='butt-on'>
                                    <button className='buttonInput'>Send</button>
                            </div>

                        </div>
                    </form>

                </div>

                <div className="container">
                    <div className="row newsletter">
                        <div className="col-md-6 my-4">
                            <h3 className='sm-heading'>Sign Up to Our Newsletter</h3>
                            <p className="p text-center">
                                <b>We respect your privacy.</b>
                            </p>
                        </div>
                        <div className="col-md-6">
                        <form onSubmit={sendEmail}>

                            <div className='edit-margin'>
                                <label>Name</label><br />
                                <input  className="b-Input w-100" name='to_name' type="text" />
                            </div>

                            <div className='edit-margin'>
                                <label >Email Address</label><br />
                                <input className="b-Input w-100" name='email' type="email" />
                            </div>

                            <div className='butt-on'>
                                <button className='buttonInput '>Subscribe</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default Contact;