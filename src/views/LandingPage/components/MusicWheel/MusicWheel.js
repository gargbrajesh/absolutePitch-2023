import { Grid } from '@mui/material'
import React ,{useState} from 'react';
import styles from './circles.module.css';
import { makeStyles } from '@mui/styles';
// import MusicBtn from '../../../../public/assets/images/mainBtn.jpg';
import MusicBtn from '../../../../../public/assets/images/mainBtn.jpg';
import Mix from '../../../../../public/assets/images/mix4x.png';
import Tempo from '../../../../../public/assets/images/tempo4x.png';
import Timer from '../../../../../public/assets/images/timer4x.png';
import Progress from '../../../../../public/assets/images/progress4x.png';
import Image from "next/image";
import DropDown from '../../../../components/organisms/Dropdown/index';
import { Label } from '@mui/icons-material';

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

        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '125px',
        marginTop: '-25px',
        '@media (min-width: 1280px) and (max-width:1680px)': {
            marginLeft: '235px',
            marginTop: '100px',
        },
        '@media (min-width: 600px) and (max-width:768px)': {
            marginLeft: '30%',
            marginTop: '100px',
        },
        '@media (min-width: 380px) and (max-width:425px)': {
            marginLeft: '8%',
            marginTop: '20%',
        },
        '@media (max-width:375px)': {
            marginLeft: '3%',
            marginTop: '20%',
        }

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

        '@media (min-width: 1280px) and (max-width:1680px)': {
            marginTop: '130px',
        },
        '@media (min-width: 600px) and (max-width:768px)': {

            marginTop: '70px',
        },
        '@media (min-width: 380px) and (max-width:425px)': {

            marginTop: '90px',
        },
        '@media (max-width:375px)': {
            marginTop: '90px',
        },
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
        // boxShadow: "6px 4px 2px #403b3bd9",
        background: '#333 !important',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px 15px 15px 25px !important',
        height: '80vh',
        '@media (min-width: 1280px) and (max-width:1680px)': {

        },
        '@media (min-width: 600px) and (max-width:768px)': {

            margin: '25px 15px 15px 25px !important',
        },
        '@media (min-width: 380px) and (max-width:425px)': {

            margin: '25px 15px 15px 25px !important',
        },
        '@media (max-width:375px)': {
            margin: '25px 15px 15px 25px !important',
        },
    },

    select: {
        background: '#0082cf',
        color: 'white',
    }
});
const MusicWheel = (props) => {

    const [nord, setNord] = useState({'c1':[],'c2':[],'c3':[]})
    const [songsData, setSongsData] = useState([])
    const [tempo, SetTempo] = useState('')
    const [intensity, SetIntensity] = useState('')
    const [nordData, setNordData] = useState('')
    const [tempoIndex, setTempoIndex] = useState(0)
    const [intensityIndex, setIntensityIndex] = useState(0)
    

  
    const classes = useStyles();
    const circleOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const tempData = {'None':'','Calm':'calm','Lively':'lively','Mellow':'mellow','Moderate':'moderate'}
    const intensityData = {'None':'','HI':'hi','LI':'li','MI':'mi'}
    const tempoData = ['','Calm','Lively', 'Mellow', 'Moderate']
    const intensityData1 = ['','HI','LI','MI']


    const arryOne = ['c1', 'c2', 'c3']
    const data = {'c1':['+','+','+','+','+','+','+','+','+','+','+','+'],
                'c2':['-','-','-','-','-','-','-','-','-','-','-','-'],
                'c3':['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#','A', 'A#', 'B', 'C ']
               }
    const nordMap = {'+':'M', '-':'m','#':'b'}
        


    function changeHandler(c, ind,event) {
       console.log("event is", event, circleOne)
       const temp = {...nord}
       const count = [...temp['c1'], ...temp['c2'], ...temp['c3']]?.length || 0
        if (['c1','c2','c3'].includes(c)) {
            if (temp[c].indexOf(ind)==-1 && count <3){
                temp[c].push(ind)
                setNord(temp)
                
                setNordData(nordData+data[c][ind])
                console.log("dd",nordData)
            }
            else if(temp[c].indexOf(ind)>-1 ){
                const nordIndex = temp[c].indexOf(ind);
                temp[c].splice(nordIndex,1)
                setNord(temp)
                console.log("popo",nordData,data[c][nordIndex],data[c][ind])
                const final_node = nordData.replace(data[c][ind],'')
                console.log("final_node",final_node)
                setNordData(final_node)

            }
        }
    }
    async function btnHandler(type) {
        if (type=="Tempo"){
        // console.log("sggs", tempoIndex,tempoData, tempoData.length, tempoData[tempoIndex])

             if (tempoIndex==tempoData.length-1){
                setTempoIndex(0)
             }
             else{
                setTempoIndex(tempoIndex+1)
             }
        }
        if (type=="Intensity"){
            // console.log("sggs", tempoIndex,tempoData, tempoData.length, tempoData[tempoIndex])
    
                 if (intensityIndex==intensityData1.length-1){
                    setIntensityIndex(0)
                 }
                 else{
                    setIntensityIndex(intensityIndex+1)
                 }
            }
           await fetchSongsData()
      
    }
    function handleDropDownChange(value,type){
        if (value != ''){
            if (type=="Tempo"){
                SetTempo(value)
            }
            if (type=="Intensity"){
                SetIntensity(value)
            }
        }
        
        console.log(value,type)
    }

    function getNord(){
        console.log("nordData",nordData)
        let str = nordData
        for (let val of nordData){
            if (nordMap[val]){
                str = nordData.replace(val,nordMap[val])
                // console.log("final",final_str)
                // str +=final_str
            }
        }
       console.log("str", str)
        return str;
    }

    function handleClickSong(song_data){
        console.log("file name", song_data)
        props.handleSong(song_data)
    }

    function fetchSongsData() {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "PHPSESSID=ckmj4nc6enk1u3e0rle62m3l64");

        
        const nord_or_cord = getNord()
        console.log("sggs", tempoIndex, tempoData[tempoIndex])
        var urlencoded = new URLSearchParams();
    
        urlencoded.append("songs", "1");
        urlencoded.append("note_or_cord", nord_or_cord);
        urlencoded.append("song_title", "");
        urlencoded.append("groups", "");
        urlencoded.append("no_of_images", "");
        urlencoded.append("duration", "");
        urlencoded.append("intensity", intensityData1[intensityIndex]);
        urlencoded.append("tempo",  tempoData[tempoIndex]);
        urlencoded.append("image_type", "");
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
    
        fetch("http://3.109.132.173/development/absolute/appdata/webservice.php", requestOptions)
          .then(response => response.json())
          .then((responseJson) => {
    
            if (responseJson != '') {
              console.log("response",responseJson);
            //   var dataSong = responseJson.data[0];
              setSongsData(responseJson.data);
            //   console.log(dataSong);
            } else {
              alert('error in response');
            }
          });
    
      }

    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.circleCard}>
                <Grid container className={classes.topButtonContainer}>
                    <Grid item xs={6} className={classes.textLeftSide}>
                        <Image src={Mix} alt='' onClick={(e) => { btnHandler('Intensity') }} width={70} height={70} />
                        <label>{intensityData1[intensityIndex]} </label>
                    <DropDown label="Tempo" data={tempData} onChange={handleDropDownChange} />
                    <DropDown label="Intensity" data={intensityData} onChange={handleDropDownChange} />
                    </Grid>
                    <Grid item xs={6} className={classes.texRightSide}>
                        <Image src={Tempo} alt='' onClick={(e) => { btnHandler('Tempo') }} width={70} height={70} />
                        <label>{tempoData[tempoIndex]}</label>
                        </Grid>
                </Grid>
                <div className={classes.mainCircle}>
                    <ul className={classes.circle} >
                        {data['c1'].map((val,ind)=>
                            <li key={classes.circle + '-' + ind} className={styles.list}> 
                            <div className={`${styles.text} ${ nord['c1'].includes(ind) ? styles.bluebg: ''}`} onClick={(e)=>changeHandler('c1', ind,e) }>{val}</div>
                            </li>
                            )}

                        {/* second circle start here */}
                        <ul className={classes.circle2}>
                                {data['c2'].map((val,ind)=>
                                    <li key={classes.circle2 + '-' + ind} className={styles.list}> 
                                    <div className={`${styles.textTwo} ${ nord['c2'].includes(ind) ? styles.bluebg: ''}`} onClick={(e) => changeHandler('c2', ind, e) }>{val} { nord['c2'].includes(val)}</div>
                                </li>
                                )}
                            {/* third circle start herr */}
                        <ul className={classes.circle3}>
                            {data['c3'].map((val,ind)=>
                                <li key={classes.circle3 + '-' + ind} className={styles.list}> 
                                <div className={`${styles.textThird} ${ nord['c3'].includes(ind) ? styles.bluebg: ''}`} onClick={(e) => changeHandler('c3', ind, e) }>{val}</div>
                            </li>
                            )}

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
                                    <div className={classes.circle6}><Image src={MusicBtn} alt="" onClick={(e) => { fetchSongsData() }} /></div>
                                </div>
                            </ul>
                        </ul>
                    </ul>
                </div>
                <div className={styles.songsWrapper}>
                    <ul>
                        {songsData && songsData.length>0?
                        songsData.slice(0,10).map((val,ind)=>
                            <li key={'songs' + ind} onClick={()=>handleClickSong(val)}>{val['song_name']}</li>
                        ): 'No Songs Found'}
                   
                        <li></li>)
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
