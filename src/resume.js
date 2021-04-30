import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer'; // this works best
import Homesvg from './icons/homepng.png';
import CallIcon from './icons/callicon.png'
// import RobotoRegular from '../src/Roboto/Roboto-Light.ttf';
// import RobotoBold from '../src/Roboto/Roboto-Bold.ttf';
import CalibriRegular from './fonts/Calibri/Calibri-Regular.ttf'
import CalibriBold from './fonts/Calibri/Calibri-Bold.ttf'
import ProfileIcon from './icons/linkedinlogo.png'
import EmailIcon2 from './icons/emailicon.png'
import GithubIcon2 from './icons/githubicon2.png'


// Create styles
Font.register({
    family: 'Calibri', fonts: [
        { src: CalibriRegular }, // font-style: normal, font-weight: normal
        { src: CalibriBold, fontStyle: 'italic' }
    ]
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        paddingTop: '25.4mm',
        paddingBottom: '25.4mm',
        //   backgroundColor: '#E4E4E4'
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 10,
        flexGrow: 1,
        paddingRight: '19.1mm',
        paddingLeft: '19.1mm',
        fontFamily: 'Calibri',
        //   color: '#000080'
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
        borderTop: '1px solid #E8E8E8',
        marginTop: '1px',
        height: '3px',
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
        display: 'flex'
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
        borderTop: '1px solid lightgrey',
        marginTop: '5px',
        height: '5px',
    },


}));



function Resume(props) {
    const classes = useStyles();
    // const [state, setState] = useState(props.state);
    const history = useHistory()
    // const [stateExperiences, setStateExperiences] = useState(props.stateExperiences);
    const [state, setState] = useState(props.location.state.data)
    // console.log('props location ', props.location)
    const [stateExperiences, setStateExperiences] = useState(props.location.state.dataExp)
    const [file, setFile] = useState(props.location.state.imagefile)
    // const sequence = props.location.state.orderSequence; // ["skill", "education", "reference"]
    const sequence = props.location.state.sequence;
    const namefont = props.location.state.namefont;
    const [marginBetweenSections, setMarginBetweenSections] = useState(props.location.state.marginBetweenSections);
    const [sectionTitleFontSize, setSectionTitleFontSize] = useState(props.location.state.sectionTitleFontSize);
    const [contentFontSize, setContentFontSize] = useState(props.location.state.contentFontSize);
    const [imageWidthHeight, setImageWidthHeight] = useState(props.location.state.imageWidthHeight);


    const ref = React.createRef();

    //   useEffect(() => {
    //     // Update the document title using the browser API
    //     // setChecked(true);
    //     console.log("state ", state);

    //   },[]);


    const educationDiv = state.dataEducations.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <Text style={{ fontSize: contentFontSize, fontWeight: 'bold', marginBottom: '3px', fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.school_name}</Text>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}><Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.major + ' | ' + val.cgpa}</Text></View>
                    <Text style={{ fontSize: contentFontSize }}>{val.duration}</Text>
                </View>

            </View>
        )
    })

    const achievementDiv = state.dataAchievements.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <Text style={{ fontSize: contentFontSize, fontWeight: 'bold', marginBottom: '3px', fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.achievement_title + ' ' + val.duration}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.achievement_desc}</Text>
                </View>

            </View>
        )
    })

    const projectDiv = state.dataProjects.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <Text style={{ fontSize: contentFontSize, fontWeight: 'bold', marginBottom: '3px', fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.project_title}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.project_desc}</Text>
                </View>

            </View>
        )
    })

    const skillDiv = state.dataSkills.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <Text style={{ fontSize: contentFontSize, fontWeight: 'bold', marginBottom: '3px', fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.skill_title}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.skill_desc}</Text>
                </View>

            </View>
        )
    })

    const ecaDiv = state.dataECA.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.eca_description}</Text>
                </View>

            </View>
        )
    })

    const refDiv = state.dataReferences.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize, fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.ref_name}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpointhidden}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.ref_designation}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpointhidden}>*</Text><Text style={{ fontSize: contentFontSize }}>{'Email: ' + val.ref_email + ' | Mobile: ' + val.ref_mobile}</Text>
                </View>

            </View>
        )
    })

    const careerDiv = state.dataObjective.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: contentFontSize }}>{val.description}</Text>
                </View>


            </View>
        )
    });

    const researchDiv = state.dataResearches.map(val => {
        return (
            <View style={{ marginBottom: '6px' }}>

                <Text style={{ fontSize: contentFontSize, fontWeight: 'bold', marginBottom: '3px', fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.research_title}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '6px' }}>
                    <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{val.research_desc}</Text>
                </View>

            </View>
        )
    })

    const [refArray, setRefArray] = useState([{ 'divname': educationDiv, 'category': 'Education', 'type': 'dataEducations' }, { 'divname': researchDiv, 'category': 'Thesis/Research', 'type': 'dataResearches' }, { 'divname': achievementDiv, 'category': 'Honors & Achievements', 'type': 'dataAchievements' }, { 'divname': projectDiv, 'category': 'Projects', 'type': 'dataProjects' }, { 'divname': skillDiv, 'category': 'Skills', 'type': 'dataSkills' }, { 'divname': ecaDiv, 'category': 'Extra-Curricular Activities', 'type': 'dataECA' }, { 'divname': refDiv, 'category': 'Reference', 'type': 'dataReferences' }])

    let arrayOrder = [];
    sequence.map(val => {
        // console.log('seq val ', val);
        refArray.map(val_inner => {
            // console.log('val inner ', val_inner);
            if (val.name === val_inner.type) {
                arrayOrder.push(val_inner);
            }
        })
    })

    return (
        <div className={classes.root}>
            {/* {console.log('seq ', sequence)} */}

            <PDFViewer
                style={{
                    width: '100%',
                    height: '100vh',
                    // float:'right'
                }}

            >
                <Document >
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section} >
                            {/* <Text>Section #1</Text> */}


                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>

                                <View >
                                    <Text style={{ fontSize: namefont, marginBottom: '4px', fontFamily: "Calibri", fontStyle: 'italic' }}>{state.dataName}</Text>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
                                        <Image src={Homesvg} style={{ height: '11px', width: '11px', marginRight: '2px', marginBottom: '4px' }} /><Text style={{ fontSize: contentFontSize }}>{state.dataAddress}</Text>
                                    </View>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
                                        <Image src={CallIcon} style={{ height: '9px', width: '9px', marginRight: '2px', marginBottom: '4px' }} /><Text style={{ fontSize: contentFontSize }}>{state.dataContact + ' | '}</Text><Image src={EmailIcon2} style={{ width: '10px', height: '10px', marginRight: '2px', marginBottom: '4px' }} /><Text style={{ fontSize: contentFontSize }}>{state.dataEmail}</Text>
                                    </View>

                                    <View style={{ marginBottom: '8px' }}>
                                        {state.dataSocials.length > 0 && state.dataSocials.length < 2 ?
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
                                                <Image src={ProfileIcon} style={{ width: '10px', height: '10px', marginRight: '2px', marginBottom: '4px' }} /><Text style={{ fontSize: contentFontSize }}>{state.dataSocials[0].social_url}</Text>
                                            </View>
                                            : <View></View>
                                        }

                                        {state.dataSocials.length === 2 ?
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
                                                <Image src={ProfileIcon} style={{ width: '10px', height: '10px', marginRight: '2px', marginBottom: '4px' }} /><Text style={{ fontSize: contentFontSize }}>{state.dataSocials[0].social_url + ' | '}</Text>
                                                <Image src={GithubIcon2} style={{ height: '11px', width: '11px', marginRight: '2px', marginBottom: '4px' }} /><Text style={{ fontSize: contentFontSize }}>{state.dataSocials[1].social_url}</Text>
                                            </View>
                                            : <View></View>
                                        }
                                    </View>


                                </View>

                                <View >

                                    {
                                        file ? <Image style={{ width: imageWidthHeight, height: imageWidthHeight }} src={URL.createObjectURL(file)} /> : <View></View>
                                    }


                                </View>

                            </View>
                            {/* career objective */}
                            {
                                state.dataObjective.length > 0 ? <View style={{ marginBottom: '4px' }}><View><Text style={{ fontSize: sectionTitleFontSize, fontFamily: 'Calibri', fontStyle: 'italic' }}>{'Career Objective'}</Text></View><View style={styles.line}></View></View> : <View></View>
                            }
                            {
                                state.dataObjective.length > 0 ? <View style={{ marginBottom: marginBetweenSections }}>{careerDiv}</View> : <View></View>
                            }


                            {/* experiences */}
                            {
                                stateExperiences.dataExperiences.length > 0 ? <View style={{ marginBottom: '4px' }}><View><Text style={{ fontSize: sectionTitleFontSize, fontFamily: 'Calibri', fontStyle: 'italic' }}>{'Work Experience'}</Text></View><View style={styles.line}></View></View> : <View></View>
                            }

                            {
                                stateExperiences.dataExperiences.length > 0 ?

                                    <View style={{ marginBottom: marginBetweenSections }}>
                                        {
                                            stateExperiences.dataExperiences.map(val => {
                                                return (
                                                    <View >

                                                        <Text style={{ fontSize: contentFontSize, marginBottom: '3px', fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.company_name}</Text>
                                                        {
                                                            val.positions.map(pos => {

                                                                return (
                                                                    <View style={{ marginBottom: '4px' }}>
                                                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3px' }}>
                                                                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                                                                <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{pos.pos_title}</Text>
                                                                            </View>
                                                                            <View  >
                                                                                <Text style={{ fontSize: contentFontSize }}>{pos.pos_duration}</Text>
                                                                            </View>
                                                                        </View>

                                                                        {
                                                                            pos.pos_responsibilities.map(resp => {
                                                                                return (
                                                                                    <View style={{ display: 'flex', flexDirection: 'column', marginBottom: '3px' }}>
                                                                                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '16px' }}>
                                                                                            <Text style={styles.bulletpoint}>*</Text><Text style={{ fontSize: contentFontSize }}>{resp}</Text>
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
                                    </View>
                                    :
                                    <View></View>
                            }


                            {
                                arrayOrder.map(val => {
                                    // console.log(val.divname);
                                    let headerDiv = state[val.type].length > 0 ? <View style={{ marginBottom: '4px' }}><View><Text style={{ fontSize: sectionTitleFontSize, fontFamily: 'Calibri', fontStyle: 'italic' }}>{val.category}</Text></View><View style={styles.line}></View></View> : <View></View>
                                    let contentDiv = state[val.type].length > 0 ? <View style={{ marginBottom: marginBetweenSections }}>{val.divname}</View> : <View></View>
                                    let sectionDiv = <View>{headerDiv}<View>{contentDiv}</View></View>
                                    return sectionDiv;
                                })

                            }


                        </View>

                    </Page>
                </Document>

            </PDFViewer>

        </div>
    );
}

export default Resume;