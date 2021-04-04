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
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Divider from '@material-ui/core/Divider';

// const dataObject = {
//     "dataName": "Name",
//     "dataEducations": [
//         {
//             "school_name": "School Name",
//             "major": "Major",
//             "cgpa": "CGPA",
//             "duration":"Duration"
//         },
//         {
//             "school_name": "School Name",
//             "major": "Major",
//             "cgpa": "CGPA",
//             "duration":"Duration"
//         }
//     ]
// }

const dataObject = {
        "name": "Name",
        "email": "Email",
        "address": "Address",
        "educations": [
            {
                "school_name": "",
                "major": "",
                "cgpa": "",
                "duration":""
            }
        ],
        "socials": [
            {
                "socail_name": "",
                "social_url": ""
            }
        ],
        "skills": [
            {
                "skill_title": "",
                "skill_desc": ""
            }
        ],
        "projects": [
			{
				"project_title": "",
				"project_desc": "",
				"redirect_url": ""
			}
		],
        "honors_achievements": [
			{
				"achievement_title": "",
				"achievement_desc": "",
				"duration": "",
				"redirect_url": ""
			}
		],
        "experiences": [
            {
                "company_name": "",
                "positions": [
                    {
                        "pos_title": "",
                        "pos_responsibilities": [""],
                        "pos_duration": ""
                    }
                ]
            }
        ]
    }

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth:'100%',
        overflowX:'hidden',
      },
      paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
        minHeight:'87vh',
        maxHeight: '87vh',
        overflowY:'auto'
      },
      headerText: {
          color: '#3B6142'
      },
      leftHome: {
        // backgroundImage: `url(${HomeImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },
    //   rightHome:{
    //     height: '30vh',
    //     backgroundColor: '#F1F1F2',
    //     marginLeft: theme.spacing(2),
    //     marginRight: theme.spacing(2),
    //   },
    //   footerHome:{
    //     height: '12vh',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     margin: '20px',
    //     textDecoration: 'none',
    //   },
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
        height:'50px'
      },
      typoCss: {
        fontSize:'0.80em', display: 'flex', justifyContent:'center', alignItems:'center', gap:'3px',
        ['@media (max-width: 768px)']: { // for desktop or larger screen width
            alignItems:'flex-start',
            fontSize:'0.75em',
            gap:'1px'
          },

      },
      formCss: {
        '& > *': {
            margin: theme.spacing(1),
          },
      },
      input: {
          display:'none' 
      },
      resize: {
          height:'5px',
          fontSize: '0.85em'
      },
    //   emailField: {
    //     ['@media (max-width: 599px)']: { // for desktop or larger screen width
    //         marginTop: '10px'
    //       },
    //   }
   
  }));

function Home (props) {
  const classes = useStyles();
  const [state, setState] = useState({dataName: "", dataEmail: "", dataAddress: "", dataEducations: [...dataObject.educations], dataSocials: [...dataObject.socials], dataSkills: [...dataObject.skills], dataAchievements: [...dataObject.honors_achievements], dataProjects: [...dataObject.projects]});
  const history = useHistory()
  const [cartqty, setCartqty] = useState(0);
  const [file, setFile] = React.useState("");
  const [stateExperiences, setStateExperiences] = useState({dataExperiences: [...dataObject.experiences]});

//   useEffect(() => {
//     // Update the document title using the browser API
//     setDataEducations(dataObject.educations);
//   });


  // Handles file upload event and updates state
  const  handleUpload = (event) => {
    console.log("event.target.files ", event.target.files[0].name)
    setFile(event.target.files[0]);
    // Add code here to upload file to server
    // ...
  }

  const handleAddMore = (event_type) => {

    const dataTemplate = {
        "dataEducations": [{ "school_name": "", "major": "", "cgpa": "", "duration":"" }],
        "dataSocials": [{ "socail_name": "", "social_url": "" }],
        "dataSkills": [{ "skill_title": "", "skill_desc": "" }],
        "dataProjects": [{ "project_title": "", "project_desc": "", "redirect_url": "" }],
        "dataAchievements": [{"achievement_title": "", "achievement_desc": "", "duration": "", "redirect_url": "" }]
    }

    console.log("state ", state[event_type]);

    setState((prevState) => {
        //DO WHATEVER WITH THE CURRENT STATE AND RETURN A NEW ONE
            prevState[event_type].push(dataTemplate[event_type][0]);
            return ({...prevState})
        }
    )
    //   setDataEducations(oldArray => [...oldArray, newElem]);
  }
  const handleChangeText = (e)=> {
    console.log("handleChangeText ", e.target.value);
    console.log("handleChangeText ", e.target.name);

    setState((prevState) => {
        prevState[e.target.name] = e.target.value;
        return ({...prevState});
    })
    // console.log('state: ', state);
  }

  const handleChangeTextArray = (e, index) =>{
    console.log("handleChangeText ", e.target.value);
    console.log("handleChangeText ", e.target.name);
    let temparray = e.target.name.split("_");

    if (temparray.length === 3) {
        temparray[1] = temparray[1]+"_"+temparray[2];
        temparray.splice(2,1);
    }
 
    console.log('temparray ', temparray);

    let arrayname = temparray[0] // dataEducation
    let key_to_change = temparray[1]; // school_name

    setState((prevState) => {
        prevState[arrayname][index][key_to_change] = e.target.value;
        return ({ ...prevState });
    })

  }

  const handleAddMoreExperience = () => {

    const dataTemplate = {
        "experiences": [
            {
                "company_name": "",
                "positions": [
                    {
                        "pos_title": "",
                        "pos_responsibilities": [""],
                        "pos_duration": ""
                    }
                ]
            }
        ]
    }

    setStateExperiences((prevState) => {
        //DO WHATEVER WITH THE CURRENT STATE AND RETURN A NEW ONE
            prevState.dataExperiences.push(dataTemplate.experiences[0]);
            return ({...prevState})
        }
    )
    //   setDataEducations(oldArray => [...oldArray, newElem]);
  }

  const handleAddAnotherPosition = (e, index) => {
      console.log("handleAddAnotherPosition ", index);

      setStateExperiences((prevState) => {
          prevState.dataExperiences[index].positions.push({
              "pos_title": "",
              "pos_duration": "",
              "pos_responsibilities": [""]
          })
          return ({ ...prevState });
      })

  }
  const handleNewResponsibilty = (e,index,ind) => {
    console.log("handleNewResponsibilty index ind", index + ' ' + ind);

    setStateExperiences((prevState) => {
        prevState.dataExperiences[index].positions[ind].pos_responsibilities.push("");
        return ({ ...prevState });
    })
  }

  
  return (
        <div className={classes.root}>
            {console.log('state ', state)}
            {console.log('stateExperiences ', stateExperiences)}
            
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
          <Navbar cartQuantity={1}/>
          <Grid container justify="center" spacing={1} style={{marginTop:'8vh'}}>
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}><h2 className={classes.headerText}>Let's get started</h2></Paper>
            </Grid> */}
            <Grid item sm={8} xs={12}>
              <Paper className={classes.paper}>
                          {/* <img style={{alignSelf:'center'}} src={peyalalogo} width="70" height="70"  /> */}

                  <p className={classes.title} style={{marginBottom:'20px'}}>Fill in the details as required</p>

                <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h6">Basic</Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField value={state.dataName} onChange={handleChangeText} name="dataName" fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Name"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField value={state.dataEmail} onChange={handleChangeText} name="dataEmail" fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Email"/>
                            </Grid>
                        </Grid>

                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                </Grid>

                <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8}>
                            <TextField value={state.dataAddress} onChange={handleChangeText} name="dataAddress" fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Address"/>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                </Grid>

                <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple={false}
                            onChange={handleUpload}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px',textTransform:'capitalize'}} component="span">
                                {'Upload'+'\u00A0'+'Image'}
                            </Button>
                        </label>
                        <Typography variant="body2" style={{maxWidth:'40%',fontSize:'0.75em', textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>{file.name}</Typography>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>
                <Divider light variant="middle" style={{margin:'20px'}}/>

                {/* education */}
                <Grid container style={{display:'flex', marginBottom:'8px', marginTop:'20px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6">Education</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>


                {
                        state.dataEducations.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                              {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid key={ind} container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataEducations_"+item} fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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

                    <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <Button onClick={()=>handleAddMore("dataEducations")}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px',textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Education'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>
                <Divider light variant="middle" style={{margin:'20px'}}/>

                {/* socials */}
                <Grid container style={{display:'flex', marginBottom:'8px', marginTop:'20px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6">Socials</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>


                {
                        state.dataSocials.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                              {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid key={ind}  container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={val[item]}  onChange={e => handleChangeTextArray(e, index)} name={"dataSocials_"+item}  fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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

                    <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <Button onClick={()=>handleAddMore("dataSocials")}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Socials'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>

                <Divider light variant="middle" style={{margin:'20px'}}/>


                 {/* skills */}
                 <Grid container style={{display:'flex', marginBottom:'8px', marginTop:'20px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6">Skills</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>

                {
                        state.dataSkills.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                            {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid key={ind}  container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataSkills_"+item}  fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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

                    <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <Button onClick={()=>handleAddMore("dataSkills")}   variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Skills'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>

                <Divider light variant="middle" style={{margin:'20px'}}/>


                {/* projects */}
                <Grid container style={{display:'flex', marginBottom:'8px', marginTop:'20px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6">Projects</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>
                {
                        state.dataProjects.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                                {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid key={ind}  container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataProjects_"+item} fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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

                    <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <Button onClick={()=>handleAddMore("dataProjects")}   variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Projects'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>

                <Divider light variant="middle" style={{margin:'20px'}}/>


                {/* achievemtns */}
                <Grid container style={{display:'flex', marginBottom:'8px', marginTop:'20px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6">Achievements</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>

                {
                        state.dataAchievements.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                              {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid key={ind}  container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={val[item]} onChange={e => handleChangeTextArray(e, index)} name={"dataAchievements_"+item} fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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

                    <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <Button onClick={()=>handleAddMore("dataAchievements")}   variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Achievements'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>

                <Divider light variant="middle" style={{margin:'20px'}}/>


                {/* experiences */}
                <Grid container style={{display:'flex', marginBottom:'8px', marginTop:'20px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6">Experiences</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>

                {
                        stateExperiences.dataExperiences.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                                <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={`company_name ` + `${index+1}`}/>
                                        </Grid> 
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        </Grid>
                                        
                              {
                                    val.positions.map((item, ind) => (
                                        <div key={ind} style={{marginTop:'16px'}}>
                                            {/* {console.log(item)} */}
                                        <Grid   container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <Typography variant="subtitle2">{'Position '+`${ind+1}`}</Typography>
                                            <TextField  InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={`pos_title `+`${ind+1}`}/>
                                        </Grid> 
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        </Grid>
                                        <Grid   container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField  InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={`pos_duration `+`${ind+1}`}/>
                                        </Grid> 
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        </Grid>


                                        {
                                            item.pos_responsibilities.map((v, i) => (
                                                <Grid  key={i} container style={{display:'flex', marginBottom:'8px'}}>
                                                <Grid item xs={12} sm={2}>
                                                </Grid> 
                                                <Grid item xs={12} sm={8}>
                                                    <Typography variant="subtitle2">Responsibilities</Typography>
                                                    <TextField fullWidth  InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={`position `+`${ind+1}`+' resp '+`${i+1}`}/>
                                                </Grid> 
                                                <Grid item xs={12} sm={2}>
                                                </Grid> 
                                                </Grid>
                                            ))
                                        }
                                        <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                            <Grid item xs={12} sm={2}>
                                            </Grid> 
                                            <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                                                    <Button onClick={(e)=>handleNewResponsibilty(e,index,ind)} variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                                        {'Add'+'\u00A0'+'new'+'\u00A0'+'responsibility'}
                                                    </Button>
                                            </Grid> 
                                            <Grid item xs={12} sm={2}>
                                            </Grid> 
                                        </Grid>
                                        
                                        </div>
                                    ))
                                }
                                <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                            <Grid item xs={12} sm={2}>
                                            </Grid> 
                                            <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                                                    <Button  onClick={(e) => handleAddAnotherPosition(e,index)} variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                                        {'Add'+'\u00A0'+'another'+'\u00A0'+'position'}
                                                    </Button>
                                            </Grid> 
                                            <Grid item xs={12} sm={2}>
                                            </Grid> 
                                        </Grid>
                            </div>
                            )
                        )
                    }
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <Button onClick={handleAddMoreExperience}   variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Experiences'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>

                <Divider light variant="middle" style={{margin:'20px'}}/>


              </Paper>
            </Grid>
        
          </Grid>
        </div>
  );
}

export default Home;