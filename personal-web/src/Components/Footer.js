import React from 'react'
import{makeStyles} from '@material-ui/styles'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import Instagram from '@material-ui/icons/Instagram'
import GitHub from '@material-ui/icons/GitHub'

const useStyles= makeStyles({
    root:{
        "&. MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "&. MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})
const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#f5f251"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Instagram/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<GitHub/>}
            />
        </BottomNavigation>
    )
}

export default Footer
