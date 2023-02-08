import { Grid, Paper, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import useStyles from "../utils/styles.module";
import styles from "./style.module.css";
import Image from "next/image";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import staff from "../public/assets/images/staff.jpg";
import keys from "../public/assets/images/keys.jpg";
import playBtn from "../public/assets/images/playerBtn.jpg";
import Duration from "../public/assets/images/Duration.png";
import Mix from "../public/assets/images/Mix.png";
import Tempo from "../public/assets/images/Tempo.png";
import Intencity from "../public/assets/images/Intencity.png";
import Intencity2 from "../public/assets/images/Intencity2.png";
import Intencity3 from "../public/assets/images/Intencity3.png";
import Intencity4 from "../public/assets/images/Intencity4.png";
import Duration1 from "../public/assets/images/GroupDuration1.png";
import Duration2 from "../public/assets/images/GroupDuration2.png";
import Duration3 from "../public/assets/images/GroupDuration3.png";
import DataTable from "react-data-table-component";
import nl2br from "react-nl2br";
import LabelIcon from "@mui/icons-material/Label";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./style.module.css";

function MusicWheel(props) {
  const classes = useStyles();
  var totalduraion = 0;
  const [nord, setNord] = useState({ c1: [], c2: [], c3: [] });
  const [highlightedNord, setHighlightedNord] = useState({
    c1: [],
    c2: [],
    c3: [],
  });
  const [songsData, setSongsData] = useState([]);
  const [nordData, setNordData] = useState([]);
  const [tempoIndex, setTempoIndex] = useState(0);
  const [intensityIndex, setIntensityIndex] = useState(0);
  const [packageDataIndex, setPackageDataIndex] = useState(1);
  const [imageTypeIndex, setImageTypeIndex] = useState("");
  const [imageTypeActive, setImageTypeActive] = useState(false);
  const [durationDataIndex, setDurationDataIndex] = useState(0);
  const [totalSongs, setTotalSongs] = useState(0);
  const [allsongTime, setAllsongTime] = useState(0);
  const [deg, setDeg] = useState(45);
  const [nordIndex111, setNordIndex111] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [allPlaySongsDuration, setAllPlaySongsDuration] = useState(0);
  const tempoData = ["", "Calm", "Lively", "Mellow", "Moderate"];
  const intensityData = ["", "HI", "LI", "MI"];
  const packageData = ["", "", "P", "F", "F"];
  const packageName = ["", "Mix", "Premium", "Original"];
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
    c3: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"],
    c3String: [
      "C#\nDb",
      "D",
      "D#\nEb",
      "E",
      "F",
      "F#\nGb",
      "G",
      "G#\nAb",
      "A",
      "A#\nBb",
      "B",
      "C",
    ],
  };
  const nordMap = { "+": "M", "-": "m", "#": "b" };
  const soundData = [
    "https://mylatinhome.com/absolute/note-sound/A.wav",
    "https://mylatinhome.com/absolute/note-sound/Am.wav",
    "https://mylatinhome.com/absolute/note-sound/Ab.wav",
  ];
  // let lastInd = -1;
  const columns = [
    {
      name: "Title",
      selector: (row) => row.song_title,
      sortable: true,
     
    },
    { name: "Composer", selector: (row) => row.composer, sortable: true, },
    { name: "Tempo", selector: (row) => row.tempo , sortable: true,},
    { name: "Intensity", selector: (row) => row.intensity, sortable: true, },
  ];

  function changeHandler(c, ind, event) {
    // if (imageTypeIndex == "") {
    //   alert("Please seect any ImageType Key");
    // } else {
    const temp = { ...nord };
    const count = [...temp["c1"], ...temp["c2"], ...temp["c3"]]?.length || 0;
    if (["c1", "c2", "c3"].includes(c)) {
      if (temp[c].indexOf(ind) == -1 && count < 3) {
        if ((count >= 1 && ind == nordIndex111) || count < 1) {
          temp[c].push(ind);
          setNord(temp);
          if (c == "c1" || c == "c2") {
            var nordData2 = data["c3"][ind] + data[c][ind];
          } else {
            var nordData2 = data[c][ind];
          }
          setNordIndex111(ind);
          setNordData([...nordData, nordData2]);
        }
      } else if (temp[c].indexOf(ind) > -1) {
        const nordIndex = temp[c].indexOf(ind);
        temp[c].splice(nordIndex, 1);
        setNord(temp);

        if (c == "c1" || c == "c2") {
          var nordIndex1 = nordData.indexOf(data["c3"][ind] + data[c][ind]);
        } else {
          var nordIndex1 = nordData.indexOf(data[c][ind]);
        }
        nordData.splice(nordIndex1, 1);
        setNordData(nordData);
      }
      setPackageDataIndex(0);
      setTempoIndex(0);
      setDurationDataIndex(0);
      setIntensityIndex(0);
    }
    //}
  }
  async function btnHandler(type, e, ind) {
    if (type == "Tempo") {
      if (tempoIndex == tempoData.length - 1) {
        setTempoIndex(0);
      } else {
        setTempoIndex(tempoIndex + 1);

        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }

    if (type == "Package") {
      if (packageDataIndex == packageData.length - 1) {
        setPackageDataIndex(0);
      } else {
        setPackageDataIndex(packageDataIndex + 1);
        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }
    if (type == "Intensity") {
      if (intensityIndex == intensityData.length - 1) {
        setIntensityIndex(0);
      } else {
        setIntensityIndex(intensityIndex + 1);
        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }

    if (type == "Keys") {
      alert("You need to purchase the membership");
    }
    if (type == "Letter") {
      setImageTypeIndex(type);
      toggleActiveStyle(ind);
      await fetchSongsData(type);
    }
    if (type == "Staff") {
      alert("You need to purchase the membership");
    }
    if (type == "Duration") {
      if (durationDataIndex == durationData.length - 1) {
        setDurationDataIndex(0);
      } else {
        setDurationDataIndex(durationDataIndex + 1);
        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }
    //}
  }

  function toggleActiveStyle(ind) {
    if (ind == 1) {
      setImageTypeActive(ind);
    } else if (ind == 2) {
      setImageTypeActive(ind);
    } else if (ind == 3) {
      setImageTypeActive(ind);
    } else {
      setImageTypeActive(false);
    }
  }

  useEffect(() => {
    if (props.musicIndex >= 0) {
      highlightNord(props.musicData, props.musicIndex);
    }
  }, [props.musicIndex]);

  function handleClickSong(songsData, ind) {
    if (songsData.length > 0) {
      props.handleSong(songsData, ind);
    }
  }

  function secondsToHms(Seconds) {
    let d = Number(Seconds);
    console.log(Seconds, "...Secondss");
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var mDisplay = m > 0 ? m : "00";
    var sDisplay = s > 0 ? s : "00";
    let time = m + ":" + s;

    setAllPlaySongsDuration(time);
    countdown(mDisplay, sDisplay);
  }

  function countdown(minutes, seconds) {
    var mins = minutes;
    seconds++;
    function tick() {
      var counter = document.getElementById("duration");
      var current_minutes = mins;
      seconds--;
      counter.innerHTML =
        current_minutes.toString() +
        ":" +
        (seconds < 10 ? "0" : "") +
        String(seconds);

      if (seconds > 0) {
        let timeoutHandle = setTimeout(tick, 1000);
      } else {
        if (mins > 1) {
          setTimeout(function() {
            countdown(mins - 1, 59);
          }, 1000);
        }
      }
    }
    tick();
  }

  function highlightNord(songsData, ind) {
    const current_song = songsData[ind];
    let selected_nord = current_song["note_or_cord"];
    const last_nord = selected_nord[selected_nord.length - 1];
    if (last_nord != "m" && last_nord != "M") {
      if (selected_nord.length > 1) {
        selected_nord = selected_nord.replace("b", "#");
      }
      const selecetd_index = data["c3"].indexOf(selected_nord);
      setHighlightedNord({ c1: [], c2: [], c3: [selecetd_index] });
    } else if (last_nord == "m") {
      selected_nord = selected_nord.slice(0, selected_nord.length - 1);
      if (selected_nord.length > 1) {
        selected_nord = selected_nord.replace("b", "#");
      }
      const selecetd_index = data["c3"].indexOf(selected_nord);
      setHighlightedNord({ c1: [], c2: [selecetd_index], c3: [] });
    } else if (last_nord == "M") {
      selected_nord = selected_nord.slice(0, selected_nord.length - 1);
      if (selected_nord.length > 1) {
        selected_nord = selected_nord.replace("b", "#");
      }
      const selecetd_index = data["c3"].indexOf(selected_nord);
      setHighlightedNord({ c1: [selecetd_index], c2: [], c3: [] });
    }
  }

  function getNord() {
    var str2 = nordData;
    let final_result = [];
    for (let i = 0; i < nordData.length; i++) {
      let str = nordData[i];

      for (let val of nordData[i]) {
        if (nordMap[val]) {
          str = nordData[i].replace(val, nordMap[val]);
          str2 += nordMap[val] + ",";
        }
      }
      final_result.push(str);
    }
    return final_result;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function ResetCounter() {
    secondsToHms(totalduraion);
    props.setAllImageCount(0);

    var countDown = document.getElementById("duration");

    countDown.innerHTML = "00:00";
  }

  function rotationBtn(id, e) {
    var rote = 100;

    let content = document.getElementById("TempoBtn");
    let btn = document.getElementById(id);
    // content.addEventListener('click',()=>{
    btn.style.transform = "rotate(" + deg + "deg)";
    setDeg(deg + 45);

    // })
  }
  function fetchSongsData(imageType = imageTypeIndex) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=ckmj4nc6enk1u3e0rle62m3l64");

    const nord_or_cord = getNord();
    console.log(nord_or_cord, "nord_or_cord.............");
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
    urlencoded.append("package", packageData[packageDataIndex]);

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
        setTotalSongs(responseJson.data.length);
        if (responseJson != "") {
          setSongsData(responseJson.data);
          console.log(songsData, "songdata.....");
          for (let i = 0; i <= responseJson.data.length; i++) {
            if (!responseJson.data[i].song_name.includes("_P.")) {
              handleClickSong(responseJson.data, i);
              // setDuration(responseJson.data[i].duration);
              break;
            }
          }
        } else {
          alert("error in response");
        }
      });
  }
  setTimeout(() => {
    secondsToHms(totalduraion);
  }, 1000);

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
            A Ab B Bb
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
            <Image src={staff} alt="alt" height={22} />
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
            <Image
              src={keys}
              alt="alt"
              height={40}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
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
      <div style={{ marginTop: "2%", marginBottom: "5%" }}>
        <Grid container spacing={1}>
          <Grid item xs={2} md={2} className={classes.tempoBtnContainer}>
            <button
              className={`${classes.tempoBtnTop} ${
                packageDataIndex > 0 ? "" : ""
              }`}
              onClick={(e) => {
                btnHandler("Package", e);
              }}
            >
              <Image
                src={Mix}
                alt="..."
                style={{ width: "200px", height: "200px" }}
              />
            </button>

            <button
              className={`${classes.tempoNewBtnBottom} ${
                durationDataIndex > 0 ? "" : ""
              }`}
              onClick={(e) => {
                btnHandler("Duration", e);
              }}
            >
              {durationData[durationDataIndex] ? (
                durationData[durationDataIndex] <= 120 ? (
                  <Image src={Duration1} alt="..." />
                ) : durationData[durationDataIndex] <= 240 &&
                  durationData[durationDataIndex] >= 121 ? (
                  <Image src={Duration2} alt="..." />
                ) : (
                  <Image src={Duration3} alt="..." />
                )
              ) : (
                <Image src={Duration1} alt="..." />
              )}{" "}
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
                      }  ${
                        highlightedNord["c1"].includes(ind)
                          ? styles.greenbg
                          : ""
                      }`}
                      onClick={(e) => changeHandler("c1", ind, e)}
                    >
                      {val}
                    </div>
                  </li>
                ))}

                <ul className="circle2">
                  {data["c2"].map((val, ind) => (
                    <li
                      key={classes.circle2 + "-" + ind}
                      className={styles.list}
                    >
                      <div
                        className={`${styles.textTwo} ${
                          nord["c2"].includes(ind) ? styles.bluebg : ""
                        } ${
                          highlightedNord["c2"].includes(ind)
                            ? styles.greenbg
                            : ""
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
                    <li
                      key={classes.circle3 + "-" + ind}
                      className={styles.list}
                    >
                      <div
                        className={`${styles.textThird} ${
                          nord["c3"].includes(ind) ? styles.bluebg : ""
                        } ${
                          highlightedNord["c3"].includes(ind)
                            ? styles.greenbg
                            : ""
                        }`}
                        onClick={(e) => changeHandler("c3", ind, e)}
                      >
                        {nl2br(data["c3String"][ind])}
                      </div>
                    </li>
                  ))}

                  <div className={classes.circle4}>
                    <Image
                      src={playBtn}
                      className={classes.playerBtn}
                      alt="alt"
                      onClick={(e) => {
                        fetchSongsData();
                      }}
                      style={{
                        width: "50% !important",
                        height: "50% !important",
                      }}
                    />
                  </div>
                </ul>
              </ul>
            </div>
          </Grid>

          <Grid item xs={2} md={2} className={classes.tempoBtnContainer}>
            <button
              id="TempoBtn"
              className={`${classes.tempoBtnNew} ${tempoIndex > 0 ? "" : ""}`}
              onClick={(e) => {
                btnHandler("Tempo", e);
              }}
            >
              <Image src={Tempo} alt="..." />
            </button>

            <button
              className={`${classes.IntensityBtnNew} ${
                intensityIndex > 0 ? "classes.IntensityBtnNewActive" : ""
              }`}
              onClick={(e) => {
                btnHandler("Intensity", e);
              }}
            >
              {intensityIndex == 0 ? (
                <Image src={Intencity} alt="..." />
              ) : intensityIndex == 1 ? (
                <Image src={Intencity2} alt="..." />
              ) : intensityIndex == 2 ? (
                <Image src={Intencity3} alt="..." />
              ) : intensityIndex == 3 ? (
                <Image src={Intencity4} alt="..." />
              ) : (
                <Image src={Intencity} alt="..." />
              )}
            </button>
          </Grid>
        </Grid>
        <div className={classes.resetBtn}>
          <Grid container spacing={1}>
            <Grid item xs={3} md={4} style={{ padding: "2px" }}>
              {/* <div className={classes.imageCount}> */}

              <p
                id="duration"
                style={{
                  background: "#fff",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                {songsData && songsData.length > 0
                  ? songsData.map((val, ind) =>
                      console.log(
                        (totalduraion =
                          parseInt(totalduraion) + parseInt(val["duration"]))
                      )
                    )
                  : ""}
              </p>
              {/* </div> */}
            </Grid>
            <Grid item xs={3} md={4} style={{ padding: "2px" }}>
              <p
                style={{
                  background: "#fff",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                <button
                  style={{
                    background: "#fff",
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    ResetCounter();
                  }}
                >
                  Reset
                </button>{" "}
              </p>
            </Grid>
            <Grid item xs={3} md={4} style={{ padding: "2px" }}>
              <p
                style={{
                  background: "#fff",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                {props.allImageCount}
              </p>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.songScrolling}>
        <marquee width="90%" direction="left" height="30%">
          {" Title_" +
            props.songTitle +
            " Note_" +
            props.songNote +
            " Composer_" +
            props.composer +
            " Duration_" +
            props.duration +
            " Image Count_" +
            props.imageCount}
        </marquee>
      </div>
      <div style={{ marginBottom: "30px" }}>
        {/* <Grid container spacing={2} className={classes.bottomBoxContainer}>
          <Grid item xs={3} md={3}>
            <p className={`${classes.bottomBox}`}>{props.songNote}</p>
          </Grid> */}
        {/* <Grid item xs={3} md={3}>
          <p className={`${classes.bottomBox}`}>{props.songTitle}</p>
        </Grid> */}
        {/* <Grid item xs={3} md={3}>
            <p className={`${classes.bottomBox}`}>{props.composer}</p>
          </Grid>
          <Grid item xs={3} md={3}>
            <p className={`${classes.bottomBox}`}>{props.duration}</p>
          </Grid>
          <Grid item xs={3} md={3}>
            <p className={`${classes.bottomBox}`}>{props.imageCount}</p>
          </Grid>
        </Grid> */}
      </div>
      <div className={styles.songsWrapper}>
        <Paper elevation={3} className={classes.paperStyle}>
          <div
            style={{
              height: "30px",
              borderRadius: "5%",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p
              style={{
                color: "#fff",
                width: "70px",
                background: "#333333",
                textAlign: "center",
              }}
            >
              {props.playSongposition}/{totalSongs}
            </p>
            <p>Number Of Cue</p>
          </div>
          <hr />
          {/* <div> */}
          {/* <table className={classes.tableStyle} id={props.id}>
              <tr className={classes.trStyle}>
                <th className={classes.thStyle}>Title</th>
                <th className={classes.thStyle}>Composer</th>
                <th className={classes.thStyle}>Tempo</th>
                <th
                  className={classes.thStyle}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    btnHandler("Intensity", e);
                    fetchSongsData();
                  }}
                >
                  Intensity
                </th>
                <th className={classes.thStyle}>Note</th>
              </tr>
              {songsData && songsData.length > 0
                ? songsData.map((val, ind) =>
                    val["song_name"].includes("_P.") ? (
                      <tr
                        key={"songs" + ind}
                        onClick={() =>
                          alert("You need to purchase the membership")
                        }
                        id={ind}
                        className={`${styles.listStyleDisable} ${styles.liststyle}`}
                      >
                        <td>{val["song_title"]}</td>
                        <td>{val["composer"]}</td>
                        <td>{val["tempo"]}</td>
                        <td>{val["intensity"]}</td>
                        <td>{val["note_or_cord"]}</td>
                      </tr>
                    ) : (
                      <tr
                        key={"songs" + ind}
                        onClick={() => handleClickSong(songsData, ind)}
                        className={styles.liststyle}
                      >
                        <td>{val["song_title"]}</td>
                        <td>{val["composer"]}</td>
                        <td>{val["tempo"]}</td>
                        <td>{val["intensity"]}</td>
                        <td>{val["note_or_cord"]}</td>
                      </tr>
                    )
                  )
                : "No Songs Found"}
            </table> */}

          {songsData && songsData.length > 0 ? (
            <DataTable id={props.id}
            columns={columns} 
            data={songsData} 
            highlightOnHover
            fixedHeader
            pagination />
          ) : (
            ""
          )}
          {/* </div> */}
        </Paper>
      </div>
    </div>
  );
}

export default MusicWheel;
