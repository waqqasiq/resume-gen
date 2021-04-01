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


const dataObject = 
    {
        "name": "Name",
        "email": "Email",
        "address": "Address",
        "educations": [
            {
                "school_name": "School Name",
                "major": "Major",
                "cgpa": "CGPA",
                "duration":"Duration"
            }
        ],
        "socials": [
            {
                "socail_name": "Social Name",
                "social_url": "Socail URL"
            }
        ],
        "skills": [
            {
                "skill_title": "Languages",
                "skill_desc": "Java, C++, Ruby, SQL"
            }
        ],
        "projects": [
			{
				"project_title": "SpendWise",
				"project_desc": "Track your income and expenses on the go anywhere on web. Tech stack used: ReactJS, NodeJS, Firebase RealtimeDB",
				"redirect_url": "https://wi-spendwise.netlify.app/"
			}
		],
        "honors_achievements": [
			{
				"achievements_title": "Performance Based Scholarship",
				"achievements_desc": "Maintained a CGPA of 3.70 and above since summer 2016",
				"duration": "2016 - 2018",
				"redirect_url": "#"
			}
		],
        "experiences": [
            {
                "company_name": "MGH Group",
                "positions": [
                    {
                        "title": "Senior Executive",
                        "responsibilities": ["Communicate", "Prepare", "Develop"],
                        "duration": "Jan 2020 - Present"
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
  const [state, setState] = useState({ email: "", password: "", phone: ""});
  const history = useHistory()

  const [cartqty, setCartqty] = useState(0);

  const [file, setFile] = React.useState("");

  const [dataEducations, setDataEducations] = useState(dataObject.educations);
  const [dataSocials, setDataSocials] = useState(dataObject.socials)
  const [dataSkills, setDataSkills] = useState(dataObject.skills)
  const [dataAchievements, setDataAchievements] = useState(dataObject.honors_achievements);
  const [dataProjects, setDataProjects] = useState(dataObject.projects)

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

  const handleAddMoreEducation = () => {
      console.log('handleAddMoreEducation ' + Object.keys(dataEducations));
      let newElem = dataEducations[0];
      setDataEducations(oldArray => [...oldArray, newElem]);

  }

  const handleAddMoreSocial = () => {
    console.log('handleAddMoreSocial ' + Object.keys(dataSocials));
    let newElem = dataSocials[0];
    setDataSocials(oldArray => [...oldArray, newElem]);

  }

  const handleAddMoreSkills = () => {
    console.log('handleAddMoreSkills ' + Object.keys(dataSkills));
    let newElem = dataSkills[0];
    setDataSkills(oldArray => [...oldArray, newElem]);

  }

  const handleAddMoreAchievements = () => {
    // console.log('handleAddMoreSkills ' + Object.keys(dataSkills));
    let newElem = dataAchievements[0];
    setDataAchievements(oldArray => [...oldArray, newElem]);

  }
 
  const handleAddMoreProjects = () => {
    // console.log('handleAddMoreSkills ' + Object.keys(dataSkills));
    let newElem = dataProjects[0];
    setDataProjects(oldArray => [...oldArray, newElem]);

  }



  
  return (
        <div className={classes.root}>
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
                                <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Name"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Email"/>
                            </Grid>
                        </Grid>

                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                </Grid>
{/*                
                <Grid container style={{display:'flex', marginBottom:'10px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8}>
                            <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Email"/>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                </Grid> */}
                <Grid container style={{display:'flex', marginBottom:'8px'}}>
                   <Grid item xs={12} sm={2}>
                    </Grid> 
                    <Grid item xs={12} sm={8}>
                            <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder="Address"/>
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
                        dataEducations.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={'School Name ' + `${index+1}`}/>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                        <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={"Major Subject " + `${index+1}`}/>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                            <Grid item xs={12} sm={2}>
                             </Grid> 
                             <Grid item xs={12} sm={8}>
                                     <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={"CGPA " + `${index+1}`}/>
                             </Grid> 
                             <Grid item xs={12} sm={2}>
                             </Grid> 
                         </Grid>
                         <Grid container style={{display:'flex', marginBottom:'8px'}}>
                            <Grid item xs={12} sm={2}>
                             </Grid> 
                             <Grid item xs={12} sm={8}>
                                     <TextField fullWidth variant="outlined" InputProps={{ classes: { input: classes.resize }}} placeholder={"Duration " + `${index+1}`}/>
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
                            <Button onClick={handleAddMoreEducation}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px',textTransform:'capitalize'}} component="span">
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
                        dataSocials.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={'socail name ' + `${index+1}`}/>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                        <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={"socail link " + `${index+1}`}/>
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
                            <Button onClick={handleAddMoreSocial}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
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
                        dataSkills.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                            {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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
                            <Button onClick={handleAddMoreSkills}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
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
                                    <Typography variant="h6">Skills</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>
                {
                        dataProjects.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                                {console.log(Object.values(dataProjects))}
                                {
                                    Object.keys(val).map((item, ind) => (
                                        <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                        <Grid item xs={12} sm={2}>
                                        </Grid> 
                                        <Grid item xs={12} sm={8}>
                                            <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={item+' ' + `${index+1}`}/>
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
                            <Button onClick={handleAddMoreProjects}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
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
                                    <Typography variant="h6">Skills</Typography>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>

                {
                        dataAchievements.map((val, index) => (
                            <div key={index} style={{marginBottom:'20px'}}>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                    <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={'skill title ' + `${index+1}`}/>
                                </Grid> 
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                            </Grid>
                            <Grid container style={{display:'flex', marginBottom:'8px'}}>
                                <Grid item xs={12} sm={2}>
                                </Grid> 
                                <Grid item xs={12} sm={8}>
                                        <TextField fullWidth InputProps={{ classes: { input: classes.resize }}} variant="outlined" placeholder={"skill description " + `${index+1}`}/>
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
                            <Button onClick={handleAddMoreAchievements}  variant="contained" style={{backgroundColor:'#2F4454', color:'#FFF', marginRight:'5px', textTransform:'capitalize'}} component="span">
                                {'Add'+'\u00A0'+'More'+'\u00A0'+'Achievements'}
                            </Button>
                    </Grid> 
                    <Grid item xs={12} sm={2}>
                    </Grid> 
                    
                </Grid>

                <Divider light variant="middle" style={{margin:'20px'}}/>

                 {/* <Grid item xs={12} sm={6}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple={false}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button fullWidth variant="contained" color="primary" component="span">
                                Upload  
                            </Button>
                        </label>
                    </Grid>  */}

              </Paper>
            </Grid>
        
          </Grid>
        </div>
  );
}

export default Home;