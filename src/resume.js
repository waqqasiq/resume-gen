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
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailIcon from '@material-ui/icons/Email';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ReactToPdf from 'react-to-pdf';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
        overflowY: 'auto'
    },
    headerText: {
        color: '#3B6142'
    },
    leftHome: {
        // backgroundImage: `url(${HomeImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
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
    rightHomeTop: {
        //   height: '10vh'
        backgroundColor: '#F1F1F2',
        margin: theme.spacing(2)
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
    line: {
        borderTop:'1px solid lightgrey',
        marginTop:'5px',
        height:'5px',
      },
    

}));

function Resume(props) {
    const classes = useStyles();
    // const [state, setState] = useState(props.state);
    const history = useHistory()
    const [cartqty, setCartqty] = useState(0);
    // const [stateExperiences, setStateExperiences] = useState(props.stateExperiences);
    const [checked, setChecked] = useState(true);
    const [state, setState] = useState(props.location.state.data)
    console.log('props location ', props.location)
    const [stateExperiences, setStateExperiences] = useState(props.location.state.dataExp)
    const [file, setFile] = useState(props.location.state.imagefile)
    
    const ref = React.createRef();
    //   useEffect(() => {
    //     // Update the document title using the browser API
    //     // setChecked(true);
    //     console.log("state ", state);

    //   },[]);


    // Handles file upload event and updates state
    const handleUpload = (event) => {
        console.log("event.target.files ", event.target.files[0].name)
        setFile(event.target.files[0]);
        // Add code here to upload file to server
        // ...
    }

   


    return (
        <div className={classes.root}>
          
            <Navbar />
            <Fade
                in={checked}
                timeout={1000}
            >
                <Grid container justify="center" spacing={1} style={{ marginTop: '8vh' }}>

                    <Paper style={{backgroundColor: 'gainsboro', margin:'10px 0px', width: 'calc(100% - 850px)', height: '297mm'}}>
                        <ReactToPdf targetRef={ref} filename="myresume.pdf">
                            {({toPdf}) => (
                                <Button variant="contained" onClick={toPdf} style={{backgroundColor:'#2F4454', color:'#FFF'}}>Generate pdf</Button>
                            )}
                        </ReactToPdf>
                    </Paper>

                     
                    <div ref={ref} square style={{ marginTop:'10px', width: '210mm', height: '297mm', border:'1px solid lightgrey'}}>

                        <Grid container justify="space-between" style={{paddingTop: '25.4mm', paddingRight:'19.1mm', paddingLeft:'19.1mm', paddingBottom: '32px'}}>
                            <Grid item xs={9}>
                                <Grid container >
                                        <Grid item xs={12} style={{marginBottom:'10px'}}>
                                        <Typography style={{ fontSize:'1.8rem', fontWeight: 'bold'}}  variant="h4">{state.dataName}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{marginBottom: '6px'}}>
                                        <Grid container style={{display:'flex'}} >
                                            <HomeRoundedIcon style={{fontSize:'16px', marginRight:'4px'}}/>
                                            <Typography style={{textAlign:'center', fontSize:'0.9rem'}}  variant="h4">{state.dataAddress}</Typography>
                                        </Grid>
                                        
                                    </Grid>
                                    <Grid item xs={12} style={{marginBottom: '6px'}}>
                                        <Grid container style={{display:'flex'}}  >
                                            <CallRoundedIcon style={{fontSize:'16px', marginRight:'4px'}}/>
                                            <Typography style={{textAlign:'center', fontSize:'0.9rem'}}  variant="h4">{state.dataContact + ' | '}</Typography>

                                            <EmailOutlinedIcon style={{fontSize:'16px', marginRight:'4px', marginLeft:'4px'}}/>
                                            <Typography style={{textAlign:'center', fontSize:'0.9rem'}}  variant="h4">{state.dataEmail}</Typography>
                                        </Grid>
                                        
                                    </Grid>
                                    <Grid item xs={12} style={{marginBottom: '6px'}}>
                                        <Grid container style={{display:'flex'}}  >
                                            <WorkOutlineOutlinedIcon style={{fontSize:'16px', marginRight:'4px'}}/>
                                            <Typography style={{textAlign:'center', fontSize:'0.9rem'}}  variant="h4">{state.dataSocials[0].social_url + ' | '}</Typography>

                                            <PersonOutlinedIcon style={{fontSize:'16px', marginRight:'4px', marginLeft:'4px'}}/>
                                            <Typography style={{textAlign:'center', fontSize:'0.9rem'}}  variant="h4">{state.dataSocials[1].social_url}</Typography>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={2} style={{border:'1px solid lightgrey'}}>
                                <img width="auto" height="108px" src={URL.createObjectURL(file)} />
                            </Grid>
                           
                        </Grid>

                        <Grid container style={{paddingLeft: '19.1mm', paddingRight:'19.1mm'}}>
                            <Grid item xs={12} >
                                    <Typography style={{fontSize:'1.2rem', color:'#202020', fontWeight:'bold'}}  variant="h4">{'Work Experience'}</Typography>
                            </Grid>
                            <Grid item xs={12} style={{marginBottom: '4px'}}>
                                <div className={classes.line}></div>
                            </Grid>

                            {
                                stateExperiences.dataExperiences.map((val, index) => (
                                        <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                            <Grid item >
                                                <ArrowRightOutlinedIcon />
                                            </Grid>
                                            <Grid item >
                                                <Typography variant="body1" style={{fontSize:'1rem', fontWeight:'bold'}}>{val.company_name}</Typography>
                                            </Grid>
                                                {
                                                    val.positions.map((pos, pos_ind) => (
                                                        <Grid container style={{marginBottom:'8px'}}>
                                                            <Grid container justify="space-between">
                                                                <Grid item style={{marginLeft:'1.5rem'}}>
                                                                    <Typography variant="body1" style={{fontSize:'0.9rem', fontWeight:'bold'}}>{pos.pos_title}</Typography>
                                                                </Grid>
                                                                <Grid item style={{marginLeft:'1.5rem'}}>
                                                                    <Typography variant="body1" style={{fontSize:'0.85rem'}}>{pos.pos_duration}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                             
                                                             {
                                                                 pos.pos_responsibilities.map((resp, i) => (
                                                                    <Grid container style={{marginTop:'-10px', marginBottom:'-16px', marginLeft:'16px'}}>
                                                                            <ul>
                                                                                <li style={{fontSize:'0.9rem'}}>{resp}</li>
                                                                            </ul>
                                                                            {/* <Typography variant="body1" style={{fontSize:'0.9rem'}} >{}</Typography> */}
                                                                    </Grid>
                                                                 ))
                                                             }
                                                        </Grid>
                                                        
                                                    ))
                                                }

                                        </Grid>
                                    
                                ))
                            }
                    

                        </Grid>

                    </div>
                


                </Grid>
            </Fade>
        </div>
    );
}

export default Resume;