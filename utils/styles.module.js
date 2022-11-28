import { makeStyles } from "@material-ui/core";
import { Translate } from "@mui/icons-material";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#414646",
    "& a": {
      color: "fff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "85vh",
    marginTop: "2%",
    marginBottom: "2%",
  },

  mainCircle: {
    // background: '#903884 !important',
    // borderRadius: '50%',
    width: "350px",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "125px",
    // marginTop: "-25px",
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: '235px',
      // marginTop: '100px',
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      // marginLeft: "30%",
      // marginTop: "100px",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      // marginLeft: "8%",
      // marginTop: "20%",
    },
    "@media (max-width:375px)": {
      // marginLeft: "3%",
      // marginTop: "20%",
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
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    // zIndex: "99",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  circle4: {
    // marginTop: "26%",
    // marginLeft: "26%",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    background: "#041e4e",
    position: "absolute",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  circle5: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    background: "#584c6c",
    position: "absolute",
    border: "none",
    /* margin-bottom: 50px, */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  circle6: {
    width: "25px",
    border: "2px solid #903884",
    height: "25px",
    /* padding: 18px 18px; */
    overflow: "hidden",
    position: "absolute",
    background: " #333333",
    listStyle: "none",
    /* margin-top: 10%; */
    textAlign: "center",
    alignItems: "center !important",
    /* margin-left: 10%; */
    borderRadius: "50%",
    justifyContent: "center !important",
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
    // padding: "20px",
    // margin: "15px 15px 15px 25px !important",
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
  // topButtonContainer: {
  //   marginTop: "10px",
  //   marginBottom: "10px",
  //   justifyContent: "left",
  //   alignItems: "left",
  //   display: "flex",
  // },
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
    fontSize: "16px",
    fontWeight: "500",
    width: "70%",
    padding: "2px",
    cursor: "pointer",
    padding: "10px",
    transform: "rotate(-30deg) skew(25deg) tanslate(20px,-15px)",
    "&:hover": {
      border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-10px 10px 10px gray",
    },
    "&:before": {
      transform: "0.5s",
      transform: "rotate(20deg)skewY(-45deg)",
    },
    "&:after": {
      transform: "0.5s",
      transform: "rotate(10deg)skewX(-45deg)",
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
    justifyContent: "center",
  },
  topButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px 15px",
    width: "98%",
    marginLeft: "5px",
  },
  tempoBtnTop: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    top: "0",
    background: "radial-gradient(#FFF 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
  },
  tempoBtnBottom: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    bottom: "0",
    background: "radial-gradient(#FFF 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
  },
  paperStyle: {
    marginTop: "10px",
    width: "92%",
    padding: "5px 10px 0px 10px",
    lineHeight: "30px",
    marginLeft: "8px",
    height: "150px",
    overflow: "scroll",
    "@media (min-width: 600px) and (max-width:768px)": {
      marginTop: "10px",
      width: "92%",
      padding: "5px 10px 0px 10px",
      lineHeight: "30px",
      marginLeft: "8px",
      height: "100px",
      overflow: "scroll",
    },
  },
  playerBtn: {
    cursor: "pointer",
    fontSize: "25px",
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

  footer: {
    textAlign: "center",
    backgroundColor: "#414646",
    color: "white",
  },
});
export default useStyles;
