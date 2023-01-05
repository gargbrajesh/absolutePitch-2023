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
    width: "350px",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

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
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    // background: "#041e4e",
    // backgroundImage: `url('https://mylatinhome.com/image_play/Group%202.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    // border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background:'#903884',
  },

  circle5: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    // background: "#584c6c",
    position: "absolute",
    border: "none",
    /* margin-bottom: 50px, */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  circle6: {
    // width: "35px",
   
    // height: "35px",
    width: "50px",
   background:'#b20ca4',
    height: "50px",
    /* padding: 18px 18px; */
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    // background: " #333333",
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
  listBg :{ background:'black'},
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
    background: "#333 !important",
    borderRadius: "10px",

    height: "120vh",
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

  topButtonContainer1: {
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    padding: "0px 10px",
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
    width: "90%",
    padding: "2px",
    cursor: "pointer",
    padding: "10px",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#fff",
    "&:hover": {
      border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-10px 10px 10px gray",
    },
  },
  resetButtons: {
    fontSize: "16px",
    fontWeight: "500",
    width: "90%",
    padding: "2px",
    cursor: "pointer",
    padding: "10px",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#82E3F4",
    color: "white",
    "&:hover": {
      border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-10px 10px 10px gray",
    },
  },
  activeKey: {
    fontSize: "16px",
    fontWeight: "500",
    width: "90%",
    padding: "2px",
    cursor: "pointer",
    padding: "10px",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "blue",
    color: "white",
    transform: "rotate(-30deg) skew(25deg) tanslate(20px,-15px)",
    "&:hover": {
      border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-10px 10px 10px gray",
    },
  },
  bottomBox: {
    fontSize: "14px",
    // fontWeight: "500",
    width: "96%",
    padding: "5px",
  height:'20px',
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#FFF",
    overflow: 'hidden',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
    color: "#000",
    transform: "rotate(-30deg) skew(25deg) tanslate(20px,-15px)",
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
  bottomBoxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: "5px",
    padding: "0px 5px",
    width: "100%",
    // marginLeft: "2px",
  },
  tempoBtnTop: {
    position: "absolute",
    width: "100px",
    height: "82px",
    // borderRadius: "50%",
    left: " 50%",
    right: "27.31%",
    top: "1.25%",
    transform: "rotate(35.33deg)",
    background: "#333333",
    // background: "radial-gradient(#FFF 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    '&:hover':{
      // background: "radial-gradient(blue 40%, #000)",
    },
  },
  iconDesign: {
    position: "relative",
    height: "100%",
    width: "100%",
    color: "#CEB858",
    background: "#333333",
  },
  leftBtnTextOne: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    color: "#fff",
    zIndex: "2",
    top: "20px",
    left: " 28px",
    textAlign:'center',
    padding:'0 !important',
    transform: "rotate(-0.67deg)",
  },
  leftBtnTextTwo: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    color: "#fff",
    zIndex: "2",
    top: "-12px",
    left: "22px",
    padding:'0 !important',
    transform: "rotate(-0.33deg)",
  },
  RightBtnTextOne: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    color: "#fff",
    zIndex: "2",
    top: "22px",
    padding:'0 !important',
    textAlign:'center',
    left: " 28px",
    transform: "rotate(180.33deg)",
  },
  AllBtnText3: {
    position: "absolute",
    fontSize: "12px",
    color: "#fff",
    zIndex: "2",
    top: "20px",
    left: "-10px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    padding:'0 !important',
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    transform: "rotate(270.33deg)",
  },
  iconDesignActive: {
    height: "100%",
    width: "100%",
    color: "#903884",
    background: "#333333",
  },
  topbtnNew: {
    position: "absolute",
    left: " 50%",
    right: "27.31%",
    top: "1.25%",
    bottom: "-72.49%",
    height: "90px",
    width: "50px",

    background: "#000",
    // transform: 'rotate(-60.33deg)',
  },
  tempoBtnNew: {
    position: "absolute",
    left: " -50%",
    right: "27.31%",
    top: "1.25%",
    bottom: "-72.49%",
    height: "80px",
    width: "100px",
    background: "#333333",
    cursor: "pointer",
    // background: "radial-gradient(#FFF 40%, #000)",
    transform: "rotate(150.33deg)",
    border: "none",
    '&:hover':{
      // background: "radial-gradient(blue 40%, #000)",
    },
  },

  tempoNewBtnBottom: {
    position: "absolute",
    position: "absolute",
    left: " 30%",
    right: "27.31%",
    top: "85%",
    bottom: "-72.49%",
    height: "80px",
    width: "100px",
    background: "#333333",
    cursor: "pointer",
    // background: "radial-gradient(#FFF 40%, #000)",
    transform: "rotate(-25.33deg)",
    border: "none",
    '&:hover':{
      // background: "radial-gradient(blue 40%, #000)",
    },
  },
  IntensityBtnNew: {
    position: "absolute",
    left: " -40%",
    right: "27.31%",
    top: "85%",
    bottom: "-72.49%",
    height: "80px",
    width: "100px",
    background: "#333333",
    cursor: "pointer",
    // background: "radial-gradient(#FFF 40%, #000)",
    transform: "rotate(208.33deg)",
    border: "none",
    '&:hover':{
      // background: "radial-gradient(blue 40%, #000)",
    },
  },
  IntensityBtnNewActive: {
    position: "absolute",
    left: " -40%",
    right: "27.31%",
    top: "85%",
    bottom: "-72.49%",
    height: "80px",
    width: "100px",
    background: "lightblue",
    color: "lightblue",
    cursor: "pointer",
    // background: "radial-gradient(#FFF 40%, #000)",
    transform: "rotate(208.33deg)",
    border: "none",
  },
  packageBtnActive: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    top: "0",
    background: "radial-gradient(#df783d 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid blue",
  },
  tempoActive: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    top: "0",
    background: "radial-gradient(green 40%, #000)",
    color: "#fff",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid blue",
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

  tempoBtnBottomActive: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    bottom: "0",
    background: "radial-gradient(yellow 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid blue",
  },
  timerBox: {
    // width:'50px',
    // height:'25px',
    color: "#000",
    background: "#fff",
    padding: "6px 5px",
    fontStyle: "bold",
    fontFamily: "digital-clock-font",
    textAlign: "center !important",
    fontSize: "15px",
    borderRadius: "5px",
    border: "1px solid #96be25",
  },
  imageCount: {
    width: "50px",
    color: "#000",
    background: "#D9D9D9",
    padding: "2px",
    borderRadius: "5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    // fontSize: "24px",
    lineHeight: "20px",
    textAlign: "center !important",
    fontSize: "15px",
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
    fontSize: "70px",
    position: "absolute",
    color: "#fff",
    borderRadius:'5px',
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
