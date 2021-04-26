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
import Logo from './logo.png'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

const dataObject = {
    "name": "",
    "email": "",
    "address": "",
    "contact": "",
    "educations": [
       
    ],
    "socials": [
     
    ],
    "skills": [
      
    ],
    "projects": [
     
    ],
    "honors_achievements": [
        
    ],
    "experiences": [
        
    ],
    "eca": [
       
    ],
    "references": [
       
    ]
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        overflowX: 'hidden',
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
    }
    

}));

function Personalize(props) {
    const classes = useStyles();
    const [state, setState] = useState(props.location.state.data);
    const history = useHistory()
    const [cartqty, setCartqty] = useState(0);
    const [file, setFile] = useState(props.location.state.imagefile)
    const [stateExperiences, setStateExperiences] = useState(props.location.state.dataExp);
    const [checked, setChecked] = useState(true);
    const [sequence, setSequence] = useState([
        {"name":"dataEducations","len": state.dataEducations.length},
        {"name":"dataAchievements","len": state.dataAchievements.length},
        {"name":"dataProjects","len": state.dataProjects.length},
        {"name": "dataSkills", "len": state.dataSkills.length}, 
        {"name":"dataECA","len": state.dataECA.length},
        {"name":"dataReferences","len": state.dataReferences.length}
    ]);
    const [sectionFrom, setSectionFrom] = useState('None');
    const [sectionTo, setSectionTo] = useState('None');
    const [namefont, setNamefont] = useState('22px');

    const [open, setOpen] = React.useState(false);
    const vertical = 'top';
    const horizontal = 'center';

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    
    //   useEffect(() => {
    //     // Update the document title using the browser API
    //     setChecked(true);
    //   },[]);


    const handleGenResume = () => {
        // console.log("handleGenResume");
        history.push({
            pathname: '/resume',
            state: { data: state, dataExp: stateExperiences, imagefile: file, sequence: sequence, namefont: namefont }
        })
    }

    const handleSwapOrder = () =>{
        // console.log('swap order handler' , sectionFrom + ' , to: '+ sectionTo)

        if (sectionFrom === 'None' || sectionTo === 'None'){
            setOpen(true);
        }
        else {
            let temp = [...sequence];

            let t = temp[sectionFrom];
            temp[sectionFrom] = temp[sectionTo];
            temp[sectionTo] = t;
    
            setSequence(temp);
        }
    }

    const handleSelectChangeFrom = (e) => {
        // console.log('handleSelectChangeFrom ', e.target.value);
        setSectionFrom(e.target.value);
    }
    const handleSelectChangeTo = (e) => {
        // console.log('handleSelectChangeTo ', e.target.value);
        setSectionTo(e.target.value);
    }
    const handleChangeFont = (e) => {
        setNamefont(e.target.value);
    }


    return (
        <div className={classes.root}>
            {/* {console.log('state ', state)} */}
            {/* {console.log('sequence ', sequence)} */}
            {/* {console.log('stateExperiences ', stateExperiences)} */}

            {/* <Snackbar anchorOrigin={{vertical, horizontal}} open={openalert} autoHideDuration={2000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success">
              Order placed successfully!
            </Alert>
          </Snackbar> */}
          <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClick} severity="warning">
              Please select from valid sections
            </Alert>
          </Snackbar>
            <Navbar cartQuantity={1} />
            <Fade
                                        in={checked}
                                        timeout={1000}
                                    >
            <Grid container justify="center" spacing={1} style={{ marginTop: '8vh' }}>
           
                {/* <Grid item xs={12}>
              <Paper className={classes.paper}><h2 className={classes.headerText}>Let's get started</h2></Paper>
            </Grid> */}
                <Grid item sm={8} xs={12}>
                    <Paper className={classes.paper}>
                        {/* <img style={{alignSelf:'center'}} src={peyalalogo} width="70" height="70"  /> */}

                        {/* <p className={classes.title} style={{marginBottom:'20px'}}>Fill in the details as required</p> */}

                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="h6">{'Name font size'}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                </Grid>
                                <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                    
                                                    <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={namefont}
                                                    onChange={handleChangeFont}
                                                    >
                                                    <MenuItem value={'16px'}>{'16 pts'}</MenuItem>
                                                    <MenuItem value={'18px'}>{'18 pts'}</MenuItem>
                                                    <MenuItem value={'20px'}>{'20 pts'}</MenuItem>
                                                    <MenuItem value={'22px'}>{'22 pts'}</MenuItem>
                                                    <MenuItem value={'24px'}>{'24 pts'}</MenuItem>
                                                    <MenuItem value={'26px'}>{'26 pts'}</MenuItem>
                                                    <MenuItem value={'28px'}>{'28 pts'}</MenuItem>
                                                    <MenuItem value={'30px'}>{'30 pts'}</MenuItem>
                                                
                                                    </Select>
                                                </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                </Grid>

                        <Divider light variant="middle" style={{ margin: '20px' }} />
                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="h6">{'Current sequence of sections'}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                </Grid>
                        {
                            sequence.map((item, idx) => {
                                if (item.len > 0) {
                                    return (<Grid container style={{ display: 'flex' }}>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <ul>
                                            <li>{item.name.slice(4)}</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                </Grid>)
                                }
                                
                            }
                            )
                        }
                         
                                   <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography style={{marginTop:'10px'}} variant="body1">{'Swap order of sections'}</Typography>
                                        <Grid container>
                                            <Grid item xs={6} sm={6}>
                                                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                    
                                                    <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={sectionFrom}
                                                    onChange={handleSelectChangeFrom}
                                                    >
                                                    <MenuItem value={'None'}>{'None'}</MenuItem>

                                                        {
                                                            sequence.map((val, idx) => {
                                                                if (val.len > 0){
                                                                    return (<MenuItem value={idx}>{val.name.slice(4)}</MenuItem>)
                                                                }
                                                                
                                                            })
                                                        }
                                                
                                                    </Select>
                                                </FormControl>

                                            </Grid>
                                            <Grid item xs={6}>
                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                    
                                                    <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={sectionTo}
                                                    onChange={handleSelectChangeTo}
                                                    
                                                    >
                                                        <MenuItem value={'None'}>{'None'}</MenuItem>
                                                        {
                                                            sequence.map((val, idx) => {
                                                                if (val.len > 0){
                                                                    return (<MenuItem value={idx}>{val.name.slice(4)}</MenuItem>)
                                                                }
                                                                
                                                            })
                                                        }
                                                
                                                    </Select>
                                                </FormControl>
                                                
                                            </Grid>
                                        </Grid>
                                        
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                    </Grid>
                                </Grid>


                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Button onClick={handleSwapOrder} variant="contained" style={{backgroundColor: '#2F4454', color:'#FFF'}}>Swap Order</Button>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>
                        <Divider light variant="middle" style={{ margin: '20px' }} />

                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                                            <Grid item xs={12} sm={2}>
                                                            </Grid>
                                                            <Grid item xs={12} sm={8}>
                                                                <Button onClick={handleGenResume} fullWidth variant="contained" style={{backgroundColor: '#2F4454', color:'#FFF'}}>Generate Resume</Button>
                                                            </Grid>
                                                            <Grid item xs={12} sm={2}>
                                                            </Grid>
                                                        </Grid>

                    </Paper>
                </Grid>

            </Grid>
            </Fade>
        </div>
    );
}

export default Personalize;