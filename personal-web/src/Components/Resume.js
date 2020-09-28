import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from '../Navbar/Navbar';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#dedc37"
    },
    timeline: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after":{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timelineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content: "''",
            position: "absolute",
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }

        }
    },
    timlineYear:{
        textAlign: "center",
        maxWidth:"9.4rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#4a4444",
        lineHeight: 1,
        color: "white",
        padding: "0.5rem 0 1rem",
        "&:before":{
            display: "none"  
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-typep(2n):before": {
                display: "none"
            }
        }
    },
    heading:{
        color: "#4a4444",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color: "white",
        padding:"0",
        textTransform:"uppercase",

    }
}));
const Resume = () => {
    const classes = useStyles()
    return(
        <>
        <Navbar />
        <Box component="header" className= {classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Profile
            </Typography>
            <Box component="div">
            <Typography variant="h5" align="center">
                I am an experienced marketing planning but i am seeking a full-time position in the field of  UI/UX Designer, and Front End Developer where I can apply my knowledge and skills for continuous improvement.
            </Typography>
            </Box>
            <Box component="div" className={classes.timeline}>
                <Typography variant="h2" className={`${classes.timlineYear} ${classes.timelineItem}`}>2018</Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    Web Design Online Course
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    Niomic
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                    I Learned HTML, CSS, Javascript
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timlineYear} ${classes.timelineItem}`}>2019</Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    Fullstack Android Development
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    Build With Angga
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                    I Learned Kotlin and Firebase
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timlineYear} ${classes.timelineItem}`}>2020</Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    UI/UX Workshop
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    Gematechno
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                    I Learned Fundamental UI/UX Design
                    </Typography>
                </Box>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    Front End React js
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    Sanbercode
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                    I Learned HTML, CSS, Javascript, ES6, and React js Framework
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    );
};

export default Resume;