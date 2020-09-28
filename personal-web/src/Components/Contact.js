import React from 'react'
import {makeStyles, withStyles} from '@material-ui/styles'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from '../Navbar/Navbar'

const useStyles = makeStyles(theme => ({
    form:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button:{
        marginTop: "1rem",
        color: "#4a4444",
        backgroundColor:"#fcfa81"
    }  
}))

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "tomato",
        },
        "& label":{
            color: "#4a4444",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor: "#fcfa81"
            },
            "&:hover fieldset": {
                borderColor: "#fcfa81"
            },
            "& .Mui-focused fieldset":{
                borderColor: "#f5f251"
            }
        }
    }
})(TextField);
const Contact = () => {
    const classes = useStyles()
    return (
        <Box component=""div>
        <Navbar />
        <Grid container justify="center">
            <Box component="form" className={classes.form} style={{color:"#4a4444"}}>
                <Typography variant="h5" style={{textTransform:"uppercase"}}>
                    Hire or Contact me
                </Typography>
                <InputField 
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{style:{color:"white"}}}
                margin="dense"
                size="medium"
                />
                <br />
                <InputField 
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{style:{color:"white"}}}
                margin="dense"
                size="medium"
                />
                <br />
                <InputField 
                fullWidth={true}
                label="Company Name"
                variant="outlined"
                inputProps={{style:{color:"white"}}}
                margin="dense"
                size="medium"
                />
                <br/>
                <Button className={classes.button} variant="contained" fullWidth={true} endIcon={<SendIcon/>}>
                    Contact Me
                </Button>
            </Box>
        </Grid>
        </Box>
    )
}

export default Contact
