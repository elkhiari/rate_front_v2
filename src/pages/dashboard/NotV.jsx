import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

function NotV() {
    const {user} = useContext(AuthContext);
  return (
    <div className='flex min-h-screen w-full place-content-center place-items-center'>
        <div className='container max-w-md'>
        {user && <h2>Hello <span className='font-bold'> {user.displayName} </span> If you received a message stating that your account is not verified, it is important to contact the administrator or support team for further assistance</h2>}
        </div>
    </div>
  )
}

export default NotV