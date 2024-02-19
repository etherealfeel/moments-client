import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import useStyles from './styles';
import Auth from './components/Auth/Auth';

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Container className={classes.container} maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/posts" element={<Home />} />
                    <Route exact path="/search" element={<Home />} />
                    <Route exact path="/posts/:id" element={<PostDetails />} />
                    <Route exact path="/auth" element={<Auth />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
