import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import Footer from "../Footer/Footer";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Radio, 
  RadioGroup, 
  FormControlLabel
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Book() {
  const url = "https://auraairline.com/aura_airlines/CustomerInquiryDetails";

  const [data, setData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    country_code: "",
    phone_number: "",
    email: "",
    oneWay: "",
    roundTrip: "",
    date: "",
    departure_city: "",
    destination_city: "",
    passengers: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      title: data.title,
      first_name: data.first_name,
      last_name: data.last_name,
      country_code: data.country_code,
      phone_number: data.phone_number,
      email: data.email,
      oneWay: data.oneWay,
      roundTrip: data.roundTrip,
      date: data.date,
      departure_city: data.departure_city,
      destination_city: data.destination_city,
      passengers: data.passengers,
    }).then((res) => {
      console.log(res.data);
    });

    alert("The form was submitted");

    setData({
      title: "",
      first_name: "",
      last_name: "",
      country_code: "",
      phone_number: "",
      email: "",
      oneWay: "",
      roundTrip: "",
      date: "",
      departure_city: "",
      destination_city: "",
      passengers: "",
    });
  }

  function handle(e, field) {
    const newdata = { ...data };
    newdata[field] = e.target.value;
    setData(newdata);
    console.log(e.target.value);
    console.log(field);
  }

  const topContainer = useRef();
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  {
    /*useEffect(() => {
        Axios.get('https://auraairline.com/aura_airlines/CustomerInquiryDetails')

        .then(response => {
            console.log(response);
      })
        .catch(error => {
            console.error(error);
      });
        }, []); */
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytqgg7y",
        "template_rj54jw8",
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

  return (
    <>
      <div ref={topContainer} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://drive.google.com/file/d/1-nRbPRxrB6DWlxiny6tK8ndFCr3xnbyl/preview"
          width="100%"
          height="540"
          allow="autoplay"
          allowFullScreen
        ></iframe>
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
              Tells Us Your Travel Plans
            </Typography>
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Select
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={data.title || "Select"}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "title")}
                  >
                    <MenuItem value="Select">Title</MenuItem>
                    <MenuItem value={"Mr"}>Mr</MenuItem>
                    <MenuItem value={"Ms"}>Ms</MenuItem>
                    <MenuItem value={"Miss"}>Miss</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    value={data.first_name}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "first_name")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    value={data.last_name}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "last_name")}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    name="country_code"
                    id="country_code"
                    placeholder="+94"
                    value={data.country_code}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "country_code")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone Number"
                    value={data.phone_number}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "phone_number")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="passengers"
                    id="passengers"
                    placeholder="No of Pessengers"
                    value={data.passengers}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "passengers")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={data.email}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "email")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="date"
                    id="date"
                    placeholder="Date of Departure"
                    value={data.date}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "date")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="departure_city"
                    id="departure_city"
                    placeholder="Departure City"
                    value={data.departure_city || "Select"}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "departure_city")}
                  >
                    <MenuItem value="Select">Departure City</MenuItem>
                    <MenuItem value="Galle">Galle</MenuItem>
                    <MenuItem value="Tangalle">Tangalle</MenuItem>
                    <MenuItem value="Koggala">Koggala</MenuItem>
                    <MenuItem value="Yala">Yala</MenuItem>
                    <MenuItem value="Wilpattu">Wilpattu</MenuItem>
                    <MenuItem value="Udawalawe">Udawalawe</MenuItem>
                    <MenuItem value="Trincomalee">Trincomalee</MenuItem>
                    <MenuItem value="Batticaloa">Batticaloa</MenuItem>
                    <MenuItem value="Arugam Bay">Arugam Bay</MenuItem>
                    <MenuItem value="Jaffna">Jaffna</MenuItem>
                    <MenuItem value="Vavuniya">Vavuniya</MenuItem>
                    <MenuItem value="NuwraEliya">NuwraEliya</MenuItem>
                    <MenuItem value="Kandy">Kandy</MenuItem>
                    <MenuItem value="Norwood">Norwood</MenuItem>
                    <MenuItem value="Sigiriya">Sigiriya</MenuItem>
                    <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
                    <MenuItem value="Kataragama">Kataragama</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="destination_city"
                    id="destination_city"
                    placeholder="Destination City"
                    value={data.destination_city || "Select"}
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={(e) => handle(e, "destination_city")}
                  >
                    <MenuItem value="Select">Destination City</MenuItem>
                    <MenuItem value="Galle">Galle</MenuItem>
                    <MenuItem value="Tangalle">Tangalle</MenuItem>
                    <MenuItem value="Koggala">Koggala</MenuItem>
                    <MenuItem value="Yala">Yala</MenuItem>
                    <MenuItem value="Wilpattu">Wilpattu</MenuItem>
                    <MenuItem value="Udawalawe">Udawalawe</MenuItem>
                    <MenuItem value="Trincomalee">Trincomalee</MenuItem>
                    <MenuItem value="Batticaloa">Batticaloa</MenuItem>
                    <MenuItem value="Arugam Bay">Arugam Bay</MenuItem>
                    <MenuItem value="Jaffna">Jaffna</MenuItem>
                    <MenuItem value="Vavuniya">Vavuniya</MenuItem>
                    <MenuItem value="NuwraEliya">NuwraEliya</MenuItem>
                    <MenuItem value="Kandy">Kandy</MenuItem>
                    <MenuItem value="Norwood">Norwood</MenuItem>
                    <MenuItem value="Sigiriya">Sigiriya</MenuItem>
                    <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
                    <MenuItem value="Kataragama">Kataragama</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6} sx={{marginBottom: "20px", marginLeft: "2px"}}>
                  <RadioGroup
                    name="options"
                    row
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="One Way Trip"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="Two Way Trip"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Button variant="contained" color="primary">
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

export default Book;
