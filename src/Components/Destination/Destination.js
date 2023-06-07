import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import "./Destination.css";
import Footer from "../Footer/Footer";
import Image from "../../Image";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextareaAutosize,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Destination() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    };

    fetchImages();
  }, []);

  const rootStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
    background: "linear-gradient(to bottom, #536dfe, #2c387e)",
    color: "#fff",
    padding: "16px",
  };

  const headingStyles = {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "8px",
    textAlign: "center",
  };

  const subheadingStyles = {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "16px",
    textAlign: "center",
  };

  const buttonStyles = {
    marginTop: "16px",
    background: "#fff",
    color: "#536dfe",
    borderRadius: "25px",
    padding: "12px 32px",
    fontWeight: 600,
    "&:hover": {
      background: "#fff",
      color: "#536dfe",
    },
  };

  return (
    <>
      <div style={rootStyles}>
        <Typography variant="h2" style={headingStyles}>
          Fly with Us to Amazing Destinations
        </Typography>
        <Typography variant="h4" style={subheadingStyles}>
          Our Blog - Aura Airlines
        </Typography>
        <Button variant="contained" style={buttonStyles}>
          Discover More
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default Destination;
