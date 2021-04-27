import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Fade from '@material-ui/core/Fade';
import LogoSquare from './logosquare.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        overflowX: 'hidden',
        backgroundColor: '#2F4454',
        color: '#FFF'
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
    },
    copyright:{
        fontSize: '12px',
        color: "lightgrey",
        marginTop: theme.spacing(10)
    },
    link:{
        color: 'lightgrey',
        textDecoration: 'none',
        '&:hover': {
            color: '#FFF',
        },
    },


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
            history.push('/home');

        }, 2000);

    }, []);


    return (
        <div className={classes.root}>
            <Fade
                in={checked}
                timeout={1000}
            >
                <Grid container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
                    
                    <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={LogoSquare} height="225px" width="220px" />
                        <Typography variant="body1" style={{ marginTop: '0', paddingTop: '0', fontSize: '1.25rem' }}>{'RESUME GEN'}</Typography>
                    </Grid>

                    <Grid item style={{ bottom: '0' }}>
                        <Typography className={classes.copyright} align="center">
                            {'© ResumeGen |'}
                            <a className={classes.link} href={"https://waqqasiqbal.com"} target={"__blank"} > Waqqas Iqbal</a>
                            {' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Grid>

                </Grid>

            </Fade>
        </div>
    );
}

export default SplashScreen;