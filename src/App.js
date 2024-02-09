import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    return (
        <Router>
            <Container className={classes.container} maxwidth="lg">
                <Navbar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home/>}
                    />
                    <Route exact path="/posts" element={<Home/>} />
                    <Route exact path="/posts:/id" element={<Home />} />
                </Routes>
            </Container>
        </Router>
    )
}

export default App
