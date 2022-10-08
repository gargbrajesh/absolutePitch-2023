import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import MusicImg from '../../../public/assets/images/musicImg.gif'
const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    videoCard: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background: '#333 !important',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px 15px 15px 25px !important',
        height:'80vh',
    },
});
const WatchVideo = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.videoCard}>
                <Image src={MusicImg} alt='...' width={600} height={450} />
            </Grid>
        </Grid>
    )
}

export default WatchVideo;
