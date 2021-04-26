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

const dataObject = {
    "name": "",
    "email": "",
    "address": "",
    "contact": "",
    "career": [

    ],
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
    },
    addBtnCareer: {
        cursor: 'pointer',
        '&:hover': {
            color: "#000"
        }
    }
    

}));

function Home(props) {
    const classes = useStyles();
    const [state, setState] = useState({ dataName: dataObject.name, dataEmail: dataObject.email, dataAddress: dataObject.address, dataContact: dataObject.contact, dataEducations: [...dataObject.educations], dataSocials: [...dataObject.socials], dataSkills: [...dataObject.skills], dataAchievements: [...dataObject.honors_achievements], dataProjects: [...dataObject.projects], dataECA: [...dataObject.eca], dataReferences: [...dataObject.references], dataObjective: [...dataObject.career] });
    const history = useHistory()
    const [cartqty, setCartqty] = useState(0);
    const [file, setFile] = React.useState("");
    const [stateExperiences, setStateExperiences] = useState({ dataExperiences: [...dataObject.experiences] });
    const [checked, setChecked] = useState(true);

    //   useEffect(() => {
    //     // Update the document title using the browser API
    //     setChecked(true);
    //   },[]);


    // Handles file upload event and updates state
    const handleUpload = (event) => {
        console.log("event.target.files ", event.target.files[0])
        setFile(event.target.files[0]);
        // Add code here to upload file to server
        // ...
    }

    const handleAddMore = (event_type) => {

        const dataTemplate = {
            "dataEducations": [{ "school_name": "", "major": "", "cgpa": "", "duration": "" }],
            "dataSocials": [{ "social_name": "", "social_url": "" }],
            "dataSkills": [{ "skill_title": "", "skill_desc": "" }],
            "dataProjects": [{ "project_title": "", "project_desc": "", "redirect_url": "" }],
            "dataAchievements": [{ "achievement_title": "", "achievement_desc": "", "duration": "", "redirect_url": "" }],
            "dataECA": [{ "eca_description": ""}],
            "dataReferences": [{ "ref_name": "", "ref_designation": "", "ref_email": "", "ref_mobile": "" }]
        }

        // console.log("state ", state[event_type]);

        setState((prevState) => {
            //DO WHATEVER WITH THE CURRENT STATE AND RETURN A NEW ONE
            prevState[event_type].push(dataTemplate[event_type][0]);
            return ({ ...prevState })
        }
        )
        //   setDataEducations(oldArray => [...oldArray, newElem]);
    }
    const handleChangeText = (e) => {
        // console.log("handleChangeText ", e.target.value);
        // console.log("handleChangeText ", e.target.name);

        setState((prevState) => {
            prevState[e.target.name] = e.target.value;
            return ({ ...prevState });
        })
        // console.log('state: ', state);
    }

    const handleChangeTextArray = (e, index) => {
        // console.log("handleChangeText ", e.target.value);
        // console.log("handleChangeText ", e.target.name);
        let temparray = e.target.name.split("_");

        if (temparray.length === 3) {
            temparray[1] = temparray[1] + "_" + temparray[2];
            temparray.splice(2, 1);
        }

        // console.log('temparray ', temparray);

        let arrayname = temparray[0] // dataEducation
        let key_to_change = temparray[1]; // school_name

        setState((prevState) => {
            prevState[arrayname][index][key_to_change] = e.target.value;
            return ({ ...prevState });
        })

    }

    const handleAddMoreExperience = () => {

        const dataTemplate = { "experiences": [{"company_name": "","positions": [{"pos_title": "","pos_responsibilities": [""],"pos_duration": ""}]}] }

        setStateExperiences((prevState) => {
            //DO WHATEVER WITH THE CURRENT STATE AND RETURN A NEW ONE
            prevState.dataExperiences.push(dataTemplate.experiences[0]);
            return ({ ...prevState })
        }
        )
        //   setDataEducations(oldArray => [...oldArray, newElem]);
    }

    const handleAddAnotherPosition = (e, index) => {
        // console.log("handleAddAnotherPosition ", index);

        setStateExperiences((prevState) => {
            prevState.dataExperiences[index].positions.push({
                "pos_title": "",
                "pos_duration": "",
                "pos_responsibilities": [""]
            })
            return ({ ...prevState });
        })

    }
    const handleNewResponsibilty = (e, index, ind) => {
        // console.log("handleNewResponsibilty index ind", index + ' ' + ind);

        setStateExperiences((prevState) => {
            prevState.dataExperiences[index].positions[ind].pos_responsibilities.push("");
            return ({ ...prevState });
        })
    }

    const handleChangeTextCompany = (e, index) => {
        // console.log("handleChangeTextCompany ", e.target.value);

        setStateExperiences((prevState) => {
            prevState.dataExperiences[index].company_name= e.target.value;
            return ({ ...prevState });
        })

    }

    const handleTextChangePosition = (e, index, ind) => {
        // console.log("handleTextChangePosition ", e.target.value);
        // console.log("handleTextChangePosition ", e.target.name);
        // console.log("handleTextChangePosition ", index);
        

        setStateExperiences((prevState) => {
            prevState.dataExperiences[index].positions[ind][e.target.name] = e.target.value;
            return ({ ...prevState });
        })

    }

    const handleTextChangeResponsibility = (e, index, ind, i) => {
        // console.log("handleTextChangePosition ", e.target.value);
        // console.log("handleTextChangePosition ", e.target.name);
        // console.log("handleTextChangePosition ", index);
        // console.log("handleTextChangePosition ", ind);
        // console.log("handleTextChangePosition ", i);
        
        setStateExperiences((prevState) => {
            prevState.dataExperiences[index].positions[ind].pos_responsibilities[i] = e.target.value;
            return ({ ...prevState });
        })

    }
    const handlePersonalize = () => {
        // console.log("handlePersonalize");
        history.push({
            pathname: '/personalize',
            state: { data: state, dataExp: stateExperiences, imagefile: file }
        })
    }

    const handleAddCareerObjective = (event_type) => {

        const dataTemplate = {
            "dataObjective": [{ "description": ""}]
        }
        document.getElementById("addbtncareer").style.display = 'none';

        // console.log("state ", state[event_type]);

        setState((prevState) => {
            //DO WHATEVER WITH THE CURRENT STATE AND RETURN A NEW ONE
            prevState[event_type].push(dataTemplate[event_type][0]);
            return ({ ...prevState })
        }
        )
        //   setDataEducations(oldArray => [...oldArray, newElem]);
    }


    return (
        <div className={classes.root}>
            {/* {console.log('state ', state)} */}
            {/* {console.log('stateExperiences ', stateExperiences)} */}

            {/* <Snackbar anchorOrigin={{vertical, horizontal}} open={openalert} autoHideDuration={2000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success">
              Order placed successfully!
            </Alert>
          </Snackbar>
          <Snackbar anchorOrigin={{vertical, horizontal}} open={infoAlert} autoHideDuration={2000} onClose={handleCloseInfoAlert}>
            <Alert onClose={handleCloseInfoAlert} severity="info">
              Feature coming soon!
            </Alert>
          </Snackbar> */}
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

                        <div style={{textAlign:'center'}}>
                            <img src={Logo} height="100px" width="85px" />                       

                        </div>
                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="h6">Basic</Typography>
                              
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField value={state.dataName} onChange={handleChangeText} name="dataName" fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder="Name" />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField value={state.dataEmail} onChange={handleChangeText} name="dataEmail" fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder="Email" />
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
                                    <TextField value={state.dataContact} onChange={handleChangeText} name="dataContact" fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder="Contact No" />
                                </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>

                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField value={state.dataAddress} onChange={handleChangeText} name="dataAddress" fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder="Address" />
                                </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>

                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8} style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple={false}
                                    onChange={handleUpload}
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" style={{ backgroundColor: '#2F4454', color: '#FFF', marginRight: '5px', textTransform: 'capitalize' }} component="span">
                                        <PhotoCameraIcon style={{marginRight:'5px'}}/>{'Upload'}
                                    </Button>
                                </label>
                                <Typography variant="body2" style={{ maxWidth: '40%', fontSize: '0.75em', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{file.name}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>

                        </Grid>
                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* career objective */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Career Objective</Typography>
                                    </Grid>
                                    <Grid item id="addbtncareer">
                                        <AddCircleOutlineIcon className={classes.addBtnCareer} onClick={() => handleAddCareerObjective("dataObjective")} />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>

                        {
                            state.dataObjective.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataObjective_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </div>

                            )
                            )
                        }


                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* education */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Education</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataEducations")} />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>

                        {
                            state.dataEducations.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataEducations_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </div>

                            )
                            )
                        }


                        <Divider light variant="middle" style={{ margin: '20px' }} />

                        {/* socials */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Socials</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataSocials")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>


                        {
                            state.dataSocials.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataSocials_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }

                                </div>

                            )
                            )
                        }


                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* skills */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Skills</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataSkills")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>

                        {
                            state.dataSkills.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataSkills_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }

                                </div>

                            )
                            )
                        }

                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* projects */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Projects</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataProjects")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>
                        {
                            state.dataProjects.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataProjects_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </div>

                            )
                            )
                        }

                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* achievemtns */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Achievements</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataAchievements")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>

                        {
                            state.dataAchievements.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataAchievements_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </div>
                            )
                            )
                        }

                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* experiences */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Experiences</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={handleAddMoreExperience} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>



                        {
                            stateExperiences.dataExperiences.map((val, index) => (
                                <div key={index} style={{ marginBottom: '48px' }}>
                                    <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={val.company_name} onChange={(e) => handleChangeTextCompany(e,index)} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={`company_name ` + `${index + 1}`} />
                                        </Grid>
                                        <Grid item xs={12} sm={2}>
                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ display: 'flex', marginBottom: '8px', marginTop: '20px' }}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Grid container spacing={1} alignItems="center">
                                                <Grid item >
                                                    <Typography variant="h6" style={{ fontSize: '16px' }}>Positions</Typography>
                                                </Grid>
                                                <Grid item >
                                                    <AddCircleOutlineIcon style={{ fontSize: '16px' }} className={classes.addBtn} onClick={(e) => handleAddAnotherPosition(e, index)} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={2}>
                                        </Grid>
                                    </Grid>

                                    {
                                        val.positions.map((item, ind) => (
                                            <div key={ind} style={{ marginTop: '16px' }}>
                                                {/* {console.log(item)} */}
                                                <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                                    <Grid item xs={12} sm={2}>
                                                    </Grid>
                                                    <Grid item xs={12} sm={8}>
                                                        <Typography variant="subtitle2">{'Position ' + `${ind + 1}`}</Typography>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={6}>
                                                                <TextField value={item.pos_title} onChange={(e)=>handleTextChangePosition(e,index,ind)} name="pos_title" fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={`pos_title ` + `${ind + 1}`} />

                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <TextField value={item.pos_duration} onChange={(e)=>handleTextChangePosition(e,index,ind)} name="pos_duration" fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={`pos_duration ` + `${ind + 1}`} />

                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={2}>
                                                    </Grid>
                                                </Grid>
                                           

                                                <Grid container style={{ display: 'flex', marginBottom: '8px', marginTop: '16px' }}>
                                                    <Grid item xs={12} sm={2}>
                                                    </Grid>
                                                    <Grid item xs={12} sm={8}>
                                                        <Grid container spacing={1} alignItems="center">
                                                            <Grid item >
                                                                <Typography variant="h6" style={{ fontSize: '16px' }}>Responsibilities</Typography>
                                                            </Grid>
                                                            <Grid item >
                                                                <AddCircleOutlineIcon style={{ fontSize: '16px' }} className={classes.addBtn} onClick={(e) => handleNewResponsibilty(e, index, ind)} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={2}>
                                                    </Grid>
                                                </Grid>

                                                {
                                                    item.pos_responsibilities.map((v, i) => (
                                                        <Grid key={i} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                            <Grid item xs={12} sm={2}>
                                                            </Grid>
                                                            <Grid item xs={12} sm={8}>
                                                                <TextField value={v} onChange={(e)=>handleTextChangeResponsibility(e,index,ind,i)} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={`position ` + `${ind + 1}` + ' resp ' + `${i + 1}`} />
                                                            </Grid>
                                                            <Grid item xs={12} sm={2}>
                                                            </Grid>
                                                        </Grid>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }

                                </div>
                            )
                            )
                        }

                        <Divider light variant="middle" style={{ margin: '20px' }} />



                        {/* eca */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">Extra-Curricular Activities</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataECA")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>
                        {
                            state.dataECA.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataECA_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </div>

                            )
                            )
                        }

                        <Divider light variant="middle" style={{ margin: '20px' }} />


                        {/* references */}
                        <Grid container style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container justify="space-between" spacing={1} alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">References</Typography>
                                    </Grid>
                                    <Grid item >
                                        <AddCircleOutlineIcon className={classes.addBtn} onClick={() => handleAddMore("dataReferences")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                        </Grid>
                        {
                            state.dataReferences.map((val, index) => (
                                <div key={index} style={{ marginBottom: '24px' }}>
                                    {
                                        Object.keys(val).map((item, ind) => (
                                            <Grid key={ind} container style={{ display: 'flex', marginBottom: '8px' }}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                                <Grid item xs={12} sm={8}>
                                                    <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataReferences_" + item} fullWidth InputProps={{ classes: { input: classes.resize } }} variant="outlined" placeholder={item + ' ' + `${index + 1}`} />
                                                </Grid>
                                                <Grid item xs={12} sm={2}>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </div>

                            )
                            )
                        }

                        <Divider light variant="middle" style={{ margin: '20px' }} />

                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                                            <Grid item xs={12} sm={2}>
                                                            </Grid>
                                                            <Grid item xs={12} sm={8}>
                                                                <Button onClick={handlePersonalize} fullWidth variant="contained" style={{backgroundColor: '#2F4454', color:'#FFF'}}>Proceed</Button>
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

export default Home;