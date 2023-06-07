import React, { useEffect, useRef } from "react";
import "../../App.css";
import Footer from "../Footer/Footer";
import "./Inquire.css";
import emailjs from "emailjs-com";
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

function Inquire() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytqgg7y",
        "template_rtao99g",
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
          We are ready to hear your inquiries
        </Typography>
        <Typography variant="h4" style={subheadingStyles}>
          Inquiry Aura Airlines
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
              Inquiry Aura Airlines
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
                    placeholder="Enter Inquiry Message Here"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={6} sx={{marginBottom: "20px", marginLeft: "2px"}}>
                  <RadioGroup
                    name="options"
                    row
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="Call Back"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="Email"
                    />
                  </RadioGroup>
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
          <Typography
              variant="h6"
              sx={{ fontWeight: "bold", paddingBottom: "20px" }}
            >
              Sign Up to Our Newsletter
            </Typography>
            <FormControl>
              <Grid container spacing={2}>
              <Grid item xs={4}>
                  <TextField
                    name="country_code"
                    id="country_code"
                    placeholder="+94"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone Number"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px" }}
              >
                Subscribe
              </Button>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default Inquire;
