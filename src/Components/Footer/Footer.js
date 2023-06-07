import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, Paper, Box } from "@mui/material";

function Footer() {
  return (
    <>
      <Grid container spacing={2} sx={{ background: "#212121", color: "white", paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}>
      <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Typography
            className="font-link"
            sx={{
              fontWeight: "800",
              fontSize: "20px"
            }}
          >AURA-LANKA
          </Typography>
          <p>
            Aura Airlines is a concept of conglomerate in the Airline
            Industry in Sri Lanka dedicating its approach mainly to
            Private & Business Airline, as an exclusive platform which
            customers can benefit from in the fields of Leisure, Corporate
            and VIP transport solutions, and service for both domestic and
            international market.
          </p>
          <Box sx={{padding:1}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7921.855178098111!2d79.9475817!3d6.8992638!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae250cc8213779f%3A0x4624ec10005649e3!2s949%20Udawatta%20Road%20Malabe!3m2!1d6.899104899999999!2d79.947553!5e0!3m2!1sen!2slk!4v1663602628626!5m2!1sen!2slk"
              width="600"
              height="150"
            ></iframe>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography
            className="font-link"
            sx={{
              fontWeight: "800",
              fontSize: "20px",
              paddingLeft:7
            }}
          >Quick Links
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/">HOME</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/Book">Book</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/About">About Us</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/Contact">Contact Us</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/Membership">Membership</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/Destination">Destination</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/Offers">Offers</Link>
          </Typography>
          <Typography sx={{ paddingLeft:7 }}>
            <Link to="/Inquire">Inquire</Link>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            className="font-link"
            sx={{
              fontWeight: "800",
              fontSize: "20px"
            }}
          >OUR SUBSIDIARIES
          </Typography>
          <Typography sx={{padding:0}}>
            <p>Aura Lanka Gems </p>
            <p>Aura Lanka Museum </p>
            <p>Aura Lanka Security</p>
            <p>Aura Airlines</p>
            <p>Aura Lanka Construction</p>
            <p>Aura Lanka Enterainment</p>
            <p>Aura Sports</p>
            <p>Aura Lanka LLC USA</p>
            <p>Aura Jeewa</p>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            className="font-link"
            sx={{
              fontWeight: "800",
              fontSize: "20px"
            }}
          >CONTACT INFO
          </Typography>
          <Typography sx={{padding:0}}>
            <p style={{marginBottom:10}}><i class="fa-solid fa-phone"></i> +94 77 907 1437</p>
            <p style={{marginBottom:10}}><i class="fa-solid fa-user"></i> Ruwan Nayanajith (Chairman) <br/> Head of Administrator Sales and Finance</p>
            <p style={{marginBottom:10}}><i class="fas fa-envelope"></i> info@auraairline.com</p>
            <p style={{marginBottom:10}}><i class="fa-solid fa-map"></i> 949/13, Udawatte Road, Thalanagama North, Malabe.</p>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ background: "#212121", color: "white", padding:5 }}>
        <Grid item xs={12}>
          <Typography
            className="font-link"
            sx={{
              textAlign: "center",
            }}
          >
          2023 Aura Airline (Pvt) Ltd | All Rights Reserved | This Website is Owned and Managed by Aura Airline (Pvt) Ltd.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
