import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { FaLinkedin } from 'react-icons/fa';
import flower from './fwr.svg';
import { AppBar, Toolbar, Typography, Button, Grid, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
    paddingLeft: '50%',
    fontWeight: "bold",
    color: "black",
    font:""
  },
  summarySection: {
    marginTop: 40,
    marginLeft: 40,
    padding: theme.spacing(3),
    fontFamily: 'Gallient',
    fontSize: 70,
    fontWeight: 20,
    
  },
  interactiveArt: {
    marginTop: -70,
  },
  linkedinButton: {
    marginTop: -3,
   
  },
}));

const Homepage = () => {
  const classes = useStyles();

  const [linkedinUrl] = useState('https://www.linkedin.com/in/micatonge');

  const handleLinkedinClick = () => {
    window.open(linkedinUrl, '_blank');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/about">About Me</Button>
          <Button component={Link} to="/projects">Projects</Button>
          <Button component={Link} to="/resume">Resume</Button>
          <Button component={Link} to="/contact">Contact Me</Button>
          <Button className={classes.linkedinButton} onClick={handleLinkedinClick}>
            <FaLinkedin size={20} />
          </Button>
          <Typography variant="h6" className={classes.title}>
            Mica Tonge
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} md={6}>
            <Typography className={classes.summarySection} variant="h4">Hi! My names Mica + you can find me developing/designing</Typography>
     
        </Grid>
        <Grid item xs={12} md={6} className={classes.interactiveArt}>
        <img src={flower} alt="logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
