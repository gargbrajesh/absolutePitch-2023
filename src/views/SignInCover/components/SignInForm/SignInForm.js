import React, { useState } from "react";
import styles from "../../SigninCover.module.css";
import Link from "next/link";
// import { Button, TextField, makeStyles, Select } from "@material-ui/core";
import { Button, TextField, Select, Paper, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Router from "next/router";

import MuiAlert from '@mui/material/Alert';
// import Cookies from "js-cookie";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({

  createAcc: {
    backgroundColor: " #faa61a",
    borderRadius: "30px",
    border: " 2px solid #faa61a",
    borderBottom: " 2px solid #faa61a !important",
    padding: "6px 60px",
    "&:hover": {
      backgroundColor: " #faa61a",
    },
    '@media(max-width: 720px)': {
      marginLeft: '50px',
    },
  },
}));
function SignInForm() {
  const classes = useStyles();
  const [email, setEmail] = useState('""');
  const paperStyle = { padding: '2px 50px', height: '70vh', width: '90%', margin: 'auto', alignAtem: 'center', borderRadius: '5% 5% 0%  0%' }
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
          <Grid align='center'><h2>Sign In</h2></Grid>
          <div style={{ padding: '0px 20px' }}><TextField id="standard-basic" label="Email" variant="standard" style={{ width: '95%' }} /></div>
          <div style={{ padding: '0px 20px' }}><TextField id="standard-basic" label="password" variant="standard" style={{ width: '95%' }} /></div>

          <div style={{ padding: '20px' }}>
            <button className={styles.btn}>Sign IN</button>
          </div>

          <div className={styles.sign__in}>
            <p className={styles.para_style}>
            Dont have an account?
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

export default SignInForm;
