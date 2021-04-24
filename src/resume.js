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
// import EmailIcon from '@material-ui/icons/Email';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ReactToPdf from 'react-to-pdf';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import domToPdf from 'dom-to-pdf';
// import jsPDF from 'jspdf'
// import { Document, Page } from 'react-pdf';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer'; // this works best
import Homesvg from '../src/homepng.png';
import CallIcon from '../src/callicon.png'
import EmailIcon from '../src/email.png'
import GithubIcon from '../src/githubicon.png'
import LinkedinIcon from '../src/linkedinicon.png'
import RobotoRegular from '../src/Roboto/Roboto-Light.ttf';
import RobotoBold from '../src/Roboto/Roboto-Bold.ttf';
import CalibriRegular from '../src/Calibri/Calibri-Regular.ttf'
import CalibriBold from '../src/Calibri/Calibri-Bold.ttf'


// Create styles
  Font.register({ family: 'Calibri', fonts: [
    { src: CalibriRegular }, // font-style: normal, font-weight: normal
    { src: CalibriBold, fontStyle: 'italic' }
   ]});

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      paddingTop: '25.4mm', 
      paddingBottom: '25.4mm',
    //   backgroundColor: '#E4E4E4'
    },
    section: {
      display:'flex',
      flexDirection:'column',
      margin: 10,
      padding: 10,
      flexGrow: 1,
      paddingRight:'19.1mm', 
      paddingLeft:'19.1mm',
      fontFamily:'Calibri'
    //   fontFamily: 'Oswald'
    },
    bulletpoint: {
        width: '2px',
       height: '2px',
       border: '2px solid black',
       borderRadius: '50%',
       margin: '3px 5px 0 0'
    },
    line: {
        borderTop:'1px solid #E8E8E8',
        marginTop:'3px',
        height:'3px',
      },
      bulletpointhidden: {
        width: '2px',
       height: '2px',
       border: '2px solid white',
       borderRadius: '50%',
       margin: '5px 5px 0 0'
    },
  });

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

    const generatePdf = () => {

        // renderToFile()

        const element = document.getElementById('divToPrint');
    
        const options = {
          filename: "test.pdf",
        };
    
        return domToPdf(element, options, () => {
          // callback function
          alert('done');
        });

        // const input = document.getElementById("divToPrint");
        // const pdf = new jsPDF({ unit: "px", format: "a4", userUnit: "px" });
        // pdf.html(input, { html2canvas: { scale: 0.57 } }).then(() => {
        //     pdf.save("testjspdf.pdf");
        // });

      }
    


    return (
        <div className={classes.root}>
            {console.log(file)}

                <PDFViewer
                    style={{
                        width: '100%',
                        height:'100vh',
                        // float:'right'
                    }}
      
                >
                    <Document >
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section} >
                                {/* <Text>Section #1</Text> */}
                                

                                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'10px'}}>

                                        <View >
                                            <Text style={{fontSize:'22px', marginBottom:'4px', fontFamily:"Calibri", fontStyle:'italic'}}>{state.dataName}</Text>

                                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'4px'}}>
                                                <Image src={Homesvg} style={{height:'11px', width:'11px', marginRight:'2px'}}/><Text style={{fontSize:'11px'}}>{state.dataAddress}</Text>
                                            </View>

                                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'4px'}}>
                                                <Image src={CallIcon} style={{height:'9px', width:'9px', marginRight:'2px'}}/><Text style={{fontSize:'11px'}}>{state.dataContact + ' | '}</Text><Image src={EmailIcon} style={{width:'10px', height:'10px', marginRight:'2px'}}/><Text style={{fontSize:'11px'}}>{state.dataEmail}</Text>
                                            </View>

                                            {state.dataSocials.length > 0 && state.dataSocials.length < 2 ? 
                                             <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'4px'}}>
                                                <Image src={LinkedinIcon} style={{width:'10px', height:'10px', marginRight:'2px'}}/><Text style={{fontSize:'11px'}}>{state.dataSocials[0].social_url}</Text>
                                            </View>
                                            : <View></View>
                                            } 

                                            {state.dataSocials.length === 2 ? 
                                             <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'4px'}}>
                                                <Image src={LinkedinIcon} style={{width:'10px', height:'10px', marginRight:'2px'}}/><Text style={{fontSize:'11px'}}>{state.dataSocials[0].social_url + ' | '}</Text>
                                                <Image src={GithubIcon} style={{height:'11px', width:'11px', marginRight:'2px'}}/><Text style={{fontSize:'11px'}}>{state.dataSocials[1].social_url}</Text>
                                            </View>
                                            : <View></View>
                                            } 
                                           


                                        </View>

                                        <View >

                                            {
                                                file ? <Image style={{width:'80px', height:'80px'}} src={URL.createObjectURL(file)} /> : <View></View>
                                            }
                                            
                                               {/* <Image style={{width:'80px', height:'80px'}} src={URL.createObjectURL(file)} />  */}
                                            
                                            

                                        </View>
                           
                                    </View>

                                    {/* experiences */}
                                    {
                                        stateExperiences.dataExperiences.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Work Experience'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        stateExperiences.dataExperiences.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>
                                               

                                                    <Text style={{fontSize:'11px' , marginBottom:'3px'}}>{val.company_name}</Text>
                                                    
                                                    {
                                                            val.positions.map(pos => {

                                                                return (
                                                                    <View  style={{marginBottom:'4px'}}>
                                                                        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginBottom:'3px'}}>
                                                                            <View style={{display:'flex', flexDirection:'row'}}>
                                                                                <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11px'}}>{pos.pos_title}</Text>
                                                                            </View>
                                                                            <View  >
                                                                                <Text style={{fontSize:'11px'}}>{pos.pos_duration}</Text>
                                                                            </View>
                                                                        </View>
                                                               
                                                                        {
                                                                            pos.pos_responsibilities.map(resp => {
                                                                                return (
                                                                                    <View style={{display:'flex', flexDirection:'column', marginBottom:'3px'}}>
                                                                                        <View style={{display:'flex', flexDirection:'row', marginLeft:'16px'}}>
                                                                                            <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11px'}}>{resp}</Text>
                                                                                            {/* <Typography variant="body1" style={{fontSize:'0.9rem'}} >{}</Typography> */}
                                                                                        </View>
                                                                                    </View>
                                                                                )
                                                                            })
                                                                        }
                                                                 
                                                                             
                                                                    </View>
                                                                )
                                                            }
                                                            )
                                                }

                                                </View>
                                            )
                                        })
                                    }


                                    {/* education */}
                                    <View style={{marginBottom:'4px'}}>
                                    {
                                        state.dataEducations.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Education'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        state.dataEducations.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>

                                                    <Text style={{fontSize:'11px', fontWeight:'bold', marginBottom:'3px'}}>{val.school_name}</Text>
                                                    
                                                    <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                                                            <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}><Text style={styles.bulletpoint}>*</Text><Text  style={{fontSize:'11px'}}>{val.major + ' | ' + val.cgpa}</Text></View>
                                                            <Text  style={{fontSize:'11px'}}>{val.duration}</Text>
                                                    </View>

                                                </View>
                                            )
                                        })
                                    }
                                    </View>


                                    {/* achievements */}
                                    <View style={{marginBottom:'4px'}}>
                                    {
                                        state.dataAchievements.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Honors & Achievements'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        state.dataAchievements.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>

                                                    <Text style={{fontSize:'11px', fontWeight:'bold', marginBottom:'3px'}}>{val.achievement_title + ' ' +val.duration}</Text>
                                                    {/* <Text  style={{fontSize:'11px'}}>{val.achievement_desc}</Text> */}
                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11px'}}>{val.achievement_desc}</Text>
                                                                                            {/* <Typography variant="body1" style={{fontSize:'0.9rem'}} >{}</Typography> */}
                                                    </View>
                                                     
                                                </View>
                                            )
                                        })
                                    }
                                    </View>


                                     {/* projects */}
                                     <View style={{marginBottom:'4px'}}>
                                    {
                                        state.dataProjects.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Projects'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        state.dataProjects.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>

                                                    <Text style={{fontSize:'11px', fontWeight:'bold', marginBottom:'3px'}}>{val.project_title}</Text>
                                                    {/* <Text  style={{fontSize:'11px'}}>{val.achievement_desc}</Text> */}
                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11px'}}>{val.project_desc}</Text>
                                                                                            {/* <Typography variant="body1" style={{fontSize:'0.9rem'}} >{}</Typography> */}
                                                    </View>
                                                     
                                                </View>
                                            )
                                        })
                                    }
                                    </View>


                                    {/* skills */}
                                    <View style={{marginBottom:'4px'}}>
                                    {
                                        state.dataSkills.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Skills'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        state.dataSkills.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>

                                                    <Text style={{fontSize:'11px', fontWeight:'bold', marginBottom:'3px'}}>{val.skill_title}</Text>
                                                    {/* <Text  style={{fontSize:'11px'}}>{val.achievement_desc}</Text> */}
                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11px'}}>{val.skill_desc}</Text>
                                                                                            {/* <Typography variant="body1" style={{fontSize:'0.9rem'}} >{}</Typography> */}
                                                    </View>
                                                     
                                                </View>
                                            )
                                        })
                                    }
                                    </View>



                                    {/* eca */}
                                    <View style={{marginBottom:'4px'}}>
                                    {
                                        state.dataECA.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Extra-Curricular Activities'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        state.dataECA.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>

                                                    {/* <Text style={{fontSize:'11px', fontWeight:'bold', marginBottom:'3px'}}>{val.eca_desc}</Text> */}
                                                    {/* <Text  style={{fontSize:'11px'}}>{val.achievement_desc}</Text> */}
                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11px'}}>{val.eca_description}</Text>
                                                                                            {/* <Typography variant="body1" style={{fontSize:'0.9rem'}} >{}</Typography> */}
                                                    </View>
                                                     
                                                </View>
                                            )
                                        })
                                    }
                                    </View>



                                    {/* eca */}
                                    <View style={{marginBottom:'4px'}}>
                                    {
                                        state.dataReferences.length > 0 ? <View style={{marginBottom:'4px'}}><View style={{marginTop:'6px'}}><Text style={{fontSize:'14px', fontFamily:'Calibri', fontStyle:'italic'}}>{'Reference'}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    }

                                    {
                                        state.dataReferences.map(val => {
                                            return (
                                                <View style={{marginBottom:'6px'}}>

                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpoint}>*</Text><Text style={{fontSize:'11.5px'}}>{val.ref_name}</Text>
                                                    </View>
                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpointhidden}>*</Text><Text style={{fontSize:'11px'}}>{val.ref_designation}</Text>
                                                    </View>
                                                    <View style={{display:'flex', flexDirection:'row', marginLeft:'6px'}}>
                                                        <Text style={styles.bulletpointhidden}>*</Text><Text style={{fontSize:'11px'}}>{'Email: ' + val.ref_email + ' | Mobile: ' + val.ref_mobile}</Text>
                                                    </View>
                                                     
                                                </View>
                                            )
                                        })
                                    }
                                    </View>
                                  
                            </View>
                        
                        </Page>
                    </Document>

                </PDFViewer>
           

        </div>
    );
}

export default Resume;