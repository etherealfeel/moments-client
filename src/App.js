import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import moments from './images/moments.png';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = false;

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
            <Container className={classes.container} maxwidth="lg">
                <AppBar
                    className={classes.appBar}
                    position="static"
                    color="inherit"
                >
                    <Box className={classes.heading}>
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

                <Grow in>
                    <Container>
                        <Grid
                            className={classes.mainContainer}
                            container
                            justifyContent="space-between"
                            alignItems="stretch"
                            spacing={3}
                        >
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                               
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>

            </Container>
        </GoogleOAuthProvider>
    );
};

export default App;
