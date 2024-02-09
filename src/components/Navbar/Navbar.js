import React from 'react'
import { AppBar, Typography, Box } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import moments from '../../images/moments.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Box className={classes.heading} component={Link} to="/">
                <Typography
                    className={classes.title}
                    variant="h2"
                    align="center"
                >
                    Moments
                </Typography>
                <img
                    className={classes.logo}
                    src={moments}
                    alt="moments"
                    height="60"
                />
            </Box>
        </AppBar>
    )
}

export default Navbar
