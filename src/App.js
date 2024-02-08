import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Container className={classes.container} maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={() => <Redirect to="/posts"/>}/>
                    <Route exact path="/posts" component={Home}/>
                    <Route exact path="/posts:/id" component={Home}/>
                </Switch>
            </Container>
        </Router>
    )
};

export default App;
