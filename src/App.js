import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from '../containers/Layout'
import Air from './Components/Air/Air';
import Navbar from './Components/Navbar/Navbar';
// import Footer from './Footer';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Offers from './Components/Offer/Offers';
import Destination from './Components/Destination/Destination';
import Membership from './Components/Membership/Membership';
import Inquire from './Components/Inquire/Inquire';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
  
          <Route exact path="/Air" element={<Air/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Book" element={<Book/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Offers" element={<Offers/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path='/Membership' element={<Membership/>}/>
          <Route exact path='/Destination' element={<Destination/>}/>
          <Route exact path='/Inquire' element={<Inquire/>}/>
          
          {/* <Footer /> */}
        </Routes>
        {/* <Switch>
          <Route  path="/">
              <Home/>
          </Route>
          <Route  path="<Book/>">
              <Book/>
          </Route>
          <Route  path="">
              <Air/>
          </Route>
        </Switch> */}
      </Router>
      
    </>
  );
}

export default App;
