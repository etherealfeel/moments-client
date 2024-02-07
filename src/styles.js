import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        border: '1px solid black',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    },
    heading: {
        color: 'rgba(27, 115, 121, 0.8)'
    },
    image: {
        marginLeft: '20px'
    }
}));
