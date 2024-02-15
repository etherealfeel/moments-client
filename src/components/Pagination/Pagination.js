import React from 'react'
import { Pagination as PaginationList, PaginationItem } from '@material-ui/lab'

import useStyles from './styles'
import { Link } from 'react-router-dom'

const Pagination = () => {
    const classes = useStyles()
    return (
        <PaginationList
            classes={{ ul: classes.ul }}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <Link to={`/posts?page=${1}`}>
                    <PaginationItem {...item} />
                </Link>
            )}
        />
    )
}

export default Pagination
