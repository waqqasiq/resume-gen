import './App.css';
import Navbar from './navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Draggable } from "react-drag-reorder";


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
    },
    swapGridMobile: {
        display: 'none',
        marginBottom: '8px',
        ['@media (max-width: 1024px)']: { // for desktop or larger screen width
            display: 'flex'
        },
    },
    desktopTypography: {
        ['@media (max-width: 1024px)']: { // for desktop or larger screen width
            display: 'none'
        },
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
        { "name": "dataEducations", "len": state.dataEducations.length },
        { "name": "dataResearches", "len": state.dataResearches.length },
        { "name": "dataAchievements", "len": state.dataAchievements.length },
        { "name": "dataProjects", "len": state.dataProjects.length },
        { "name": "dataSkills", "len": state.dataSkills.length },
        { "name": "dataECA", "len": state.dataECA.length },
        { "name": "dataReferences", "len": state.dataReferences.length }
    ]);
    const [sectionFrom, setSectionFrom] = useState('None');
    const [sectionTo, setSectionTo] = useState('None');
    const [namefont, setNamefont] = useState('22px');

    const [open, setOpen] = React.useState(false);
    const vertical = 'top';
    const horizontal = 'center';
    const [marginBetweenSections, setMarginBetweenSections] = useState('6px');
    const [sectionTitleFontSize, setSectionTitleFontSize] = useState('14px');
    const [contentFontSize, setContentFontSize] = useState('11px');
    const [imageWidthHeight, setImageWidthHeight] = useState('80px');


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
    //     // setChecked(true);
    //     localStorage.setItem("newseq",JSON.stringify(sequence));
    //   },[]);


    const handleGenResume = () => {
        // console.log("handleGenResume");
        history.push({
            pathname: '/resume',
            state: { data: state, dataExp: stateExperiences, imagefile: file, sequence: sequence, namefont: namefont, marginBetweenSections: marginBetweenSections, sectionTitleFontSize: sectionTitleFontSize, contentFontSize: contentFontSize, imageWidthHeight: imageWidthHeight }
        })
    }

    const handleSwapOrder = () => {
        // console.log('swap order handler' , sectionFrom + ' , to: '+ sectionTo)

        if (sectionFrom === 'None' || sectionTo === 'None') {
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
    const handleMarginChange = (e) => {
        setMarginBetweenSections(e.target.value)
    }

    const handleSectionTitleFontSize = (e) => {
        setSectionTitleFontSize(e.target.value)
    }

    const handleContentFontSize = (e) => {
        setContentFontSize(e.target.value)
    }

    const handleImageWidthHeight = (e) => {
        setImageWidthHeight(e.target.value)
    }

    const handleSwap = (from, to) => {
        // console.log('from, to ', from + ', '+ to);

        let promise1 = new Promise((resolve, reject) => {

            // console.log('sequence inside promise1 ', sequence);
            // let tempseq = JSON.parse(localStorage.getItem("newseq"));

            let tempseq = [...sequence];
            tempseq = tempseq.map(val => {
                return val.name
            })
            // console.log(tempseq);
            let toIndex = tempseq.indexOf(to);
            let fromIndex = tempseq.indexOf(from);

            console.log("toIndex ", toIndex);
            console.log("fromIndex ", fromIndex);

            if (fromIndex < toIndex) {
                for (let i = fromIndex; i <= toIndex; i++) {

                    if (i === toIndex) {
                        tempseq[toIndex] = from
                    }
                    else {
                        tempseq[i] = tempseq[i + 1]
                    }
                }
            }
            else {
                for (let i = fromIndex; i >= toIndex; i--) {
                    if (i === toIndex) {
                        tempseq[toIndex] = from
                    }
                    else {
                        tempseq[i] = tempseq[i - 1]

                    }
                }
            }

            // console.log('temp seq ', tempseq)

            let newsequence = tempseq.map(val => {
                if (typeof val !== 'undefined') {
                    return {
                        "name": val,
                        "len": state[val].length
                    }
                }
            })
            resolve(newsequence)

        })

        promise1.then(newseq => {
            setSequence(newseq)
            let jsonstring = JSON.stringify(newseq);
            // localStorage.setItem("newseq",jsonstring);
        })


    }

    let endIndex = -1;

    const handleDrag = (e) => {
        console.log('handleDrag ', e)
        // setDragStartIndex(e);
        if (e !== '' && endIndex !== '') {
            // console.log('handle Drag if ', e +' '+endIndex);
            handleSwap(e, endIndex);
        }
    }

    const handleOnDrop = (e) => {
        // console.log('handleOnDrop ', e)
        endIndex = e;
    }




    return (
        <div className={classes.root}>

            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={handleClose}>
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


                    <Grid item sm={8} xs={12}>
                        <Paper className={classes.paper}>

                            <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6" style={{ fontSize: '18px' }}>{'Name font size'}</Typography>
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

                            <Divider light variant="middle" style={{ margin: '10px' }} />

                            <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6" style={{ fontSize: '18px' }}>{'Space between sections'}</Typography>
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
                                            value={marginBetweenSections}
                                            onChange={handleMarginChange}
                                        >
                                            <MenuItem value={'2px'}>{'2 pts'}</MenuItem>
                                            <MenuItem value={'4px'}>{'4 pts'}</MenuItem>
                                            <MenuItem value={'6px'}>{'6 pts'}</MenuItem>
                                            <MenuItem value={'8px'}>{'8 pts'}</MenuItem>
                                            <MenuItem value={'10px'}>{'10 pts'}</MenuItem>
                                            <MenuItem value={'12px'}>{'12 pts'}</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                            </Grid>

                            <Divider light variant="middle" style={{ margin: '10px' }} />

                            <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6" style={{ fontSize: '18px' }}>{'Section title font size'}</Typography>
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
                                            value={sectionTitleFontSize}
                                            onChange={handleSectionTitleFontSize}
                                        >
                                            <MenuItem value={'12px'}>{'12 pts'}</MenuItem>
                                            <MenuItem value={'13px'}>{'13 pts'}</MenuItem>
                                            <MenuItem value={'14px'}>{'14 pts'}</MenuItem>
                                            <MenuItem value={'15px'}>{'15 pts'}</MenuItem>
                                            <MenuItem value={'16px'}>{'16 pts'}</MenuItem>
                                            <MenuItem value={'17px'}>{'17 pts'}</MenuItem>
                                            <MenuItem value={'18px'}>{'18 pts'}</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                            </Grid>

                            <Divider light variant="middle" style={{ margin: '10px' }} />

                            <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6" style={{ fontSize: '18px' }}>{'Content font size'}</Typography>
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
                                            value={contentFontSize}
                                            onChange={handleContentFontSize}
                                        >
                                            <MenuItem value={'10px'}>{'10 pts'}</MenuItem>
                                            <MenuItem value={'11px'}>{'11 pts'}</MenuItem>
                                            <MenuItem value={'12px'}>{'12 pts'}</MenuItem>
                                            <MenuItem value={'13px'}>{'13 pts'}</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                            </Grid>

                            <Divider light variant="middle" style={{ margin: '10px' }} />
                            {
                                file ?
                                    <Grid>
                                        <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                            <Grid item xs={12} sm={2}>
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <Typography variant="h6" style={{ fontSize: '18px' }}>{'Image (width, height)'}</Typography>
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
                                                        value={imageWidthHeight}
                                                        onChange={handleImageWidthHeight}
                                                    >
                                                        <MenuItem value={'75px'}>{'75 pts'}</MenuItem>
                                                        <MenuItem value={'80px'}>{'80 pts'}</MenuItem>
                                                        <MenuItem value={'85px'}>{'85 pts'}</MenuItem>
                                                        <MenuItem value={'90px'}>{'90 pts'}</MenuItem>
                                                        <MenuItem value={'95px'}>{'95 pts'}</MenuItem>
                                                        <MenuItem value={'100px'}>{'100 pts'}</MenuItem>

                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                            </Grid>
                                        </Grid>

                                        <Divider light variant="middle" style={{ margin: '10px' }} />
                                    </Grid>
                                    :
                                    <Grid></Grid>
                            }


                            <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h6" style={{ fontSize: '18px' }}>{'Current sequence of sections'}</Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px' }} className={classes.desktopTypography}>{'(Drag and drop to change order)'}</Typography>

                                </Grid>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                            </Grid>
                            {/* <div className="flex-container">
                                    <div className="row" >
                                    <Draggable> */}
                            {sequence.map((item, idx) => {
                                if (item.len > 0) {
                                    return (
                                        <Grid key={idx} container draggable="true" onDragEnd={() => handleDrag(item.name)} onDragLeave={() => handleOnDrop(item.name)}>
                                            <Grid item xs={12} sm={2}>
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <ul>
                                                    <li>{item.name.slice(4)}</li>
                                                </ul>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                            </Grid>
                                        </Grid>
                                    )
                                }

                            })}
                            {/* </Draggable>
                                    </div>
                                </div>
                        */}

                            {/* For Mobile or iPad since draggable component doesn't work */}
                            <Grid container className={classes.swapGridMobile}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography style={{ marginTop: '10px' }} variant="body1">{'Swap order of sections'}</Typography>
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
                                                            if (val.len > 0) {
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
                                                            if (val.len > 0) {
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


                            <Grid container className={classes.swapGridMobile}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Button onClick={handleSwapOrder} variant="contained" style={{ backgroundColor: '#2F4454', color: '#FFF' }}>Swap Order</Button>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                            </Grid>
                            <Divider light variant="middle" style={{ margin: '20px' }} />

                            <Grid container style={{ display: 'flex', marginBottom: '8px' }}>
                                <Grid item xs={12} sm={2}>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Button onClick={handleGenResume} fullWidth variant="contained" style={{ backgroundColor: '#2F4454', color: '#FFF' }}>Generate Resume</Button>
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