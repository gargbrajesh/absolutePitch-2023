import React, { useState } from "react";
import styles from "../../SignUpCover.module.css";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
// import { Button, TextField, makeStyles, Select } from "@material-ui/core";
import { Button, TextField, Select ,Paper,Grid} from "@mui/material";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
// import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  createAcc: {
    backgroundColor: `gradient(125.25deg, #50E0A9 6.14%, #26B9E9 108.72%)`,
    borderRadius: "20px",
    border: " 2px solid #888888",
    borderBottom: " 2px solid #888888 !important",
    padding: "15px 60px",
    marginTop: "35px",
  },
}));
function SignUpForm() {
  const classes = useStyles();
  const router = useRouter();
 
  const [email, setEmail] = useState('""');
  const paperStyle = {padding:'2px 50px',height:'70vh',width:'90%',margin:'auto',alignAtem:'center',borderRadius:'5% 5% 0%  0%'}
  return (
    <Paper elevation={10} style={paperStyle} >
      <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid align='center'><h2>Sign Up</h2></Grid>
      <div style={{padding:'0px 20px'}}><TextField id="standard-basic" label="What’s your Email?" variant="standard" style={{width:'95%'}}/></div>
      <div style={{padding:'0px 20px'}}><TextField id="standard-basic" label="Create you password" variant="standard" style={{width:'95%'}}/></div>
      
      <div style={{padding:'20px'}}>
        <button className={styles.btn}>signup</button>
       </div>
      
       <div className={styles.sign__in}>
            <p className={styles.para_style}>
            Already have an account?
              <Link href="/signup">
                <p>Sign Up</p>
              </Link>
            </p>
          </div>
     
    </Box>
      </div>
    </Paper>
  );
}

export default SignUpForm;
