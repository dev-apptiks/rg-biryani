import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// import itemData from './itemData';
import './image.css'
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    //   root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'space-around',
    //     overflow: 'hidden',
    //     backgroundColor: theme.palette.background.paper,
    //   },
    root: {
        display: "flex",
        width: "95%",
        padding: "5px",
        margin: "10px",
        height: "100px"
    },
    imgcss: {
        position: 'absolute',
        paddingRight: '100px',
        //    marginLeft:'70px'
    },
    textcss: {
        textAlign: 'center',
        paddingTop: '30%'
    }


}));


export default function BasicImageList() {

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container className={classes.imgcss}  >

                <Grid item xs={12} md={6} lg={6}>
                    <Typography className={classes.textcss} variant="h4" > Delicious Biryaaaaaaani at your cost </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    <img height={400} width={600} src="https://www.thedeliciouscrescent.com/wp-content/uploads/2020/12/Lamb-Biryani-3.jpg" alt="image" />
                </Grid>
            </Grid>
        </div>
    );
}
