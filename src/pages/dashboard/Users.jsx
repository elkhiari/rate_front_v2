import React, { useContext, useEffect, useState } from 'react'
import {AiTwotoneLock ,AiTwotoneUnlock} from 'react-icons/ai'
import {getAllUsers, lockReq} from '../../api/Req'
import { AuthContext } from '../../contexts/authContext'

function Users() {
    const [users,setUsers] = useState()
    const {token} = useContext(AuthContext)

    const getU = async()=>{
        try {
            const response = await getAllUsers(token);
            setUsers(response.users)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getU()
    },[])

    const HandleLock = async(id)=>{
        try {
            const lock = await lockReq(token,id)
            getU()
        } catch (error) {
            console.log(error)
        }
    }
  return (

        <div className="grid mb-8 rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-24 px-3 container mx-auto gap-3">
            {users && users.map((user)=>(
                <figure className="flex justify-center items-center text-center  border-gray-200  dark:bg-gray-800 dark:border-gray-700 bg-gray-400/60 rounded py-2">
                <figcaption className="flex items-center justify-center space-x-6">
                    <img className="rounded-full w-9 h-9" src={user.image} alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>{user.displayName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                </figcaption>    
                    <div>
                        <button className='ml-10' onClick={()=>HandleLock(user._id)}>
                            {user.rol !== 'admin'?
                            <AiTwotoneUnlock className="w-8 h-8 text-green-500 rounded-full bg-gray-100 p-1" />:
                            <AiTwotoneLock className="w-8 h-8 text-red-500 rounded-full bg-gray-100 p-1" />}
                        </button>
                    </div>
            </figure>
            ))}
        </div>
                    

  )
}

export default Users