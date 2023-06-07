import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytqgg7y",
        "template_l8zfg1m",
        e.target,
        "ua3xOIc_sBj-iyTME"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const sendEmailContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_la587t8",
        "template_rtao99g",
        e.target,
        "LsjBjVjMkntTZqi78"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
          We are here for you always
        </Typography>
        <Typography variant="h4" style={subheadingStyles}>
          Contact Aura Airlines
        </Typography>
        <Button variant="contained" style={buttonStyles}>
          Discover More
        </Button>
      </div>

      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "50px", marginTop: "50px" }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <Paper elevation={4} sx={{ margin: 2, padding: 5 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", paddingBottom: "20px" }}
            >
              Contact Aura Airlines
            </Typography>
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <TextField
                    name="title"
                    id="title"
                    placeholder="Title"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Enter Message Here"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={4} sx={{ margin: 2, padding: 5 }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ paddingBottom: 2, fontWeight: "bold" }}
              >
                <span className="font-link">For Immediate Assistance</span>
              </Typography>
              <Typography sx={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                <span>Contact Us</span>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon />
                <Typography sx={{ marginTop: 1 }}>
                  <span className="font-link">+94 77 907 1437</span>
                </Typography>
              </Box>
              <Typography sx={{ marginTop: 2, padding: 0, fontWeight: "bold" }}>
                <span>Email Us</span>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon />
                <Typography sx={{ marginTop: 1 }}>
                  <span className="font-link">info@auraairline.com</span>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default Contact;
