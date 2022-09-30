import React from "react";
import Header from "../../layouts/Header";
import { Grid } from '@mui/material'
import { Banner } from "./components";
import MusicWheel from "../MusicWheel/MusicWheel";
import WatchVideo from "../WatchVideo/WatchVideo";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root:{
    position:'relative',
  },
  containerBox:{
    marginTop:'1px',
    height:'95vh',
    background:'#dee1e6',
  },
  leftSection: {
    background: 'rgb(63, 70, 82)',
    justifyContent:'center !important',
    color:'white',
    padding:'34px 0px 0px 10px !important', 
  },
  rightSection: {
    background: 'rgb(63, 70, 82)',
    justifyContent:'center',
    color:'white',
    padding:'30px 0px 0px 0px !important',
    
  },
});
const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.containerBox}>
        <Grid item md={6} xs={12} className={classes.leftSection}>
          <MusicWheel />
        </Grid>
        <Grid item md={6} xs={12} className={classes.rightSection}>
          <WatchVideo />
        </Grid>
      </Grid>
      {/* <Banner /> */}
    </div>
  );
};

export default LandingPage;
