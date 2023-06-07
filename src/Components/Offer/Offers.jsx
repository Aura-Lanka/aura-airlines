import React, { useEffect, useRef } from "react";
import "./Offers.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
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
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Offers() {
  const navigate = useNavigate();

  const handleRequestDetails = () => {
    navigate("/Book");
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
          Enjoy our Exclusive Offers
        </Typography>
        <Typography variant="h4" style={subheadingStyles}>
          Aura Airlines
        </Typography>
        <Button variant="contained" style={buttonStyles}>
          Discover More
        </Button>
      </div>

      <Box sx={{ padding: "50px" }}>
        <div className="card_two">
          <Typography variant="body1" component="blockquote" align="center" sx={{ marginBottom: "20px" }}>
            Offers Are....!!
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
                  Solid for reduced rates
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
                  Usually offer when an Aircraft
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  Is landing to pickup passengers <br />
                  Has to flown empty back to its
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
                  Solely for the benefit of ours
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Box>

      <Footer />
    </>
  );
}
export default Offers;
