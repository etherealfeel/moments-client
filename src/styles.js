import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        border: '1px solid black',
        margin: '0 0 40px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    },
    heading: {
        margin: '5px 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#5b0f85'
    },
    logo: {
        marginLeft: '20px'
    },
    container: {
        padding: '30px 20px',
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100vh'
    },
    googleAuthBtn: {
        justifyContent: 'flex-end'
    }
}));
