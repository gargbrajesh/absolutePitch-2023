import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MusicWheel from "./MusicWheel";
import VideoPlayer from "./VideoPlayer";
import { makeStyles } from "@material-ui/core";
import { forwardRef, useRef, useImperativeHandle } from "react";
const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  containerBox: {
    // marginTop: '1px',
    padding: "10px",
    height: "auto",
    background: "#808d8dcf !important",
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "90vh",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      height: "125vh",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      height: "125vh",
    },
    "@media (max-width:375px)": {
      height: "125vh",
    },
  },
  leftSection: {
    // background: 'rgb(63, 70, 82)',
    justifyContent: "center !important",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  rightSection: {
    // background: 'rgb(63, 70, 82)',
    justifyContent: "center",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "0px 10px",
    "@media (min-width: 770px) and (max-width:1024px)": {
      padding: "0px",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      padding: "0px",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      padding: "0px",
    },
    "@media (max-width:375px)": {
      padding: "0px",
    },
  },
});
function LandingPage() {
  const childCompRef = useRef();
  
  const [data, setData] = useState();
  const [index, setIndex] = useState();
  const [songTitle, setSongTitle] = useState("Title");
  const [songName, setSongName] = useState(
    "Racer X Real time Simulation Tech Demo"
  );
  const [composer, setComposer] = useState("composer");
  const [songNote, setSongNote] = useState("Note");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [allImageCount, setAllImageCount] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [allsongTime, setAllsongTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationLast, setDurationLast] = useState(0);
  const [imageCountLast, setImageCountLast] = useState(0);
  const [allPlaySongsDuration, setAllPlaySongsDuration] = useState(0);
  const [playSongposition, setPlaySongposition] = useState(0);
  const [totalSongs, setTotalSongs] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  function handleSong(songsData, ind) {
    setData(songsData);
    setIndex(ind);
    
    //end here
    setSongTitle(songsData[ind].song_title);
    setComposer(songsData[ind].composer);
    setSongNote(songsData[ind].note_or_cord);
    setSongName(songsData[ind].song_name);
    setImageCount(songsData[ind].no_of_images);
    setDuration(songsData[ind].duration);
    setPlaySongposition(++ind);
   
    // secondsToHms(allsongTime)
    // totleTimeAndImage(songsData,ind)
    const getNextSong = document.getElementById("childid").children[ind];
     getNextSong.scrollIntoView();
    
  }

  function totleTimeAndImage(data,index){
    setImageCountLast(data[index].no_of_images);
    setAllImageCount(parseInt(imageCountLast) + parseInt(data[index].no_of_images));
    setDurationLast(data[index].duration);
    setTotalSeconds(parseInt(durationLast) + parseInt(data[index].duration));
    console.log(parseInt(duration) , parseInt(data[index].duration))
   
    // secondsToHms(parseInt(durationLast) + parseInt(data[index].duration))
    
  }

  // function secondsToHms(Seconds) {
  //   console.log(Seconds,'Seconds.............');
  //   let d = Number(Seconds);
  //   console.log(Seconds, "...Secondss");
  //   var m = Math.floor((d % 3600) / 60);
  //   var s = Math.floor((d % 3600) % 60);

  //   var mDisplay = m > 0 ? m : "00";
  //   var sDisplay = s > 0 ? s : "00";
  //   let time = m + ":" + s;

  //   setAllPlaySongsDuration(time);
  //   countdown(mDisplay, sDisplay);
  // }

  // function countdown(minutes, seconds) {
  //   function tick() {
  //     setRemainingTime(
  //       minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)
  //     );
  //     seconds--;
  //     if (seconds >= 0) {
  //       let timeoutHandle = setTimeout(tick, 1000);
  //     } else {
  //       if (minutes >= 1) {
  //         setTimeout(function() {
  //           countdown(minutes - 1, 59);
  //         }, 1000);
  //       }
  //     }
  //   }
  //   tick();
  // }

  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.containerBox}>
      <Grid item xs={12} md={6}>
        <MusicWheel
          handleSong={handleSong}
          musicData={data}
          musicIndex={index}
          id="childid"
          songTitle={songTitle}
          songName={songName}
          composer={composer}
          songNote={songNote}
          allImageCount={allImageCount}
          duration={duration}
          totalSeconds={totalSeconds}
          allPlaySongsDuration={allPlaySongsDuration}
          imageCount={imageCount}
          playSongposition={playSongposition}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <VideoPlayer
          handleSong={handleSong}
          musicData={data}
          musicIndex={index}
          totleTimeAndImage={totleTimeAndImage}
        />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
