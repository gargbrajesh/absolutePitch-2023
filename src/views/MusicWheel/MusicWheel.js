import { Grid } from '@mui/material'
import React from 'react';
import styles from './circles.module.css';
import { makeStyles } from '@mui/styles';
// import MusicBtn from '../../../../public/assets/images/mainBtn.jpg';
import MusicBtn from '../../../public/assets/images/mainBtn.jpg';
import Mix from '../../../public/assets/images/mix4x.png';
import Tempo from '../../../public/assets/images/tempo4x.png';
import Timer from '../../../public/assets/images/timer4x.png';
import Progress from '../../../public/assets/images/progress4x.png';
import Image from "next/image";
const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    mainCircle: {
        // background: '#903884 !important',
        // borderRadius: '50%',
        width: '300px',
        height: '300px',
        display: 'flex',
        // margin:'5px',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '125px',
        marginTop: '-25px',

    },
    layertwo: {
        // padding: 10,
        background: '#FFFFFF !important',
        borderRadius: '50%',
        width: 200,
        height: 200,
        marginTop: '5%',
        marginLeft: '5%',
    },
    circle: {
        position: 'relative',
        // border: '1px solid black',
        padding: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        listStyle: 'none',
        overflow: 'hidden',
        zIndex: '99',
        /* margin-top: 3%,
        margin-left: 3%, */
        // transform: 'rotate(50deg)'
    },

    circle2: {
        position: 'relative',
        padding: 0,
        marginTop: '10%',
        marginLeft: '10%',
        width: '240px',
        height: '240px',
        borderRadius: ' 50%',
        listStyle: 'none',
        overflow: 'hidden',
        zIndex: '99',
        marginBottom: '50px',
        // transform: 'rotate(.0.1deg)'
    },

    circle3: {
        position: ' relative',
        padding: '0',
        marginTop: '13.5%',
        marginLeft: '13.5%',
        width: '175px',
        height: '175px',
        borderRadius: '50%',
        listStyle: 'none',
        overflow: 'hidden',
        zIndex: '99',
        marginBottom: '50px',
    },

    circle4: {
        marginTop: '26%',
        marginLeft: '26%',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        listStyle: 'none',
        overflow: 'hidden',
        background: '#041e4e',
        position: 'absolute',
        border: 'none',
        /* margin-bottom: 50px, */
    },

    circle5: {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        listStyle: 'none',
        overflow: 'hidden',
        background: ' #CECECE',
        position: 'absolute',
        /* border: none, */
        border: '1px solid #903884',
        transform: 'rotate(105.8deg)'
        /* margin-bottom: 50px, */
    },

    circle6: {
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        listStyle: 'none',
        overflow: 'hidden',
        background: '#FFFFFF',
        marginTop: '15%',
        marginLeft: '15%',
        border: '2px solid #903884',
        position: 'relative',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        textAlign: 'center',
        padding: '18px 18px',
    },
    accidental: {
        verticalAlign: 'super',
        fontSize: '0.6em',
    },

    topButtonContainer: {
        marginTop: '5px',
    },
    bottomButtonContainer: {

        marginTop: '-5px',


    },
    texRightSide: {
        textAlign: 'right',
        cursor: 'pointer',
        float: 'right',
    },
    textLeftSide: {

        cursor: 'pointer',
    },
    buttonCircle: {
        padding: 5,
        background: '#903884',
        borderRadius: '50%',
        width: 40,
        height: 40,
        marginLeft: '40%',

    },
    circleCard: {
        // display:'flex',
        // alignItems:'center',
        // justifyContent:'center',
        background: '#333 !important',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px 15px 15px 25px !important',
        height: '80vh',
    },

select:{
    background:'#0082cf',
    color:'white',
}
});
const MusicWheel = () => {
    const classes = useStyles();
    const circleOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const arryOne = ['c1', 'c2', 'c3']
    let flag = 0;


    
    function changeHandler(c, ind, event) {


        if (c == 'c1' || c == 'c2' || c == 'c3') {
            if (ind !=0) {
              var node =  event.target.style.backgroundColor = '#0082cf';
                event.target.style.color = 'white';
                console.log(c, ind, event);
              
            }

        }
    }
    function btnHandler(text) {
        alert(text);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.circleCard}>
                <Grid container className={classes.topButtonContainer}>
                    <Grid item xs={6} className={classes.textLeftSide}><Image src={Mix} alt='' onClick={(e) => { btnHandler('Mix') }} width={70} height={70} /></Grid>
                    <Grid item xs={6} className={classes.texRightSide}><Image src={Tempo} alt='' onClick={(e) => { btnHandler('Tempo') }} width={70} height={70} /></Grid>
                </Grid>
                <div className={classes.mainCircle}>
                    <ul className={classes.circle} >
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 1, e) }}>+</div>
                        </li>
                        <li className={styles.list} >
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 2, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 3, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 4, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 5, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 6, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 7, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 8, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 9, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 10, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 11, e) }}>+</div>
                        </li>
                        <li className={styles.list}>
                            <div className={styles.text} onClick={(e) => { changeHandler('c1', 12, e) }}>+</div>
                        </li >
                        {/* second circle start here */}
                        <ul className={classes.circle2}>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '1', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '2', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '3', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '4', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '5', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '6', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '7', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '8', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '9', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '10', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '11', e) }}>-</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.textTwo} onClick={(e) => { changeHandler('c2', '12', e) }}>-</div>
                            </li >
                            {/* third circle start herr */}
                            <ul className={classes.circle3}>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '1', e) }}>C#</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '2', e) }}>D</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '3', e) }}>D#</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '4', e) }}>E</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '5', e) }}>F</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '6', e) }}>F#</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '7', e) }}>G</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '8', e) }}>G#</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '9', e) }}>A</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '10', e) }}>A#</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '11', e) }}>B</div>
                                </li>
                                <li className={styles.list}>
                                    <div className={styles.textThird} onClick={(e) => { changeHandler('c3', '12', e) }}>C</div>
                                </li>

                                <div className={classes.circle4}>
                                    <ul className={classes.circle5}>
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
                                    <div className={classes.circle6}><Image src={MusicBtn} alt="" /></div>
                                </div>
                            </ul>
                        </ul>
                    </ul>
                </div>
                <Grid container justify="flex-end" className={classes.bottomButtonContainer}>
                    <Grid item xs={6}><Image src={Timer} alt='' onClick={(e) => { btnHandler('Timer') }} className={classes.textLeftSide} width={70} height={70} /></Grid>
                    <Grid item xs={6} className={classes.texRightSide}><Image src={Progress} alt='' onClick={(e) => { btnHandler('Progress') }} width={70} height={70} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MusicWheel;
