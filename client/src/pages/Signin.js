import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { signinUserReq } from '../../redux/actions/users'
import { NavLink, useHistory } from 'react-router-dom'

function Signin() {

    const history = useHistory();

    const [signinUser, setSigninUser] = useState({ email: '', password: '' });

    const dispatch = useDispatch();

    const clear = () => {
        setSigninUser({ email: '', password: '' });
    };

    const users = useSelector(state=>{
        return state.users});

    useEffect(() => {
        
        if(users.length){
            history.push('/about')
        }
        
    }, [users]);

    const formhandler = (e) => {
        e.preventDefault()

        dispatch(signinUserReq(signinUser))
        clear();
    }

    return (
        <>
            <form onSubmit={formhandler}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" value={signinUser.email} onChange={(e) => setSigninUser({ ...signinUser, email: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={signinUser.password} onChange={(e) => setSigninUser({ ...signinUser, password: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <NavLink  to="/signup" >Sign Up</NavLink>
        </>
    )
}

export default Signin
