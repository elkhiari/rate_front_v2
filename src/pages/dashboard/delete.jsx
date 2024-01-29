import React, { useContext, useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/authContext';
import {getCount, deleteAll} from '../../api/Req';
import { BsEmojiAngryFill, BsEmojiDizzyFill, BsEmojiFrownFill, BsEmojiLaughingFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs';

function Delete() {
    const {user,token} = useContext(AuthContext);
    
  return (
    <div className='py-20 px-2 md:px-20 container mx-auto min-h-screen flex place-content-center place-items-center'>
                <div className='flex flex-wrap justify-center '>
                    <button onClick={async () => {
                        try {
                            const data = await deleteAll(token);
                            console.log(data);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    } className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
                        Supprimer tous les avis
                    </button>
                </div>
            </div>
  )
}

export default Delete