import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { FaLinkedin } from 'react-icons/fa';
import mt from './MT.svg';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link as ScrollLink } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    appBar: {
      backgroundColor: theme.palette.background.paper,
      // borderBottom: "1px solid pink", 
      boxShadow: "none",
      fontFamily: 'Montserrat',
      fontSize: 150,
      height: '60px',
      // left: 20,
      // marginTop: -30,
      position: "fixed",
      // marginTop: -40,
      // backgroundColor: "transparent",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000, /* Adjust the z-index as needed */
    },
    links:{
      fontSize: 14,
      textAlign: 'center',
      left: 900,
      fontFamily: 'Montserrat R',
  
    },
    linkedinButton: {
        marginTop: -3,
        left: 900,
       
      },
      logoButton: {
        marginRight: theme.spacing(2),
        position: 'absolute',
        width: '110px',
        height: '110px',
      },
      listContainer: {
        marginTop: -30,
        // display: 'flex',
        // alignItems: 'center', // Adjust this value as needed
      },
}));

const Header = () => {

    const classes = useStyles();
    const [linkedinUrl] = useState('https://www.linkedin.com/in/micatonge');

    const handleLinkedinClick = () => {
      window.open(linkedinUrl, '_blank');
    };

    return (
        <AppBar position="static" className={classes.appBar} id="header">
        <Toolbar>
          <Button component={Link} to="/"> <img src={mt} alt="Logo" className={classes.logoButton} /></Button>
          <ScrollLink
          to="listContainer"
          smooth={true}
          duration={500}
          className={classes.listContainer}
        >
          <Button className={classes.links} component={Link} to="/about">About Me</Button>
          </ScrollLink>
          <Button className={classes.links} component={Link} to="/projects">Projects</Button>
          <Button className={classes.links} component={Link} to="/resume">Resume</Button>
          <Button className={classes.links} component={Link} to="/contact">Contact Me</Button>
          <Button className={classes.linkedinButton} onClick={handleLinkedinClick}>
            <FaLinkedin size={20} />
          </Button>
          {/* <Typography variant="h6" className={classes.title}>
            Mica Tongemt
          </Typography> */}
        </Toolbar>
      </AppBar>
    );
};

export default Header;