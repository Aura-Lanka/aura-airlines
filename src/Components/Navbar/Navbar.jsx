import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Menu, MenuItem } from "@mui/material";
import { Home, Book, Info, Menu as MenuIcon, YouTube, Twitter, Facebook } from "@mui/icons-material";
import { styled } from "@mui/system";

const Nav = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#212121",
}));

const Brand = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2),
  "& img": {
    height: "60px",
    width: "auto",
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  "&:hover": {
    color: "#BDBDBD",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: theme.spacing(1),
}));

const Navbar = () => {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Nav position="static">
      <Toolbar>
        <Brand>
          <Link to="/">
            <img src="./airlogo.webp" alt="logo-name" />
          </Link>
        </Brand>
        {isSmallScreen ? (
            <>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose} component={Link} to="/">
                    Home
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Book">
                    Book
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/About">
                    About
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Contact">
                    Contact
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Inquire">
                    Inquire
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Membership">
                    Membership
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Destination">
                    Destination
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Offers">
                    Offers
                </MenuItem>
                </Menu>
                <SocialIcon href="" target="_blank" rel="noopener noreferrer">
                    <YouTube />
                </SocialIcon>
                <SocialIcon href="" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </SocialIcon>
                <SocialIcon href="" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </SocialIcon>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick} sx={{ marginLeft: "auto" }}>
                    <MenuIcon />
                </IconButton>
            </>
          ) : (
            <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontWeight: 600}}>
                    Auralanka Airline
                </Typography>
                <NavLink color="inherit" component={Link} to="/">
                    Home
                </NavLink>
                <NavLink color="inherit" component={Link} to="/Book">
                    Book
                </NavLink>
                <NavLink color="inherit" component={Link} to="/About">
                    About
                </NavLink>
                <NavLink color="inherit" component={Link} to="/Contact">
                    Contact
                </NavLink>
                <NavLink color="inherit" component={Link} to="/Inquire">
                    Inquire
                </NavLink>
                <NavLink color="inherit" component={Link} to="/Membership">
                    Membership
                </NavLink>
                <NavLink color="inherit" component={Link} to="/Destination">
                    Destination
                </NavLink>
                <NavLink color="inherit" component={Link} to="/Offers">
                    Offers
                </NavLink>
                <SocialIcon href="" target="_blank" rel="noopener noreferrer">
                    <YouTube />
                </SocialIcon>
                <SocialIcon href="" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </SocialIcon>
                <SocialIcon href="" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </SocialIcon>
            </>
          )}
      </Toolbar>
    </Nav>
  );
};

export default Navbar;
