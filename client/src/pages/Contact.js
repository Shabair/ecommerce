import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Contact() {
    
    const history = useHistory();

    const [userData, setUserData] = useState({});

    const checkAuth = async () => {
        try {
            const getUser = await axios.get('/getdata')

            if (getUser.status == 200) {
                setUserData(getUser.data)
            }
        } catch (error) {

            console.log(error)

        }
    }
    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <div>
            Contact
            <div>
                {userData.name}
            </div>
            <div>
                {userData.email}
            </div>
            <div>
                {userData.phone}
            </div>
        </div>
    )
}

export default Contact
