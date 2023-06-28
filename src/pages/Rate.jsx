import React, { useEffect, useState } from 'react'
import logo from './../asset/image/logo-300x300.png'
import { BsEmojiAngryFill, BsEmojiDizzyFill, BsEmojiFrownFill, BsEmojiLaughingFill, BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { addRate,getAuthEc } from '../api/Req';
import {TypingAnimation} from '../components/headerAnimation'

function Rate() {
    const [ectoken,setEctoken] = useState(() => localStorage.getItem("ectoken") || null)
    const [rate,setRate] = useState("")
    const [pin,setPin] = useState("")
    const [error,setError] = useState(false)

    const handleShowNot = async(show) => {
        setRate(show)
        try {
            const data = await addRate({rate:show})
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
       if (rate !== "") {
           setTimeout(() => {
               setRate("")
           }, 4000);
       }
    }, [rate])

    const handleGetAuth = async () => {
        try {
            const data = await getAuthEc(pin);
            setEctoken(data.token)
            localStorage.setItem("ectoken", data.token);
        } catch (error) {
            setError(true)
        }
    }
  return (
    <div className=' container mx-auto min-h-screen flex flex-col place-content-cente justify-center  duration-150 overflow-hidden'>
            <div className='w-full h-20 text-sm md:text-2xl flex justify-between container left-1/2 -translate-x-1/2  max-w-3xl px-4 md:px-0 fixed  top-0'>
               <div className='flex w-full justify-start space-x-4 place-items-center'>
                    <img src={logo} className='w-16 h-16' />
                    <h1 className=' font-bold'>Alimara</h1>
               </div>
               <div className='flex w-full justify-end space-x-4 place-items-center'>
                    <h1 className=' font-bold arabe'>العمارة</h1>
                    <img src={logo} className='w-16 h-16' />
               </div>
            <div>
        </div>
            </div>
         
        
    
        {ectoken ?<>
            <div className='w-full  flex justify-center items-center duration-200' >
                    <p className='arabe md:text-2xl text-center'>
                    { rate ? "شكرا على زيارتكم" : "المرجو مساعدتنا لقياس مدى رضاكم وانطباعكم عن جودة خدماتنا"}
                    </p>
        </div>
        <div className=' container flex justify-around relative items-center p-2 lg:px-24 dark:bg-gray-800 overflow-hidden'>
            <div  className='hover:scale-125 duration-200 cursor-pointer ease-linear flex place-items-center flex-col  '>
                <p className='arabe'>سيء جدا</p> 
                <BsEmojiAngryFill onClick={()=>handleShowNot("Très mauvais")} className='h-16 md:w-32  w-16 md:h-32  text-red-600' />
                <p>Très mauvais</p> 
            </div>
            <div className='hover:scale-125 duration-200 cursor-pointer ease-linear flex place-items-center flex-col  '>
                <p className='arabe'>سيء</p>
                <BsEmojiFrownFill onClick={()=>handleShowNot("Mauvaise")} className='h-16 md:w-32  w-16 md:h-32  text-orange-600' />
                <p >Mauvaise</p>
            </div>
            <div className='hover:scale-125 duration-200 cursor-pointer ease-linear flex place-items-center flex-col  '>
                <p className='arabe'>حسن</p>
                <BsEmojiLaughingFill onClick={()=>handleShowNot("Bien")} className='h-16 md:w-32  w-16 md:h-32  text-blue-600' />
                <p >Bien</p>
            </div>
            <div className='hover:scale-125 duration-200 cursor-pointer ease-linear flex place-items-center flex-col  '>
                <p className='arabe'>ممتاز</p>
                <BsFillEmojiHeartEyesFill onClick={()=>handleShowNot("Excellent")} className='h-16 md:w-32  w-16 md:h-32  text-green-600' />
                <p >Excellent</p>
            </div>
        </div>
        {/* {!rate && 
        <div className='w-full  flex justify-center items-center  duration-200 ' >
                <h1 className='text-xl font-bold text-center'>Merci pour votre visite</h1>
        </div>
        } */}

        </>:
        <div className='w-full min-h-screen  flex justify-around items-center p-2 md:px-24 dark:bg-gray-800'>
            <div className=' flex flex-col justify-center items-center'>
                <input type="text" onChange={(e)=>setPin(e.target.value)} placeholder="Entrez votre pin" className='w-full h-12 border-blue-500 border-2  px-2  outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' />
                {error && <h1 className='text-red-500 font-bold'>Pin incorrect</h1>}
                <button onClick={handleGetAuth} className='w-full h-12 mt-2 bg-blue-500 hover:bg-blue-600  text-white font-bold'>Valider</button>
            </div>
        </div>
        }
    </div>
  )
}

export default Rate