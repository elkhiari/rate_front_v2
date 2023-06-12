import React, { useEffect, useState } from 'react'
import logo from './../asset/image/logo-300x300.png'
import { BsEmojiAngryFill, BsEmojiDizzyFill, BsEmojiFrownFill, BsEmojiLaughingFill, BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { addRate,getAuthEc } from '../api/Req';

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
           }, 6000);
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
    <div className='w-full min-h-screen '>
            <div className='w-full h-20 flex justify-around items-center absolute'>
                <img src={logo} className='w-16 h-16' />
                <h1 className='text-2xl font-bold'>Alimara</h1>
            </div>
        {ectoken ?<>
        <div className='w-full min-h-screen  flex justify-around items-center p-2 md:px-24 dark:bg-gray-800'>
            <div >
                <BsEmojiAngryFill onClick={()=>handleShowNot("Très mauvais")} className='h-16 md:w-32  w-16 md:h-32  text-red-600 hover:scale-125 duration-200 cursor-pointer ease-linear' />
            </div>
            <div>
                <BsEmojiFrownFill onClick={()=>handleShowNot("Mauvaise")} className='h-16 md:w-32  w-16 md:h-32  text-orange-600 hover:scale-125 duration-200 cursor-pointer ease-linear' />
            </div>
            <div>
                <BsEmojiLaughingFill onClick={()=>handleShowNot("Bien")} className='h-16 md:w-32  w-16 md:h-32  text-blue-600 hover:scale-125 duration-200 cursor-pointer ease-linear' />
            </div>
            <div>
                <BsFillEmojiHeartEyesFill onClick={()=>handleShowNot("Excellent")} className='h-16 md:w-32  w-16 md:h-32  text-green-600 hover:scale-125 duration-200 cursor-pointer ease-linear' />
            </div>
        </div>
        {rate && 
        <div className='w-full min-h-screen flex justify-center items-center absolute top-0 backdrop-blur-md duration-200'>
            <div className='w-96 h-96  flex flex-col justify-center items-center'>
               { (rate === "Mauvaise" || rate ===  "Très mauvais")?<BsEmojiDizzyFill className='h-16 md:w-32  w-16 md:h-32  text-red-600' />:<BsEmojiLaughingFill className='h-16 md:w-32  w-16 md:h-32  text-green-600' />}
                <h1 className='text-2xl font-bold'>{(rate === "Mauvaise" || rate ===  "Très mauvais")? "Désolée" : "Merci"}</h1>
                <h1 className='text-xl font-bold text-center'>Nous chercherons à améliorer constamment notre service</h1>
            </div>
        </div>
        }

        </>:
        <div className='w-full min-h-screen  flex justify-around items-center p-2 md:px-24 dark:bg-gray-800'>
            <div className='w-96 h-96  flex flex-col justify-center items-center'>
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