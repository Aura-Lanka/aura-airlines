import React , {useEffect,useRef, useState} from "react";
import Axios from 'axios';
import "./Book.css";
import Footer from "../Footer/Footer";
import emailjs from 'emailjs-com';


function Book() {
    const url = "https://auraairline.com/aura_airlines/CustomerInquiryDetails"
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        country_code:"",
        phone_number:"",
        email:"",
        oneWay:"",
        roundTrip:"",
        date:"",
        departure_city:"",
        destination_city:"",
        passengers:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            first_name:data.first_name,
            last_name:data.last_name,
            country_code:data.country_code,
            phone_number:data.phone_number,
            email:data.email,
            oneWay:data.oneWay,
            roundTrip:data.roundTrip,
            date:data.date,
            departure_city:data.departure_city,
            destination_city:data.destination_city,
            passengers:data.passengers 
        })
            .then(res=>{
                console.log(res.data)
            })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const topContainer = useRef();
    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);

    {/*useEffect(() => {
        Axios.get('https://auraairline.com/aura_airlines/CustomerInquiryDetails')

        .then(response => {
            console.log(response);
      })
        .catch(error => {
            console.error(error);
      });
        }, []); */}

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ytqgg7y', 'template_rj54jw8', e.target, 'ua3xOIc_sBj-iyTME')
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

            <div className="container-fluid">
                <div className="video-edit text-center">

                {/* <video width="100%" height="460" controls>
                    <source src="https://www.youtube.com/watch?v=ZbIzZD_YNsA" type="video/mp4"/>
                    <source src="https://www.youtube.com/watch?v=ZbIzZD_YNsA" type="video/ogg"/>
                        Your browser does not support the video tag.
                </video> */}
                {/*<iframe width="100%" height="460" src="https://drive.google.com/uc?id=1-nRbPRxrB6DWlxiny6tK8ndFCr3xnbyl" alt="Google Drive Image" ></iframe>*/}
                <iframe src="https://drive.google.com/file/d/1-nRbPRxrB6DWlxiny6tK8ndFCr3xnbyl/preview" width="80%" height="540" allow="autoplay"></iframe>
                {/*<div class="centered">Fly with Aura Airlines Safely & Happily</div>*/}
                </div>
                <h3 className="sm-heading text-primary fw-bold">Tells Us Your Travel Plans</h3>
                

            {/*form start*/}
            <div class="container">
                <div className="row">

                <div className="col-md-7">
                    <div className="book contact1">
                        <h5>Personal Information</h5><br />
                        <form onSubmit={(e)=> submit(e)}>
                            <label>Name<em className="text-danger">*</em></label>
                            <div className="row ">
                                <div className="col-md-6">
                                    <input onChange={(e)=>handle(e)} id="first_name" value={data.first_name} 
                                    type="text" name="first_name" className="b-Input w-100" placeholder="First Name" required/>
                                </div>
                                <div className="col-md-6">
                                    <input onChange={(e)=>handle(e)} id="last_name" value={data.last_name} 
                                    type="text" name="last_name" className="b-Input w-100" placeholder="Last Name" required/>
                                </div>
                            </div>

                            <div className="edit-margin">
                            <label>Phone Number<em className="text-danger">*</em></label><br />
                            <div className="row ">
                                <div className="col-md-2">
                                    <input onChange={(e)=>handle(e)} id="country_code" value={data.country_code} 
                                    type="text" name="country_code" className="b-Input w-100" placeholder="+94" required/>
                                </div>
                                <div className="col-md-4">
                                    <input onChange={(e)=>handle(e)} id="phone_number" value={data.phone_number} 
                                    type="tel" name="phone_number" className="b-Input w-100" placeholder="77+++++++++" required/>
                                </div>
                            </div>

                            </div>

                            {/*<div className="edit-margin">
                                <label>Phone Number<em className="text-danger">*</em></label><br />
                                <input onChange={(e)=>handle(e)} id="phone_number" value={data.phone_number} 
                                type="tel" name="phone_number" className="b-Input w-100" placeholder="+94+++++++++" required/>
                                </div>*/}

                            <div className="edit-margin">
                                <label>Email Address<em className="text-danger">*</em></label><br />
                                <input onChange={(e)=>handle(e)} id="email" value={data.email}
                                type="email" email='email' name="email" className="b-Input w-100" placeholder="John@gmail.com"  
                                oninvalid="this.setCustomValidity('Please Enter valid email')"
                                oninput="setCustomValidity('')" required/>
                            </div>
                            
                            <div className="mt-5">
                            <h5>Flight Information</h5><br />
                                <label className="px-3"><input onChange={(e)=>handle(e)} id="oneWay" for ="oneWay" value={data.oneWay}
                                type="radio" className="mx-2" name="flightInfo"/>One Way</label>

                                <label className="px-3"><input onChange={(e)=>handle(e)} id="roundTrip" for ="roundTrip" value={data.roundTrip}
                                type="radio" className="mx-2 " name="flightInfo"/>Round Trip</label>

                                <div className="edit-margin">
                                    <label>Date of Departure<em className="text-danger">*</em></label><br />
                                    <input onChange={(e)=>handle(e)} id="date" value={data.date}
                                    name="date" type="date" className="b-Input w-50" required/>
                                </div>

                                <div className="edit-margin">
                                    <label>Departure City<em className="text-danger">*</em></label><br />
                                    <select onChange={(e)=>handle(e)} id="departure_city" value={data.departure_city}
                                    name="departure_city" className="b-Input w-50" required>
                                        <option>Please Select</option>
                                        <option>Galle</option>
                                        <option>Tangalle</option>
                                        <option>Koggala</option>
                                        <option>Yala</option>
                                        <option>Wilpattu</option>
                                        <option>Udawalawe</option>
                                        <option>Trincomalee</option>
                                        <option>Batticaloa</option>
                                        <option> Arugam Bay</option>
                                        <option>Jaffna</option>
                                        <option>Vavuniya</option>
                                        <option>NuwraEliya</option>
                                        <option>Kandy</option>
                                        <option> Norwood</option>
                                        <option>Sigiriya</option>
                                        <option>Anuradhapura</option>
                                        <option>Kataragama</option>
                                    </select>
                                </div>

                                <div className="edit-margin">
                                    <label>Destination City</label><br />
                                    <select onChange={(e)=>handle(e)} id="destination_city" value={data.destination_city}
                                    name="destination_city" className="b-Input w-50">
                                        <option>Please Select</option>
                                        <option>Galle</option>
                                        <option>Tangalle</option>
                                        <option>Koggala</option>
                                        <option>Yala</option>
                                        <option>Wilpattu</option>
                                        <option>Udawalawe</option>
                                        <option>Trincomalee</option>
                                        <option>Batticaloa</option>
                                        <option>Arugam Bay</option>
                                        <option>Jaffna</option>
                                        <option>Vavuniya</option>
                                        <option>NuwraEliya</option>
                                        <option>Kandy</option>
                                        <option>Norwood</option>
                                        <option>Sigiriya</option>
                                        <option>Anuradhapura</option>
                                        <option>Kataragama</option>
                                        <option>Koggala</option>
                                        <option>Mattala</option>
                                        <option>Mattala/Weerawila</option>
                                        <option>Anuradhapura/Palavi</option>
                                        <option>Mattala/Ratnapura</option>
                                        <option>Minneriya</option>
                                        <option>Ampara/Minneriya</option>
                                        <option>Ampara</option>
                                        <option>Palali</option>
                                        <option>Diyatalawa</option>
                                        <option>Kegalle/Digana</option>
                                        <option>Ginigatthena</option>
                                        <option>Minneriya/Dambulla</option>
                                        <option>Vavuniya/Sigiriya</option>
                                        <option>Mattala/Weerawila</option>
                                    </select>
                                </div>

                                <div className="edit-margin">
                                    <label>No of Passengers</label><br />
                                    <input onChange={(e)=>handle(e)} id="passengers" value={data.passengers}
                                    name='passengers' type="number" className="b-Input" placeholder="0"/>
                                </div>
                                <div className='butt-on d-grid gap-2 col-4 mx-auto'>
                                <button className='buttonInput' type="submit" >Submit</button>
                                </div> 
                        </div>
                        </form>
                    </div>
                </div>
            {/*form end*/}

            {/*Assistance details*/}

                <div className="col-md-4" /*my-auto*/>
                    <div className="book contact1">

                    <h5>For Immediate Assistance</h5><br />
                        <form>
                            <label>Contact Us</label>
                            <div><i class="fa-solid fa-phone"></i> +94 77 907 1437</div><br />

                            <label>Email Us</label>
                            <div><i class="fas fa-envelope"></i> info@auralanka.com</div>
                        </form>
                    </div>

                    <div className="row mx-auto">
                        <div className=""><img className="d-block w-100" src="./safety.png" alt="" /></div>
                    </div>

                    
                </div>
            </div>
            </div>   

            {/*Assistance details end*/}



                <div className="row mx-auto d-flex justify-content-end">
                    <div className="col-md-4"><img className="d-block w-100" src="./06-rounded.png" alt="" /></div>
                    <div className="col-md-4"><img className="d-block w-100" src="./00004-rounded.png" alt="" /></div>
                    <div className="col-md-4"><img className="d-block w-100" src="./wpimag-rounded.png" alt="" /></div>
                    {/*<div className="col-md-3"><img className="round-img" src="https://images.squarespace-cdn.com/content/v1/5a05c910017db256055decc2/6edd37aa-a363-4cb9-a721-3f4f532788dc/Bigstock_+103020331+-+Jet+Set+Power+Lunch.jpg?format=750w" alt="" /></div>*/}
                            </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Book;