import React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './circles.module.css';
import Image from "next/image";
import Grid from '@mui/material/Grid';
import MusicBtn from '../../../../../public/assets/images/mainBtn.jpg';
import Mix from '../../../../../public/assets/images/Group1.png';
import Tempo from '../../../../../public/assets/images/Group2.png';
import Timer from '../../../../../public/assets/images/Group3.png';
import Progress from '../../../../../public/assets/images/Group4.png';
import { makeStyles } from '@mui/styles';
import { Alert } from '@mui/material';
const useStyles = makeStyles({
  mainCircle: {
    padding: '10px',
    background: '#903884',
    borderRadius: '50%',
    width: 405,
    height: 405,
    marginTop: '3%',
    marginLeft: '40% !important',
  },
  layertwo: {
    // padding: 10,
    background: '#FFFFFF',
    borderRadius: '50%',
    width: 380,
    height: 380,
    marginTop: '6%',
    marginLeft: '6%',
  },
  accidental: {
    verticalAlign: 'super',
    fontSize: '0.6em',
  },

  topButtonContainer: {
    width: '30%',
    marginTop: '5px',
    marginLeft: '38%',
    margin: '10px',

  },
  bottomButtonContainer: {
    width: '30%',
    marginTop: '22px',
    marginLeft: '38%',

  },
  texRightSide: {
    textAlign: 'right',
    cursor:'pointer',
  },
  textLeftSide: {
    
    cursor:'pointer',
  },
  buttonCircle:{
    padding: 5,
    background: '#903884',
    borderRadius: '50%',
    width: 40,
    height: 40,
    marginLeft: '40%',
    
  }


});
function Banner() {
  const classes = useStyles();
  const circleOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const arryOne = ['c1', 'c2', 'c3', 1]

  const changeBackgroundC1 = (c, ind, event) => {

    circleOne.map((val, index) => {
      if (arryOne[0] == c || arryOne[1] == c || arryOne[2] == c && ind == index) {

        event.target.style.backgroundColor = 'red';
      }
    })



  }
  function changeHandler(c, ind, event) {
    // console.log(c, ind)
    circleOne.map((val, index) => {

      if ('c1' == c || 'c2' == c || 'c3' == c && ind == index) {

        event.target.style.backgroundColor = 'red';
      }

    });
  }
  function btnHandler(text) {
    alert(text);
  }
  return (
    <div div container>
      <Grid container className={classes.topButtonContainer}>
        <Grid item xs={6} className={classes.textLeftSide}><Image src={Mix} alt='' onClick={(e) => { btnHandler('Mix') }} width={70} height={70}/></Grid>
        <Grid item xs={6} className={classes.texRightSide}><Image src={Tempo} alt='' onClick={(e) => { btnHandler('Tempo') }} width={70} height={70}/></Grid>
      </Grid>
      <div className={classes.mainCircle}>

        <ul className={styles.circle} >
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 1, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 2, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 3, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 4, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 5, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 6, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 7, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 8, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 9, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 10, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 11, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} ><button onClick={(e) => { changeHandler('c1', 12, e) }} className={styles.btn}>+</button></div>
          </li >
          {/* second circle start here */}
          <ul className={styles.circle2}>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '1', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '2', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '3', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '4', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '5', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '6', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '7', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '8', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '9', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '10', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '11', e) }}><button className={styles.btn}>-</button></div>
            </li>
            <li className={styles.list}>
              <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '12', e) }}><button className={styles.btn}>-</button></div>
            </li >
            {/* third circle start herr */}
            <ul className={styles.circle3}>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '1', e) }}><button className={styles.btn}>C#</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '2', e) }}><button className={styles.btn}>D</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '3', e) }}><button className={styles.btn}>D#</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '4', e) }}><button className={styles.btn}>E</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '5', e) }}><button className={styles.btn}>F</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '6', e) }}><button className={styles.btn}>F#</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '7', e) }}><button className={styles.btn}>G</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '8', e) }}><button className={styles.btn}>G#</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '9', e) }}><button className={styles.btn}>A</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '10', e) }}><button className={styles.btn}>A#</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '11', e) }}><button className={styles.btn}>B</button></div>
              </li>
              <li className={styles.list}>
                <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '12', e) }}><button className={styles.btn}>C</button></div>
              </li >

              <div className={styles.circle4}>
                <ul className={styles.circle5}>
                  <li className={styles.list} style={{ borderBottom: '10px solid black' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid white' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid black' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid white' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid black' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid white' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid black' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid white' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid black' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid white' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid black' }}>

                  </li>
                  <li className={styles.list} style={{ borderBottom: '10px solid white' }}>
                  </li >
                </ul>
                <div className={styles.circle6}><Image src={MusicBtn} alt="" /></div>
              </div>
            </ul>
          </ul>
        </ul>
      </div>
      <Grid container justify="flex-end" className={classes.bottomButtonContainer}>
        <Grid item xs={6}><Image src={Timer} alt='' onClick={(e) => { btnHandler('Timer') }} className={classes.textLeftSide} width={70} height={70}/></Grid>
        <Grid item xs={6} className={classes.texRightSide}><Image src={Progress} alt='' onClick={(e) => { btnHandler('Progress') }} width={70} height={70}/></Grid>
      </Grid>
    </div>
  );
};
export default Banner;