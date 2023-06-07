import React, { useEffect, useRef } from "react";
import "../../App.css";
import Footer from "../Footer/Footer";
import "./Membership.css";
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

function Membership() {
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
  const sendMembership = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_la587t8",
        "template_rwsodtf",
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
          Join with Aura Airlines
        </Typography>
        <Typography variant="h4" style={subheadingStyles}>
          We offer you exclusive service
        </Typography>
        <Button variant="contained" style={buttonStyles}>
          Discover More
        </Button>
      </div>

      <Box sx={{ padding: "50px" }}>
        <div className="card_two">
          <Typography variant="body1" component="blockquote" align="center">
            Membership has it's Privileges & Last for an Eternity.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: "50px", marginTop: "50px" }}
          >
            <Grid item xs={3}>
              <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#FFFDE7", marginRight: 0 }}
              >
                24/7 Dedicated Personal Advisor
              </div>
            </Grid>
            <Grid item xs={3}>
            <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#E8F5E9", marginRight: 0 }}
              >
                Add Rates Per Every Travel Location
              </div>
            </Grid>
            <Grid item xs={3}>
            <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#FFEBEE", marginRight: 0 }}
              >
                Free Travel For The Added Rates
              </div>
            </Grid>
            <Grid item xs={3}>
            <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#F3E5F5", marginRight: 0 }}
              >
                Get Exclusive Offers For Travels
              </div>
            </Grid>
            <Grid item xs={3}>
            <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#FCE4EC", marginRight: 0 }}
              >
                Lifestyle Management Service
              </div>
            </Grid>
            <Grid item xs={3}>
            <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#E3F2FD", marginRight: 0 }}
              >
                Handling Hotel Arrangements
              </div>
            </Grid>
            <Grid item xs={3}>
            <div
                className="card_two"
                style={{ marginBottom: "20px", padding: "30px 20px", backgroundColor: "#FBE9E7", marginRight: 0 }}
              >
                Handling Ticket Reservations For Events
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>

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
              Request Membership
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
                <Grid item xs={2}>
                  <TextField
                    name="country_code"
                    id="country_code"
                    placeholder="+94"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone Number"
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
                    name="home_town"
                    id="home_town"
                    placeholder="Home Town"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="how_often"
                    id="how_often"
                    placeholder="How often do you travel?"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="What benefits of Membership are you most interested in?"
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ marginBottom: "20px", marginLeft: "2px" }}
                >
                  <RadioGroup name="options" row>
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

export default Membership;
