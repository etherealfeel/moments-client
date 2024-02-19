import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import moments from '../../images/moments.png';
import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const signOut = () => {
        dispatch({ type: actionType.SIGNOUT });

        navigate('/auth');

        setUser(null);
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [navigate]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link className={classes.brandContainer} to="/">
                <Typography className={classes.heading} variant="h2" align="center">
                    Moments
                </Typography>
                <img className={classes.logo} src={moments} alt="moments" height="60" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button className={classes.signout} color="contained" variant="contained" onClick={signOut}>
                            Sign Out
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth " color="primary" variant="contained">
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
