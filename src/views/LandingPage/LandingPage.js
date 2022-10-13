import React, { useState } from "react";
import Header from "../../layouts/Header";
import { Grid } from '@mui/material'
import { Banner } from "./components";
import MusicWheel from "../MusicWheel/MusicWheel";
import WatchVideo from "../WatchVideo/WatchVideo";
import VideoPlayer from "../VideoPlayer/videoPlayer";
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

  function dataHouse() {

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=ckmj4nc6enk1u3e0rle62m3l64");

    var urlencoded = new URLSearchParams();

    urlencoded.append("songs", "1");
    urlencoded.append("song_title", "");
    urlencoded.append("groups", "");
    urlencoded.append("no_of_images", "");
    urlencoded.append("duration", "");
    urlencoded.append("intensity", "");
    urlencoded.append("tempo", "");
    urlencoded.append("image_type", "");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://43.205.228.115/development/absolute/appdata/webservice.php", requestOptions)
      .then(response => response.json())
      .then((responseJson) => {

        if (responseJson != '') {
          console.log(responseJson);
          var dataSong = responseJson.data[1].song_name;
          setData(dataSong);
        } else {
          alert('error in response');
        }
      });

  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.containerBox}>
        <Grid item md={6} xs={12} className={classes.leftSection}>
          <MusicWheel parentFunction={dataHouse} />
        </Grid>
        <Grid item md={6} xs={12} className={classes.rightSection}>
          <VideoPlayer musicData={data} />
        </Grid>
      </Grid>
      {/* <Banner /> */}
    </div>
  );
};

export default LandingPage;
