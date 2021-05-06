import React,{useState, useEffect} from 'react'
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

    let loggedInUser = useSelector((state) => state.auth.loggedInUser);
    
    const createUser = useSelector((state) => state.auth.createUser);

    const [loadingAction, setLoadingAction] = useState(loggedInUser.loading);

    useEffect(() => {
        setLoadingAction(createUser.loading);
    }, [createUser.loading])

    useEffect(() => {
        setLoadingAction(loggedInUser.loading);
    }, [loggedInUser.loading])
    
    return (
        <>
            <Backdrop className={classes.backdrop} open={loadingAction}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Loading
