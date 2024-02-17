import React, { useEffect } from 'react';
import { Pagination as PaginationList, PaginationItem } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/posts';

const Pagination = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
    }, [dispatch, page]);

    return (
        <PaginationList
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <Link to={`/posts?page=${item.page}`}>
                    <PaginationItem {...item} />
                </Link>
            )}
        />
    );
};

export default Pagination;
