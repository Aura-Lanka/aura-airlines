import React, { useEffect, useRef } from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import {
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
} from "@mui/material";

function About() {
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

  const profileImageStyles = {
    width: "95%",
    padding: "20px",
  };

  const jobPostStyles = {
    fontWeight: "bold",
  };

  const voiceStyles = {
    textAlign: "center",
  };

  return (
    <>
      <div style={rootStyles}>
        <Typography variant="h2" style={headingStyles}>
          Let’s Get to Know About Aura Airlines
        </Typography>
        <Typography variant="h4" style={subheadingStyles}>
          A Journey of Luxury and Comfort
        </Typography>
        <Button variant="contained" style={buttonStyles}>
          Discover More
        </Button>
      </div>

      <Box className="wrapper">
        <figure className="card_mi">
          <img
            className="img_mi"
            src="https://images.unsplash.com/photo-1579118559062-39e94a22dbb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            width={100}
            height={640}
            alt=""
          />
          <figcaption style={{ paddingRight: 50 }}>
            <span className="font-link">
              <Typography variant="body1" component="blockquote">
                Our Mission
              </Typography>
              <Typography variant="body2" component="cite">
                We at Aura Airlines thrive to maintain flawless safety records
                by striving for the highest professional and regulatory
                requirements in the Airline Industry. We are dedicated to
                earning customer satisfaction by improving local opportunities,
                social responsibility, economic and environmental well-being of
                its stakeholders by diversifying today's airline business
                requirements.
              </Typography>
              <br />
              <br />
              <br />
              <br />
              <Typography variant="body1" component="blockquote">
                Our Vision
              </Typography>
              <Typography variant="body2" component="cite">
                To be the leader in business and leisure airlines by conquering
                global skies.
                <br />
                <br />
                To be the preferred partner in delivering products and services
                that sustain and enhance our national objectives. We strive for
                the upliftment of the environment in which we live and the
                communities that we operate in.
              </Typography>
            </span>
          </figcaption>
        </figure>
      </Box>

      <Box sx={{ padding: "50px" }}>
        <div className="card_two">
          <Typography variant="body1" component="blockquote" align="center">
            Who We Are & Core Values
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ fontSize: "1.1rem" }}
          >
            We are a team with excellent service and promised core values.
          </Typography>
          <Box>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="span">
                      <Box display="flex" alignItems="center">
                        <b>
                          <strong style={{ color: "#2962FF" }}>
                            Customer first and always right .....
                          </strong>
                          Customer is always our priority.
                        </b>
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="span">
                      <Box display="flex" alignItems="center">
                        <b>
                          <strong style={{ color: "#2962FF" }}>
                            Consistency of the product .....
                          </strong>
                          Succeed to ensure highest quality product delivery and
                          maintain the desired standard. Commitment to treat
                          Customer needs as priority.
                        </b>
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="span">
                      <Box display="flex" alignItems="center">
                        <b>
                          <strong style={{ color: "#2962FF" }}>
                            Teamwork .....
                          </strong>
                          Work as a team, identify each team member and get
                          involved towards success by competence, commitment,
                          and determination.
                        </b>
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="span">
                      <Box display="flex" alignItems="center">
                        <b>
                          <strong style={{ color: "#2962FF" }}>
                            Achievement .....
                          </strong>
                          We thrive for better ways to pursue our customer and
                          employee satisfaction and achieving organisational and
                          personal goals for a secure tomorrow.
                        </b>
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="span">
                      <Box display="flex" alignItems="center">
                        <b>
                          <strong style={{ color: "#2962FF" }}>
                            Excellence .....
                          </strong>
                          Commitment to do best in all what we do and strive for
                          professional excellence by exceeding expectations to
                          buy out the organisational excellence.
                        </b>
                      </Box>
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </div>
      </Box>

      <Box sx={{ padding: "50px" }}>
        <div className="card_two">
          <Typography variant="body1" component="blockquote" align="center">
            Our Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                margin: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                src="./C01.webp"
                alt="Corporate VIP/VVIP Client"
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
                  Corporate VIP/VVIP Client
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Description of the service goes here.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                margin: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                src="/20522603.webp"
                alt="Corporate VIP/VVIP Client"
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
                  Corporate VIP/VVIP Client
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Description of the service goes here.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                margin: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                src="./C01.webp"
                alt="Corporate VIP/VVIP Client"
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
                  Corporate VIP/VVIP Client
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Description of the service goes here.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                margin: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                src="/20522603.webp"
                alt="Corporate VIP/VVIP Client"
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
                  Corporate VIP/VVIP Client
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Description of the service goes here.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                margin: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                src="./C01.webp"
                alt="Corporate VIP/VVIP Client"
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
                  Corporate VIP/VVIP Client
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Description of the service goes here.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                margin: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                src="/20522603.webp"
                alt="Corporate VIP/VVIP Client"
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
                  Corporate VIP/VVIP Client
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Description of the service goes here.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Box>

      <Box sx={{ padding: "50px" }}>
        <div className="card_two">
          <Box>
            <Grid container sx={{ padding: "20px" }}>
              <Grid item xs={12} md={4}>
                <img
                  src="./chairman.webp"
                  alt="Profile Image"
                  style={profileImageStyles}
                />
              </Grid>
              <Grid item xs={12} md={8} sx={{ marginTop: "45px" }}>
                <Typography variant="h4" component="h4" gutterBottom>
                  <strong>Dr. Viranjith Thambugala</strong>
                </Typography>
                <Typography variant="div" style={jobPostStyles}>
                  CHAIRMAN
                </Typography>
                <br />
                <br />
                <Typography variant="p" style={voiceStyles} className="voice" sx={{ fontSize: "16px" }}>
                  Enjoy the next level of private flying with our private
                  helicopter charter service - Aura Airlines, feel the
                  extraordinary experience. Complete with a fleet of AIRBUS
                  Helicopters, AIRBUS approved service facility and a hangar in
                  Ratmalana and highly experienced staff, your safety, comfort,
                  privacy and convenience are our top priorities. Fly with us to
                  experience the difference and enjoy while being completely at
                  ease about your safety. Make every flight personal & assure
                  safe, efficient & reliable solutions to deliver superior
                  customers for all stakeholders. Our aim is to provide safe,
                  efficient, high quality and integrated utility aircraft
                  services to build infrastructure, and protect people and
                  property
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>

      <Footer />
    </>
  );
}
export default About;
