import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/actions/users'


function Signup() {

    const [regUser, setRegUser] = useState({ email: '', username: '', phone: '', work: '', password: '',cpassword:'' });

    const dispatch = useDispatch();

    const clear = () => {
        setRegUser({ email: '', username: '', phone: '', work: '', password: '',cpassword:'' });
    };

    useEffect(()=>{

    },[]);
    
    const formhandler = (e) => {
        e.preventDefault()

        dispatch(createUser(regUser));
        clear();
    }
    return (
        <>
            <form onSubmit={formhandler}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" value={regUser.email} onChange={(e) => setRegUser({ ...regUser, email: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" name="username" className="form-control" id="username" aria-describedby="name" value={regUser.username} onChange={(e) => setRegUser({ ...regUser, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone No</label>
                    <input type="number" min={0} name="phone" className="form-control" id="phone" aria-describedby="phone" value={regUser.phone} onChange={(e) => setRegUser({ ...regUser, phone: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="work" className="form-label">Work</label>
                    <input type="text" name="work" className="form-control" id="work" aria-describedby="work" value={regUser.work} onChange={(e) => setRegUser({ ...regUser, work: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={regUser.password} onChange={(e) => setRegUser({ ...regUser, password: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" name="cpassword" className="form-control" id="exampleInputPassword2" value={regUser.cpassword} onChange={(e) => setRegUser({ ...regUser, cpassword: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Signup
