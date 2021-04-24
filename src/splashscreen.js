import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import React, { useState, useEffect } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// import 'moment';
// import DateFnsUtils from '@date-io/moment';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import { useHistory } from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';
// import InfoIcon from '@material-ui/icons/Info';
// import { green } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Alert from '@material-ui/lab/Alert';
// import Snackbar from '@material-ui/core/Snackbar';
import Divider from '@material-ui/core/Divider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
// import Collapse from '@material-ui/core/Collapse';
// import Zoom from '@material-ui/core/Zoom';
import LogoCircleWithName from './logocirclewithname.png';
import LogoCircle from './logocircle.png';
import LogoSquare from './logosquare.png';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        overflowX: 'hidden',
        backgroundColor:'#2F4454',
        color:'#FFF'
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
        minHeight: '87vh',
        maxHeight: '87vh',
        overflowY: 'auto'
    },
    headerText: {
        color: '#3B6142'
    },
    title: {
        marginTop: '1px',
        marginRight: '20px',
        marginLeft: '20px',
        marginBottom: '10px',
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'Arial',
        fontSize: '22px'
    },
    socialLinks: {
        listStyleType: 'none',
    },
    formControl: {
        marginBottom: theme.spacing(2),
    },
    notchedOutline: {
        border: "1px solid #91b698!important",
        color: 'grey !important',
        height: '50px'
    },
    typoCss: {
        fontSize: '0.80em', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px',
        ['@media (max-width: 768px)']: { // for desktop or larger screen width
            alignItems: 'flex-start',
            fontSize: '0.75em',
            gap: '1px'
        },

    },
    formCss: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none'
    },
    resize: {
        height: '5px',
        fontSize: '0.85em'
    },
    addBtn: {
        cursor: 'pointer',
        '&:hover': {
            color: "#000"
        }
    }
    

}));



function SplashScreen(props) {
    const classes = useStyles();
    const history = useHistory()
    const [checked, setChecked] = useState(true);
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(5);
  
    useEffect(() => {
        const timer = setInterval(() => {

            // the following two lines of code get executed 2s later
            clearInterval(timer);
            // history.push('/home');

        }, 2000);
        
      }, []);
    

    // const handleTimer = () => {
    //     clearInterval(this.Interval)
    //     this.Interval=setInterval(() => {
    //             history.push({pathname:'/home'});
    //     },2000)}



    return (
        <div className={classes.root}>
            <Fade
                in={checked}
                timeout={1000}
            >
                <Grid container style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh' }}>
                    {/* <Grid item xs={12}>
                <Paper className={classes.paper}><h2 className={classes.headerText}>Let's get started</h2></Paper>
                </Grid> */}
                    <Grid item style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        
                        <img src={LogoSquare} height="225px" width="220px"/>
                        <Typography variant="body1" style={{marginTop:'0', paddingTop:'0', fontSize:'1.25rem'}}>{'RESUME GEN'}</Typography>
                        
                    </Grid>
                    

                </Grid>
            </Fade>
        </div>
    );
}

export default SplashScreen;