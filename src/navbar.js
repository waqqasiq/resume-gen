import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from "clsx";
// import PropTypes from "prop-types";
// import compose from "recompose/compose";
// import withStyles from "@material-ui/core/styles/withStyles";
// import {Link, withRouter} from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DescriptionIcon from '@material-ui/icons/Description';

// import LogoutIcon from '@material-ui/icons/AccountCircle';
//import axios from "axios";
import Divider from "@material-ui/core/Divider";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem, Select, TextField } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
      marginLeft: 'auto'
  },
  list: {
      color: '#3C6142',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
    outline: 'none',
    minHeight:'100px',
    minWidth:'120px'
    },
    modalPaper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3),
        color: '#3B6142',
    },
    btn: {
        border: '1px solid black',
        borderRadius: 10,
        backgroundColor: '#3c6142',
        color: '#fff'
    },
    cartParentGrid: {
        display:'flex',
        minWidth:'750px',
        minHeight:'500px',
        ['@media (max-width: 600px)'] :{ // for desktop or larger screen width
            flexDirection: 'column !',
            minWidth:'10px !important',
            maxWidth:'100%',
        },
    },
    leftItemPaper: {
        marginRight:'10px',
        ['@media (max-width: 600px)'] :{ // for desktop or larger screen width
            marginRight: '0px'
        },
    },
    rightItemPaper: {
        marginLeft:'5px',
        ['@media (max-width: 600px)'] :{ // for desktop or larger screen width
            marginLeft: '0px'
        },
    },
    gridItemStyle: {
        maxHeight: '500px',
        overflowY: 'auto',
        ['@media (max-width: 600px)'] :{ // for desktop or larger screen width
            maxHeight: '300px',
        },
    }
 
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [left, setLeft] = useState(false)
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const history = useHistory()


  useEffect(()=>{
    // if(localStorage.getItem('cartItems')){
    //     let tempitems = JSON.parse(localStorage.getItem('cartItems'));
        
    // }
    // console.log('props: ',props);
    // if(props) {
    //     setDatalen(props.cartQuantity);
    // }
   
  },[])

  const routeTo =(index, val) => {
    if(index===0){
        //props.history.push('/display-ad-report');
        console.log("clicked index: ", index )
    }
    else if(index===1){
        //props.history.push('/display-ad-click');
        console.log("clicked index: ", index )
    }
    else if(index===2){
        //props.history.push('/bottom-ad-views');
        console.log("clicked index: ", index )
    }
    else if(index===3){
        //props.history.push('/bottom-ad-clicks');
        console.log("clicked index: ", index )
    }
    // }
    else if(index===4){
        console.log("clicked index: ", index )
        // localStorage.removeItem('mail');
        // localStorage.removeItem('token');
        //props.history.push('/')
    }
}

  const toggleDrawer = (val) =>{
    setLeft(!left)
  }


  const sideList = (
    <div className={classes.fullList}>
        <div style={{textAlign:'center', marginTop:'10px'}}>
        {/* <img src={logo} width="50" height="50"  /> */}
        </div>

        <List className={classes.list} >

            <ListItem button key="Home" onClick={()=>history.push('/')} >
                {/* <ListItemIcon > <InboxIcon /> </ListItemIcon> */}
                <ListItemText primary="Home"/>
            </ListItem>
            <Divider light={true}/>
            <ListItem button key="EditAccount" onClick={()=>routeTo(1,false)}>
                {/* <ListItemIcon > <InboxIcon /> </ListItemIcon> */}
                <ListItemText primary="Edit Account"/>
            </ListItem>
            <ListItem button key="SavedCreditCards" onClick={()=>routeTo(2, false)}>
                {/* <ListItemIcon > <DescriptionIcon /> </ListItemIcon> */}
                <ListItemText primary="Saved Credit Cards"/>
            </ListItem>
            <ListItem button key="FavoriteMenu" onClick={()=>routeTo(3, false)}>
                {/* <ListItemIcon > <InboxIcon /> </ListItemIcon> */}
                <ListItemText primary="Favorite Menu"/>
            </ListItem>

            <ListItem button key="PastOrders" onClick={()=>routeTo(4, false)}>
                {/* <ListItemIcon > <LogoutIcon /> </ListItemIcon> */}
                <ListItemText primary="Past Orders"/>
            </ListItem>

            <ListItem button key="Addresses" onClick={()=>routeTo(5, false)}>
                {/* <ListItemIcon > <LogoutIcon /> </ListItemIcon> */}
                <ListItemText primary="Addresses"/>
            </ListItem>

            <ListItem button key="Signout" onClick={()=>routeTo(6, false)}>
                {/* <ListItemIcon > <LogoutIcon /> </ListItemIcon> */}
                <ListItemText primary="Sign out"/>
            </ListItem>
            
        </List>
   
    </div>
    );


  return (
    <div className={classes.root}>
                <AppBar position={'fixed'} style={{backgroundColor: '#2F4454'}}>
                    <Toolbar >
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={()=>toggleDrawer(true)}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                            {/* {this.props.title} */}
                            {'Resume'+'\u00A0'+'Gen'}
                        </Typography>
                        
                        {/*<Button color="inherit" onClick={this.logout}>Logout</Button>*/}
                        <div className={classes.toolbarButtons}>
                        {/* <Button color="inherit" > <Badge badgeContent={props.cartQuantity} color='secondary'><ShoppingCartIcon /></Badge></Button> */}
                        {/* <Button color="inherit">Sign In</Button> */}
                        </div>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={left}
                    onClose={()=>toggleDrawer(false)}
                    onOpen={()=>toggleDrawer(true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                    >

                        {sideList}
                    </div>
                </SwipeableDrawer>
                
            </div>
  );
}