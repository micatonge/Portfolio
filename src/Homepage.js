import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Listt from './list';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Header from './components/header'
import mth from './mth.svg';
import ok from './ok22.svg';
import { Typography, Button, Grid } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  centerButtons: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    paddingLeft: '50%',
    fontWeight: "bold",
    color: "black",
    fontFamily: 'Montserrat',

  },
  container: {
    position: 'absolute', // Position the SVG absolutely within its container
    right: '600px', // Adjust this value for the desired right margin
    top: '50%', // Center the SVG vertically
    transform: 'translateY(-50%)', // Adjust to vertically center the SVG
    maxWidth: '100%', // Adjust the maximum width as needed
    height: 'auto', // Maintain the aspect ratio
  },
  svgImage: {
    marginTop: -200,
    marginLeft: 1000,
    maxWidth: 2000, // Make sure SVG doesn't exceed container width
    height: 'auto', // Maintain aspect ratio
  },
  summarySection: {
    marginTop: 100,
    marginLeft: 50,
    padding: theme.spacing(3),
    fontFamily: 'Montserrat',
    fontSize: 120,
    fontWeight: 20,
    animation: "type 4s steps(60, end)",
    
  },
  logoButton: {
    marginRight: theme.spacing(2),
    position: 'absolute',
    width: '110px',
    height: '110px',
  },
  top: {
    // marginTop: 275,
    // marginLeft: 305,
    marginLeft: 105,
    marginTop: 275,
    padding: theme.spacing(2),
    fontFamily: 'Montserrat',
    fontSize: 24,
    width: 700,
    fontWeight: 20,
    animation: "type 4s steps(60, end)",
    
  },
  bottom: {
    marginLeft: 100,
  },
  comment: {
    marginTop: -600,
    marginLeft: 700,
    padding: theme.spacing(1),
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 20,
    
  },
  interactiveArt: {
    marginTop: -70,
    width: 100,
    height: '100%',
  },
  svgc: {
    marginTop: -50,
    marginLeft: 450,
    width: '100px',
    height: '100px',

    /* Add more styling as needed */
  },
  hireme: {
    marginLeft: 115, // Adjust this value as needed
  },
  listContainer: {
    marginTop: 50, // Adjust this value as needed
  },
  // content:{
  //   paddingTop: 50,
  // },
}));

const Homepage = () => {
  const classes = useStyles();
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    fontFamily: 'Roboto',
    backgroundColor: green[700],
    '&:hover': {
      backgroundColor: green[800],
    },
  }));

  return (
    
    
    <div className={classes.root}>
    <Header></Header>
       <div id="listContainer" className={classes.listContainer}>

      <Grid container>
        <Grid item xs={12} md={10}>
        <div className={classes.svgc}>
        <img src={mth} alt="Bio" />
        </div>
            <Typography  className={classes.top} variant="h6">Brooklyn-based Software Engineer passionate about the blend of Computer Science and Design. ✻</Typography>
        <Listt></Listt>
            {/* <Typography id="fadeout" className={classes.comment} variant="h1"> you can find me coding . . .</Typography> */}
            <Stack direction="row" spacing={2} className={classes.hireme}>
      <ColorButton variant="contained" endIcon={<SendIcon />}>Hire me</ColorButton>

    </Stack>
    <img src={ok} alt="Your SVG" className={classes.svgImage} />
``
        </Grid>

        {/* <Grid item xs={2} md={3} className={classes.interactiveArt}>
        <img src={flower} alt="logo" />
        </Grid> */}
      </Grid>
    </div>
    </div>
  );
};


export default Homepage;
