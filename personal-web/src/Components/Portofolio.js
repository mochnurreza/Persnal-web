import React from 'react'
import Navbar from '../Navbar/Navbar'
import { makeStyles } from "@material-ui/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import project1 from '../reactjs.png'
import project2 from '../1544666963-uiux-01.png'

const usesStyles = makeStyles({
    mainContainer: {
        height: "100%"
    },
    cardContainer:{
        maxWidth: 345,
        margin: "5rem auto",

    }
})
const Portofolio = () => {
    const classes = usesStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
           <Navbar />
           <Grid container justify="center">
               <Grid xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project 1" height="140" image={project1}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    Making a simple Games and Movies Website with Auth and Crud for the registered user
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project 2" height="140" image={project2}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    Making a Prototype of Movies ticket
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
           </Grid>
        </Box>
    )
}

export default Portofolio
