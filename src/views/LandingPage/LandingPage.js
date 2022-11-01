import React, { useState } from "react";
import Header from "../../layouts/Header";
import { Grid } from '@mui/material'
import MusicWheel from "./components/MusicWheel/MusicWheel";
import WatchVideo from "../WatchVideo/WatchVideo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  containerBox: {
    marginTop: '1px',
    height: '95vh',
    background: '#808d8dcf',
    '@media (min-width: 770px) and (max-width:1024px)': {
      height: '90vh',
    },
    '@media (min-width: 600px) and (max-width:768px)': {
      height: '125vh',
    },
    '@media (min-width: 380px) and (max-width:425px)': {

      height: '125vh',
    },
    '@media (max-width:375px)': {

      height: '125vh',
    }
  },
  leftSection: {
    // background: 'rgb(63, 70, 82)',
    justifyContent: 'center !important',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  rightSection: {
    // background: 'rgb(63, 70, 82)',
    justifyContent: 'center',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0px 10px',
    '@media (min-width: 770px) and (max-width:1024px)': {
      padding: '0px',
    },
    '@media (min-width: 600px) and (max-width:768px)': {
      padding: '0px',
    },
    '@media (min-width: 380px) and (max-width:425px)': {

      padding: '0px',
    },
    '@media (max-width:375px)': {
      padding: '0px',
    }

  },
});
const LandingPage = () => {

  const [data, setData] = useState()


  function handleSong(data){
    console.log("songd",data)
    setData(data)
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.containerBox}>
        <Grid item md={6} xs={12} className={classes.leftSection}>
          <MusicWheel handleSong={handleSong}/>
        </Grid>
        <Grid item md={6} xs={12} className={classes.rightSection}>
          <VideoPlayer musicData={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
