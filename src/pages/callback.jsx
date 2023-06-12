import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../contexts/authContext';
import { useState } from 'react';
import { Auth } from '../api/Req';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const {login} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [Loading, setLoading] = useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    useEffect(() => {
        const authCallback = async () => {
            try {
                const data = await Auth(code);
                console.log(data);
                if (data) {
                    login(data.user, data.token, data.user.rol);
                        navigate("/dashboard")
                }
            } catch (error) {
                setError(true);
            }
        }
       if (code) authCallback();
    },[code]);
  return (
    <div>callback</div>
  )
}

export default Home