import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        backgroundClip:'#000000'
    },
}));

function Loading() {

    const classes = useStyles();

    const auth = useSelector((state) => state.auth.loading);

    return (
        <>
            <Backdrop className={classes.backdrop} open={auth}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Loading
