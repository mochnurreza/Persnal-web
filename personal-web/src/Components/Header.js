import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Box
} from '@material-ui/core';
import Typed from 'react-typed';


const useStyles = makeStyles(theme => ({
    title: {
        color: "#f5f251"
    },
    subtitle: {
        color: "#fcfa81",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vh",
        textAlign: "center",
        zIndex: "1"
    }
}))


const Header = () => {
    const classes = useStyles()
    return(
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h3">
                <Typed strings={["Mochammad Nurreza"]} typeSpeed={40}/>
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Front End Developer", "UI/UX Designer"]} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
        </Box>
    )
}

export default Header;