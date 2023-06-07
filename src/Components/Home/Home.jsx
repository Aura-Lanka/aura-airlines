import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Typography, Button, Grid, Paper, Box } from "@mui/material";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  const images = [
    {
      src: "./home_11.jpg",
      caption: "Welcome To Auralanka Airline",
    },
    {
      src: "./home_12.jpg",
      caption: "Welcome To Auralanka Airline",
    },
    {
      src: "./home_11.jpg",
      caption: "Welcome To Auralanka Airline",
    },
    {
      src: "./home_12.jpg",
      caption: "Welcome To Auralanka Airline",
    },
  ];

  const renderImages = () => {
    return images.map((image, index) => (
      <Carousel.Item key={index}>
        <div className="carousel-image-container">
          <img className="carousel-image" src={image.src} alt={image.caption} />
          <div className="carousel-image-overlay"></div>
          <div className="carousel-caption">
            <p>{image.caption}</p>
          </div>
        </div>
      </Carousel.Item>
    ));
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const imageStyle = {
    height: "100%",
    transition: "filter 0.3s",
  };

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "none",
    zIndex: 1,
  };

  const imageList = [
    { src: "/20522603.webp", alt: "Image Title" },
    { src: "/20522590.webp", alt: "Image Title" },
    { src: "/20522582.webp", alt: "Image Title" },
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel>{renderImages()}</Carousel>

      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          background: "#212121",
          padding: "50px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="body1"
            align="center"
            sx={{ boxShadow: 6, p: 2, marginBottom: "20px" }}
          >
            <Typography
              variant="h6"
              className="font-link"
              sx={{ color: "white !important" }}
            >
              Aura Airlines is a concept conglomerate in the Airline Industry in
              Sri Lanka which was founded in 2018 and dedicates its approach
              mainly to uplift Airline services solely for the benefit of the
              entire community. Private & Business Airline, as an exclusive
              platform which customers can benefit from in the fields of
              Leisure, Corporate and VIP transport solutions, and service for
              both domestic and international market.
            </Typography>
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained">
                <span className="font-link">Inquire Now</span>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">
                <span className="font-link">Book Now</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Paper elevation={4} sx={{ margin: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <img
                  src="home_3.webp"
                  alt="Image Title"
                  style={{ height: "320px" }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  className="font-link"
                  sx={{
                    fontWeight: "700",
                    padding: "10px 0 10px 0",
                    margin: 0,
                  }}
                >
                  Our Services
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Corporate VIP/VVIP client
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Passenger charter
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>Leisure</Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Aerial work
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Branding and advertising
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Medical evacuation
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Special events-product launches
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Flower drops
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Banner towing/ Flag displays
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Wedding photography
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Celebrations
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={4} sx={{ margin: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <img
                  src="home_3.webp"
                  alt="Image Title"
                  style={{ height: "320px" }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  className="font-link"
                  sx={{
                    fontWeight: "700",
                    padding: "10px 0 10px 0",
                    margin: 0,
                  }}
                >
                  Why Aura Airlines Charter
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Island wide coverage
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Anytime, Anywhere
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Available 24/7/365
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Best value for money
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  To fly happily
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Full of comfort, Luxury and convenience
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Ensure safety, Security and privacy
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Guaranteed safety and our dedication
                </Typography>
                <Typography sx={{ padding: 0, margin: 0 }}>
                  Preeminent and personalized service
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginBottom: "100px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Paper elevation={4} sx={{ margin: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <img
                  src="offer.webp"
                  alt="Image Title"
                  style={{ height: "320px" }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  className="font-link"
                  sx={{
                    fontWeight: "700",
                    padding: "10px 0 10px 0",
                    margin: 0,
                  }}
                >
                  Safety
                </Typography>
                <Typography sx={{ padding: "0 20px 10px 0", margin: 0 }}>
                  Aura Airlines considers safety as its prime consideration and
                  therefore has implemented safety management systems (SMS)
                  throughout our operation both horizontally and
                  vertically.Highly experienced crew will provide extra support
                  with safety ensuring health and personal welfare of our
                  valuable clients.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={4} sx={{ margin: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <img
                  src="offer.webp"
                  alt="Image Title"
                  style={{ height: "320px" }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  className="font-link"
                  sx={{
                    fontWeight: "700",
                    padding: "10px 0 10px 0",
                    margin: 0,
                  }}
                >
                  Dedication
                </Typography>
                <Typography sx={{ padding: "0 20px 10px 0", margin: 0 }}>
                  Our product reflects and improves the quality of life with the
                  mission of the airline to make air travel an integral part of
                  the tourism industry and Aura Airlines to be the most
                  flexible, reliable, and safest mode of transport for domestic
                  air travel among tourists, corporate clients, and locals.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginBottom: "100px" }}>
        {imageList.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Paper elevation={4} sx={{ margin: "10px", position: "relative" }}>
              <Box
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    ...imageStyle,
                    filter: hoveredIndex === index ? "brightness(50%)" : "none",
                  }}
                />
                <div
                  style={{
                    ...buttonStyle,
                    display: hoveredIndex === index ? "block" : "none",
                  }}
                >
                  <Button variant="contained">
                    <span className="font-link">View More</span>
                  </Button>
                </div>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Footer />
    </div>
  );
}

export default Home;
