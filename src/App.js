import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from './Components/Navbar/Navbar';
import Air from './Components/Air/Air';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Offers from './Components/Offer/Offers';
import Destination from './Components/Destination/Destination';
import Membership from './Components/Membership/Membership';
import Inquire from './Components/Inquire/Inquire';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Air" element={<Air />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Inquire" element={<Inquire />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
