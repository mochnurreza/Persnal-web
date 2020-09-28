import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Divider,
List,
Typography,
Box
} from '@material-ui/core';
import {
MenuOpen,
AssignmentInd,
Home,
Apps,
ContactMail
} from '@material-ui/icons';
import MobilRightMenu from '@material-ui/core/Drawer'
import Footer from '../Components/Footer'


const useStyles = makeStyles(theme => ({
    menuSliderContainer:{
        width:250,
        background: "#dedc37",
        height: "40rem"
    },
    listItem : {
        color: "#fffefa"
    }
}));

const menuItems = [
    {
        listIcon : <Home />,
        listText : "Home",
        listPath: "/"
    },
    {
        listIcon : <AssignmentInd />,
        listText : "Resume",
        listPath : "/resume"
    },
    {
        listIcon : <Apps />,
        listText : "Portofolio",
        listPath : "/portofolio"
    },
    {
        listIcon : <ContactMail />,
        listText : "Contact",
        listPath : "/contact"
    }
]
const Navbar = (props) => {
const [state, setState] = useState({
    right: false
});
const toggleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open})
});
const classes = useStyles()
const sideList = slider => (
    <Box className={classes.menuSliderContainer} component="div"
    onClick = {toggleSlider(slider, false)}>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText className ={classes.listItem} primary={lsItem.listText}/>   
                </ListItem>
                ))}
            </List>
        </Box>
)
    return(
        <>
        <Box component="nav">
            <AppBar position="static" style={{background:"#4a4444"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                    <MenuOpen style={{color:"#c9c74b"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "#c9c74b"}} AlignItems= "center">
                        Mochammad Nurreza
                    </Typography>
                    <MobilRightMenu
                    open={state.right} onClose = {toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenu>
                </Toolbar>
            </AppBar>
        </Box>
       </>
    )
}

export default Navbar;