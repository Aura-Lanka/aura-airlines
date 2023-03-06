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
                    src="https://wallpaper.dog/large/20522648.jpg"
                    alt=""
                    width="100%"
                    height="600"
                  />
                  <h1 className="img-tittle">For an Extraordinary Fly</h1>

           </div>
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
          </div>
        
      <div className="member">       
   
        <div className='row descirition mb-5'>
    <div className='col-md-6 desciritionTextb-Membership'>
        <p className='desciritionText-Membership' >Membership has it's  Privileges & Last for an Eternity.</p>
    </div>
    <div className='col-md-6'>
    <img  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" width="100%" height="500" />    
    </div>
    </div>
    </div>
    <div className="firstForm-inquire ">
        <h2 className="headinng-Inquire p-1 m-5">We're with You Always</h2>
        <div className="inputs-Inquire">
        <div className="inputInquiry">
          <form onSubmit={sendMembership} >
          <h5 className="name-Inquire mt-3 ">Name *</h5>
         
          <input
            className="firstInput-Inquire my-3 "
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            className="lastInput-Inquire"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          <br />
          <h5 className="name-Inquire">Email Address *</h5>
          <input className="emailInput-Inquire" name='email' type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-5">Contact Number *</h5>
          <input className="emailInput-Inquire" type="text" name='contact_number' placeholder="" required />
          <br />
          <br />
       

          <p className="reached-inquire p-1">How Do You Wish To Be Reached? *</p>
          <select className="reached-inquire p-1" name="reached" id="">
            <option value="call us">call us </option>
            <option value="email">email</option>
          </select>

          <br />
          <h6 className="hometown">Hometown</h6>
          <select className="reached-inquire" name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
            <input className="countryInput" type="text" placeholder="" />
            <p className="reached-inquire pt-5 p-1">How often do you travel?</p>
            <input className="emptyInput" type="text" placeholder="" />
            <p className="reached-inquire p-1">What benefits of Membership are you most interested in?</p>
            <input className="emptyInput" type="text" placeholder="" />

          <div className=" button-inquire">
          <button className="buttonin-inquire" >Send</button>
          </div>
          </form>
        </div>
        </div>
      </div>
    

        <h2 className="headinng-Inquire p-5 mt-5">Sign Up to Our  Newsletter</h2>
        <div className="inputs-Inquire mt-5">
        <h3 className="headinng0-Inquire p-5">We Respect Your Privacy and  it's  Our Priority</h3>
        <form onSubmit={sendEmail}>

        <h5 className="name-Inquire">Name *</h5>
          <input className="emailInput-Inquire" name='to_name' type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-3">Email Address *</h5>
          <input className="emailInput-Inquire"  name='email' type="text" placeholder="" />
          <div className="button-inquire">
          <button className="buttonin-inquire"> Subscribe </button>
          {/* <input className="button buttonin-inquire" type='submit' value="Subscribe"></input> */}
          </div>

        </form>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Membership;
