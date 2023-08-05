import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from '../containers/Layout'
import Air from './Components/Air/Air';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Footer';
// import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Header from './Components/Common/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Common/Footer/footer';
import Aboutus from './Components/About/Aboutus';
import Reservation from './Components/Book/Reservation';
import Membership_page from './Components/Membership/Membership_page';
import Contactus from './Components/Contact/Contactus';
import Offers_page from './Components/Offer/Offers_page';
import Destination_page from './Components/Destination/Destination_page';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/Air" element={<Air/>}/>
          <Route exact path="/Book" element={<Reservation/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Offers" element={<Offers_page/>}/>
          <Route exact path='/About' element={<Aboutus/>}/>
          <Route exact path='/Membership' element={<Membership_page/>}/>
          <Route exact path='/Destination' element={<Destination_page/>}/>
          <Route exact path='/Inquire' element={<Contactus/>}/>

        </Routes>
        <Footer/>
        
      </Router>
    </>
  );
}

export default App;
