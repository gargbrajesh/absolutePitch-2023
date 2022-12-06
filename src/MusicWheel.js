import { Grid, Paper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import useStyles from "../utils/styles.module";
import styles from "./style.module.css";
// import dataBase from "../utils/data";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./style.module.css";

function MusicWheel(props) {
  const classes = useStyles();

  const [nord, setNord] = useState({ c1: [], c2: [], c3: [] });
  const [songsData, setSongsData] = useState([]);
  const [tempo, SetTempo] = useState("");
  const [intensity, SetIntensity] = useState("");
  const [nordData, setNordData] = useState([]);
  const [tempoIndex, setTempoIndex] = useState(0);
  const [intensityIndex, setIntensityIndex] = useState(0);
  const [packageIndex, setPackageIndex] = useState(0);
  const [imageTypeIndex, setImageTypeIndex] = useState("");
  const [imageTypeActive, setImageTypeActive] = useState(false);
  const [durationDataIndex, setDurationDataIndex] = useState(0);
  const [totalSongs, setTotalSongs] = useState(0);
  const [playSongposition, setPlaySongposition] = useState(0);
  const [nordIndex111, setNordIndex111] = useState(0)
  let [counter, setCounter] = useState(0);
  let [lastInd, setLastInd] = useState(-1);
  const circleOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [changeBg, setChangeBg] = useState("");
  const tempoData = ["", "Calm", "Lively", "Mellow", "Moderate"];
  const intensityData = ["", "HI", "LI", "MI"];
  const imageTypeData = ["", "Keys", "Letter", "Staff"];
  const durationData = [
    "",
    "104",
    "105",
    "106",
    "107",
    "108",
    "109",
    "120",
    "121",
    "125",
    "126",
    "127",
    "128",
    "129",
    "135",
    "139",
    "141",
    "145",
    "147",
    "150",
    "151",
    "155",
    "156",
    "160",
    "167",
    "169",
    "170",
    "173",
    "177",
    "178",
    "178",
    "178",
    "178",
    "179",
    "181",
    "182",
    "183",
    "184",
    "178",
    "184",
    "185",
    "191",
    "192",
    "193",
    "194",
    "195",
    "196",
    "198",
    "199",
    "200",
    "202",
    "203",
    "204",
    "206",
    "207",
    "208",
    "209",
    "210",
    "211",
    "212",
    "213",
    "213",
    "214",
    "215",
    "216",
    "217",
    "218",
    "220",
    "222",
    "223",
    "225",
    "226",
    "231",
    "233",
    "234",
    "235",
    "236",
    "237",
    "238",
    "240",
    "241",
    "242",
    "243",
    "244",
    "245",
    "246",
    "247",
    "248",
    "249",
    "250",
    "251",
    "252",
    "253",
    "254",
    "256",
    "259",
    "261",
    "263",
    "265",
    "278",
    "280",
    "285",
    "288",
    "300",
  ];
  let nordArray = [];
  const arryOne = ["c3", "c2", "c1"];
  const data = {
    c1: ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
    c2: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    c3: ["C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"],
  };
  const nordMap = { "+": "M", "-": "m", "#": "b" };
  const soundData = [
    "https://mylatinhome.com/absolute/note-sound/A.wav",
    "https://mylatinhome.com/absolute/note-sound/Am.wav",
    "https://mylatinhome.com/absolute/note-sound/Ab.wav",
  ];
  // let lastInd = -1;
  function changeHandler(c, ind, event) {
    if (imageTypeIndex == "") {
      alert("Please select any ImageType Key");
    } else {
      const temp = { ...nord };
      const count = [...temp["c1"], ...temp["c2"], ...temp["c3"]]?.length || 0;

      if (["c1", "c2", "c3"].includes(c)) {
        if (temp[c].indexOf(ind) == -1 && count < 3) {

          if (((count>=1) && (ind==nordIndex111)) || (count<1)){
            temp[c].push(ind);
            setNord(temp);
            if (c == "c1" || c == "c2") {
              var nordData2 = data["c3"][ind] + data[c][ind];
            } else {
              var nordData2 = data[c][ind];
            }
            setNordIndex111(ind)
            setNordData([...nordData, nordData2]);
          }
          
        } else if (temp[c].indexOf(ind) > -1) {
          const nordIndex = temp[c].indexOf(ind);
          temp[c].splice(nordIndex, 1);
          setNord(temp);
          console.log("else", nordData);

          // console.log("popo", nordData, data[c][nordIndex], data[c][ind]);
          if (c == "c1" || c == "c2") {
            var nordIndex1 = nordData.indexOf(data["c3"][ind] + data[c][ind]);
          } else {
            var nordIndex1 = nordData.indexOf(data[c][ind]);
          }
          nordData.splice(nordIndex1, 1);
          setNordData(nordData);
        }
      }
    }
  }
  async function btnHandler(type, e, ind) {
    if (
      imageTypeIndex == "" &&
      type != "Letter" &&
      type != "Staff" &&
      type != "Keys"
    ) {
      alert("Please select any ImageType Key");
    } else {
      var targetBtn = e.target;
      if (type == "Tempo") {
        // console.log("sggs", tempoIndex,tempoData, tempoData.length, tempoData[tempoIndex])

        if (tempoIndex == tempoData.length - 1) {
          setTempoIndex(0);
        } else {
          setTempoIndex(tempoIndex + 1);
          targetBtn.style.background = "radial-gradient(green 40%, #000)";
          targetBtn.style.color = "#fff";
          targetBtn.style.border = "1px solid blue";
        }
      }
      if (type == "Intensity") {
        // console.log("sggs", tempoIndex,tempoData, tempoData.length, tempoData[tempoIndex])

        if (intensityIndex == intensityData.length - 1) {
          setIntensityIndex(0);
        } else {
          setIntensityIndex(intensityIndex + 1);
          targetBtn.style.background = "radial-gradient(blue 40%, #000)";
          targetBtn.style.color = "#fff";
        }
      }

      if (type == "P") {
        setPackageIndex(type);
        targetBtn.style.background = "radial-gradient(#df783d 40%, #000)";
        targetBtn.style.border = "1px solid blue";
      }

      if (type == "Keys") {
        setImageTypeIndex(type);
        toggleActiveStyle(ind);
        await fetchSongsData(type);
      }
      if (type == "Letter") {
        setImageTypeIndex(type);
        toggleActiveStyle(ind);
        await fetchSongsData(type);
      }
      if (type == "Staff") {
        toggleActiveStyle(ind);
        setImageTypeIndex(type);
        await fetchSongsData(type);
      }
      if (type == "Duration") {
        if (durationDataIndex == durationData.length - 1) {
          setDurationDataIndex(0);
        } else {
          setDurationDataIndex(durationDataIndex + 1);
          targetBtn.style.background = "radial-gradient(yellow 40%, #000)";
          targetBtn.style.border = "1px solid blue";
        }
      }
    }
    // setTotalSongs(data.length)
    // console.log(songsData.length,'....totalso...');
  }

  function toggleActiveStyle(ind) {
    if (ind == 1) {
      setImageTypeActive(ind);
      console.log(imageTypeActive);
    } else if (ind == 2) {
      setImageTypeActive(ind);
      console.log(imageTypeActive);
    } else if (ind == 3) {
      setImageTypeActive(ind);
      console.log(imageTypeActive);
    } else {
      setImageTypeActive(false);
    }
  }

  function handleClickSong(songsData, ind) {
    console.log("songsData",songsData,ind)
    props.handleSong(songsData, ind);
    const current_song = songsData[ind]
    console.log("file name",current_song);

    setPlaySongposition(++ind);

    // code for highlight nord on selected song click , start here

    let nordLetter = current_song["song_name"].split("_")[0];
    if (
      nordLetter == "Ab" ||
      nordLetter == "Bb" ||
      nordLetter == "Cb" ||
      nordLetter == "Db" ||
      nordLetter == "Eb" ||
      nordLetter == "Fb" ||
      nordLetter == "Gb"
    ) {
      nordLetter = nordLetter.charAt(0);
    } else if (
      nordLetter == "Am" ||
      nordLetter == "Bm" ||
      nordLetter == "Cm" ||
      nordLetter == "Dm" ||
      nordLetter == "Em" ||
      nordLetter == "Fm" ||
      nordLetter == "Gm"
    ) {
      nordLetter = nordLetter.charAt(0);
    } else if (
      nordLetter == "AM" ||
      nordLetter == "BM" ||
      nordLetter == "CM" ||
      nordLetter == "DM" ||
      nordLetter == "EM" ||
      nordLetter == "FM" ||
      nordLetter == "GM"
    ) {
      nordLetter = nordLetter.charAt(0);
    } else if (
      nordLetter == "Abm" ||
      nordLetter == "Bbm" ||
      nordLetter == "Cbm" ||
      nordLetter == "Dbm" ||
      nordLetter == "Ebm" ||
      nordLetter == "Fbm" ||
      nordLetter == "Gbm"
    ) {
      nordLetter = nordLetter.charAt(0);
    } else if (
      nordLetter == "AbM" ||
      nordLetter == "BbM" ||
      nordLetter == "CbM" ||
      nordLetter == "DbM" ||
      nordLetter == "EbM" ||
      nordLetter == "FbM" ||
      nordLetter == "GbM"
    ) {
      nordLetter = nordLetter.charAt(0);
    }

    console.log(nordLetter, "....nordLetter");
    let index = data["c3"].indexOf(nordLetter);

    if (lastInd > -1) {
      changeHandler("c3", lastInd);
    }

    changeHandler("c3", index);
    console.log(lastInd, ".....lastInd");
    console.log(index, ".....index");
    setLastInd(index);

    console.log(lastInd, ".....lastInd");

    //end here
  }

  function getNord() {
    var str2 = nordData;
    let final_result = [];
    for (let i = 0; i < nordData.length; i++) {
      let str = nordData[i];

      for (let val of nordData[i]) {
        if (nordMap[val]) {
          str = nordData[i].replace(val, nordMap[val]);
          // console.log("final",final_str)
          str2 += nordMap[val] + ",";
        }
      }
      final_result.push(str);
    }

    console.log("final_result", final_result);
    return final_result;
  }

  var i = 0;

  // for get nord  on button click

  // var counter = 0;

  function playAudio(noteType, e, ind) {
    if (counter == 0) {
      nordArray.push(data["c3"][ind]);
      if (data["c3"][ind]) {
        var nrd = data["c3"][ind];
        changeHandler("c3", ind);
        new Audio(soundData[counter]).play();
      }
    } else if (counter == 1) {
      if (data["c2"][ind]) {
        var nrd2 = data["c2"][ind];
        changeHandler("c2", ind);
        changeHandler("c3", ind);
        new Audio(soundData[counter]).play();
      }
    } else if (counter == 2) {
      if (data["c1"][ind]) {
        var nrd3 = data["c1"][ind];
        changeHandler("c1", ind);
        changeHandler("c2", ind);
        new Audio(soundData[counter]).play();
      }
    } else {
      counter = -1;
      changeHandler("c1", ind);
    }

    // counter = counter + 1;
    setCounter(++counter);

    // if (noteType == "A#") {
    //   if (i == 0) {
    //     new Audio(`https://mylatinhome.com/absolute/note-sound/A.wav`).play();
    //     console.log(i);

    //   }
    //   if (i == 1) {
    //     new Audio(`https://mylatinhome.com/absolute/note-sound/Ab.wav`).play();
    //     console.log(i);
    //   }
    //   if (i == 2) {
    //     new Audio(`https://mylatinhome.com/absolute/note-sound/Ab.wav`).play();
    //     console.log(i);
    //   }
    //   if (i == 3) {
    //     i = -1;
    //   }
    //   i = i + 1;
    // }
  }

  function refreshPage() {
    window.location.reload(false);
  }
  function fetchSongsData(imageType = imageTypeIndex) {
    // if(play !=false){
    //   setPlay(false);
    // }
    // else{
    //   setPlay(true);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=ckmj4nc6enk1u3e0rle62m3l64");

    const nord_or_cord = getNord();
    var urlencoded = new URLSearchParams();
    urlencoded.append("songs", "1");
    urlencoded.append("note_or_cord", nord_or_cord);
    urlencoded.append("song_title", "");
    urlencoded.append("groups", "");
    urlencoded.append("no_of_images", "");
    urlencoded.append("duration", durationData[durationDataIndex]);
    urlencoded.append("intensity", intensityData[intensityIndex]);
    urlencoded.append("tempo", tempoData[tempoIndex]);
    urlencoded.append("image_type", imageType);
    urlencoded.append("package", packageIndex);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://mylatinhome.com/absolute/appdata/webservice.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson != "") {
          console.log("res", responseJson);

          
          setSongsData(responseJson.data);
          handleClickSong(responseJson.data,0)
          setTotalSongs(responseJson.data.length);
        } else {
          alert("error in response");
        }
      });
  }
  return (
    <div className={classes.circleCard}>
      <Grid container spacing={2} className={classes.topButtonContainer}>
        <Grid item xs={3} md={3}>
          <button
            className={`${
              imageTypeActive == "1" ? classes.activeKey : classes.topButtons
            }`}
            onClick={(e) => {
              btnHandler("Letter", e, 1);
            }}
          >
            Letters
          </button>
        </Grid>
        <Grid item xs={3} md={3}>
          <button
            className={`${
              imageTypeActive == "2" ? classes.activeKey : classes.topButtons
            }`}
            onClick={(e) => {
              btnHandler("Staff", e, 2);
            }}
          >
            Staff
          </button>
        </Grid>
        <Grid item xs={3} md={3}>
          <button
            className={`${
              imageTypeActive == "3" ? classes.activeKey : classes.topButtons
            }`}
            onClick={(e) => {
              btnHandler("Keys", e, 3);
            }}
          >
            Keys
          </button>
        </Grid>
        <Grid item xs={3} md={3}>
          <button
            className={classes.resetButtons}
            onClick={(e) => {
              refreshPage();
            }}
          >
            Reset
          </button>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={2} md={2} className={classes.tempoBtnContainer}>
          <button
            className={classes.tempoBtnTop}
            onClick={(e) => {
              btnHandler("P", e);
            }}
          >
            P
          </button>
          {/*<button
           style={{marginTop:"180px"}}
           className={classes.tempoBtnTop}
        
         >
         {playSongposition}/{totalSongs}
         </button>*/}
          <button
            className={classes.tempoBtnBottom}
            onClick={(e) => {
              btnHandler("Duration", e);
            }}
          >
            {" "}
            {durationData[durationDataIndex]
              ? durationData[durationDataIndex] <= 120
                ? "short"
                : durationData[durationDataIndex] <= 240 &&
                  durationData[durationDataIndex] >= 121
                ? "Medium"
                : "Long"
              : "Duration"}
          </button>
        </Grid>
        <Grid item xs={8} md={8} className={classes.wheelContianer}>
          <div className={classes.mainCircle}>
            <ul className="circle">
              {data["c1"].map((val, ind) => (
                <li key={classes.circle + "-" + ind} className={styles.li}>
                  <div
                    className={`${styles.text} ${
                      nord["c1"].includes(ind) ? styles.bluebg : ""
                    }`}
                    onClick={(e) => changeHandler("c1", ind, e)}
                  >
                    {val}
                  </div>
                </li>
              ))}

              <ul className="circle2">
                {data["c2"].map((val, ind) => (
                  <li key={classes.circle2 + "-" + ind} className={styles.list}>
                    <div
                      className={`${styles.textTwo} ${
                        nord["c2"].includes(ind) ? styles.bluebg : ""
                      }`}
                      onClick={(e) => changeHandler("c2", ind, e)}
                    >
                      {val} {nord["c2"].includes(val)}
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="circle3">
                {data["c3"].map((val, ind) => (
                  <li key={classes.circle3 + "-" + ind} className={styles.list}>
                    <div
                      className={`${styles.textThird} ${
                        nord["c3"].includes(ind) ? styles.bluebg : ""
                      }`}
                      onClick={(e) => changeHandler("c3", ind, e)}
                    >
                      {val}
                    </div>
                  </li>
                ))}

                <div className={classes.circle4}>
                  <ul>
                    {circleOne.map((val, ind) => (
                      <li
                        key={classes.circle3 + "-" + ind}
                        className={styles.list}
                        style={{ background: "black", borderRadius: "50%" }}
                      >
                        <div
                          className={`${styles.textFour}`}
                          onClick={(e) => playAudio(data["c3"][ind], e, ind)}
                        ></div>
                      </li>
                    ))}
                  </ul>
                  <p className={classes.circle6}>
                    <PlayCircleOutlineIcon
                      onClick={(e) => {
                        fetchSongsData();
                      }}
                      className={classes.playerBtn}
                    />
                  </p>
                </div>
              </ul>
            </ul>
          </div>
        </Grid>
        <Grid item xs={2} md={2} className={classes.tempoBtnContainer}>
          <button
            className={classes.tempoBtnTop}
            onClick={(e) => {
              btnHandler("Tempo", e);
            }}
          >
            {" "}
            {tempoData[tempoIndex] ? tempoData[tempoIndex] : "TEMPO"}
          </button>
          <button
            className={classes.tempoBtnBottom}
            onClick={(e) => {
              btnHandler("Intensity", e);
            }}
          >
            {" "}
            {intensityData[intensityIndex]
              ? intensityData[intensityIndex]
              : "Mix"}
          </button>
        </Grid>
      </Grid>
      <div className={styles.songsWrapper}>
        <Paper elevation={3} className={classes.paperStyle}>
          <div
            style={{
              width: "80px",
              height: "50px",
              borderRadius: "5%",
              background: "#333333",
              textAlign: "center",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <p style={{ color: "#fff" }}>
              {playSongposition}/{totalSongs}
            </p>
          </div>
          <div>
            {songsData && songsData.length > 0
              ? songsData.map((val, ind) =>
                  val["song_name"].includes("_P.") ? (
                    <p
                      key={"songs" + ind}
                      onClick={() =>
                        alert("You need to purchase the membership")
                      }
                      id={ind}
                      className={styles.listStyleDisable}
                    >
                      {" "}
                      * {val["song_title"]}{" "}
                    </p>
                  ) : (
                    <p
                      key={"songs" + ind}
                      onClick={() => handleClickSong(songsData, ind)}
                      className={styles.liststyle}
                    >
                      * {val["song_title"]}{" "}
                    </p>
                  )
                )
              : "No Songs Found"}
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default MusicWheel;
