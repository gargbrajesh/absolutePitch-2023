import React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './circles.module.css';
import Image from "next/image";
import MusicBtn from '../../../../../public/assets/images/mainBtn.jpg'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  mainCircle: {
    padding: 10,
    background: '#903884',
    borderRadius: '50%',
    width: 405,
    height: 405,
    marginTop: '5%',
    marginLeft: '40%',
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



});
function Banner() {
  const classes = useStyles();
  const [circleOne , setCircleOne]=useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [circleTwo , setCircleTwo]=useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [circleThree ,setCircleThree]=useState([1,2,3,4,5,6,7,8,9,10,11,12]);

  const changeBackgroundC1=(ind,event)=>{
    circleOne.map((value,index)=>{
      console.log(ind +'sir ji'+ index);
      if(ind===index){
        event.target.style.backgroundColor = 'red';
      }
      else{
        event.target.style.backgroundColor = 'blue';
      }
    })
  }
  function changeHandler(c, index, event) {
    if(c == 'c1'){
      changeBackgroundC1(index,event)
      // event.target.style.backgroundColor = 'red';
    }
    else if(index==2){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==3){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==4){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==5){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==6){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==7){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==8){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==9){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==10){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==11){
        event.target.style.backgroundColor = 'red';
    }
    else if(index==12){
        event.target.style.backgroundColor = 'red';
    }

  }
  return (
    <>
      <div className={classes.mainCircle}>

        <ul className={styles.circle} >
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 1, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 2, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text} onClick={(e) => { changeHandler('c1', 3, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 4, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 5, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 6, e) }}><button  className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 7, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 8, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 9, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 10, e) }}><button className={styles.btn}>+</button></div>
          </li>
          <li className={styles.list}>
            <div className={styles.text}  onClick={(e) => { changeHandler('c1', 11, e) }}><button className={styles.btn}>+</button></div>
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
    </>
  );
};
export default Banner;