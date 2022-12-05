import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import dynamic from 'next/dynamic';
// import 'shaka-player/dist/controls.css';
// const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  videoCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#333 !important",
    borderRadius: "10px",
    padding: "20px",
  
   
    height: "80vh",
    "@media (min-width: 770px) and (max-width:1024px)": {
      margin: "15px 15px 15px 35px !important",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      margin: "15px 15px 15px 28px !important",
      height: "40vh",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      margin: "15px 15px 15px 28px !important",
      height: "40vh",
    },
    "@media (max-width:375px)": {
      margin: "15px 15px 15px 28px !important",
      height: "40vh",
    },
  },
});
function VideoPlayer(prop) {
  const [song, setSong] = useState();

  const music = prop.musicData ? prop.musicData[prop.musicIndex]["song_url"] : "";

  function playNextSong(){
    prop.handleSong(prop.musicData, prop.musicIndex+1)

  }
  console.log("prop.musicData", prop.musicData);

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className={classes.videoCard}>
          {prop.musicData ? (
            <ReactPlayer
              controls
              url={music}
              width="100%"
              height="95%"
              playing={true}
              onEnded={playNextSong}
            />

            // <ShakaPlayer autoPlay src={music}   width="100%"
            // height="95%" />
          ) : (
            <ReactPlayer
              controls
              url = "https://www.youtube.com/watch?v=GBYs4y1BtGg"
              width="100%"
              height="95%"
              playing={true}
              loop={true}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default VideoPlayer;
