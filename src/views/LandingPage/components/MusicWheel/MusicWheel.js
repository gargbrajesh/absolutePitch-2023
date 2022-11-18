import { Grid, Paper, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./circles.module.css";
import { makeStyles } from "@mui/styles";
// import MusicBtn from '../../../../public/assets/images/mainBtn.jpg';
import MusicBtn from "../../../../../public/assets/images/mainBtn.jpg";
import Mix from "../../../../../public/assets/images/mix4x.png";
import Tempo from "../../../../../public/assets/images/tempo4x.png";
import Timer from "../../../../../public/assets/images/timer4x.png";

import Piano from "../../../../../public/assets/images/piano2.jpg";
import PianoKey from "../../../../../public/assets/images/key_notes.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Progress from "../../../../../public/assets/images/progress4x.png";
import Image from "next/image";
import DropDown from "../../../../components/organisms/Dropdown/index";
import { Label } from "@mui/icons-material";
import { style } from "@mui/system";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  mainCircle: {
    // background: '#903884 !important',
    // borderRadius: '50%',
    width: "300px",
    height: "300px",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    marginLeft: "125px",
    marginTop: "-25px",
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: '235px',
      // marginTop: '100px',
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      marginLeft: "30%",
      marginTop: "100px",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      marginLeft: "8%",
      marginTop: "20%",
    },
    "@media (max-width:375px)": {
      marginLeft: "3%",
      marginTop: "20%",
    },
  },
  layertwo: {
    // padding: 10,
    background: "#FFFFFF !important",
    borderRadius: "50%",
    width: 200,
    height: 200,
    marginTop: "5%",
    marginLeft: "5%",
  },
  circle: {
    position: "relative",
    // border: '1px solid black',
    padding: 0,
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    zIndex: "99",
    /* margin-top: 3%,
        margin-left: 3%, */
    // transform: 'rotate(50deg)'
  },

  circle2: {
    position: "relative",
    padding: 0,
    marginTop: "10%",
    marginLeft: "10%",
    width: "240px",
    height: "240px",
    borderRadius: " 50%",
    listStyle: "none",
    overflow: "hidden",
    zIndex: "99",
    marginBottom: "50px",
    // transform: 'rotate(.0.1deg)'
  },

  circle3: {
    position: " relative",
    padding: "0",
    marginTop: "13.5%",
    marginLeft: "13.5%",
    width: "175px",
    height: "175px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    zIndex: "99",
    marginBottom: "50px",
  },

  circle4: {
    marginTop: "26%",
    marginLeft: "26%",
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    background: "#041e4e",
    position: "absolute",
    border: "none",
    /* margin-bottom: 50px, */
  },

  circle5: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    background: " #CECECE",
    position: "absolute",
    /* border: none, */
    border: "1px solid #903884",
    transform: "rotate(105.8deg)",
    /* margin-bottom: 50px, */
  },

  circle6: {
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    background: "#333333",
    marginTop: "15%",
    marginLeft: "15%",
    border: "2px solid #903884",
    position: "relative",
    justifyContent: "center !important",
    alignItems: "center !important",
    textAlign: "center",
    padding: "18px 18px",
  },
  accidental: {
    verticalAlign: "super",
    fontSize: "0.6em",
  },

  bottomButtonContainer: {
    marginTop: "-5px",

    "@media (min-width: 1280px) and (max-width:1680px)": {
      marginTop: "130px",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      marginTop: "70px",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      marginTop: "90px",
    },
    "@media (max-width:375px)": {
      marginTop: "90px",
    },
  },
  texRightSide: {
    textAlign: "right",
    cursor: "pointer",
    float: "right",
  },
  textLeftSide: {
    cursor: "pointer",
  },
  buttonCircle: {
    padding: 5,
    background: "#903884",
    borderRadius: "50%",
    width: 40,
    height: 40,
    marginLeft: "40%",
  },
  circleCard: {
    // display:'flex',
    // alignItems:'center',
    // boxShadow: "6px 4px 2px #403b3bd9",
    background: "#333 !important",
    borderRadius: "10px",
    padding: "20px",
    margin: "15px 15px 15px 25px !important",
    height: "80vh",
    "@media (min-width: 1280px) and (max-width:1680px)": {},
    "@media (min-width: 600px) and (max-width:768px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (max-width:375px)": {
      margin: "25px 15px 15px 25px !important",
    },
  },

  select: {
    background: "#0082cf",
    color: "white",
  },
  topButtonContainer: {
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
  },
  topButtonContainer1: {
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  topButtonContainer2: {
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "right",
    alignItems: "right",
    display: "flex",
  },
  topButtons: {
    fontSize: "20px",
    fontWeight: "500",
    width: "50%",
    padding: "2px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 5px 5px green",
    },
    "&:active": {
      border: "2px solid red",
    },
    "&.Mui-selected": {},
    "&.Mui-focusVisible": {
      border: "3px solid #F2A42A !important",
    },
    ":focus": {
      border: "3px solid #F2A42A",
    },
  },

  tempoBtnContainer: {
    position: "relative",
    justifyContent: "space-around",
    // flexdirection: 'column',
    height: "50vh",
    alignItems: "center",
    display: "flex",
  },
  wheelContianer: {
    alignItems: "center",
    display: "flex",
  },

  tempoBtnTop: {
    position: "absolute",
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    top: "0",
    background: "radial-gradient(#FFF 40%, #000)",
    fontSize: "10px",
    cursor: "pointer",
  },
  tempoBtnBottom: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    bottom: "0",
    background: "radial-gradient(#FFF 40%, #000)",
    fontSize: "10px",
    cursor: "pointer",
  },
  paperStyle: {
    marginTop: "10px",
    width: "98%",
    padding: "5px 20px 0px 20px",
    lineHeight: "30px",
    marginLeft: "1.5%",
    height: "150px",
    overflow: "scroll",
    // boxShadow: 'inset 0 0 10px black',
  },
  playerBtn: {
    cursor: "pointer",
    "&:hover": {
      color: "yellow",
    },
    "&:active": {
      color: "blue",
    },
  },
  btnPiano: {
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 5px 5px green",
      cursor: "pointer",
    },
  },
  resetBtn: {
    alignItem: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  premiumList: { pointerEvents: "none", opacity: "0.6", background: "gray" },
});
const MusicWheel = (props) => {
  const [nord, setNord] = useState({ c1: [], c2: [], c3: [] });
  const [songsData, setSongsData] = useState([]);
  const [tempo, SetTempo] = useState("");
  const [intensity, SetIntensity] = useState("");
  const [nordData, setNordData] = useState("");
  const [tempoIndex, setTempoIndex] = useState(0);
  const [intensityIndex, setIntensityIndex] = useState(0);
  const [packageIndex, setPackageIndex] = useState(0);
  const [imageTypeIndex, setImageTypeIndex] = useState("");
  const [durationDataIndex, setDurationDataIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const classes = useStyles();
  const circleOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
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
  var stylesList = { background: "gary", borderRadius: "20px", width: "80%" };
  const arryOne = ["c1", "c2", "c3"];
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
  function changeHandler(c, ind, event) {
    console.log("event is", event, circleOne);
    const temp = { ...nord };
    const count = [...temp["c1"], ...temp["c2"], ...temp["c3"]]?.length || 0;
    if (["c1", "c2", "c3"].includes(c)) {
      if (temp[c].indexOf(ind) == -1 && count < 3) {
        temp[c].push(ind);
        setNord(temp);
        setNordData(nordData + data[c][ind]);
        // setNordData(nordData + data[c][ind] + ",");
        console.log("dd", nordData);
      } else if (temp[c].indexOf(ind) > -1) {
        const nordIndex = temp[c].indexOf(ind);
        temp[c].splice(nordIndex, 1);
        setNord(temp);
        console.log("popo", nordData, data[c][nordIndex], data[c][ind]);
        const final_node = nordData.replace(data[c][ind], "");
        console.log("final_node", final_node);
        setNordData(final_node);
      }
    }
  }
  async function btnHandler(type, e) {
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
      targetBtn.style.border = "2px solid blue";
      setImageTypeIndex(type);
      await fetchSongsData(type);
    }
    if (type == "Letter") {
      targetBtn.style.border = "2px solid blue";
      setImageTypeIndex(type);
      await fetchSongsData(type);
    }
    if (type == "Staff") {
      targetBtn.style.border = "2px solid blue";
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

  function handleClickSong(song_data) {
    console.log("file name", song_data);
    props.handleSong(song_data);
  }

  function getNord() {
    let str = nordData;
    var str2 = nordData;
    for (let val of nordData) {
      if (nordMap[val]) {
        str = nordData.replace(val, nordMap[val]);

        // console.log("final",final_str)
        str2 += nordMap[val] + ",";
      }
    }
    console.log("str", str);
    console.log("str2...", str2);
    return str;
  }
  var i = 0;
  function playAudio(noteType, e) {
    if (noteType == "c3") {
      if (i == 0) {
        new Audio(`https://mylatinhome.com/absolute/note-sound/A.wav`).play();
        console.log(i);
      }
      if (i == 1) {
        new Audio(`https://mylatinhome.com/absolute/note-sound/Ab.wav`).play();
        console.log(i);
      }
      if (i == 2) {
        new Audio(`https://mylatinhome.com/absolute/note-sound/Ab.wav`).play();
        console.log(i);
      }
      if (i == 3) {
        i = -1;
      }
      i = i + 1;
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }
  function show() {
    // function show(id, e)
    // var list = document.getElementById(id).innerHTML;
    // var item = list.includes("_P.");
    // var targetItem = e.target;
    // item ? (targetItem.style.background = "gray") : "";

    //  targetItem.style.background = 'gray';
    alert('Please purchase this song');
  }

  function fetchSongsData(imageType=imageTypeIndex) {
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
          console.log("res",responseJson);

          setSongsData(responseJson.data);
        } else {
          alert("error in response");
        }
      });
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} className={classes.circleCard}>
        <div className={classes.resetBtn}>
          <button onClick={refreshPage}>Reset</button>
        </div>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            md={4}
            className={classes.topButtonContainer}
            style={{}}
          >
            <Button
              className={classes.topButtons}
              onClick={(e) => {
                btnHandler("Letter", e);
              }}
              style={{ background: "#fff" }}
            >
              {true ? "B" : "B"}
            </Button>
          </Grid>
          <Grid item xs={4} md={4} className={classes.topButtonContainer1}>
            <Button
              className={classes.btnPiano}
              onClick={(e) => {
                btnHandler("Staff", e);
              }}
              style={{ background: "#fff" }}
            >
              <Image src={PianoKey} alt=".." width={120} height={35} />
            </Button>
          </Grid>
          <Grid item xs={4} md={4} className={classes.topButtonContainer2}>
            <Button
              className={classes.btnPiano}
              onClick={(e) => {
                btnHandler("Keys", e);
              }}
              style={{ background: "#fff" }}
            >
              {" "}
              <Image src={Piano} alt=".." width={100} height={30} />
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2} className={classes.tempoBtnContainer}>
            <button
              className={classes.tempoBtnTop}
              onClick={(e) => {
                btnHandler("P", e);
              }}
            >
              P
            </button>
            <button
              className={classes.tempoBtnBottom}
              onClick={(e) => {
                btnHandler("Duration", e);
              }}
            >
              {durationData[durationDataIndex]
                ? durationData[durationDataIndex]
                : "Duration"}
            </button>
          </Grid>
          <Grid item xs={8} className={classes.wheelContianer}>
            <div className={classes.mainCircle}>
              <ul className={classes.circle}>
                {data["c1"].map((val, ind) => (
                  <li key={classes.circle + "-" + ind} className={styles.list}>
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

                {/* second circle start here */}
                <ul className={classes.circle2}>
                  {data["c2"].map((val, ind) => (
                    <li
                      key={classes.circle2 + "-" + ind}
                      className={styles.list}
                    >
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
                  {/* third circle start herr */}
                  <ul className={classes.circle3}>
                    {data["c3"].map((val, ind) => (
                      <li
                        key={classes.circle3 + "-" + ind}
                        className={styles.list}
                      >
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
                      <ul className={classes.circle5}>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid black" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid white" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid black" }}
                          onClick={(e) => playAudio("c3", ind, e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid white" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid black" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid white" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid black" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid white" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid black" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid white" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid black" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                        <li
                          className={styles.list}
                          style={{ borderBottom: "10px solid white" }}
                          onClick={(e) => playAudio("c3", e)}
                        ></li>
                      </ul>
                      <div className={classes.circle6}>
                        <PlayCircleOutlineIcon
                          onClick={(e) => {
                            fetchSongsData();
                          }}
                          className={classes.playerBtn}
                        />
                      </div>
                    </div>
                  </ul>
                </ul>
              </ul>
            </div>
          </Grid>

          <Grid item xs={2} className={classes.tempoBtnContainer}>
            <button
              className={classes.tempoBtnTop}
              onClick={(e) => {
                btnHandler("Tempo", e);
              }}
            >
              {tempoData[tempoIndex] ? tempoData[tempoIndex] : "TEMPO"}
            </button>
            <button
              className={classes.tempoBtnBottom}
              onClick={(e) => {
                btnHandler("Intensity", e);
              }}
            >
              {intensityData[intensityIndex]
                ? intensityData[intensityIndex]
                : "Mix"}
            </button>
          </Grid>
        </Grid>

        <div className={styles.songsWrapper}>
          <Paper elevation={3} className={classes.paperStyle}>
            <ul>
              {songsData && songsData.length > 0
                ? songsData.slice(0, 10).map((val, ind) =>
                    val["song_name"].includes("_P.") ? (
                      <li
                        key={"songs" + ind}
                        // onClick={() => handleClickSong(val)}
                        onClick={() => alert('purches it')}
                        id={ind}
                        className={styles.listStyleDisable}
                      >
                        {" "}
                        * {val["song_name"]}{" "}
                      </li>
                    ) : (
                      <li
                        key={"songs" + ind}
                        onClick={() => handleClickSong(val)}
                        // onMouseEnter={(e) => show(ind, e)}
                        className={styles.liststyle}
                      >
                        {" "}
                        * {val["song_name"]}{" "}
                      </li>
                    )
                  )
                : "No Songs Found"}

              <li></li>
            </ul>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};
export default MusicWheel;
