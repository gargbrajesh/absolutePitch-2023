import { makeStyles } from "@material-ui/core";
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
      // marginLeft: "125px",
      marginTop: "-25px",
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
      justifyContent: "center",
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
export default useStyles;