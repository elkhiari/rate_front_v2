import React, { useContext, useEffect,useState } from 'react'
import { AuthContext } from '../../contexts/authContext';
import {getCount, deleteAll} from '../../api/Req';
import { BsEmojiAngryFill, BsEmojiDizzyFill, BsEmojiFrownFill, BsEmojiLaughingFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs';

function Home() {
    const [count, setCount] = useState();
    const {user,token} = useContext(AuthContext);
    useEffect(() => {
        const getCountS = async () => {
            try {
                const data = await getCount(token);
                setCount(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCountS();
    }, []);



  return (
    <div className='py-20 px-2 md:px-20 container mx-auto min-h-screen flex place-content-center place-items-center'>
                <div className='flex flex-wrap justify-center '>
                    {count &&
                        count.map((item, index) => (
                            <div key={index} className='w-full md:w-2/4 p-2'>
                                <div className='bg-white rounded-lg shadow-lg p-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-2xl font-bold'>{item.count}</h1>
                                            <h1 className='text-xl font-bold'>{item._id}</h1>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            {/* <img src={item.img} className='w-16 h-16' /> */}
                                            {item._id === "Mauvaise"  ? <BsEmojiFrownFill className='h-16 md:w-32  w-16 md:h-32  text-gray-600' /> : 
                                            (item._id === "Excellent" ?<BsFillEmojiHeartEyesFill className='h-16 md:w-32  w-16 md:h-32  text-green-600' />:
                                            (item._id === "Bien" ?<BsEmojiLaughingFill className='h-16 md:w-32  w-16 md:h-32  text-green-600' />:
                                            <BsEmojiAngryFill className='h-16 md:w-32  w-16 md:h-32  text-gray-600' />))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
  )
}

export default Home