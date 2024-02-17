import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts, getFilteredPosts } from '../../actions/posts';
import useStyles from './styles';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination/Pagination';
import ChipInput from 'material-ui-chip-input';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [tags, setTags] = useState([]);

    const classes = useStyles();

    const query = useQuery();
    const searchQuery = query.get('searchQuery');
    const page = query.get('page') || 1;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchPost = () => {
        console.log('searching for a post');
        if (searchTerm === '' && !tags.length) {
            dispatch(getPosts(page));
        } else if (searchTerm.trim() || tags) {
            dispatch(getFilteredPosts({ searchTerm, tags: tags.join(',') }));
            navigate(`/search?searchQuery=${searchTerm || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        searchPost();
    }, [dispatch, searchTerm]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    const handleAdd = (tag) => {
        setTags([...tags, tag]);
    };
    const handleDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    };

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    className={classes.gridContainer}
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={8}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <AppBar color="inherit" position="static" className={classes.appBarSearch}>
                            <TextField
                                className={classes.searchField}
                                name="search"
                                variant="outlined"
                                label="Type to search moments..."
                                value={searchTerm}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                fullWidth
                            />
                            <Divider style={{ margin: '20px 0' }} />
                            <ChipInput
                                className={classes.searchInput}
                                value={tags}
                                onAdd={(chip) => handleAdd(chip)}
                                onDelete={(chip) => handleDelete(chip)}
                                label="Add tags..."
                                variant="outlined"
                            />
                            <Button
                                onClick={searchPost}
                                className={classes.searchButton}
                                color="primary"
                                variant="outlined"
                            >
                                Search by tags
                            </Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {!searchQuery && !tags.length && (
                            <Paper elevation={6} className={classes.pagination}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
