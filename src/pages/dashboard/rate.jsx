import React, { useContext, useEffect, useState } from 'react'
import {AiTwotoneLock ,AiTwotoneUnlock} from 'react-icons/ai'
import {getAllRate, lockReq} from '../../api/Req'
import { AuthContext } from '../../contexts/authContext'

function Users() {
    const [rate,setRate] = useState()
    const {token} = useContext(AuthContext)

    const getU = async()=>{
        try {
            const response = await getAllRate(token);
            setRate(response.rates)
            console.log(response.rates)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getU()
    },[])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        return formattedDate;
      };
    

  return (

       
<div class="relative overflow-x-auto p-10 mt-10 -z-50 container max-w-lg mx-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Rate
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody className=''>
        {rate && rate
            .slice()
            .reverse() 
            .map((rt)=>(            
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {rt.rate}
                </th>
                <td class="px-6 py-4">
                    {formatDate(rt.createAt)}
                </td>
            </tr>
                ))}
            
        </tbody>
    </table>
</div>

            
                    

  )
}

export default Users