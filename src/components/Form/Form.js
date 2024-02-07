import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Form = ({ currentId, setCurrentId }) => {
    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );
    const [postData, setPostData] = useState({
        author: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        handleClear();
    };
    const handleClear = () => {
        setCurrentId(null);
        setPostData({
            author: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    };
    return (
        <Paper className={classes.paper}>
            <form
                className={`${classes.root} ${classes.form}`}
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? 'Refresh' : 'Create'} a Moment
                </Typography>
                <TextField
                    name="author"
                    value={postData.author}
                    variant="outlined"
                    label="Author"
                    fullWidth
                    onChange={(e) =>
                        setPostData({ ...postData, author: e.target.value })
                    }
                />
                <TextField
                    name="title"
                    value={postData.title}
                    variant="outlined"
                    label="Title"
                    fullWidth
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <TextField
                    name="message"
                    value={postData.message}
                    variant="outlined"
                    label="Message"
                    fullWidth
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    value={postData.tags}
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    onChange={(e) =>
                        setPostData({ ...postData, tags: e.target.value })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="outlined"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={handleClear}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
