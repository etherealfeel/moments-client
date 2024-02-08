import React from 'react'
import {AppBar, Typography,Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import moments from '../../images/moments.png';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import useStyles from './styles';

const Navbar = () => {
    const user = false;
    const classes = useStyles();
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <AppBar
            className={classes.appBar}
            position="static"
            color="inherit"
        >
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
                {user ? 
                <div>Logged In</div> :
            <GoogleLogin 
            className={classes.googleAuthBtn}
            onSuccess={(res) => console.log(res)}
            onError={() => console.log('Error occured.')}/>}
        </AppBar>
    </GoogleOAuthProvider>
       
  )
}

export default Navbar